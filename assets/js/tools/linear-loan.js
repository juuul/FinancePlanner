// Currency formatter based on language
const lang = document.documentElement.lang || 'en';
const currencyFormatter = new Intl.NumberFormat(lang === 'nl' ? 'nl-NL' : 'en-US', {
    style: 'currency',
    currency: lang === 'nl' ? 'EUR' : 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

// Translations
const translations = {
    en: {
        years: 'Years',
        monthlyPayment: 'Monthly Payment',
        principal: 'Principal',
        interest: 'Interest'
    },
    nl: {
        years: 'Jaren',
        monthlyPayment: 'Maandelijkse Betaling',
        principal: 'Hoofdsom',
        interest: 'Rente'
    }
};

// Get slider elements
const amountSlider = document.getElementById('amount');
const interestSlider = document.getElementById('interest');
const yearsSlider = document.getElementById('years');

// Get value display elements
const amountValue = document.getElementById('amount-value');
const interestValue = document.getElementById('interest-value');
const yearsValue = document.getElementById('years-value');

// Get result elements
const totalInterestEl = document.getElementById('total-interest');
const totalPrincipalEl = document.getElementById('total-principal');
const totalAmountEl = document.getElementById('total-amount');
const firstPaymentEl = document.getElementById('first-payment');
const lastPaymentEl = document.getElementById('last-payment');

// Chart dimensions - responsive
let width, height, margin;

function updateChartDimensions() {
    const container = document.getElementById('chart-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    margin = { top: 0, right: 0, bottom: 160, left: 30 };
    width = Math.min(800, containerWidth - margin.left - margin.right);
    height = containerHeight - margin.top - margin.bottom;
}

updateChartDimensions();
window.addEventListener('resize', updateChartDimensions);

// Create SVG
const svg = d3.select('#chart')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// Create gradient definitions
const defs = svg.append('defs');

const areaGradient = defs.append('linearGradient')
    .attr('id', 'area-gradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '0%')
    .attr('y2', '100%');

areaGradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#006AA7')
    .attr('stop-opacity', 0.3);

areaGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#006AA7')
    .attr('stop-opacity', 0.02);

const lineGradient = defs.append('linearGradient')
    .attr('id', 'line-gradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '100%')
    .attr('y2', '0%');

lineGradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#006AA7');

lineGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#008AD8');

const principalGradient = defs.append('linearGradient')
    .attr('id', 'principal-gradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '100%')
    .attr('y2', '0%');

principalGradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#8B7300');

principalGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#D4B010');

const interestGradient = defs.append('linearGradient')
    .attr('id', 'interest-gradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '100%')
    .attr('y2', '0%');

interestGradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#8B0000');

interestGradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#DC143C');

// Calculate linear loan
function calculateLinearLoan(amount, rate, years) {
    const data = [];
    const months = years * 12;
    const monthlyPrincipal = amount / months;
    const monthlyRate = rate / 100 / 12;
    let remainingBalance = amount;
    let totalInterest = 0;

    data.push({
        year: 0,
        payment: 0,
        principal: 0,
        interest: 0,
        remainingBalance: amount
    });

    for (let year = 1; year <= years; year++) {
        let yearPrincipal = 0;
        let yearInterest = 0;
        let yearPayment = 0;

        for (let month = 1; month <= 12; month++) {
            const monthlyInterest = remainingBalance * monthlyRate;
            const monthlyPayment = monthlyPrincipal + monthlyInterest;

            yearPrincipal += monthlyPrincipal;
            yearInterest += monthlyInterest;
            yearPayment += monthlyPayment;

            remainingBalance -= monthlyPrincipal;
            totalInterest += monthlyInterest;
        }

        data.push({
            year: year,
            payment: yearPayment,
            principal: yearPrincipal,
            interest: yearInterest,
            remainingBalance: Math.max(0, remainingBalance)
        });
    }

    return data;
}

// Update slider progress bar
function updateSliderProgress(slider) {
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const value = parseFloat(slider.value);
    const progress = ((value - min) / (max - min)) * 100;
    slider.style.setProperty('--slider-progress', `${progress}%`);
}

// Initialize slider progress
[amountSlider, interestSlider, yearsSlider].forEach(updateSliderProgress);

// Track if this is the first render
let isFirstRender = true;

// Draw line chart with gradient backfill
function drawChart(data) {
    // Get or create chart group
    let chartGroup = svg.select('.chart-content');
    const isCreate = chartGroup.empty();

    if (isCreate) {
        chartGroup = svg.append('g').attr('class', 'chart-content');
    }

    // Create scales
    const xScale = d3.scaleLinear()
        .domain([0, data.length - 1])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.payment) * 1.1])
        .nice()
        .range([height, 0]);

    // Create area path for gradient backfill (total payment)
    const area = d3.area()
        .x(d => xScale(d.year))
        .y0(height)
        .y1(d => yScale(d.payment))
        .curve(d3.curveMonotoneX);

    const areaData = [{ year: 0, payment: data[1]?.payment || 0, principal: 0, interest: 0 }, ...data.slice(1)];

    // Draw area gradient backfill
    let areaPath = chartGroup.select('path.area-backfill');
    if (isCreate) {
        areaPath = chartGroup.append('path')
            .attr('class', 'area-backfill')
            .datum(areaData)
            .attr('fill', 'url(#area-gradient)')
            .attr('opacity', 0)
            .attr('d', area);

        areaPath.transition()
            .duration(800)
            .attr('opacity', 0.6);
    } else {
        areaPath.datum(areaData).attr('d', area);
    }

    // Create line paths
    const line = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.payment))
        .curve(d3.curveMonotoneX);

    const principalLinePath = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.principal))
        .curve(d3.curveMonotoneX);

    const interestLinePath = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.interest))
        .curve(d3.curveMonotoneX);

    // Create area path for principal gradient backfill
    const principalArea = d3.area()
        .x(d => xScale(d.year))
        .y0(height)
        .y1(d => yScale(d.principal))
        .curve(d3.curveMonotoneX);

    // Draw principal area gradient backfill
    let principalAreaPath = chartGroup.select('path.principal-backfill');
    if (isCreate) {
        principalAreaPath = chartGroup.append('path')
            .attr('class', 'principal-backfill')
            .datum(areaData)
            .attr('fill', 'url(#principal-gradient)')
            .attr('opacity', 0)
            .attr('d', principalArea(areaData));

        principalAreaPath.transition()
            .duration(800)
            .attr('opacity', 0.15);
    } else {
        principalAreaPath.datum(areaData).attr('d', principalArea(areaData));
    }

    // Draw total payment line
    let totalLine = chartGroup.select('path.total-payment-line');
    const totalLinePath = line(areaData);

    if (isCreate) {
        const flatPath = d3.line()
            .x(d => xScale(d.year))
            .y(() => height)
            .curve(d3.curveMonotoneX);

        totalLine = chartGroup.append('path')
            .attr('class', 'total-payment-line')
            .datum(areaData)
            .attr('fill', 'none')
            .attr('stroke', 'url(#line-gradient)')
            .attr('stroke-width', 4)
            .attr('opacity', 0.9)
            .attr('d', flatPath(areaData));

        totalLine.transition()
            .duration(1500)
            .ease(d3.easeCubicOut)
            .attr('d', totalLinePath);
    } else {
        totalLine.datum(areaData).transition()
            .duration(800)
            .ease(d3.easeCubicOut)
            .attr('d', totalLinePath);
    }

    // Draw interest line
    let interestLine = chartGroup.select('path.interest-line');
    const interestFlatPath = d3.line()
        .x(d => xScale(d.year))
        .y(() => height)
        .curve(d3.curveMonotoneX);

    if (isCreate) {
        interestLine = chartGroup.append('path')
            .attr('class', 'interest-line')
            .datum(areaData)
            .attr('fill', 'none')
            .attr('stroke', 'url(#interest-gradient)')
            .attr('stroke-width', 3)
            .attr('opacity', 0.7)
            .attr('d', interestFlatPath(areaData));

        interestLine.transition()
            .duration(1500)
            .ease(d3.easeCubicOut)
            .attr('d', interestLinePath(areaData));
    } else {
        interestLine.datum(areaData).transition()
            .duration(800)
            .ease(d3.easeCubicOut)
            .attr('d', interestLinePath(areaData));
    }

    // Add circles at data points (only show every 5 years, aligned with x-axis ticks)
    let circleTickIndices;
    if (data.length <= 12) {
        circleTickIndices = data.map((_, i) => i).filter(i => i > 0);
    } else {
        const intermediateIndices = [];
        for (let i = 1; i < data.length - 1; i++) {
            if (i % Math.ceil(data.length / 12) === 0) {
                intermediateIndices.push(i);
            }
        }
        circleTickIndices = [1, ...intermediateIndices, data.length - 1];
    }

    const circleData = circleTickIndices.map(i => data[i]);
    const circles = chartGroup.selectAll('.data-point')
        .data(circleData);

    circles.exit().remove();

    const circlesEnter = circles.enter()
        .append('circle')
        .attr('class', 'data-point')
        .attr('cx', d => xScale(d.year))
        .attr('cy', height)
        .attr('r', 6)
        .attr('fill', '#006AA7');

    const allCircles = circlesEnter.merge(circles)
        .attr('cx', d => xScale(d.year));

    // Animate circles on first render only
    if (isFirstRender) {
        allCircles.transition()
            .delay((d, i) => i * 100)
            .duration(800)
            .ease(d3.easeBackOut)
            .attr('cy', d => yScale(d.payment));
    } else {
        allCircles.transition()
            .duration(500)
            .attr('cy', d => yScale(d.payment));
    }

    isFirstRender = false;

    // Remove old axes and labels
    chartGroup.select('.x-axis').remove();
    chartGroup.select('.axis-label').remove();

    // Add axes
    const xAxis = chartGroup.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`);

    const years = data.map(d => d.year);
    const firstYear = years[0];
    const lastYear = years[years.length - 1];

    let tickIndices;
    if (years.length <= 12) {
        tickIndices = years.map((_, i) => i).filter(i => i > 0);
    } else {
        const intermediateIndices = [];
        for (let i = 1; i < years.length - 1; i++) {
            if (i % Math.ceil(years.length / 12) === 0) {
                intermediateIndices.push(i);
            }
        }
        tickIndices = [1, ...intermediateIndices, years.length - 1];
    }

    const tickValues = tickIndices.map(i => data[i].year);

    xAxis.call(d3.axisBottom(xScale)
        .tickValues(tickIndices)
        .tickFormat(d => {
            const yearData = data[d];
            if (yearData && d > 0) {
                return `${currencyFormatter.format(yearData.payment / 12)} (${yearData.year})`;
            }
            return '';
        }));

    xAxis.attr('color', '#9BA3B4');

    xAxis.selectAll('text')
        .style('fill', '#9BA3B4')
        .style('font-size', '18px')
        .style('text-anchor', 'start')
        .attr('transform', 'rotate(90)')
        .attr('dy', '-5px')
        .attr('dx', '22px');

    xAxis.selectAll('line')
        .style('stroke', 'rgba(255, 255, 255, 0.1)');

    xAxis.select('.domain')
        .style('stroke', 'rgba(255, 255, 255, 0.1)');

    xAxis.selectAll('tick')
        .attr('transform', 'rotate(90)');

    // Don't repaint legend on recalculate
    if (isCreate) {
        const legendX = 10;
        const legendY = 10;
        const legendWidth = 280;
        const legendHeight = 110;

        const legend = chartGroup.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${legendX},${legendY})`);

        legend.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', legendWidth)
            .attr('height', legendHeight)
            .attr('rx', 8)
            .attr('ry', 8)
            .style('fill', 'rgba(30, 35, 40, 0.85)')
            .style('stroke', 'rgba(255, 255, 255, 0.05)')
            .style('stroke-width', 1);

        legend.append('line')
            .attr('x1', 20)
            .attr('y1', 20)
            .attr('x2', 65)
            .attr('y2', 20)
            .attr('stroke', '#006AA7')
            .attr('stroke-width', 6);

        legend.append('text')
            .attr('x', 75)
            .attr('y', 28)
            .style('fill', '#E6E9EF')
            .style('font-size', '20px')
            .text(translations[lang].monthlyPayment);

        legend.append('line')
            .attr('x1', 20)
            .attr('y1', 55)
            .attr('x2', 65)
            .attr('y2', 55)
            .attr('stroke', '#D4B010')
            .attr('stroke-width', 5)
            .attr('opacity', 0.7);

        legend.append('text')
            .attr('x', 75)
            .attr('y', 63)
            .style('fill', '#E6E9EF')
            .style('font-size', '20px')
            .text(translations[lang].principal);

        legend.append('line')
            .attr('x1', 20)
            .attr('y1', 90)
            .attr('x2', 65)
            .attr('y2', 90)
            .attr('stroke', '#DC143C')
            .attr('stroke-width', 5)
            .attr('opacity', 0.7);

        legend.append('text')
            .attr('x', 75)
            .attr('y', 98)
            .style('fill', '#E6E9EF')
            .style('font-size', '20px')
            .text(translations[lang].interest);
    }
}

// Update display
function update() {
    const amount = parseFloat(amountSlider.value);
    const interest = parseFloat(interestSlider.value);
    const years = parseInt(yearsSlider.value);

    // Update value displays
    amountValue.textContent = currencyFormatter.format(amount);
    interestValue.textContent = interest.toFixed(1) + '%';
    yearsValue.textContent = years;

    // Calculate results
    const data = calculateLinearLoan(amount, interest, years);

    // Calculate total interest and principal
    let totalInterest = 0;
    let totalPrincipal = 0;
    for (let i = 1; i < data.length; i++) {
        totalInterest += data[i].interest;
        totalPrincipal += data[i].principal;
    }

    // First and last monthly payments
    const months = years * 12;
    const monthlyPrincipal = amount / months;
    const monthlyRate = interest / 100 / 12;
    const firstMonthlyPayment = monthlyPrincipal + (amount * monthlyRate);
    const lastRemainingBalance = monthlyPrincipal;
    const lastMonthlyPayment = monthlyPrincipal + (lastRemainingBalance * monthlyRate);

    // Update result cards
    totalInterestEl.textContent = currencyFormatter.format(totalInterest);
    totalPrincipalEl.textContent = currencyFormatter.format(totalPrincipal);
    totalAmountEl.textContent = currencyFormatter.format(totalInterest + totalPrincipal);
    firstPaymentEl.textContent = currencyFormatter.format(firstMonthlyPayment);
    lastPaymentEl.textContent = currencyFormatter.format(lastMonthlyPayment);

    // Update chart
    drawChart(data);
}

// Add event listeners
amountSlider.addEventListener('input', function() {
    updateSliderProgress(this);
    update();
});
interestSlider.addEventListener('input', function() {
    updateSliderProgress(this);
    update();
});
yearsSlider.addEventListener('input', function() {
    updateSliderProgress(this);
    update();
});

// Initial update
update();

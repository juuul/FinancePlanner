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
        totalValue: 'Total Value',
        deposits: 'Deposits'
    },
    nl: {
        years: 'Jaren',
        totalValue: 'Totale Waarde',
        deposits: 'Stortingen'
    }
};

// Get slider elements
const initialSlider = document.getElementById('initial');
const monthlySlider = document.getElementById('monthly');
const interestSlider = document.getElementById('interest');
const yearsSlider = document.getElementById('years');

// Get value display elements
const initialValue = document.getElementById('initial-value');
const monthlyValue = document.getElementById('monthly-value');
const interestValue = document.getElementById('interest-value');
const yearsValue = document.getElementById('years-value');

// Get result elements
const totalValueEl = document.getElementById('total-value');
const totalContributionsEl = document.getElementById('total-contributions');
const totalInterestEl = document.getElementById('total-interest');

// Chart dimensions - responsive
let width, height, margin;

function updateChartDimensions() {
    const container = document.getElementById('chart-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    margin = { top: 40, right: 30, bottom: 220, left: 160 };
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

// Calculate compound interest
function calculateCompoundInterest(initial, monthly, rate, years) {
    const data = [];
    const monthlyRate = rate / 100 / 12;
    let balance = initial;
    let totalDeposits = initial;

    data.push({ year: 0, value: balance, deposits: initial, interest: 0 });

    for (let year = 1; year <= years; year++) {
        for (let month = 1; month <= 12; month++) {
            balance = balance * (1 + monthlyRate) + monthly;
            totalDeposits += monthly;
        }
        const interest = balance - totalDeposits;
        data.push({
            year: year,
            value: balance,
            deposits: totalDeposits,
            interest: interest
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
[initialSlider, monthlySlider, interestSlider, yearsSlider].forEach(updateSliderProgress);

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
        .domain([0, d3.max(data, d => d.value) * 1.1])
        .nice()
        .range([height, 0]);

    // Create area path for gradient backfill (total value)
    const area = d3.area()
        .x(d => xScale(d.year))
        .y0(height)
        .y1(d => yScale(d.value))
        .curve(d3.curveMonotoneX);

    const areaData = [{ year: 0, value: data[0].value, deposits: data[0].deposits }, ...data];

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
        .y(d => yScale(d.value))
        .curve(d3.curveMonotoneX);

    const depositsLinePath = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.deposits))
        .curve(d3.curveMonotoneX);

    // Draw total value line
    let totalLine = chartGroup.select('path.total-value-line');
    const totalLinePath = line(areaData);
    
    if (isCreate) {
        const flatPath = d3.line()
            .x(d => xScale(d.year))
            .y(() => height)
            .curve(d3.curveMonotoneX);
        
        totalLine = chartGroup.append('path')
            .attr('class', 'total-value-line')
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

    const depositsGradient = defs.append('linearGradient')
        .attr('id', 'deposits-gradient')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '0%');

    depositsGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#555555');

    depositsGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#777777');

    let depositsLine = chartGroup.select('path.deposits-line');
    const depositsFlatPath = d3.line()
        .x(d => xScale(d.year))
        .y(() => height)
        .curve(d3.curveMonotoneX);
    
    if (isCreate) {
        depositsLine = chartGroup.append('path')
            .attr('class', 'deposits-line')
            .datum(areaData)
            .attr('fill', 'none')
            .attr('stroke', 'url(#deposits-gradient)')
            .attr('stroke-width', 3)
            .attr('opacity', 0.7)
            .attr('d', depositsFlatPath(areaData));
        
        depositsLine.transition()
            .duration(1500)
            .ease(d3.easeCubicOut)
            .attr('d', depositsLinePath(areaData));
    } else {
        depositsLine.datum(areaData).transition()
            .duration(800)
            .ease(d3.easeCubicOut)
            .attr('d', depositsLinePath(areaData));
    }

    // Add circles at data points (only show every 5 years)
    const circleData = areaData.filter((d, i) => i % Math.ceil(data.length / 12) === 0 || i === data.length - 1);
    const circles = chartGroup.selectAll('.data-point')
        .data(circleData);
    
    circles.exit().remove();
    
    const circlesEnter = circles.enter()
        .append('circle')
        .attr('class', 'data-point')
        .attr('cx', d => xScale(d.year))
        .attr('cy', height)
        .attr('r', 4)
        .attr('fill', '#006AA7')
        .attr('opacity', 0);
    
    circlesEnter.merge(circles)
        .attr('cx', d => xScale(d.year));

    // Animate circles on first render only
    if (isFirstRender) {
        circles.transition()
            .delay((d, i) => i * 100)
            .duration(800)
            .ease(d3.easeBackOut)
            .attr('cy', d => yScale(d.value))
            .attr('opacity', 1);
    } else {
        circles.transition()
            .duration(500)
            .attr('cy', d => yScale(d.value));
    }

    isFirstRender = false;

    // Remove old axes and labels
    chartGroup.select('.x-axis').remove();
    chartGroup.select('.axis-label').remove();

    // Add axes
    const xAxis = chartGroup.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale)
            .tickValues(
                data.length > 20
                    ? data.filter((d, i) => i % Math.ceil(data.length / 12) === 0).map(d => d.year)
                    : data.map(d => d.year)
            )
            .tickFormat(d => {
                const yearData = data.find(dataPoint => dataPoint.year === d);
                if (yearData) {
                    return `${currencyFormatter.format(yearData.value)} (${d})`;
                }
                return d;
            }))
        .attr('color', '#9BA3B4');

    xAxis.selectAll('text')
        .style('fill', '#9BA3B4')
        .style('font-size', '18px')
        .style('text-anchor', 'start')
        .attr('transform', 'rotate(90)')
        .attr('dy', '22px')
        .attr('dx', '30px');

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
        const legendWidth = 240;
        const legendHeight = 75;

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
            .text(translations[lang].totalValue);

        legend.append('line')
            .attr('x1', 20)
            .attr('y1', 55)
            .attr('x2', 65)
            .attr('y2', 55)
            .attr('stroke', '#555555')
            .attr('stroke-width', 5)
            .attr('opacity', 0.7);

        legend.append('text')
            .attr('x', 75)
            .attr('y', 63)
            .style('fill', '#E6E9EF')
            .style('font-size', '20px')
            .text(translations[lang].deposits);
    }
}

// Update display
function update() {
    const initial = parseFloat(initialSlider.value);
    const monthly = parseFloat(monthlySlider.value);
    const interest = parseFloat(interestSlider.value);
    const years = parseInt(yearsSlider.value);

    // Update value displays
    initialValue.textContent = currencyFormatter.format(initial);
    monthlyValue.textContent = currencyFormatter.format(monthly);
    interestValue.textContent = interest.toFixed(1) + '%';
    yearsValue.textContent = years;

    // Calculate results
    const data = calculateCompoundInterest(initial, monthly, interest, years);
    const lastYear = data[data.length - 1];

    // Update result cards (fixed: use lastYear.deposits instead of lastYear.contributions)
    totalValueEl.textContent = currencyFormatter.format(lastYear.value);
    totalContributionsEl.textContent = currencyFormatter.format(lastYear.deposits);
    totalInterestEl.textContent = currencyFormatter.format(lastYear.interest);

    // Update chart
    drawChart(data);
}

// Add event listeners
initialSlider.addEventListener('input', function() {
    updateSliderProgress(this);
    update();
});
monthlySlider.addEventListener('input', function() {
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
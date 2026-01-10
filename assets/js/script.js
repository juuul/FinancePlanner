// Translations
const translations = {
    en: {
        nav: {
            home: "Home",
            moreInfo: "More Info",
            tutorials: "Tutorials",
            community: "Community",
            scenarios: "Use Cases",
            howToPlan: "How to Plan",
            about: "About"
        },
        hero: {
            title: "Finance Planner: The F.I.R.E. Tool",
            subtitle: "Your Essential Companion for Financial Independence",
            description: "Designed for the F.I.R.E. (Financial Independence, Retire Early) movement, Finance Planner helps you visualize, track, and achieve your financial goals. Build financial health, plan ahead with different scenarios, and see the long-term impact of your decisions—whether you're just starting out or planning for early retirement.",
            downloadIos: "📱 Download iOS App",
            downloadAndroid: "📱 Download Android App",
            exploreFeatures: "More information"
        },
        mission: {
            title: "💡 Our Mission: Financial Planning for Everyone",
            freeAccess: "<strong>Free Financial Planning for All:</strong> We believe everyone deserves access to quality financial planning tools—without paying expensive advisor fees. Finance Planner puts professional-grade planning in your hands, completely free.",
            global: "<strong>Financial Health Worldwide:</strong> Available across the globe, our tool helps people everywhere build a healthier financial future, regardless of location or background.",
            privacy: "<strong>Your Data Stays Private:</strong> All your personal financial data and calculations remain 100% on your device. Nothing is stored on external servers. Your information is completely safe and never shared.",
            adPrivacy: "<strong>About Ads:</strong> The app uses ads (AdMob) to remain free for everyone. Our privacy notice covers only the anonymous usage data collected by the ad provider—your financial data is never included."
        },
        moreInfo: {
            title: "More Information About Finance Planner",
            subtitle: "Discover the Features and Capabilities"
        },
        appStore: {
            title: "📱 Get the app",
            downloadAppStore: "Download on the App Store",
            downloadGooglePlay: "Get it on Google Play"
        },
        features: {
            title: "Key Features",
            multiPerson: {
                title: "Multi-Person & Multi-Income Support",
                description: "Manage finances for your entire household, including multiple people, income streams, and spending categories."
            },
            flexibleSavings: {
                title: "Flexible Savings Accounts",
                description: "Organize and track multiple savings accounts for different goals."
            },
            longTermProjections: {
                title: "Long-Term Projections",
                description: "See your wealth grow over decades with detailed, year-by-year forecasts."
            },
            fireGoal: {
                title: "FIRE Goal Tracking",
                description: "Set your FIRE number and monitor your progress toward financial independence."
            },
            whatIf: {
                title: '"What If" Scenarios',
                description: "Experiment with savings rates, investment returns, and withdrawal strategies to see their impact."
            },
            inflation: {
                title: "Inflation Adjustment",
                description: "All calculations account for inflation, giving you a realistic view of your future purchasing power."
            },
            advancedTools: {
                title: "Advanced Planning Tools",
                yearly: "<strong>Yearly Overviews:</strong> Get clear, actionable summaries of your net worth, passive income, and projected retirement expenses.",
                customizable: "<strong>Customizable Inputs:</strong> Easily enter your income, expenses, investments, assets, and liabilities.",
                visual: "<strong>Visual Insights:</strong> Intuitive charts and graphs make complex financial data easy to understand.",
                earlyRetirement: "<strong>Early Retirement Planning:</strong> Navigate both the accumulation and decumulation phases of early retirement.",
                userFriendly: "<strong>User-Friendly Interface:</strong> Clean, intuitive, and accessible for everyone."
            }
        },
        depositPlanning: {
            title: "📥 Deposit Planning",
            intro: "Plan your savings deposits with advanced features including:",
            scheduling: "<strong>Flexible scheduling:</strong> Set up one-time or recurring deposits (monthly, yearly, etc.)",
            timeframe: "<strong>Timeframe planning:</strong> Define start and end dates for your deposit schedules",
            inflation: "<strong>Inflation adjustments:</strong> Automatically adjust your deposits for inflation over time",
            taxBenefits: "<strong>Tax benefits modeling:</strong> Account for cashback and tax refunds on deposits",
            taxAdvantagesTitle: "Tax-Advantaged Accounts",
            taxAdvantagesDesc: "Finance Planner helps you model the tax benefits of deposits to retirement accounts:",
            accountTypes: "Model tax-advantaged accounts like 401(k), IRA, and other retirement accounts",
            taxRate: "Calculate tax benefits based on your marginal tax rate (e.g., 22% or 24%)",
            refundImpact: "See how tax refunds impact your actual savings rate and reduce the real cost of saving"
        },
        withdrawalPlanning: {
            title: "📤 Withdrawal Planning",
            intro: "Plan your withdrawals with comprehensive tax considerations:",
            scheduling: "<strong>Flexible withdrawal schedules:</strong> Plan periodic or one-time withdrawals",
            timeframe: "<strong>Timeframe planning:</strong> Define when withdrawals begin and end",
            inflation: "<strong>Inflation adjustments:</strong> Keep withdrawals aligned with inflation",
            taxImpact: "<strong>Tax impact modeling:</strong> Account for taxes on withdrawals",
            retirementTaxTitle: "Retirement Withdrawal Taxes",
            retirementTaxDesc: "Understand the tax implications of your retirement withdrawals:",
            scenarios: "Model different tax scenarios for retirement withdrawals",
            rmds: "Plan for required minimum distributions (RMDs)",
            afterTax: "See the real after-tax impact of your withdrawals and plan accordingly"
        },
        financialJourney: {
            title: "📊 Financial Journey Overview",
            intro: "Get a complete picture of your financial future by matching incomes and expenses through time:",
            incomeTracking: "<strong>Income tracking:</strong> Visualize all income sources over time",
            expensePlanning: "<strong>Expense planning:</strong> See how expenses (deficit/surplus) evolve",
            capitalProjection: "<strong>Capital projection:</strong> Track your total savings and capital growth",
            multiPerson: "<strong>Multi-person planning:</strong> Model finances for couples or households",
            yearByYear: "<strong>Year-by-year breakdown:</strong> Understand exactly what happens each year"
        },
        tutorials: {
            title: "📚 Learn How to Use Finance Planner",
            videoTitle: "Video Tutorials Available",
            description: "Watch comprehensive tutorials on how to maximize your Financial Independence planning with Finance Planner. Learn best practices, tips, and advanced strategies.",
            visitChannel: "Visit Our YouTube Channel",
            viewTutorials: "View Tutorials"
        },
        exampleFiles: {
            title: "📂 Example Files & Scenarios",
            description: "Explore different financial planning scenarios with real-world examples. Each scenario demonstrates how to use Finance Planner for specific financial goals.",
            viewScenarios: "View All Scenarios"
        },
        whyChoose: {
            title: "Why Choose Finance Planner?",
            clarity: {
                title: "Clarity for FIRE",
                description: "Focus on the long-term vision crucial for financial independence."
            },
            empowering: {
                title: "Empowering Decisions",
                description: "Make smart financial choices today for a better tomorrow."
            },
            beyond: {
                title: "Beyond Budgeting",
                description: "Go deeper than basic budgeting—see the power of compounding and long-term strategy."
            },
            motivated: {
                title: "Stay Motivated",
                description: "Visualize your progress and stay inspired on your journey."
            }
        },
        whoIsItFor: {
            title: "Who Is It For?",
            individuals: "<strong>Individuals and couples pursuing F.I.R.E.</strong> - Get the tools you need for financial independence",
            planners: "<strong>Anyone planning their long-term financial future</strong> - Build wealth systematically",
            investors: "<strong>Investors projecting wealth growth and retirement readiness</strong> - Model different scenarios",
            decisionMakers: "<strong>Those wanting to understand the impact of their financial decisions</strong> - See long-term effects"
        },
        dataPrivacy: {
            title: "🔒 Your Data, Your Privacy",
            intro: "Your financial information is highly sensitive. Finance Planner is designed with privacy as a core principle:",
            localStorage: "<strong>100% Local Storage:</strong> All your data and calculations stay on your phone—nothing is sent to external servers",
            noCloud: "<strong>No Cloud Sync:</strong> Your financial plans are yours alone and remain completely private",
            fullControl: "<strong>Full Control:</strong> You decide what to do with your data—export, backup, or delete it anytime",
            adNotice: "Note: The mobile apps use ads to remain free. Ad providers (AdMob) may collect anonymous usage data as described in our Privacy Statement."
        },
        footer: {
            iosApp: "📱 iOS App",
            androidApp: "📱 Android App",
            community: "💬 Community Discussions",
            tutorials: "🎥 Video Tutorials",
            privacy: "🔒 Privacy Statement",
            authorsTitle: "Authors",
            copyright: "&copy; 2026 Finance Planner. Empowering your journey to Financial Independence."
        },
        scenarios: {
            title: "Financial Planning Scenarios",
            subtitle: "Explore Different Paths to Financial Independence",
            description: "Finance Planner supports multiple financial planning scenarios. Each scenario helps you model different life situations and financial goals. Download the example files and open them in the mobile app to see complete financial plans in action.",
            futurePlanning: {
                title: "🎯 Future Planning",
                description: "Plan your long-term financial future with comprehensive income, expense, and savings modeling. This scenario is perfect for families and individuals who want to build wealth systematically, track multiple income streams, and plan for major life events like children's education, home purchases, or career changes.",
                idealFor: "Ideal For:",
                use1: "Building wealth over time with multiple income sources",
                use2: "Planning for major expenses (education, home, etc.)",
                use3: "Tracking progress toward FIRE goals",
                use4: "Modeling different savings rates and their impact",
                downloadButton: "Download Future Planning Example"
            },
            businessExit: {
                title: "💼 Selling Business and Retiring",
                description: "Model the financial impact of selling your business and transitioning to retirement. This scenario helps you plan the sale proceeds, tax implications, and how to structure your retirement income from the sale. Understand how different sale prices and retirement withdrawal strategies affect your long-term financial security.",
                idealFor: "Ideal For:",
                use1: "Business owners planning an exit strategy",
                use2: "Modeling different sale price scenarios",
                use3: "Planning post-sale investment and withdrawal strategies",
                use4: "Understanding tax implications of business sale",
                comingSoon: "📌 Example file coming soon"
            },
            debtRepayment: {
                title: "💳 Planning to Pay Off Debts",
                description: "Create a comprehensive debt repayment plan while maintaining your other financial goals. This scenario helps you model different debt payoff strategies (avalanche vs. snowball), see the impact of extra payments, and understand how debt repayment fits into your overall financial plan. Balance paying down debt with building savings and investments.",
                idealFor: "Ideal For:",
                use1: "Creating structured debt repayment plans",
                use2: "Comparing avalanche vs. snowball methods",
                use3: "Balancing debt payoff with savings goals",
                use4: "Modeling the impact of extra payments",
                comingSoon: "📌 Example file coming soon"
            },
            howToUse: {
                title: "How to Use These Scenarios",
                step1: "<strong>Download the example file</strong> for the scenario that matches your situation",
                step2: '<strong>Open it in the Finance Planner mobile app</strong> (available for <a href="https://apps.apple.com/us/app/finance-planner/id6743322133" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=nl.crwsolutions.CalcApi.Mobile" target="_blank">Android</a>)',
                step3: "<strong>Explore the example</strong> to understand how the scenario is structured",
                step4: "<strong>Customize with your own data</strong> by modifying income, expenses, and savings",
                step5: "<strong>Save and track</strong> your personalized financial plan"
            },
            needHelp: {
                title: "Need Help?",
                description: "Check out our resources to learn more about using Finance Planner:",
                tutorials: "🎥 Watch Video Tutorials",
                community: "💬 Join Community Discussions"
            }
        },
        tutorialsPage: {
            title: "📚 Finance Planner Tutorials",
            subtitle: "Learn How to Maximize Your Financial Planning",
            description: "Watch comprehensive video tutorials to help you get the most out of Finance Planner. Learn about advanced strategies, tax-advantaged accounts, and best practices for achieving financial independence.",
            featuredVideo: {
                title: "🎥 How to Implement Tax-Deferred Retirement Accounts",
                description: "Learn how to model tax-deferred retirement accounts in Finance Planner. This tutorial demonstrates pension savings systems where you receive tax refunds during contributions and pay taxes during withdrawals. Covers US 401(k)/IRA, Dutch pensioensparen, and similar tax-advantaged retirement accounts worldwide.",
                countriesTitle: "Countries with Tax-Deferred Retirement Systems:",
                countriesList: "This approach applies to countries where you get tax benefits when contributing and pay taxes when withdrawing retirement savings, such as: USA (401k, IRA), Netherlands (pensioensparen), Germany, UK, France, Canada, Australia, Japan, and many other countries."
            },
            wealthTaxVideo: {
                title: "🎥 Dutch Wealth Tax (Vermogensbelasting) Example",
                description: "See how the Dutch wealth tax system works in Finance Planner. This tutorial demonstrates how to model annual wealth taxes based on your total assets—a tax system used in several countries worldwide.",
                countriesTitle: "Countries with Annual Wealth Tax Systems:",
                countriesList: "Similar annual wealth tax systems (taxing total assets each year) are used in: Netherlands, Norway, Spain, Switzerland, and Colombia."
            },
            moreVideos: {
                title: "📺 More Video Tutorials",
                channelTitle: "Visit Our YouTube Channel",
                channelDescription: "Explore our complete library of Finance Planner tutorials. Learn best practices, tips, and advanced strategies for achieving Financial Independence.",
                visitButton: "Visit YouTube Channel"
            },
            topics: {
                title: "Tutorial Topics",
                gettingStarted: {
                    title: "Getting Started",
                    description: "Learn the basics of Finance Planner and set up your first financial plan."
                },
                taxStrategies: {
                    title: "Tax-Advantaged Strategies",
                    description: "Model 401k, IRA, and pensioensparen accounts with tax benefits."
                },
                fireGoals: {
                    title: "FIRE Goal Planning",
                    description: "Set and track your Financial Independence targets effectively."
                },
                scenarios: {
                    title: "Scenario Modeling",
                    description: "Test different what-if scenarios to optimize your financial plan."
                }
            },
            needHelp: {
                title: "Need More Help?",
                description: "Have questions or want to discuss your financial planning strategies?",
                communityButton: "💬 Join Community Discussions",
                scenariosButton: "📂 View Example Scenarios"
            }
        },
        howToPlan: {
            title: "📋 How to Make a Planning",
            subtitle: "Step-by-Step Guide to Creating Your Financial Plan",
            description: "Learn how to set up a comprehensive financial plan in the Finance Planner app. Follow these steps to create your calculation, add persons, and plan your expenses, incomes, savings, and loans for a complete financial overview.",
            step1: {
                title: "Step 1: Create a Calculation",
                intro: "The first step in creating your financial plan is to set up a new calculation. This forms the foundation of your planning.",
                caption: "The Calculation dialog where you enter your planning name and starting balance",
                name: {
                    title: "Planning Name",
                    description: "Give your planning a descriptive name, such as \"Family Budget 2025\" or \"Retirement Planning\". This helps you identify different scenarios later."
                },
                balance: {
                    title: "Account Balance",
                    description: "Enter the starting balance of your account. This is the balance of the account in which all subjects are calculated—for example, the shared bank account of a household."
                },
                tip: "💡 <strong>Tip:</strong> The account balance represents the shared account of all participants in the planning—similar to a profit and loss account in a business, but for private use. It serves as the reserve from which expenses are paid when they cannot be covered by current incomes."
            },
            step2: {
                title: "Step 2: Add Persons",
                intro: "After creating your calculation, add the persons involved in your financial plan. This is typically yourself, your partner, or other household members.",
                caption: "The Person dialog where you enter name and date of birth, with retirement date slider visible",
                name: {
                    title: "Person Name",
                    description: "Enter a name to identify each person in your plan, such as \"Person # 1\" or use actual names for clarity."
                },
                dob: {
                    title: "Date of Birth",
                    description: "The date of birth is used to determine the pension age, which you can later adjust. The app calculates ages and retirement dates automatically."
                },
                retirement: {
                    title: "📅 Retirement Date Planning",
                    description: "Once a person is added, you can see and adjust their early retirement dates. Use the slider to explore different retirement scenarios and see how they affect your financial plan."
                }
            },
            overview: {
                title: "Planning Categories",
                intro: "After adding persons, you can start planning different financial categories. The recommended order is:",
                step1: "<strong>Mortgages:</strong> Set up mortgage loans with interest calculations and tax deductions",
                step2: "<strong>Expenses:</strong> Plan other costs you need to cover",
                step3: "<strong>Incomes:</strong> Set up current and future income sources, taking into account your expenses",
                step4: "<strong>Savings:</strong> Plan your savings to see if you can cover your costs and potentially retire early"
            },
            step3Mortgage: {
                title: "Step 3: Planning Mortgages",
                intro: "Mortgages are a specific type of expense where the monthly payment is calculated based on the loan amount, interest rate, and repayment schedule. You can also model mortgage interest tax deductions. Here's how to configure a mortgage:",
                caption: "The Mortgage screen showing all configuration options with numbered annotations",
                amount: {
                    title: "1️⃣ Loan Amount",
                    description: "Enter the total loan amount at the specified start date. For example, if you're taking out a mortgage of $300,000, enter this amount here. The app will calculate the monthly payments based on this amount, the interest rate, and the repayment scheme."
                },
                interest: {
                    title: "2️⃣ Annual Interest Rate",
                    description: "Set the annual mortgage interest rate as a percentage. This is the interest rate charged by your lender on the loan amount. For example, 3.76% annual interest."
                },
                repayment: {
                    title: "3️⃣ Repayment Scheme",
                    description: "Choose the repayment scheme for your mortgage. There are three options:",
                    annuity: "<strong>Annuity:</strong> Fixed monthly payments throughout the mortgage term, with the proportion of interest vs. principal changing over time.",
                    linear: "<strong>Linear:</strong> Fixed principal repayment each month, with decreasing interest payments over time, resulting in decreasing total monthly payments.",
                    interestOnly: "<strong>Interest-only:</strong> Only pay interest each month, with no principal repayment. The full loan amount remains due at the end of the term."
                },
                taxDeduction: {
                    title: "4️⃣ Tax Refund on Interest",
                    description: "Configure the mortgage interest tax deduction (if applicable in your country). Enter the tax deduction rate as a percentage and specify the date until which this deduction is valid. This helps you model tax benefits like the Dutch \"hypotheekrenteaftrek\" or similar tax advantages in other countries.",
                    note: "💡 <strong>Note:</strong> Many countries offer tax deductions on mortgage interest to encourage homeownership. Check your local tax regulations to determine if you qualify and what percentage applies to you."
                },
                tip: "💡 <strong>Tip:</strong> Mortgage planning is essential for long-term financial planning, as it typically represents one of the largest expenses in a household budget. By modeling different scenarios, you can understand how your mortgage affects your ability to save and retire early."
            },
            step4: {
                title: "Step 4: Planning Expenses",
                intro: "Expenses are a crucial part of your financial plan. When you plan your expenses, you can see what you need to do to achieve your financial goals. Here's how to configure an expense:",
                caption: "The Expense screen showing all configuration options with numbered annotations",
                amount: {
                    title: "1️⃣ Net Amount",
                    description: "Enter the net expense amount. This option is used for expenses whether they occur regularly or happen just once—like monthly household costs, annual holiday spending, etc. Use the Loan option if you want to calculate costs for a loan like a mortgage, which can also calculate interest deductions (Dutch: hypotheekrenteaftrek)."
                },
                frequency: {
                    title: "2️⃣ Frequency",
                    description: "Set how often the expense is paid. You can choose monthly, quarterly, or yearly expenses. You can also set the occurrence frequency—for example, every 1 or 2 months."
                },
                period: {
                    title: "3️⃣ Time Period",
                    description: "Define when this expense should happen. You can plan future expenses like college fees for your children, or recurring costs like house painting every 5 years. Some expenses will change after you reach your retirement age."
                },
                link: {
                    title: "4️⃣ Date Linking",
                    description: "This feature helps you easily link dates to retirement. You can set the date to the fixed retirement date or to an adjustable retirement date using a slider when analyzing your calculation results—for example, to check when you can stop working given all the items you have entered.",
                    early: "Early retirement date",
                    standard: "Standard retirement date",
                    none: "No link (manual date)"
                },
                inflation: {
                    title: "5️⃣ Inflation Adjustment",
                    description: "Determine if the expense should be indexed for inflation. Most costs are indexed over time, so enable this for most cases. This is important when you want to analyze your calculation with the effect of inflation to get a realistic view of future costs."
                }
            },
            step5Income: {
                title: "Step 5: Planning Incomes",
                intro: "After planning your expenses, set up your income sources. Income planning follows similar principles to expense planning:",
                sources: {
                    title: "Multiple Income Sources",
                    description: "Add various income streams such as salary, rental income, dividends, or pension. Each source can have its own schedule and settings."
                },
                timing: {
                    title: "Timing & Scheduling",
                    description: "Set when each income starts and ends. This is especially useful for modeling career changes, retirement transitions, or temporary income sources."
                },
                example: {
                    title: "🎯 Example: Setting Up Income",
                    job: {
                        description: "First, we set up a job income of 3,000 per month. The income is inflation-adjusted and will stop at the early retirement date.",
                        caption: "Setting up job income of 3,000 per month, stopping at early retirement"
                    },
                    expenses: "We also set up expenses of 2,000 per month. This gives us a monthly surplus of 1,000 that we can save.",
                    pension: {
                        description: "Next, we add a pension of 1,000 per month. The pension starts at the fixed retirement age and is also inflation-adjusted.",
                        caption: "Setting up pension income of 1,000 per month, starting at fixed retirement age"
                    }
                },
                analyze: {
                    title: "📊 Analyze the Results",
                    description: "When we press Calculate, the first planning results appear. Here we've set the early retirement date to age 65 by clicking the FIRE button (1). If there are multiple persons in the planning, you can adjust their FIRE dates individually (2).",
                    caption: "Calculation results with income, expense, and capital graphs",
                    shortage: "Looking at the wealth graph, we can see there's a shortage starting in 2049 at age 76. This means we need to plan our savings to cover this gap.",
                    shortageCaption: "The wealth graph shows a shortage at age 76 in 2049",
                    insight: "By clicking on the pink line in the income graph, we can see we have 1,000 to spend monthly until the early retirement date. Let's use this surplus to build savings!"
                }
            },
            step6: {
                title: "Step 6: Planning Savings",
                intro: "Savings planning helps you understand if you can cover your costs and even retire early. Set up your savings strategy:",
                deposits: {
                    title: "Deposits",
                    description: "Plan regular or one-time deposits to your savings accounts. Configure tax benefits and inflation adjustments."
                },
                withdrawals: {
                    title: "Withdrawals",
                    description: "Plan how and when you'll withdraw from savings, especially important for retirement planning."
                },
                example: {
                    title: "🎯 Example: Setting Up Savings",
                    description: "We add a savings account with a 6% annual interest rate. The deposits will stop at the early retirement date, and the savings account will end at the fixed retirement date—the remaining balance goes to the main account.",
                    caption: "Savings plan with 1,000 monthly deposits at 6% interest",
                    details: "Note that we set both deposits and withdrawals to be inflation-adjusted. This ensures our savings strategy keeps pace with rising costs.",
                    withdrawal: "We set up a withdrawal of 2,000 per month during the period between early retirement and the fixed pension date. This covers the income gap when our job income stops but pension hasn't started yet. The interest continues to grow on the remaining balance during the withdrawal period.",
                    withdrawalCaption: "Setting up 2,000 monthly withdrawal during early retirement period"
                },
                results: {
                    title: "📊 Review the Improved Results",
                    description: "After adding the savings plan, we recalculate. Now the wealth graph shows the shortage has moved from age 76 to age 85 (2058)—a significant improvement!",
                    caption: "With savings, the shortage now occurs much later at age 85"
                },
                conclusion: "Congratulations! You've created your first complete financial plan. From here, you can continue to refine your plan by adjusting savings rates, exploring different retirement ages, or adding additional income sources."
            },
            calculate: {
                title: "📊 Calculate and Analyze",
                intro: "Once you've entered all your financial data, use the Calculate button to run your analysis:",
                visual: "View visual projections of your financial future",
                retirement: "Adjust retirement age sliders to see different scenarios",
                whatif: "Test \"what if\" scenarios by modifying inputs",
                export: "Export or save your financial plan for future reference"
            },
            getStarted: {
                title: "Get Started Now",
                description: "Download Finance Planner and start creating your financial plan today:"
            },
            needHelp: {
                title: "Need More Help?",
                description: "Explore our additional resources:",
                tutorials: "🎥 Watch Video Tutorials",
                scenarios: "📂 View Example Scenarios",
                community: "💬 Join Community Discussions"
            }
        }
    },
    nl: {
        nav: {
            home: "Home",
            moreInfo: "Meer info",
            tutorials: "Tutorials",
            community: "Forum",
            scenarios: "Voorbeelden",
            howToPlan: "Hoe te plannen",
            about: "Over"
        },
        hero: {
            title: "Finance Planner: De F.I.R.E. tool",
            subtitle: "Jouw essentiële partner voor financiële onafhankelijkheid",
            description: "Ontworpen voor de F.I.R.E. (Financial Independence, Retire Early) beweging, helpt Finance Planner je om je financiële doelen te visualiseren, volgen en bereiken. Bouw financiële gezondheid, plan vooruit met verschillende scenario's en zie de langetermijnimpact van je beslissingen—of je nu net begint of plant voor vervroegd pensioen.",
            downloadIos: "📱 Download iOS app",
            downloadAndroid: "📱 Download Android app",
            exploreFeatures: "Meer informatie"
        },
        mission: {
            title: "💡 Onze missie: financiële planning voor iedereen",
            freeAccess: "<strong>Gratis financiële planning voor iedereen:</strong> Wij geloven dat iedereen toegang moet hebben tot kwalitatieve financiële planningstools—zonder veel geld te hoeven uitgeven aan een dure adviseur. Finance Planner geeft je professionele planning tools in handen, volledig gratis.",
            global: "<strong>Financiële gezondheid wereldwijd:</strong> Beschikbaar over de hele planeet, helpt onze tool mensen overal een gezondere financiële toekomst op te bouwen, ongeacht locatie of achtergrond.",
            privacy: "<strong>Jouw gegevens blijven privé:</strong> Al je persoonlijke financiële gegevens en berekeningen blijven 100% op jouw apparaat. Niets wordt opgeslagen op externe servers. Jouw informatie is volledig veilig en wordt nooit gedeeld.",
            adPrivacy: "<strong>Over advertenties:</strong> De app gebruikt advertenties (AdMob) om gratis te blijven voor iedereen. Onze privacyverklaring heeft alleen betrekking op de anonieme gebruiksgegevens die door de advertentieprovider worden verzameld—jouw financiële gegevens zijn hier nooit bij inbegrepen."
        },
        moreInfo: {
            title: "Meer informatie over Finance Planner",
            subtitle: "Ontdek de functies en mogelijkheden"
        },
        appStore: {
            title: "📱 Download",
            description: "Neem je financiële planning overal mee naartoe met onze mobiele apps, nu beschikbaar voor iOS en Android!",
            downloadAppStore: "Download in de app store",
            downloadGooglePlay: "Download op Google Play"
        },
        features: {
            title: "Belangrijkste functies",
            multiPerson: {
                title: "Multi-persoon & multi-inkomen ondersteuning",
                description: "Beheer de financiën voor je hele huishouden, inclusief meerdere personen, inkomstenbronnen en uitgavencategorieën."
            },
            flexibleSavings: {
                title: "Flexibele spaarrekeningen",
                description: "Organiseer en volg meerdere spaarrekeningen voor verschillende doelen."
            },
            longTermProjections: {
                title: "Langetermijnprojecties",
                description: "Zie je vermogen groeien over decennia met gedetailleerde, jaar-op-jaar prognoses."
            },
            fireGoal: {
                title: "FIRE doel tracking",
                description: "Stel je FIRE nummer in en monitor je voortgang naar financiële onafhankelijkheid."
            },
            whatIf: {
                title: '"Wat als" scenario\'s',
                description: "Experimenteer met spaarpercentages, investeringsrendementen en opnamestrategieën om hun impact te zien."
            },
            inflation: {
                title: "Inflatie aanpassing",
                description: "Alle berekeningen houden rekening met inflatie, wat je een realistisch beeld geeft van je toekomstige koopkracht."
            },
            advancedTools: {
                title: "Geavanceerde planning tools",
                yearly: "<strong>Jaarlijkse overzichten:</strong> Krijg duidelijke, uitvoerbare samenvattingen van je netto vermogen, passief inkomen en verwachte pensioenuitgaven.",
                customizable: "<strong>Aanpasbare invoer:</strong> Voer gemakkelijk je inkomen, uitgaven, investeringen, activa en passiva in.",
                visual: "<strong>Visuele inzichten:</strong> Intuïtieve grafieken maken complexe financiële gegevens gemakkelijk te begrijpen.",
                earlyRetirement: "<strong>Vroegpensioen planning:</strong> Navigeer door zowel de accumulatie- als decumulatiefasen van vroegpensioen.",
                userFriendly: "<strong>Gebruiksvriendelijke interface:</strong> Schoon, intuïtief en toegankelijk voor iedereen."
            }
        },
        depositPlanning: {
            title: "📥 Stortingen plannen",
            intro: "Plan je spaarstortingen met geavanceerde functies, waaronder:",
            scheduling: "<strong>Flexibele planning:</strong> Stel eenmalige of terugkerende stortingen in (maandelijks, jaarlijks, enz.)",
            timeframe: "<strong>Tijdsplanning:</strong> Definieer start- en einddata voor je stortingsschema's",
            inflation: "<strong>Inflatie-aanpassingen:</strong> Pas je stortingen automatisch aan voor inflatie in de loop van de tijd",
            taxBenefits: "<strong>Belastingvoordelen modellering:</strong> Houd rekening met cashback en belastingteruggaven op stortingen",
            taxAdvantagesTitle: "Fiscaal voordelige rekeningen",
            taxAdvantagesDesc: "Finance Planner helpt je om de belastingvoordelen van stortingen op pensioenrekeningen te modelleren:",
            accountTypes: "Modelleer fiscaal voordelige rekeningen zoals 401(k), IRA en andere pensioenrekeningen",
            taxRate: "Bereken belastingvoordelen op basis van je marginale belastingtarief (bijv. 22% of 24%)",
            refundImpact: "Zie hoe belastingteruggaven je daadwerkelijke spaarpercentage beïnvloeden en de echte kosten van sparen verlagen"
        },
        withdrawalPlanning: {
            title: "📤 Opnames plannen",
            intro: "Plan je opnames met uitgebreide belastingoverwegingen:",
            scheduling: "<strong>Flexibele opnameschema's:</strong> Plan periodieke of eenmalige opnames",
            timeframe: "<strong>Tijdsplanning:</strong> Bepaal wanneer opnames beginnen en eindigen",
            inflation: "<strong>Inflatie-aanpassingen:</strong> Houd opnames in lijn met inflatie",
            taxImpact: "<strong>Belastingimpact modellering:</strong> Houd rekening met belastingen op opnames",
            retirementTaxTitle: "Pensioenopname belastingen",
            retirementTaxDesc: "Begrijp de belastinggevolgen van je pensioenopnames:",
            scenarios: "Modelleer verschillende belastingscenario's voor pensioenopnames",
            rmds: "Plan voor verplichte minimale uitkeringen (RMDs)",
            afterTax: "Zie de echte impact na belasting van je opnames en plan dienovereenkomstig"
        },
        financialJourney: {
            title: "📊 Financieel traject overzicht",
            intro: "Krijg een compleet beeld van je financiële toekomst door inkomsten en uitgaven in de loop van de tijd te matchen:",
            incomeTracking: "<strong>Inkomsten tracking:</strong> Visualiseer alle inkomensbronnen in de loop van de tijd",
            expensePlanning: "<strong>Uitgaven planning:</strong> Zie hoe uitgaven (tekort/overschot) zich ontwikkelen",
            capitalProjection: "<strong>Kapitaalprojectie:</strong> Volg je totale besparingen en kapitaalgroei",
            multiPerson: "<strong>Multi-persoon planning:</strong> Modelleer financiën voor koppels of huishoudens",
            yearByYear: "<strong>Jaar-op-jaar uitsplitsing:</strong> Begrijp precies wat er elk jaar gebeurt"
        },
        tutorials: {
            title: "📚 Leer Finance Planner te gebruiken",
            videoTitle: "Video tutorials beschikbaar",
            description: "Bekijk uitgebreide tutorials over hoe je je financiële onafhankelijkheidsplanning kunt maximaliseren met Finance Planner. Leer best practices, tips en geavanceerde strategieën.",
            visitChannel: "Bezoek ons YouTube kanaal",
            viewTutorials: "Bekijk tutorials"
        },
        exampleFiles: {
            title: "📂 Voorbeeldbestanden & scenario's",
            description: "Ontdek verschillende financiële planning scenario's met voorbeelden uit de echte wereld. Elk scenario demonstreert hoe Finance Planner te gebruiken voor specifieke financiële doelen.",
            viewScenarios: "Bekijk alle scenario's"
        },
        whyChoose: {
            title: "Waarom kiezen voor Finance Planner?",
            clarity: {
                title: "Duidelijkheid voor FIRE",
                description: "Focus op de langetermijnvisie die cruciaal is voor financiële onafhankelijkheid."
            },
            empowering: {
                title: "Versterkende beslissingen",
                description: "Maak vandaag slimme financiële keuzes voor een betere toekomst."
            },
            beyond: {
                title: "Verder dan budgetteren",
                description: "Ga dieper dan basis budgetteren—zie de kracht van samengesteld rendement en langetermijnstrategie."
            },
            motivated: {
                title: "Blijf gemotiveerd",
                description: "Visualiseer je vooruitgang en blijf geïnspireerd op je reis."
            }
        },
        whoIsItFor: {
            title: "Voor wie is het?",
            individuals: "<strong>Individuen en stellen die F.I.R.E. nastreven.</strong> - Krijg de tools die je nodig hebt voor financiële onafhankelijkheid",
            planners: "<strong>Iedereen die hun langetermijn financiële toekomst plant</strong> - Bouw systematisch vermogen op",
            investors: "<strong>Investeerders die vermogensgroei en pensioengerichtheid projecteren</strong> - Modelleer verschillende scenario's",
            decisionMakers: "<strong>Degenen die de impact van hun financiële beslissingen willen begrijpen</strong> - Zie langetermijneffecten"
        },
        dataPrivacy: {
            title: "🔒 Jouw data, jouw privacy",
            intro: "Je financiële informatie is zeer gevoelig. Finance Planner is ontworpen met privacy als kernprincipe:",
            localStorage: "<strong>100% lokale opslag:</strong> Al je gegevens en berekeningen blijven op je telefoon—niets wordt naar externe servers gestuurd",
            noCloud: "<strong>Geen cloud sync:</strong> Je financiële plannen zijn van jou alleen en blijven volledig privé",
            fullControl: "<strong>Volledige controle:</strong> Jij bepaalt wat je met je gegevens doet—exporteer, back-up of verwijder ze op elk moment",
            adNotice: "Let op: De mobiele apps gebruiken advertenties om gratis te blijven. Advertentieproviders (AdMob) kunnen anonieme gebruiksgegevens verzamelen zoals beschreven in onze Privacyverklaring."
        },
        footer: {
            iosApp: "📱 iOS app",
            androidApp: "📱 Android app",
            community: "💬 Gemeenschapsdiscussies",
            tutorials: "🎥 Video tutorials",
            privacy: "🔒 Privacyverklaring",
            authorsTitle: "Auteurs",
            copyright: "&copy; 2026 Finance Planner. Ondersteunt je reis naar financiële onafhankelijkheid."
        },
        scenarios: {
            title: "Financiële planning scenario's",
            subtitle: "Ontdek verschillende paden naar financiële onafhankelijkheid",
            description: "Finance Planner ondersteunt meerdere financiële planning scenario's. Elk scenario helpt je verschillende levenssituaties en financiële doelen te modelleren. Download de voorbeeldbestanden en open ze in de mobiele app om complete financiële plannen in actie te zien.",
            futurePlanning: {
                title: "🎯 Toekomstige planning",
                description: "Plan je financiële toekomst op lange termijn met uitgebreide modellering van inkomsten, uitgaven en besparingen. Dit scenario is perfect voor families en individuen die systematisch vermogen willen opbouwen, meerdere inkomstenbronnen willen volgen en willen plannen voor grote levensgebeurtenissen zoals onderwijs voor kinderen, huizenaankopen of carrièreveranderingen.",
                idealFor: "Ideaal voor:",
                use1: "Vermogen opbouwen in de loop van de tijd met meerdere inkomstenbronnen",
                use2: "Plannen voor grote uitgaven (onderwijs, woning, etc.)",
                use3: "Vooruitgang volgen naar FIRE doelen",
                use4: "Verschillende spaarpercentages en hun impact modelleren",
                downloadButton: "Download toekomstige planning voorbeeld"
            },
            businessExit: {
                title: "💼 Bedrijf verkopen en rentenieren",
                description: "Modelleer de financiële impact van de verkoop van je bedrijf en de overgang naar pensioen. Dit scenario helpt je om de verkoopopbrengst, belastinggevolgen en hoe je je pensioeninkomen uit de verkoop structureert te plannen. Begrijp hoe verschillende verkoopprijzen en pensioenopnamestrategieën je financiële zekerheid op lange termijn beïnvloeden.",
                idealFor: "Ideaal voor:",
                use1: "Bedrijfseigenaren die een exit-strategie plannen",
                use2: "Verschillende verkoopprijsscenario's modelleren",
                use3: "Investerings- en opnamestrategieën na verkoop plannen",
                use4: "Belastinggevolgen van bedrijfsverkoop begrijpen",
                comingSoon: "📌 Voorbeeldbestand komt binnenkort"
            },
            debtRepayment: {
                title: "💳 Planning om schulden af te lossen",
                description: "Creëer een uitgebreid schuldafbetalingsplan terwijl je andere financiële doelen behoudt. Dit scenario helpt je verschillende schuldafbetalingsstrategieën te modelleren (lawine vs. sneeuwbal), de impact van extra betalingen te zien en te begrijpen hoe schuldaflossing in je algemene financiële plan past. Balanceer schuldaflossing met het opbouwen van besparingen en investeringen.",
                idealFor: "Ideaal voor:",
                use1: "Gestructureerde schuldafbetalingsplannen creëren",
                use2: "Lawine versus sneeuwbalmethoden vergelijken",
                use3: "Schuldaflossing balanceren met spaardoelen",
                use4: "De impact van extra betalingen modelleren",
                comingSoon: "📌 Voorbeeldbestand komt binnenkort"
            },
            howToUse: {
                title: "Hoe deze scenario's te gebruiken",
                step1: "<strong>Download het voorbeeldbestand</strong> voor het scenario dat bij jouw situatie past",
                step2: '<strong>Open het in de Finance Planner mobiele app</strong> (beschikbaar voor <a href="https://apps.apple.com/us/app/finance-planner/id6743322133" target="_blank">iOS</a> en <a href="https://play.google.com/store/apps/details?id=nl.crwsolutions.CalcApi.Mobile" target="_blank">Android</a>)',
                step3: "<strong>Verken het voorbeeld</strong> om te begrijpen hoe het scenario is gestructureerd",
                step4: "<strong>Pas aan met je eigen gegevens</strong> door inkomsten, uitgaven en besparingen te wijzigen",
                step5: "<strong>Bewaar en volg</strong> je gepersonaliseerde financiële plan"
            },
            needHelp: {
                title: "Hulp nodig?",
                description: "Bekijk onze bronnen om meer te leren over het gebruik van Finance Planner:",
                tutorials: "🎥 Bekijk video tutorials",
                community: "💬 Deelnemen aan gemeenschapsdiscussies"
            }
        },
        tutorialsPage: {
            title: "📚 Finance Planner tutorials",
            subtitle: "Leer hoe je jouw financiële planning maximaliseert",
            description: "Bekijk uitgebreide video tutorials om het meeste uit Finance Planner te halen. Leer over geavanceerde strategieën, fiscaal voordelige rekeningen en best practices voor het bereiken van financiële onafhankelijkheid.",
            featuredVideo: {
                title: "🎥 Hoe pensioensparen te implementeren",
                description: "Leer hoe je fiscaal voordelige pensioenrekeningen modelleert in Finance Planner. Deze tutorial demonstreert pensioenspaarsystemen waar je belastingteruggaven ontvangt tijdens stortingen en belasting betaalt tijdens opnames. Behandelt het Amerikaanse 401(k)/IRA, Nederlandse pensioensparen en vergelijkbare fiscaal voordelige pensioenrekeningen wereldwijd.",
                countriesTitle: "Landen met belasting-uitgestelde pensioensystemen:",
                countriesList: "Deze aanpak geldt voor landen waar je belastingvoordelen krijgt bij het storten en belasting betaalt bij het opnemen van pensioenbesparingen, zoals: VS (401k, IRA), Nederland (pensioensparen), Duitsland, VK, Frankrijk, Canada, Australië, Japan en vele andere landen."
            },
            wealthTaxVideo: {
                title: "🎥 Nederlandse vermogensbelasting voorbeeld",
                description: "Zie hoe het Nederlandse vermogensbelastingsysteem werkt in Finance Planner. Deze tutorial demonstreert hoe je jaarlijkse vermogensbelasting modelleert op basis van je totale vermogen—een belastingsysteem dat in verschillende landen wereldwijd wordt gebruikt.",
                countriesTitle: "Landen met jaarlijkse vermogensbelasting systemen:",
                countriesList: "Vergelijkbare jaarlijkse vermogensbelastingsystemen (belasting op totaal vermogen elk jaar) worden gebruikt in: Nederland, Noorwegen, Spanje, Zwitserland en Colombia."
            },
            moreVideos: {
                title: "📺 Meer video tutorials",
                channelTitle: "Bezoek ons YouTube kanaal",
                channelDescription: "Ontdek onze complete bibliotheek van Finance Planner tutorials. Leer best practices, tips en geavanceerde strategieën voor het bereiken van financiële onafhankelijkheid.",
                visitButton: "Bezoek YouTube kanaal"
            },
            topics: {
                title: "Tutorial onderwerpen",
                gettingStarted: {
                    title: "Aan de slag",
                    description: "Leer de basis van Finance Planner en stel je eerste financiële plan op."
                },
                taxStrategies: {
                    title: "Fiscaal voordelige strategieën",
                    description: "Modelleer 401k, IRA en pensioenspaarrekeningen met belastingvoordelen."
                },
                fireGoals: {
                    title: "FIRE doel planning",
                    description: "Stel je Financiële Onafhankelijkheidsdoelen in en volg ze effectief."
                },
                scenarios: {
                    title: "Scenario modellering",
                    description: "Test verschillende wat-als-scenario's om je financiële plan te optimaliseren."
                }
            },
            needHelp: {
                title: "Meer hulp nodig?",
                description: "Heb je vragen of wil je je financiële planningsstrategieën bespreken?",
                communityButton: "💬 Deelnemen aan gemeenschapsdiscussies",
                scenariosButton: "📂 Bekijk voorbeeldscenario's"
            }
        },
        howToPlan: {
            title: "📋 Hoe maak je een planning",
            subtitle: "Stapsgewijze handleiding voor het maken van je financiële plan",
            description: "Leer hoe je een uitgebreid financieel plan opzet in de Finance Planner app. Volg deze stappen om je berekening te maken, personen toe te voegen en je uitgaven, inkomsten, besparingen en leningen te plannen voor een compleet financieel overzicht.",
            step1: {
                title: "Stap 1: Maak een berekening",
                intro: "De eerste stap bij het maken van je financiële plan is het opzetten van een nieuwe berekening. Dit vormt de basis van je planning.",
                caption: "Het Berekening dialoogvenster waar je de naam en het startsaldo invoert",
                name: {
                    title: "Planning naam",
                    description: "Geef je planning een beschrijvende naam, zoals \"Gezinsbudget 2025\" of \"Pensioenplanning\". Dit helpt je later verschillende scenario's te identificeren."
                },
                balance: {
                    title: "Rekeningsaldo",
                    description: "Voer het startsaldo van je rekening in. Dit is het saldo van de rekening waarop alle onderdelen worden berekend—bijvoorbeeld de gezamenlijke bankrekening van een huishouden."
                },
                tip: "💡 <strong>Tip:</strong> Het rekeningsaldo vertegenwoordigt de gezamenlijke rekening van alle deelnemers aan de planning—vergelijkbaar met een verlies- en winstrekening bij een bedrijf, maar dan voor privégebruik. Het dient als de reserve waaruit uitgaven worden betaald wanneer deze niet uit de lopende inkomsten kunnen worden gedekt."
            },
            step2: {
                title: "Stap 2: Voeg personen toe",
                intro: "Na het aanmaken van je berekening, voeg je de personen toe die betrokken zijn bij je financiële plan. Dit is meestal jezelf, je partner of andere huishoudenleden.",
                caption: "Het Persoon dialoogvenster waar je naam en geboortedatum invoert, met de pensioendatum schuifregelaar zichtbaar",
                name: {
                    title: "Naam persoon",
                    description: "Voer een naam in om elke persoon in je plan te identificeren, zoals \"Persoon # 1\" of gebruik echte namen voor duidelijkheid."
                },
                dob: {
                    title: "Geboortedatum",
                    description: "De geboortedatum wordt gebruikt om de pensioenleeftijd te bepalen, die je later kunt aanpassen. De app berekent automatisch leeftijden en pensioendata."
                },
                retirement: {
                    title: "📅 Pensioendatum planning",
                    description: "Zodra een persoon is toegevoegd, kun je hun vervroegde pensioendata zien en aanpassen. Gebruik de schuifregelaar om verschillende pensioenscenario's te verkennen en te zien hoe ze je financiële plan beïnvloeden."
                }
            },
            overview: {
                title: "Planning categorieën",
                intro: "Na het toevoegen van personen kun je beginnen met het plannen van verschillende financiële categorieën. De aanbevolen volgorde is:",
                step1: "<strong>Hypotheken:</strong> Stel hypotheken in met renteberekeningen en belastingaftrek",
                step2: "<strong>Uitgaven:</strong> Plan andere kosten die je moet dekken",
                step3: "<strong>Inkomsten:</strong> Stel huidige en toekomstige inkomensbronnen in, rekening houdend met je uitgaven",
                step4: "<strong>Besparingen:</strong> Plan je besparingen om te zien of je je kosten kunt dekken en mogelijk eerder met pensioen kunt"
            },
            step3Mortgage: {
                title: "Stap 3: Hypotheken plannen",
                intro: "Hypotheken zijn een specifiek type uitgave waarbij de maandelijkse betaling wordt berekend op basis van het leningbedrag, de rente en het aflossingsschema. Je kunt ook hypotheekrenteaftrek modelleren. Zo configureer je een hypotheek:",
                caption: "Het Hypotheek scherm met alle configuratie-opties en genummerde annotaties",
                amount: {
                    title: "1️⃣ Leningbedrag",
                    description: "Voer het totale leningbedrag in op de opgegeven startdatum. Als je bijvoorbeeld een hypotheek van €300.000 afsluit, voer je dit bedrag hier in. De app berekent de maandelijkse betalingen op basis van dit bedrag, de rente en het aflossingsschema."
                },
                interest: {
                    title: "2️⃣ Jaarlijkse hypotheekrente",
                    description: "Stel de jaarlijkse hypotheekrente in als percentage. Dit is de rente die je kredietverstrekker in rekening brengt over het leningbedrag. Bijvoorbeeld 3,76% jaarlijkse rente."
                },
                repayment: {
                    title: "3️⃣ Aflossingsschema",
                    description: "Kies het aflossingsschema voor je hypotheek. Er zijn drie opties:",
                    annuity: "<strong>Annuïteit:</strong> Vaste maandelijkse betalingen gedurende de gehele hypotheekperiode, waarbij de verhouding tussen rente en hoofdsom in de loop van de tijd verandert.",
                    linear: "<strong>Lineair:</strong> Vaste aflossing van de hoofdsom elke maand, met dalende rentebetalingen in de loop van de tijd, wat resulteert in dalende totale maandelijkse betalingen.",
                    interestOnly: "<strong>Aflossingsvrij:</strong> Betaal alleen rente elke maand, zonder aflossing van de hoofdsom. Het volledige leningbedrag blijft verschuldigd aan het einde van de termijn."
                },
                taxDeduction: {
                    title: "4️⃣ Belastingteruggave op rente",
                    description: "Configureer de hypotheekrenteaftrek (indien van toepassing in jouw land). Voer het belastingaftrekpercentage in en specificeer de datum tot wanneer deze aftrek geldig is. Dit helpt je om belastingvoordelen te modelleren zoals de Nederlandse \"hypotheekrenteaftrek\" of vergelijkbare belastingvoordelen in andere landen.",
                    note: "💡 <strong>Let op:</strong> Veel landen bieden belastingaftrek op hypotheekrente om woningbezit aan te moedigen. Controleer je lokale belastingregels om te bepalen of je in aanmerking komt en welk percentage voor jou van toepassing is."
                },
                tip: "💡 <strong>Tip:</strong> Hypotheekplanning is essentieel voor langetermijnplanning, omdat het meestal een van de grootste uitgaven in een huishoudbudget vertegenwoordigt. Door verschillende scenario's te modelleren, kun je begrijpen hoe je hypotheek je mogelijkheid om te sparen en eerder met pensioen te gaan beïnvloedt."
            },
            step4: {
                title: "Stap 4: Uitgaven plannen",
                intro: "Uitgaven zijn een cruciaal onderdeel van je financiële plan. Wanneer je je uitgaven plant, kun je zien wat je moet doen om je financiële doelen te bereiken. Zo configureer je een uitgave:",
                caption: "Het Uitgaven scherm met alle configuratie-opties en genummerde annotaties",
                amount: {
                    title: "1️⃣ Netto bedrag",
                    description: "Voer het netto uitgavenbedrag in. Dit onderdeel wordt gebruikt voor uitgaven, of ze nu regelmatig voorkomen of eenmalig zijn—zoals maandelijkse huishoudkosten, jaarlijkse vakantie-uitgaven, etc. Gebruik het Lening-onderdeel als je kosten wilt berekenen voor een lening zoals een hypotheek, die ook de hypotheekrenteaftrek kan berekenen."
                },
                frequency: {
                    title: "2️⃣ Frequentie",
                    description: "Stel in hoe vaak de uitgave wordt betaald. Je kunt kiezen uit maandelijkse, driemaandelijkse of jaarlijkse uitgaven. Je kunt ook de voorkomingsfrequentie instellen—bijvoorbeeld elke 1 of 2 maanden."
                },
                period: {
                    title: "3️⃣ Tijdsperiode",
                    description: "Bepaal wanneer deze uitgave moet plaatsvinden. Je kunt toekomstige uitgaven plannen zoals studiekosten voor je kinderen, of terugkerende kosten zoals huisschilderen elke 5 jaar. Sommige uitgaven veranderen nadat je je pensioenleeftijd bereikt."
                },
                link: {
                    title: "4️⃣ Datum koppeling",
                    description: "Deze functie helpt je gemakkelijk datums te koppelen aan pensioen. Je kunt de datum instellen op de vaste pensioendatum of op een aanpasbare pensioendatum met behulp van een schuifregelaar bij het analyseren van je berekeningsresultaten—bijvoorbeeld om te controleren wanneer je kunt stoppen met werken gezien alle items die je hebt ingevoerd.",
                    early: "Vervroegde pensioendatum",
                    standard: "Standaard pensioendatum",
                    none: "Geen koppeling (handmatige datum)"
                },
                inflation: {
                    title: "5️⃣ Inflatie aanpassing",
                    description: "Bepaal of de uitgave moet worden geïndexeerd voor inflatie. De meeste kosten worden in de loop van de tijd geïndexeerd, dus schakel dit in voor de meeste gevallen. Dit is belangrijk wanneer je je berekening wilt analyseren met het effect van inflatie om een realistisch beeld te krijgen van toekomstige kosten."
                }
            },
            step5Income: {
                title: "Stap 5: Inkomsten plannen",
                intro: "Na het plannen van je uitgaven, stel je je inkomensbronnen in. Inkomensplanning volgt vergelijkbare principes als uitgavenplanning:",
                sources: {
                    title: "Meerdere inkomensbronnen",
                    description: "Voeg verschillende inkomstenstromen toe zoals salaris, huurinkomsten, dividenden of pensioen. Elke bron kan zijn eigen schema en instellingen hebben."
                },
                timing: {
                    title: "Timing & planning",
                    description: "Stel in wanneer elk inkomen begint en eindigt. Dit is vooral nuttig voor het modelleren van carrièreveranderingen, pensioenovergang of tijdelijke inkomensbronnen."
                },
                example: {
                    title: "🎯 Voorbeeld: Inkomen instellen",
                    job: {
                        description: "Eerst stellen we een arbeidsinkomen in van 3.000 per maand. Het inkomen is geïndexeerd voor inflatie en stopt op de vervroegde pensioendatum.",
                        caption: "Arbeidsinkomen van 3.000 per maand instellen, stopt bij vervroegd pensioen"
                    },
                    expenses: "We stellen ook uitgaven in van 2.000 per maand. Dit geeft ons een maandelijks overschot van 1.000 dat we kunnen sparen.",
                    pension: {
                        description: "Vervolgens voegen we een pensioen toe van 1.000 per maand. Het pensioen begint op de vaste pensioenleeftijd en is ook geïndexeerd voor inflatie.",
                        caption: "Pensioeninkomen van 1.000 per maand instellen, begint op vaste pensioenleeftijd"
                    }
                },
                analyze: {
                    title: "📊 Analyseer de resultaten",
                    description: "Wanneer we op Bereken drukken, verschijnen de eerste planningsresultaten. Hier hebben we de vervroegde pensioendatum op 65 jaar gezet door op de FIRE-knop te klikken (1). Als er meerdere personen in de planning zijn, kun je hun FIRE-datums individueel aanpassen (2).",
                    caption: "Berekeningsresultaten met inkomsten-, uitgaven- en kapitaalgrafieken",
                    shortage: "Kijkend naar de vermogensgrafiek zien we dat er een tekort begint in 2049 op 76-jarige leeftijd. Dit betekent dat we onze besparingen moeten plannen om dit gat te dekken.",
                    shortageCaption: "De vermogensgrafiek toont een tekort op 76-jarige leeftijd in 2049",
                    insight: "Door op de roze lijn in de inkomstengrafiek te klikken, zien we dat we 1.000 per maand te besteden hebben tot de vervroegde pensioendatum. Laten we dit overschot gebruiken om te sparen!"
                }
            },
            step6: {
                title: "Stap 6: Besparingen plannen",
                intro: "Besparingsplanning helpt je te begrijpen of je je kosten kunt dekken en zelfs eerder met pensioen kunt. Stel je spaarstrategie in:",
                deposits: {
                    title: "Stortingen",
                    description: "Plan regelmatige of eenmalige stortingen op je spaarrekeningen. Configureer belastingvoordelen en inflatie-aanpassingen."
                },
                withdrawals: {
                    title: "Opnames",
                    description: "Plan hoe en wanneer je opneemt uit besparingen, vooral belangrijk voor pensioenplanning."
                },
                example: {
                    title: "🎯 Voorbeeld: Besparingen instellen",
                    description: "We voegen een spaarrekening toe met een jaarlijkse rente van 6%. De stortingen stoppen op de vervroegde pensioendatum, en de spaarrekening eindigt op de vaste pensioendatum—het resterende saldo gaat naar de hoofdrekening.",
                    caption: "Spaarplan met 1.000 maandelijkse stortingen tegen 6% rente",
                    details: "Merk op dat we zowel stortingen als opnames hebben ingesteld op geïndexeerd voor inflatie. Dit zorgt ervoor dat onze spaarstrategie gelijke tred houdt met stijgende kosten.",
                    withdrawal: "We stellen een opname in van 2.000 per maand gedurende de periode tussen vervroegd pensioen en de vaste pensioendatum. Dit dekt het inkomensgat wanneer ons arbeidsinkomen stopt maar het pensioen nog niet is begonnen. De rente blijft groeien op het resterende saldo tijdens de opnameperiode.",
                    withdrawalCaption: "Maandelijkse opname van 2.000 instellen tijdens vervroegde pensioenperiode"
                },
                results: {
                    title: "📊 Bekijk de verbeterde resultaten",
                    description: "Na het toevoegen van het spaarplan berekenen we opnieuw. Nu toont de vermogensgrafiek dat het tekort is verschoven van 76 naar 85 jaar (2058)—een aanzienlijke verbetering!",
                    caption: "Met spaargeld treedt het tekort nu veel later op, op 85-jarige leeftijd"
                },
                conclusion: "Gefeliciteerd! Je hebt je eerste complete financiële plan gemaakt. Vanaf hier kun je je plan blijven verfijnen door spaarpercentages aan te passen, verschillende pensioenleeftijden te verkennen of extra inkomensbronnen toe te voegen."
            },
            calculate: {
                title: "📊 Bereken en analyseer",
                intro: "Zodra je al je financiële gegevens hebt ingevoerd, gebruik je de Bereken-knop om je analyse uit te voeren:",
                visual: "Bekijk visuele projecties van je financiële toekomst",
                retirement: "Pas pensioenleeftijd-schuifregelaars aan om verschillende scenario's te zien",
                whatif: "Test \"wat als\" scenario's door invoer aan te passen",
                export: "Exporteer of bewaar je financiële plan voor toekomstige referentie"
            },
            getStarted: {
                title: "Begin nu",
                description: "Download Finance Planner en begin vandaag met het maken van je financiële plan:"
            },
            needHelp: {
                title: "Meer hulp nodig?",
                description: "Ontdek onze aanvullende bronnen:",
                tutorials: "🎥 Bekijk video tutorials",
                scenarios: "📂 Bekijk voorbeeldscenario's",
                community: "💬 Deelnemen aan gemeenschapsdiscussies"
            }
        }
    }
};

// Language management
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updatePageContent();
    updateToggleButton();
    updateLanguageMetadata(lang);
}

function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[currentLang];
        
        for (const k of keys) {
            translation = translation?.[k];
            if (!translation) break;
        }
        
        if (translation) {
            element.innerHTML = translation;
        }
    });
}

function updateToggleButton() {
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.textContent = currentLang === 'en' ? 'NL' : 'EN';
    }
}

function updateLanguageMetadata(lang) {
    // Update the html lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Update the meta language tag
    let metaLang = document.querySelector('meta[name="language"]');
    if (metaLang) {
        metaLang.setAttribute('content', lang);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateToggleButton();
    updateLanguageMetadata(currentLang);
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'nl' : 'en');
        });
    }

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }
        });

        // Close menu when clicking overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                navOverlay.classList.remove('active');
            });
        }

        // Close menu when clicking nav links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
            });
        });
    }
});

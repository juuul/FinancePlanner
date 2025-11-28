// Translations
const translations = {
    en: {
        nav: {
            home: "Home",
            features: "Features",
            tutorials: "Tutorials",
            community: "Community",
            scenarios: "Use Cases",
            howToPlan: "How to Plan"
        },
        hero: {
            title: "Finance Planner: The F.I.R.E Tool",
            subtitle: "Your Essential Companion for Financial Independence",
            description: "Designed for the F.I.R.E. (Financial Independence, Retire Early) movement, Finance Planner helps you visualize, track, and achieve your financial goals. Build financial health, plan ahead with different scenarios, and see the long-term impact of your decisions—whether you're just starting out or planning for early retirement.",
            downloadIos: "📱 Download iOS App",
            downloadAndroid: "📱 Download Android App",
            exploreFeatures: "Explore Features"
        },
        mission: {
            title: "💡 Our Mission: Financial Planning for Everyone",
            freeAccess: "<strong>Free Financial Planning for All:</strong> We believe everyone deserves access to quality financial planning tools—without paying expensive advisor fees. Finance Planner puts professional-grade planning in your hands, completely free.",
            global: "<strong>Financial Health Worldwide:</strong> Available across the globe, our tool helps people everywhere build a healthier financial future, regardless of location or background.",
            privacy: "<strong>Your Data Stays Private:</strong> All your personal financial data and calculations remain 100% on your device. Nothing is stored on external servers. Your information is completely safe and never shared.",
            adPrivacy: "<strong>About Ads:</strong> The app uses ads (AdMob) to remain free for everyone. Our privacy notice covers only the anonymous usage data collected by the ad provider—your financial data is never included."
        },
        appStore: {
            title: "📱 Get Finance Planner on Your Mobile Device",
            description: "Take your financial planning on the go with our mobile apps, available now for iOS and Android!",
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
            copyright: "&copy; 2024 Finance Planner. Empowering your journey to Financial Independence."
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
                title: "🎥 How to Implement Wealth Tax / Pensioensparen",
                description: "Learn how to model tax-advantaged retirement accounts in Finance Planner. This tutorial demonstrates the approach using the US 401(k) system as an example. All comparable pension savings systems work with this same method, including the Dutch pensioensparen and similar tax-advantaged retirement accounts worldwide.",
                countriesTitle: "Countries with Tax-at-Payout Systems:",
                countriesList: "This approach applies to countries where taxes on retirement savings are withheld at the moment of payout, such as: USA (401k, IRA), Germany, UK, France, Canada, Australia, Japan, and many other countries."
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
                tip: "💡 <strong>Tip:</strong> The account balance represents your current financial starting point. All income, expenses, and savings calculations will be based on this foundation."
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
                step1: "<strong>Expenses & Loans:</strong> Start by planning the costs you need to cover",
                step2: "<strong>Incomes:</strong> Set up current and future income sources, taking into account your expenses",
                step3: "<strong>Savings:</strong> Plan your savings to see if you can cover your costs and potentially retire early"
            },
            step3: {
                title: "Step 3: Planning Expenses",
                intro: "Expenses are a crucial part of your financial plan. When you plan your expenses, you can see what you need to do to achieve your financial goals. Here's how to configure an expense:",
                caption: "The Expense screen showing all configuration options with numbered annotations",
                amount: {
                    title: "1️⃣ Net Amount",
                    description: "Enter the net expense amount. This subject is used for expenses whether they occur regularly or happen just once—like monthly household costs, annual holiday spending, etc. Use the Loan subject if you want to calculate costs for a loan like a mortgage, which can also calculate return interest (Dutch: hypotheekrenteaftrek)."
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
                    description: "This feature helps you easily link dates to retirement. You can set the date to the fixed retirement date or to an adjustable retirement date using a slider when analyzing your calculation results—for example, to check when you can stop working given all the subjects you have entered.",
                    early: "Early retirement date",
                    standard: "Standard retirement date",
                    none: "No link (manual date)"
                },
                inflation: {
                    title: "5️⃣ Inflation Adjustment",
                    description: "Determine if the expense should be indexed for inflation. Most costs are indexed over time, so enable this for most cases. This is important when you want to analyze your calculation with the effect of inflation to get a realistic view of future costs."
                }
            },
            step4: {
                title: "Step 4: Planning Incomes",
                intro: "After planning your expenses, set up your income sources. Income planning follows similar principles to expense planning:",
                sources: {
                    title: "Multiple Income Sources",
                    description: "Add various income streams such as salary, rental income, dividends, or pension. Each source can have its own schedule and settings."
                },
                timing: {
                    title: "Timing & Scheduling",
                    description: "Set when each income starts and ends. This is especially useful for modeling career changes, retirement transitions, or temporary income sources."
                }
            },
            step5: {
                title: "Step 5: Planning Savings",
                intro: "Savings planning helps you understand if you can cover your costs and even retire early. Set up your savings strategy:",
                deposits: {
                    title: "Deposits",
                    description: "Plan regular or one-time deposits to your savings accounts. Configure tax benefits and inflation adjustments."
                },
                withdrawals: {
                    title: "Withdrawals",
                    description: "Plan how and when you'll withdraw from savings, especially important for retirement planning."
                }
            },
            step6: {
                title: "Step 6: Planning Loans",
                intro: "If you have loans like a mortgage, you can model them in the Loans section:",
                mortgage: {
                    title: "Mortgage Planning",
                    description: "Model your mortgage payments including principal, interest, and duration. For Dutch users, you can also calculate the return interest (hypotheekrenteaftrek)."
                },
                other: {
                    title: "Other Loans",
                    description: "Track car loans, student loans, or any other debt obligations with their payment schedules."
                }
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
            features: "Functies",
            tutorials: "Tutorials",
            community: "Gemeenschap",
            scenarios: "Gebruiksvoorbeelden",
            howToPlan: "Hoe te Plannen"
        },
        hero: {
            title: "Finance Planner: De F.I.R.E Tool",
            subtitle: "Jouw Essentiële Partner voor Financiële Onafhankelijkheid",
            description: "Ontworpen voor de F.I.R.E. (Financial Independence, Retire Early) beweging, helpt Finance Planner je om je financiële doelen te visualiseren, volgen en bereiken. Bouw financiële gezondheid, plan vooruit met verschillende scenario's en zie de langetermijnimpact van je beslissingen—of je nu net begint of plant voor vervroegd pensioen.",
            downloadIos: "📱 Download iOS App",
            downloadAndroid: "📱 Download Android App",
            exploreFeatures: "Ontdek Functies"
        },
        mission: {
            title: "💡 Onze Missie: Financiële Planning voor Iedereen",
            freeAccess: "<strong>Gratis Financiële Planning voor Iedereen:</strong> Wij geloven dat iedereen toegang moet hebben tot kwalitatieve financiële planningstools—zonder veel geld te hoeven uitgeven aan een dure adviseur. Finance Planner geeft je professionele planning tools in handen, volledig gratis.",
            global: "<strong>Financiële Gezondheid Wereldwijd:</strong> Beschikbaar over de hele planeet, helpt onze tool mensen overal een gezondere financiële toekomst op te bouwen, ongeacht locatie of achtergrond.",
            privacy: "<strong>Jouw Gegevens Blijven Privé:</strong> Al je persoonlijke financiële gegevens en berekeningen blijven 100% op jouw apparaat. Niets wordt opgeslagen op externe servers. Jouw informatie is volledig veilig en wordt nooit gedeeld.",
            adPrivacy: "<strong>Over Advertenties:</strong> De app gebruikt advertenties (AdMob) om gratis te blijven voor iedereen. Onze privacyverklaring heeft alleen betrekking op de anonieme gebruiksgegevens die door de advertentieprovider worden verzameld—jouw financiële gegevens zijn hier nooit bij inbegrepen."
        },
        appStore: {
            title: "📱 Download Finance Planner op je Mobiele Apparaat",
            description: "Neem je financiële planning overal mee naartoe met onze mobiele apps, nu beschikbaar voor iOS en Android!",
            downloadAppStore: "Download in de App Store",
            downloadGooglePlay: "Download op Google Play"
        },
        features: {
            title: "Belangrijkste Functies",
            multiPerson: {
                title: "Multi-Persoon & Multi-Inkomen Ondersteuning",
                description: "Beheer de financiën voor je hele huishouden, inclusief meerdere personen, inkomstenbronnen en uitgavencategorieën."
            },
            flexibleSavings: {
                title: "Flexibele Spaarrekeningen",
                description: "Organiseer en volg meerdere spaarrekeningen voor verschillende doelen."
            },
            longTermProjections: {
                title: "Langetermijnprojecties",
                description: "Zie je vermogen groeien over decennia met gedetailleerde, jaar-op-jaar prognoses."
            },
            fireGoal: {
                title: "FIRE Doel Tracking",
                description: "Stel je FIRE nummer in en monitor je voortgang naar financiële onafhankelijkheid."
            },
            whatIf: {
                title: '"Wat Als" Scenario\'s',
                description: "Experimenteer met spaarpercentages, investeringsrendementen en opnamestrategieën om hun impact te zien."
            },
            inflation: {
                title: "Inflatie Aanpassing",
                description: "Alle berekeningen houden rekening met inflatie, wat je een realistisch beeld geeft van je toekomstige koopkracht."
            },
            advancedTools: {
                title: "Geavanceerde Planning Tools",
                yearly: "<strong>Jaarlijkse Overzichten:</strong> Krijg duidelijke, uitvoerbare samenvattingen van je netto vermogen, passief inkomen en verwachte pensioenuitgaven.",
                customizable: "<strong>Aanpasbare Invoer:</strong> Voer gemakkelijk je inkomen, uitgaven, investeringen, activa en passiva in.",
                visual: "<strong>Visuele Inzichten:</strong> Intuïtieve grafieken maken complexe financiële gegevens gemakkelijk te begrijpen.",
                earlyRetirement: "<strong>Vroegpensioen Planning:</strong> Navigeer door zowel de accumulatie- als decumulatiefasen van vroegpensioen.",
                userFriendly: "<strong>Gebruiksvriendelijke Interface:</strong> Schoon, intuïtief en toegankelijk voor iedereen."
            }
        },
        depositPlanning: {
            title: "📥 Stortingen Plannen",
            intro: "Plan je spaarstortingen met geavanceerde functies, waaronder:",
            scheduling: "<strong>Flexibele planning:</strong> Stel eenmalige of terugkerende stortingen in (maandelijks, jaarlijks, enz.)",
            timeframe: "<strong>Tijdsplanning:</strong> Definieer start- en einddata voor je stortingsschema's",
            inflation: "<strong>Inflatie-aanpassingen:</strong> Pas je stortingen automatisch aan voor inflatie in de loop van de tijd",
            taxBenefits: "<strong>Belastingvoordelen modellering:</strong> Houd rekening met cashback en belastingteruggaven op stortingen",
            taxAdvantagesTitle: "Fiscaal Voordelige Rekeningen",
            taxAdvantagesDesc: "Finance Planner helpt je om de belastingvoordelen van stortingen op pensioenrekeningen te modelleren:",
            accountTypes: "Modelleer fiscaal voordelige rekeningen zoals 401(k), IRA en andere pensioenrekeningen",
            taxRate: "Bereken belastingvoordelen op basis van je marginale belastingtarief (bijv. 22% of 24%)",
            refundImpact: "Zie hoe belastingteruggaven je daadwerkelijke spaarpercentage beïnvloeden en de echte kosten van sparen verlagen"
        },
        withdrawalPlanning: {
            title: "📤 Opnames Plannen",
            intro: "Plan je opnames met uitgebreide belastingoverwegingen:",
            scheduling: "<strong>Flexibele opnameschema's:</strong> Plan periodieke of eenmalige opnames",
            timeframe: "<strong>Tijdsplanning:</strong> Bepaal wanneer opnames beginnen en eindigen",
            inflation: "<strong>Inflatie-aanpassingen:</strong> Houd opnames in lijn met inflatie",
            taxImpact: "<strong>Belastingimpact modellering:</strong> Houd rekening met belastingen op opnames",
            retirementTaxTitle: "Pensioenopname Belastingen",
            retirementTaxDesc: "Begrijp de belastinggevolgen van je pensioenopnames:",
            scenarios: "Modelleer verschillende belastingscenario's voor pensioenopnames",
            rmds: "Plan voor verplichte minimale uitkeringen (RMDs)",
            afterTax: "Zie de echte impact na belasting van je opnames en plan dienovereenkomstig"
        },
        financialJourney: {
            title: "📊 Financieel Traject Overzicht",
            intro: "Krijg een compleet beeld van je financiële toekomst door inkomsten en uitgaven in de loop van de tijd te matchen:",
            incomeTracking: "<strong>Inkomsten tracking:</strong> Visualiseer alle inkomensbronnen in de loop van de tijd",
            expensePlanning: "<strong>Uitgaven planning:</strong> Zie hoe uitgaven (tekort/overschot) zich ontwikkelen",
            capitalProjection: "<strong>Kapitaalprojectie:</strong> Volg je totale besparingen en kapitaalgroei",
            multiPerson: "<strong>Multi-persoon planning:</strong> Modelleer financiën voor koppels of huishoudens",
            yearByYear: "<strong>Jaar-op-jaar uitsplitsing:</strong> Begrijp precies wat er elk jaar gebeurt"
        },
        tutorials: {
            title: "📚 Leer Finance Planner te Gebruiken",
            videoTitle: "Video Tutorials Beschikbaar",
            description: "Bekijk uitgebreide tutorials over hoe je je Financiële Onafhankelijkheidsplanning kunt maximaliseren met Finance Planner. Leer best practices, tips en geavanceerde strategieën.",
            visitChannel: "Bezoek Ons YouTube Kanaal",
            viewTutorials: "Bekijk Tutorials"
        },
        exampleFiles: {
            title: "📂 Voorbeeldbestanden & Scenario's",
            description: "Ontdek verschillende financiële planning scenario's met voorbeelden uit de echte wereld. Elk scenario demonstreert hoe Finance Planner te gebruiken voor specifieke financiële doelen.",
            viewScenarios: "Bekijk Alle Scenario's"
        },
        whyChoose: {
            title: "Waarom Kiezen voor Finance Planner?",
            clarity: {
                title: "Duidelijkheid voor FIRE",
                description: "Focus op de langetermijnvisie die cruciaal is voor financiële onafhankelijkheid."
            },
            empowering: {
                title: "Versterkende Beslissingen",
                description: "Maak vandaag slimme financiële keuzes voor een betere toekomst."
            },
            beyond: {
                title: "Verder dan Budgetteren",
                description: "Ga dieper dan basis budgetteren—zie de kracht van samengesteld rendement en langetermijnstrategie."
            },
            motivated: {
                title: "Blijf Gemotiveerd",
                description: "Visualiseer je vooruitgang en blijf geïnspireerd op je reis."
            }
        },
        whoIsItFor: {
            title: "Voor Wie Is Het?",
            individuals: "<strong>Individuen en stellen die F.I.R.E. nastreven.</strong> - Krijg de tools die je nodig hebt voor financiële onafhankelijkheid",
            planners: "<strong>Iedereen die hun langetermijn financiële toekomst plant</strong> - Bouw systematisch vermogen op",
            investors: "<strong>Investeerders die vermogensgroei en pensioengerichtheid projecteren</strong> - Modelleer verschillende scenario's",
            decisionMakers: "<strong>Degenen die de impact van hun financiële beslissingen willen begrijpen</strong> - Zie langetermijneffecten"
        },
        dataPrivacy: {
            title: "🔒 Jouw Data, Jouw Privacy",
            intro: "Je financiële informatie is zeer gevoelig. Finance Planner is ontworpen met privacy als kernprincipe:",
            localStorage: "<strong>100% Lokale Opslag:</strong> Al je gegevens en berekeningen blijven op je telefoon—niets wordt naar externe servers gestuurd",
            noCloud: "<strong>Geen Cloud Sync:</strong> Je financiële plannen zijn van jou alleen en blijven volledig privé",
            fullControl: "<strong>Volledige Controle:</strong> Jij bepaalt wat je met je gegevens doet—exporteer, back-up of verwijder ze op elk moment",
            adNotice: "Let op: De mobiele apps gebruiken advertenties om gratis te blijven. Advertentieproviders (AdMob) kunnen anonieme gebruiksgegevens verzamelen zoals beschreven in onze Privacyverklaring."
        },
        footer: {
            iosApp: "📱 iOS App",
            androidApp: "📱 Android App",
            community: "💬 Gemeenschapsdiscussies",
            tutorials: "🎥 Video Tutorials",
            privacy: "🔒 Privacyverklaring",
            authorsTitle: "Auteurs",
            copyright: "&copy; 2024 Finance Planner. Ondersteunt je reis naar Financiële Onafhankelijkheid."
        },
        scenarios: {
            title: "Financiële Planning Scenario's",
            subtitle: "Ontdek Verschillende Paden naar Financiële Onafhankelijkheid",
            description: "Finance Planner ondersteunt meerdere financiële planning scenario's. Elk scenario helpt je verschillende levenssituaties en financiële doelen te modelleren. Download de voorbeeldbestanden en open ze in de mobiele app om complete financiële plannen in actie te zien.",
            futurePlanning: {
                title: "🎯 Toekomstige Planning",
                description: "Plan je financiële toekomst op lange termijn met uitgebreide modellering van inkomsten, uitgaven en besparingen. Dit scenario is perfect voor families en individuen die systematisch vermogen willen opbouwen, meerdere inkomstenbronnen willen volgen en willen plannen voor grote levensgebeurtenissen zoals onderwijs voor kinderen, huizenaankopen of carrièreveranderingen.",
                idealFor: "Ideaal Voor:",
                use1: "Vermogen opbouwen in de loop van de tijd met meerdere inkomstenbronnen",
                use2: "Plannen voor grote uitgaven (onderwijs, woning, etc.)",
                use3: "Vooruitgang volgen naar FIRE doelen",
                use4: "Verschillende spaarpercentages en hun impact modelleren",
                downloadButton: "Download Toekomstige Planning Voorbeeld"
            },
            businessExit: {
                title: "💼 Bedrijf Verkopen en Rentenieren",
                description: "Modelleer de financiële impact van de verkoop van je bedrijf en de overgang naar pensioen. Dit scenario helpt je om de verkoopopbrengst, belastinggevolgen en hoe je je pensioeninkomen uit de verkoop structureert te plannen. Begrijp hoe verschillende verkoopprijzen en pensioenopnamestrategieën je financiële zekerheid op lange termijn beïnvloeden.",
                idealFor: "Ideaal Voor:",
                use1: "Bedrijfseigenaren die een exit-strategie plannen",
                use2: "Verschillende verkoopprijsscenario's modelleren",
                use3: "Investerings- en opnamestrategieën na verkoop plannen",
                use4: "Belastinggevolgen van bedrijfsverkoop begrijpen",
                comingSoon: "📌 Voorbeeldbestand komt binnenkort"
            },
            debtRepayment: {
                title: "💳 Planning om Schulden Af te Lossen",
                description: "Creëer een uitgebreid schuldafbetalingsplan terwijl je andere financiële doelen behoudt. Dit scenario helpt je verschillende schuldafbetalingsstrategieën te modelleren (lawine vs. sneeuwbal), de impact van extra betalingen te zien en te begrijpen hoe schuldaflossing in je algemene financiële plan past. Balanceer schuldaflossing met het opbouwen van besparingen en investeringen.",
                idealFor: "Ideaal Voor:",
                use1: "Gestructureerde schuldafbetalingsplannen creëren",
                use2: "Lawine versus sneeuwbalmethoden vergelijken",
                use3: "Schuldaflossing balanceren met spaardoelen",
                use4: "De impact van extra betalingen modelleren",
                comingSoon: "📌 Voorbeeldbestand komt binnenkort"
            },
            howToUse: {
                title: "Hoe Deze Scenario's te Gebruiken",
                step1: "<strong>Download het voorbeeldbestand</strong> voor het scenario dat bij jouw situatie past",
                step2: '<strong>Open het in de Finance Planner mobiele app</strong> (beschikbaar voor <a href="https://apps.apple.com/us/app/finance-planner/id6743322133" target="_blank">iOS</a> en <a href="https://play.google.com/store/apps/details?id=nl.crwsolutions.CalcApi.Mobile" target="_blank">Android</a>)',
                step3: "<strong>Verken het voorbeeld</strong> om te begrijpen hoe het scenario is gestructureerd",
                step4: "<strong>Pas aan met je eigen gegevens</strong> door inkomsten, uitgaven en besparingen te wijzigen",
                step5: "<strong>Bewaar en volg</strong> je gepersonaliseerde financiële plan"
            },
            needHelp: {
                title: "Hulp Nodig?",
                description: "Bekijk onze bronnen om meer te leren over het gebruik van Finance Planner:",
                tutorials: "🎥 Bekijk Video Tutorials",
                community: "💬 Deelnemen aan Gemeenschapsdiscussies"
            }
        },
        tutorialsPage: {
            title: "📚 Finance Planner Tutorials",
            subtitle: "Leer Hoe Je Jouw Financiële Planning Maximaliseert",
            description: "Bekijk uitgebreide video tutorials om het meeste uit Finance Planner te halen. Leer over geavanceerde strategieën, fiscaal voordelige rekeningen en best practices voor het bereiken van financiële onafhankelijkheid.",
            featuredVideo: {
                title: "🎥 Hoe Vermogensbelasting / Pensioensparen Te Implementeren",
                description: "Leer hoe je fiscaal voordelige pensioenrekeningen modelleert in Finance Planner. Deze tutorial demonstreert de aanpak aan de hand van het Amerikaanse 401(k) systeem als voorbeeld. Alle vergelijkbare pensioenspaarsystemen werken met dezelfde methode, inclusief het Nederlandse pensioensparen en vergelijkbare fiscaal voordelige pensioenrekeningen wereldwijd.",
                countriesTitle: "Landen met Belasting-bij-Uitbetaling Systemen:",
                countriesList: "Deze aanpak geldt voor landen waar belastingen op pensioenbesparingen worden ingehouden op het moment van uitbetaling, zoals: VS (401k, IRA), Duitsland, VK, Frankrijk, Canada, Australië, Japan en vele andere landen."
            },
            wealthTaxVideo: {
                title: "🎥 Nederlandse Vermogensbelasting Voorbeeld",
                description: "Zie hoe het Nederlandse vermogensbelastingsysteem werkt in Finance Planner. Deze tutorial demonstreert hoe je jaarlijkse vermogensbelasting modelleert op basis van je totale vermogen—een belastingsysteem dat in verschillende landen wereldwijd wordt gebruikt.",
                countriesTitle: "Landen met Jaarlijkse Vermogensbelasting Systemen:",
                countriesList: "Vergelijkbare jaarlijkse vermogensbelastingsystemen (belasting op totaal vermogen elk jaar) worden gebruikt in: Nederland, Noorwegen, Spanje, Zwitserland en Colombia."
            },
            moreVideos: {
                title: "📺 Meer Video Tutorials",
                channelTitle: "Bezoek Ons YouTube Kanaal",
                channelDescription: "Ontdek onze complete bibliotheek van Finance Planner tutorials. Leer best practices, tips en geavanceerde strategieën voor het bereiken van Financiële Onafhankelijkheid.",
                visitButton: "Bezoek YouTube Kanaal"
            },
            topics: {
                title: "Tutorial Onderwerpen",
                gettingStarted: {
                    title: "Aan de Slag",
                    description: "Leer de basis van Finance Planner en stel je eerste financiële plan op."
                },
                taxStrategies: {
                    title: "Fiscaal Voordelige Strategieën",
                    description: "Modelleer 401k, IRA en pensioenspaarrekeningen met belastingvoordelen."
                },
                fireGoals: {
                    title: "FIRE Doel Planning",
                    description: "Stel je Financiële Onafhankelijkheidsdoelen in en volg ze effectief."
                },
                scenarios: {
                    title: "Scenario Modellering",
                    description: "Test verschillende wat-als-scenario's om je financiële plan te optimaliseren."
                }
            },
            needHelp: {
                title: "Meer Hulp Nodig?",
                description: "Heb je vragen of wil je je financiële planningsstrategieën bespreken?",
                communityButton: "💬 Deelnemen aan Gemeenschapsdiscussies",
                scenariosButton: "📂 Bekijk Voorbeeldscenario's"
            }
        },
        howToPlan: {
            title: "📋 Hoe Maak Je een Planning",
            subtitle: "Stapsgewijze Handleiding voor het Maken van Je Financiële Plan",
            description: "Leer hoe je een uitgebreid financieel plan opzet in de Finance Planner app. Volg deze stappen om je berekening te maken, personen toe te voegen en je uitgaven, inkomsten, besparingen en leningen te plannen voor een compleet financieel overzicht.",
            step1: {
                title: "Stap 1: Maak een Berekening",
                intro: "De eerste stap bij het maken van je financiële plan is het opzetten van een nieuwe berekening. Dit vormt de basis van je planning.",
                caption: "Het Berekening dialoogvenster waar je de naam en het startsaldo invoert",
                name: {
                    title: "Planning Naam",
                    description: "Geef je planning een beschrijvende naam, zoals \"Gezinsbudget 2025\" of \"Pensioenplanning\". Dit helpt je later verschillende scenario's te identificeren."
                },
                balance: {
                    title: "Rekeningsaldo",
                    description: "Voer het startsaldo van je rekening in. Dit is het saldo van de rekening waarop alle onderdelen worden berekend—bijvoorbeeld de gezamenlijke bankrekening van een huishouden."
                },
                tip: "💡 <strong>Tip:</strong> Het rekeningsaldo vertegenwoordigt je huidige financiële startpunt. Alle inkomsten-, uitgaven- en spaarberekeningn worden gebaseerd op deze basis."
            },
            step2: {
                title: "Stap 2: Voeg Personen Toe",
                intro: "Na het aanmaken van je berekening, voeg je de personen toe die betrokken zijn bij je financiële plan. Dit is meestal jezelf, je partner of andere huishoudenleden.",
                caption: "Het Persoon dialoogvenster waar je naam en geboortedatum invoert, met de pensioendatum schuifregelaar zichtbaar",
                name: {
                    title: "Naam Persoon",
                    description: "Voer een naam in om elke persoon in je plan te identificeren, zoals \"Persoon # 1\" of gebruik echte namen voor duidelijkheid."
                },
                dob: {
                    title: "Geboortedatum",
                    description: "De geboortedatum wordt gebruikt om de pensioenleeftijd te bepalen, die je later kunt aanpassen. De app berekent automatisch leeftijden en pensioendata."
                },
                retirement: {
                    title: "📅 Pensioendatum Planning",
                    description: "Zodra een persoon is toegevoegd, kun je hun vervroegde pensioendata zien en aanpassen. Gebruik de schuifregelaar om verschillende pensioenscenario's te verkennen en te zien hoe ze je financiële plan beïnvloeden."
                }
            },
            overview: {
                title: "Planning Categorieën",
                intro: "Na het toevoegen van personen kun je beginnen met het plannen van verschillende financiële categorieën. De aanbevolen volgorde is:",
                step1: "<strong>Uitgaven & Leningen:</strong> Begin met het plannen van de kosten die je moet dekken",
                step2: "<strong>Inkomsten:</strong> Stel huidige en toekomstige inkomensbronnen in, rekening houdend met je uitgaven",
                step3: "<strong>Besparingen:</strong> Plan je besparingen om te zien of je je kosten kunt dekken en mogelijk eerder met pensioen kunt"
            },
            step3: {
                title: "Stap 3: Uitgaven Plannen",
                intro: "Uitgaven zijn een cruciaal onderdeel van je financiële plan. Wanneer je je uitgaven plant, kun je zien wat je moet doen om je financiële doelen te bereiken. Zo configureer je een uitgave:",
                caption: "Het Uitgaven scherm met alle configuratie-opties en genummerde annotaties",
                amount: {
                    title: "1️⃣ Netto Bedrag",
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
                    title: "4️⃣ Datum Koppeling",
                    description: "Deze functie helpt je gemakkelijk datums te koppelen aan pensioen. Je kunt de datum instellen op de vaste pensioendatum of op een aanpasbare pensioendatum met behulp van een schuifregelaar bij het analyseren van je berekeningsresultaten—bijvoorbeeld om te controleren wanneer je kunt stoppen met werken gezien alle onderdelen die je hebt ingevoerd.",
                    early: "Vervroegde pensioendatum",
                    standard: "Standaard pensioendatum",
                    none: "Geen koppeling (handmatige datum)"
                },
                inflation: {
                    title: "5️⃣ Inflatie Aanpassing",
                    description: "Bepaal of de uitgave moet worden geïndexeerd voor inflatie. De meeste kosten worden in de loop van de tijd geïndexeerd, dus schakel dit in voor de meeste gevallen. Dit is belangrijk wanneer je je berekening wilt analyseren met het effect van inflatie om een realistisch beeld te krijgen van toekomstige kosten."
                }
            },
            step4: {
                title: "Stap 4: Inkomsten Plannen",
                intro: "Na het plannen van je uitgaven, stel je je inkomensbronnen in. Inkomensplanning volgt vergelijkbare principes als uitgavenplanning:",
                sources: {
                    title: "Meerdere Inkomensbronnen",
                    description: "Voeg verschillende inkomstenstromen toe zoals salaris, huurinkomsten, dividenden of pensioen. Elke bron kan zijn eigen schema en instellingen hebben."
                },
                timing: {
                    title: "Timing & Planning",
                    description: "Stel in wanneer elk inkomen begint en eindigt. Dit is vooral nuttig voor het modelleren van carrièreveranderingen, pensioenovergang of tijdelijke inkomensbronnen."
                }
            },
            step5: {
                title: "Stap 5: Besparingen Plannen",
                intro: "Besparingsplanning helpt je te begrijpen of je je kosten kunt dekken en zelfs eerder met pensioen kunt. Stel je spaarstrategie in:",
                deposits: {
                    title: "Stortingen",
                    description: "Plan regelmatige of eenmalige stortingen op je spaarrekeningen. Configureer belastingvoordelen en inflatie-aanpassingen."
                },
                withdrawals: {
                    title: "Opnames",
                    description: "Plan hoe en wanneer je opneemt uit besparingen, vooral belangrijk voor pensioenplanning."
                }
            },
            step6: {
                title: "Stap 6: Leningen Plannen",
                intro: "Als je leningen hebt zoals een hypotheek, kun je deze modelleren in de Leningen sectie:",
                mortgage: {
                    title: "Hypotheek Planning",
                    description: "Modelleer je hypotheekbetalingen inclusief hoofdsom, rente en looptijd. Voor Nederlandse gebruikers kun je ook de hypotheekrenteaftrek berekenen."
                },
                other: {
                    title: "Andere Leningen",
                    description: "Volg autoleningen, studieleningen of andere schuldverplichtingen met hun betalingsschema's."
                }
            },
            calculate: {
                title: "📊 Bereken en Analyseer",
                intro: "Zodra je al je financiële gegevens hebt ingevoerd, gebruik je de Bereken-knop om je analyse uit te voeren:",
                visual: "Bekijk visuele projecties van je financiële toekomst",
                retirement: "Pas pensioenleeftijd-schuifregelaars aan om verschillende scenario's te zien",
                whatif: "Test \"wat als\" scenario's door invoer aan te passen",
                export: "Exporteer of bewaar je financiële plan voor toekomstige referentie"
            },
            getStarted: {
                title: "Begin Nu",
                description: "Download Finance Planner en begin vandaag met het maken van je financiële plan:"
            },
            needHelp: {
                title: "Meer Hulp Nodig?",
                description: "Ontdek onze aanvullende bronnen:",
                tutorials: "🎥 Bekijk Video Tutorials",
                scenarios: "📂 Bekijk Voorbeeldscenario's",
                community: "💬 Deelnemen aan Gemeenschapsdiscussies"
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateToggleButton();
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'nl' : 'en');
        });
    }
});

// Translations
const translations = {
    en: {
        nav: {
            home: "Home",
            features: "Features",
            tutorials: "Tutorials",
            community: "Community",
            scenarios: "Use Cases"
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
        }
    },
    nl: {
        nav: {
            home: "Home",
            features: "Functies",
            tutorials: "Tutorials",
            community: "Gemeenschap",
            scenarios: "Gebruiksvoorbeelden"
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

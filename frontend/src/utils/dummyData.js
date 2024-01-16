const dummyData = [
    {
        "projectName": "SolarProject1",
        "company": "Sunshine Energy Solutions",
        "minInv": 250,
        "source": "solar",
        "greenPillData": "$1.0 profit for every unit",
        "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel augue vel nunc dignissim imperdiet.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "400 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "88%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "10%" }
        ]
    },
    {
        "projectName": "SolarProject2",
        "company": "EcoSun Innovations",
        "minInv": 180,
        "source": "solar",
        "greenPillData": "$1.2 profit for every unit",
        "projectDescription": "Sustainable solar energy project providing electricity to local schools and hospitals.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "300 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "92%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "15%" }
        ]
    },
    {
        "projectName": "SolarProject3",
        "company": "GreenPower Solutions",
        "minInv": 200,
        "source": "solar",
        "greenPillData": "$0.9 profit for every unit",
        "projectDescription": "Community-based solar project fostering renewable energy adoption in the region.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "250 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "85%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "8%" }
        ]
    },
    {
        "projectName": "SolarProject4",
        "company": "Sunbeam Technologies",
        "minInv": 300,
        "source": "solar",
        "greenPillData": "$1.5 profit for every unit",
        "projectDescription": "Cutting-edge solar farm using the latest technology to maximize energy output.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "500 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "95%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "18%" }
        ]
    },
    {
        "projectName": "SolarProject5",
        "company": "SunPower Innovations",
        "minInv": 220,
        "source": "solar",
        "greenPillData": "$1.3 profit for every unit",
        "projectDescription": "Solar initiative aimed at powering remote areas with clean and sustainable energy.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "350 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "90%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "12%" }
        ]
    },
    {
        "projectName": "SolarProject6",
        "company": "Solaris Energy Solutions",
        "minInv": 270,
        "source": "solar",
        "greenPillData": "$1.1 profit for every unit",
        "projectDescription": "Innovative solar project contributing to the reduction of carbon footprint in the area.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "450 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "89%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "14%" }
        ]
    },
    {
        "projectName": "SolarProject7",
        "company": "GreenRay Innovations",
        "minInv": 240,
        "source": "solar",
        "greenPillData": "$1.4 profit for every unit",
        "projectDescription": "Solar energy initiative focused on sustainable development and environmental conservation.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "380 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "93%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "16%" }
        ]
    },
    {
        "projectName": "SolarProject8",
        "company": "SunHarbor Technologies",
        "minInv": 190,
        "source": "solar",
        "greenPillData": "$1.2 profit for every unit",
        "projectDescription": "Solar power project designed to meet the growing energy demands of the local community.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "320 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "87%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "11%" }
        ]
    },
    {
        "projectName": "SolarProject9",
        "company": "EcoSolar Solutions",
        "minInv": 260,
        "source": "solar",
        "greenPillData": "$1.1 profit for every unit",
        "projectDescription": "Solar farm dedicated to promoting sustainable energy practices and reducing reliance on",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "320 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "87%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "11%" }
        ]
    },
    // ------Wind----
    {
        "projectName": "WindProject1",
        "company": "WindGen Innovations",
        "minInv": 300,
        "source": "wind",
        "greenPillData": "$1.0 profit for every unit",
        "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel augue vel nunc dignissim imperdiet.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "250 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "85%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "8%" }
        ]
    },
    {
        "projectName": "WindProject2",
        "company": "EcoWind Solutions",
        "minInv": 280,
        "source": "wind",
        "greenPillData": "$1.2 profit for every unit",
        "projectDescription": "Wind energy project contributing to the reduction of carbon emissions in the region.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "320 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "90%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "12%" }
        ]
    },
    {
        "projectName": "WindProject3",
        "company": "GreenWind Technologies",
        "minInv": 250,
        "source": "wind",
        "greenPillData": "$0.9 profit for every unit",
        "projectDescription": "Community-based wind energy project promoting sustainable and clean power.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "300 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "88%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "10%" }
        ]
    },
    {
        "projectName": "WindProject4",
        "company": "WindHarbor Innovations",
        "minInv": 320,
        "source": "wind",
        "greenPillData": "$1.5 profit for every unit",
        "projectDescription": "Cutting-edge wind farm utilizing advanced technology for optimal energy generation.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "400 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "92%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "18%" }
        ]
    },
    {
        "projectName": "WindProject5",
        "company": "WindPower Innovations",
        "minInv": 270,
        "source": "wind",
        "greenPillData": "$1.3 profit for every unit",
        "projectDescription": "Wind energy initiative aimed at providing sustainable power to remote areas.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "350 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "89%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "14%" }
        ]
    },
    {
        "projectName": "WindProject6",
        "company": "EcoBreeze Energy Solutions",
        "minInv": 290,
        "source": "wind",
        "greenPillData": "$1.1 profit for every unit",
        "projectDescription": "Innovative wind project contributing to sustainable energy practices in the area.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "380 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "93%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "16%" }
        ]
    },
    {
        "projectName": "WindProject7",
        "company": "GreenWind Technologies",
        "minInv": 260,
        "source": "wind",
        "greenPillData": "$1.4 profit for every unit",
        "projectDescription": "Wind power initiative focused on sustainable development and environmental conservation.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "350 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "91%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "15%" }
        ]
    },
    {
        "projectName": "WindProject8",
        "company": "WindHarmony Technologies",
        "minInv": 310,
        "source": "wind",
        "greenPillData": "$1.2 profit for every unit",
        "projectDescription": "Wind power project designed to meet the growing energy demands of the local community.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "420 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "87%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "11%" }
        ]
    },
    {
        "projectName": "WindProject9",
        "company": "EcoWind Innovations",
        "minInv": 280,
        "source": "wind",
        "greenPillData": "$1.1 profit for every unit",
        "projectDescription": "Wind farm dedicated to promoting sustainable energy practices and reducing reliance on traditional power sources.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "420 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "87%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "11%" }
        ]
    },
    // ------Hydro----
    {
        "projectName": "HydroProject1",
        "company": "AquaPower Solutions",
        "minInv": 350,
        "source": "hydro",
        "greenPillData": "$1.2 profit for every unit",
        "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel augue vel nunc dignissim imperdiet.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "450 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "90%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "15%" }
        ]
    },
    {
        "projectName": "HydroProject2",
        "company": "EcoHydro Innovations",
        "minInv": 300,
        "source": "hydro",
        "greenPillData": "$1.5 profit for every unit",
        "projectDescription": "Hydroelectric project harnessing the power of flowing water to generate clean and sustainable energy.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "400 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "95%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "20%" }
        ]
    },
    {
        "projectName": "HydroProject3",
        "company": "GreenStream Technologies",
        "minInv": 380,
        "source": "hydro",
        "greenPillData": "$1.0 profit for every unit",
        "projectDescription": "Hydropower initiative aimed at providing clean energy to local communities and supporting environmental sustainability.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "500 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "88%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "12%" }
        ]
    },
    {
        "projectName": "HydroProject4",
        "company": "HydroHarmony Solutions",
        "minInv": 400,
        "source": "hydro",
        "greenPillData": "$1.3 profit for every unit",
        "projectDescription": "Innovative hydroelectric project contributing to sustainable energy practices and environmental conservation.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "550 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "92%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "18%" }
        ]
    },
    {
        "projectName": "HydroProject5",
        "company": "AquaPower Innovations",
        "minInv": 350,
        "source": "hydro",
        "greenPillData": "$1.1 profit for every unit",
        "projectDescription": "Hydro energy project designed to meet the growing energy demands of the local community.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "480 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "89%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "14%" }
        ]
    },
    {
        "projectName": "HydroProject6",
        "company": "GreenWave Energy Solutions",
        "minInv": 330,
        "source": "hydro",
        "greenPillData": "$1.4 profit for every unit",
        "projectDescription": "Hydroelectric power project contributing to the reduction of carbon footprint in the area.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "420 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "93%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "16%" }
        ]
    },
    {
        "projectName": "HydroProject7",
        "company": "WaterPower Innovations",
        "minInv": 360,
        "source": "hydro",
        "greenPillData": "$1.2 profit for every unit",
        "projectDescription": "Hydro power initiative focused on sustainable development and environmental conservation.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "500 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "91%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "15%" }
        ]
    },
    {
        "projectName": "HydroProject8",
        "company": "HydroHarbor Technologies",
        "minInv": 320,
        "source": "hydro",
        "greenPillData": "$1.3 profit for every unit",
        "projectDescription": "Hydro power project aimed at providing clean and sustainable energy solutions to the community.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "450 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "87%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "11%" }
        ]
    },
    {
        "projectName": "HydroProject9",
        "company": "EcoFlow Hydro Solutions",
        "minInv": 370,
        "source": "hydro",
        "greenPillData": "$1.3 profit for every unit",
        "projectDescription": "Hydro power project aimed at providing clean and sustainable energy solutions to the community.",
        "overviewData": [
            { "icon": "<MdSunny color='white' size={28}/>", "title": "CAPACITY", "quantity": "450 KW" },
            { "icon": "<BsGraphUp color='white' size={28}/>", "title": "EFFICIENCY", "quantity": "87%" },
            { "icon": "<FaPercentage color='white' size={28}/>", "title": "REVENUE SHARE", "quantity": "11%" }
        ]
    }
]
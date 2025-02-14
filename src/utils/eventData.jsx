// utils/eventData.js

import { Images } from "lucide-react";

export const departments = [
  { id: "cse-association", name: "CSE Association" },
  { id: "ece-association", name: "ECE Association" },
  { id: "mechanical-association", name: "Mechanical Association" },
  { id: "civil-association", name: "Civil Association" },
  { id: "it-association", name: "IT Association" },
  { id: "ai&ds-association", name: "AI&DS Association" },
  { id: "eee-association", name: "EEE Association" },{

  }
];

export const tags = {
  "CSE Association": [
    "CSI",
    "IEEE",
    "IT CLUB",
    "LINUX CLUB",
    "Coding",
    "Reverse Coding",
    "Hackathon",
    "UI/UX",
    "Prompt Engineering",
  ],
  "IT Association": ["Web Development", "App Development", "Tech Quiz", "Cyber Security"],
  "ECE Association": ["Circuit Debugging", "Embedded Systems", "IoT Challenge", "Robo Race"],
  "EEE Association": ["Power Quiz", "EV Design", "Automation Challenge", "Green Energy Hack"],
  "Mechanical Association": ["CAD Modeling", "RC Car Race", "Aero Modelling", "Mech Trivia"],
  "Civil Association": [
    "Bridge Design",
    "Smart City Plan",
    "Surveying Challenge",
    "Blueprint Analysis",
  ],
  "AI&DS Association": [
    "AI Coding",
    "Data Science Challenge",
    "Deep Learning Workshop",
    "ML Hackathon",
  ],
  "non-tech": [
    "Photography",
    "Treasure Hunt",
    "Debate",
    "Gaming",
    "IPL Auction",
  ],
  "workshops": [
    "AI/ML Bootcamp",
    "Cyber Security Workshop",
    "Robotics Hands-on",
    "Design Thinking",
  ],
};

export const oldtags = [
  "CSE",
  "IT",
  "ECE",
  "EEE",
  "MECH",
  "AI&DS",
  "Civil",
  "CODING",
  "HACKATHONS",
  "non-tech",
  "TECHNICAL",
  "UI/UX",
  "PROMPT",
  "QUIZ",
  "WEB",
];

export const events = [

  {
    "name": "AR VR Workshop",
    "title": "AR VR Workshop",
    "subtitle": "Innovate, Ideate, Create – Unleash Your Ideas!",
    "time": "10:00 AM - 5:00 PM",
    "date": "20/01/2025",
    "organizer": "CSI/IEEE",
    "category": "workshops",
    "facultyCoordinator": "TBD",
    "studentCoordinator": "TBD",
    "studentContact": "7548836628",
    "description": "About workshop",

    "resourcePerson": {
      "name": "Dr. Aisha Patel",
      "image": "/images/person1.jpg",
      "designation": "AI Research Scientist",
      "organization": "OpenAI",
      "bio": "Dr. Aisha Patel is a leading AI researcher specializing in machine learning, deep learning, and natural language processing. With over a decade of experience, she has contributed to groundbreaking AI advancements and has been a keynote speaker at global conferences.",
      "expertise": ["Machine Learning", "Deep Learning", "Natural Language Processing", "AI Ethics"],
      "link": "www.google.com",
    },

    "video": "/images/river.mp4"
  },
  
    {
      "name": "Linux Workshop",
      "title":"Linux Workshop",
      "subtitle": "Linux Essentials and Git Fundamentals",
      "description": " Join us for an intensive session on Linux Essentials and Git Fundamentals. Gain a deep understanding of Linux system operations, file management, and user administration, while mastering Git for advanced version control, collaboration, and workflow optimization. Perfect for professionals and learners seeking a solid foundation in modern development tools.",
      "image": "/nectechfest2k25/images/",
      "poster": "/nectechfest2k25/images/",
      "category": "workshops",
      "tags": ["Linux OS", "Innovation", "Technology"],
      "date": "2025 - 03 - 14",
      "startingTime": "10:00 AM",
      "venue": "ICL lab",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "MISTRAL-LINUX CLUB",
      "facultyCoordinator": "DR.J.NASKATH,Ms.Mahalakshmi",
  "studentCoordinators":[ 
    {name:"Sri Gomathi R",contact:"9345366383"},
    {name:"Samantha S",contact:"7200897400"},
  ],
  resourcePerson:{
    "name":"Mr.Jaya Surya L",
    "designation":"Module Lead Mistarl Solutions",
  },
      "rules": [
        "Open to all steams",
      ],
      "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
    },
    //from here CSEA
    {
    "id": "Freeze the Frame_cseA"  ,
      "name": "Freeze the Frame",
      "subtitle": "One Click, Infinite Stories!",
      "description": "Freeze the Frame is an individual photography event where participants capture a powerful image based on their surroundings. Whether it’s a scenic nature shot, a college building, or a picture conveying a strong social message, the goal is to freeze a moment in time that tells a compelling story through a single photograph. Choose from one of the following themes:\n● Nature's Beauty\n● Architectural Wonders (college buildings)\n● Social Change (capturing a strong social message)",
      "image": "/nectechfest2k25/images/Freeze the Frame.jpg",
      "poster": "/nectechfest2k25/images/Freeze the Frame.jpg",
      "department": "CSE",
      "category": "non-tech",
      "tags": ["PHOTOGRAPHY", "non-tech", "CSE"],
      "date": "2025-03-14",
      "startingTime": "3:15 PM",
      "venue": "S6 HALL / CSE",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CSEA",
      "facultyCoordinator": "Ms. Janani Ratthna S G",
      "studentCoordinators": [
        {
          "name": "Sankar M",
          "contact": "9952859209"
        },
        {
          "name": "Pon Selvam S",
          "contact": "7339163149"
        }
      ],
      "rules": [
        "This is an individual event. Only one participant per entry.",
        "30 minutes to capture the photo based on the chosen theme.",
        "Only raw, unedited images are allowed—no post-processing.",
        "The photo should focus on creativity, composition, and storytelling."
      ]
    },
    {
      "id": "Cine Quiz_cseA",
      "name": "Cine Quiz",
      "subtitle": "A Blockbuster Battle of Movie Buffs!",
      "description": "Dive into the world of movies and test your cinematic knowledge at Cine Quiz! This exciting event is designed for movie enthusiasts who love everything about films—be it classics, blockbusters, or cult favorites. With questions spanning Hollywood and Bollywood, it’s the ultimate challenge for cinephiles. Packed with thrilling surprises and mind-boggling challenges.",
      "image": "/nectechfest2k25/images/Cine Quiz.jpg",
      "poster": "/nectechfest2k25/images/Cine Quiz.jpg",
      "department": "CSE",
      "category": "non-tech",
      "tags": ["CINE", "non-tech", "CSE"],
      "date": "2025-03-14",
      "startingTime": "03:15 PM",
      "venue": "SEMINAR HALL / CSE",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CSEA",
      "facultyCoordinator": "Ms. Pappathi Jancy Rani M",
      "studentCoordinators": [
        {
          "name": "Sankareswari M",
          "contact": "8056831984"
        },
        {
          "name": "Karan Mohan M",
          "contact": "8248644914"
        }
      ],
      "rules": [
        "2 members per team.",
        "Rules and round details are discussed on-spot."
      ]
    },
    {
      "id": "Meme Forge_cseA",
      "name": "Meme Forge",
      "subtitle": "The Ultimate Meme Battle!",
      "description": "Welcome to Meme Forge, the most hilarious, creative, and entertaining event of the symposium! Gear up to become the Meme Lords, where wit meets creativity in an epic battle of memes.",
      "image": "/nectechfest2k25/images/Meme Forge.jpg",
      "poster": "/nectechfest2k25/images/Meme Forge.jpg",
      "department": "CSE",
      "category": "non-tech",
      "tags": ["MEME", "non-tech", "CSE"],
      "date": "2025-03-14",
      "startingTime": "03:15 PM",
      "venue": "APJ LAB, CVR LAB / CSE",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CSEA",
      "facultyCoordinator": "TBA",
      "studentCoordinators": [
        {
          "name": "Sounder Raj M",
          "contact": "7539926522"
        },
        {
          "name": "Koushika Ram G",
          "contact": "9345504348"
        }
      ],
      "rules": [
        "Teams must consist of 2 members.",
        "Memes must be original and use Tamil, English, or Tanglish (Tamil + English) captions.",
        "Round 1: Meme Mastermind - Identify the captions for iconic Tamil meme templates. Buzz in to answer and score based on speed and humor.",
        "Round 2: Red Pill or Blue Pill (Roast vs. Boast) - Tackle a quirky topic (e.g., Cinema Logic, AI Memes). Create a meme roasting or glorifying the topic within 20 minutes.",
        "Round 3: Memeception – The Chain Story - Build a funny, seamless meme story with a surprising twist. Teams have 30 minutes to create the meme chain and present it as a narrated slideshow.",
        "Winners will be crowned as 'MEME-LORD' with a quirky keepsake. A dedicated booth with iconic memes will be set up for capturing fun moments. Audience support through stickers and cheers.",
        "Content must be appropriate and respectful.",
        "The judge's decision will be final and binding."
      ]
    },
    {
      "id": "Best Manager_cseA",
      "name": "Best Manager",
      "subtitle": "Think and Speak Your Way to Victory!",
      "description": "Sharpen your decision-making, negotiation, and adaptability skills through puzzles, auctions, and impromptu speaking. Think fast, strategize wisely, and showcase your management prowess!",
      "image": "/nectechfest2k25/images/Best Manager.jpg",
      "poster": "/nectechfest2k25/images/Best Manager.jpg",
      "department": "CSE",
      "category": "non-tech",
      "tags": ["MANAGEMENT", "non-tech", "CSE"],
      "date": "2025-03-15",
      "startingTime": "01:15 PM",
      "venue": "F14 HALL / CSE",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CSEA",
      "facultyCoordinator": "TBA",
      "studentCoordinators": [
        {
          "name": "Akshay Sudhan T",
          "contact": "7907579348"
        },
        {
          "name": "Deepika A",
          "contact": "7598657374"
        }
      ],
      "rules": [
        "Each team consists of 2 members. In Rounds 1 and 2, the duo plays as a team. In Round 3, participants compete individually.",
        "Round 1: Picture-Based Aptitude Quizzes - Test your logical thinking and quick decision-making skills.",
        "Round 2: The Auction - Assess your strategic decision-making and resource management skills by allocating points to acquire items within a mystery category.",
        "Round 3: Impromptu Speaking with Multiple Topic Changes - Evaluate your ability to think on your feet, maintain composure, and adapt quickly to changing topics while delivering a coherent speech.",
        "Judges will evaluate based on performance, creativity, and adherence to the rules."
      ]
    },
    {
      "id": "On Spot Sketch_cseA",
      "name": "On Spot Sketch",
      "subtitle": "Showcase Your Talent – Create, Perform, and Conquer!",
      "description": "On-Spot Talent Showcase is an exciting individual event where participants get the chance to exhibit their unique skills and creativity in various forms of art. Whether it’s sketching, singing, dancing, or any other expressive activity, the stage is set for you to shine and captivate the audience with your talent.",
      "image": "/nectechfest2k25/images/On Spot Sketch.jpg",
      "poster": "/nectechfest2k25/images/On Spot Sketch.jpg",
      "department": "CSE",
      "category": "non-tech",
      "tags": ["ART", "non-tech", "CSE"],
      "date": "2025-03-15",
      "startingTime": "03:15 PM",
      "venue": "S6 HALL / CSE",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CSEA",
      "facultyCoordinator": "Ms. Mahalakshmi M",
      "studentCoordinators": [
        {
          "name": "Ashwin Nithish Bala P",
          "contact": "6382317615"
        },
        {
          "name": "Diviya Sri S",
          "contact": "9080743911"
        }
      ],
      "rules": [
        "Only individual participants allowed—showcase your skills solo!",
        "Activity Options: \n- **Sketching**: Display artistic skills by creating a live sketch on paper. \n- **Singing**: Perform a song of your choice (acapella or with background music). \n- **Dancing**: Present a solo dance performance. \n- **Other Talents**: Display any unique skill, such as poetry, mimicry, storytelling, or playing a musical instrument.",
        "Time Limit: \n- Maximum of 3-5 minutes for performing arts (e.g., singing, dancing, or other skills). \n- Sketching participants will have **30 minutes** to complete their artwork.",
        "For performing arts, participants must bring any necessary props or instruments they require. The performance or artwork should be original and appropriate for all audiences.",
        "Judging Criteria: \n- Creativity and originality \n- Skill and execution \n- Presentation and overall impact \nCome prepared to impress, inspire, and let your talent shine in the On-Spot Sketch event!"
      ]
    },
    //mechanical
    {
    id: "PAPER PRESENTATION_MECH",
    name: 'PAPER PRESENTATION',
    subtitle: 'Present, Persuade, Inspire',
    description: ' This event provides a platform for budding engineers and researchers to showcase their innovative ideas, research findings, and case studies related to mechanical engineering and its allied fields. Participants will present their papers to a panel of experts and compete for the title of the best research presenter.',
    image: '/nectechfest2k25/images/PAPER PRESENTATION_MECH.png',
    poster: '/nectechfest2k25/images/PAPER PRESENTATION_MECH.png',
    department:'Mechanical Association',
    category: 'Technical',
    tags: ['Presentation', 'Mechanical', 'Technical'],
    date: 'March 14, 2025',
    venue: 'Seminar Hall - Mechanical Engineering Department',
    registrationLink: ['"will be filled up by dev"'],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: ' Mr. C. Veera Ajay AP/Mech ',
    studentCoordinator: [{name:'Thegesh',contact:'9360225110'}],
    rules: [
" Each team will be allotted 8-10 minutes for the presentation + 2-3 minutes for Q&A.",
" Presentations should be in PPT format (Max 12 slides).",
"Participants must bring their presentation on a USB drive and a backup copy.",
"Use of charts, graphs, and visuals is encouraged for better understanding.",
"Language of presentation: English only.",
"Strictly adhere to time limits; exceeding time may lead to deduction of points.",
    ]
},
{
    id: 'CAD MODELLING_MECH',
    name: 'CAD MODELLING',
    subtitle: 'Design. Innovate. Create',
    description: ' Unleash your design skills and creativity in this CAD modelling competition! Participants will be given a problem statement and must create a 3D model using CAD software within the stipulated time. The best designs will be judged based on accuracy, creativity, and feasibility.',
    image: '/nectechfest2k25/images/CAD MODELLING_MECH.png',
    poster: '/nectechfest2k25/images/CAD MODELLING_MECH.png',
    department:'Mechanical Association',
    category: 'Technical',
    tags: ['CAD', 'Mechanical', 'Technical'],
    date: 'March 14, 2025',
    venue: 'CAD Lab- Mechanical Engineering Department',
    registrationLink: ['"will be filled up by dev"'],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: 'Dr. A. Andrews AP(SG)/Mech',
    studentCoordinators:[{name: 'Nithin Ivan A',contact:'9150783160'}],
    rules: [
" Participants can use SolidWorks, AutoCAD, CATIA, Fusion 360, PTC Creo, or any other approved CAD software.",
"Computers will be provided at the venue, but participants can use their own laptops with licensed software (if permitted).",
"Participants must ensure their software is working properly before the event.",
"Use of external reference materials, internet, or assistance is strictly prohibited.",
"Any form of malpractice or plagiarism will result in immediate disqualification.",
"Participants must save and submit their files before the time limit.",
"Judges' decisions will be final and binding.",
"Participants must report 30 minutes prior to the event start time."
    ]
},
{
    id: "Mr.TALENT_MECH",
    name: 'Mr. TALENT',
    subtitle: 'Talent. Passion. Glory.',
    description: ' The event consists of three exciting rounds, designed to test technical knowledge, creativity, and overall personality.',
    image: '/nectechfest2k25/images/Mr.TALENT_MECH.png',
    poster: '/nectechfest2k25/images/Mr.TALENT_MECH.png',
    department:'Mechanical Association',
    category: 'Technical',
    tags: ['Talent', 'Mechanical', 'Technical'],
    date: 'March 14, 2025',
    venue: 'Seminar Hall - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: ' Mr. N. Muthu Saravanan AP/Mech',
    studentCoordinators: [{name:'Vasanth Sankar B',contact:'9791523100'}],
    rules: [
"Participants must be punctual and report 30 minutes before the event starts.",
"No use of mobile phones, external help, or internet during any round.",
"Any misconduct, cheating, or unethical behaviour will lead to disqualification.",
"Judges' decisions are final and binding.",
"Winners will be awarded certificates, prizes, and the prestigious 'Mr. Talent - Mechanical' title!",
    ]
},
{
    id: "AI ART & MEME CONTEST_MECH",
    name: 'AI ART & MEME CONTEST',
    subtitle: 'Talent. Passion. Glory.',
    description: ' The Technical Meme Contest is the perfect platform for mechanical engineers to express their wit through funny, relatable, and insightful memes on engineering concepts, industry trends, and student life!',
    image: '/nectechfest2k25/images/AI ART & MEME CONTEST_MECH.png ',
    poster: '/nectechfest2k25/images/AI ART & MEME CONTEST_MECH.png',
    department:'Mechanical Association',
    category: 'Technical',
    tags: ['Meme contest', 'Mechanical', 'Technical'],
    date: 'March 14, 2025',
    venue: 'Seminar Hall - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: ' Dr. K. Thoufiq Mohammed AP(SG) / Mech',
    studentCoordinators:[{name:'Balaji K',contact:'9361925522'}],
    rules: [
" No offensive, disrespectful, or politically sensitive content.",
"Memes must be original—directly copied memes from the internet will be disqualified.",
"Judges' decisions are final and binding.",
"Selected memes may be featured on official social media platforms with credits.",
"Winners will receive certificates and exciting prizes!",
    ]
},
{
    id: "MINIATURE ROLLER COASTER DESIGN CHALLENGE_MECH",
    name: 'MINIATURE ROLLER COASTER DESIGN CHALLENGE',
    subtitle: 'Design, Build, Thrill',
    description: 'Get ready for an exciting test of creativity, engineering skills, and teamwork in the Miniature Roller Coaster Design Challenge! Participants will design and build a working miniature roller coaster model using given materials, applying principles of physics and mechanical engineering.',
    image: '/nectechfest2k25/images/MINIATURE ROLLER COASTER DESIGN CHALLENGE_MECH.png',
    poster: '/nectechfest2k25/images/MINIATURE ROLLER COASTER DESIGN CHALLENGE_MECH.png',
    category: 'non-tech',
    tags: ['Design Challenge', 'Mechanical', 'non-tech'],
    date: 'March 14, 2025',
    venue: 'Smart Classroom - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: 'Mrs. M. Rajeshwari AP/Mech',
    studentCoordinators: {name:'Seeninvasan S',contact:'7904224539'},
    rules: [
" No external materials are allowed apart from those provided.",
"Teams must work within the given time frame.",
"Judges' decisions are final and binding.",
"Any form of cheating or rule violation will result in disqualification.",
"Prizes & certificates will be awarded to the best-performing teams!",
    ]
},
{
    id: "PHOTOGRAPHY CONTEST_MECH",
    name: 'PHOTOGRAPHY CONTEST',
    subtitle: 'Design, Build, Thrill',
    description: 'Get ready for an exciting test of creativity, engineering skills, and teamwork in the Miniature Roller Coaster Design Challenge! Participants will design and build a working miniature roller coaster model using given materials, applying principles of physics and mechanical engineering.',
    image: '/nectechfest2k25/images/PHOTOGRAPHY CONTEST_MECH.png',
    poster : '/nectechfest2k25/images/PHOTOGRAPHY CONTEST_MECH.png',
    category: 'non-tech',
    tags: ['Photography', 'Mechanical', 'non-tech'],
    date: 'March 14, 2025',
    venue: 'Smart Classroom - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: 'Mrs. M. Rajeshwari AP/Mech',
    studentCoordinators:[{name: 'Seeninvasan S',contact:'7904224539'}],
    rules: [
" No external materials are allowed apart from those provided.",
"Teams must work within the given time frame.",
"Judges' decisions are final and binding.",
"Any form of cheating or rule violation will result in disqualification.",
"Prizes & certificates will be awarded to the best-performing teams!",
    ]
},
{
    id: "TECHNO CHILL_MECH",
    name: 'TECHNO CHILL',
    subtitle: 'Heat Up Your Knowledge!',
    description: 'Techno Chill is an engaging thermal engineering quiz competition designed to test participants on thermodynamics, heat transfer, fluid mechanics, HVAC systems, IC engines, and refrigeration & air conditioning. Compete in a battle of wits and showcase your expertise in the world of thermal sciences!',
    image:  '/nectechfest2k25/images/TECHNO CHILL_MECH.png',
    poster:  '/nectechfest2k25/images/TECHNO CHILL_MECH.png',
    department:'Mechanical Association',
    category: 'Technical',
    tags: ['Thermal', 'Mechanical', 'Quiz'],
    date: 'March 14, 2025',
    venue: 'Smart Classroom - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'ISHRAE',
    facultyCoordinator: 'Mr. N. Muthu Saravanan AP/Mech',
    studentCoordinators: [{name:'Sathya Seelan G',contact:'6382820726'}],
    rules: [
" Team Composition: 2-3 members per team.",
"No external help (books, internet, mobile devices) allowed.",
"Each round has elimination criteria.",
"Judging Criteria: Based on accuracy, speed, and logical reasoning.",
"Judges' decision is final.",      
       ]
},{
    id:"MECH CONNECTION_MECH",
    name: 'MECH CONNECTION',
    subtitle: 'Link. Think. Solve!',
    description: 'MECH CONNECTION is an exciting event where participants must identify, connect, and solve mechanical engineering-related puzzles and challenges within a given time!',
    image:  '/nectechfest2k25/images/MECH_CONNECTION_MECH.png',
    poster: '/nectechfest2k25/images/MECH_CONNECTION_MECH.png',
    department:'Mechanical Association',
    category: 'Technical',
    tags: ['Connection', 'Mechanical', 'Quiz'],
    date: 'March 15, 2025',
    venue: 'Smart Classroom - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: 'Mr. B. Prince Abraham AP/Mech',
    studentCoordinators:[{name: 'Johanan S A',contact:'7418308109'}],
    rules: [
" Team Composition: 2-3 members per team.",
"No external help (books, internet, mobile devices) allowed.",
"Each round has elimination criteria.",
"Judging Criteria: Based on accuracy, speed, and logical reasoning.",
"Judges' decision is final.",      
       ]
},
{
    id: "Mr. ASSEMBLER_MECH",
    name: 'Mr. fASSEMBLER',
    subtitle: 'Assemble. Align. Achieve',
    description: 'Mr. Assembler is a hands-on challenge designed to test your mechanical aptitude, problem-solving skills, and technical knowledge in assembling machine parts!',
    image: '/nectechfest2k25/images/Mr.ASSEMBLER_MECH.png',
    poster: '/nectechfest2k25/images/Mr.ASSEMBLER_MECH.png',
    category: 'non-tech',
    tags: ['Assemble', 'Mechanical', 'non-tech'],
    date: 'March 15, 2025',
    venue: 'Workshop - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: 'Mr. B. Prince Abraham AP/Mech',
    studentCoordinators: [{name:'Guhan S',contact:'9080834241'}],
    rules: [    
" No external assistance, mobile phones, or reference materials allowed.",
"Participants must handle tools and components safely—carelessness may lead to penalties.",
"Judges' decisions are final and binding.",
"Any misconduct or violation of the rules will result in disqualification.",
"Winners will receive certificates, prizes, and the prestigious title of Mr. Assembler.",      
       ]
},
{
    id:"SCAVENGER HUNT_MECH" ,
    name: 'SCAVENGER HUNT',
    subtitle: 'Search. Solve. Conquer.',
    description: 'The Scavenger Hunt is a thrilling event that challenges participants to solve clues, find hidden items, and complete engineering-related tasks to reach the final destination!',
    image: '/nectechfest2k25/images/SCAVENGER HUNT_MECH.png',
    poster: '/nectechfest2k25/images/SCAVENGER HUNT_MECH.png',
    category: 'non-tech',
    tags: ['Search' ,'Mechanical', 'non-tech'],
    date: 'March 15, 2025',
    venue: 'Laboratories - Mechanical Engineering Department',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: 'Mrs. M. Rajeshwari AP/Mech',
    studentCoordinators: [{name:'Pone Sorna Mugesh P',contact:'6383114254'}],
    rules: [
" No use of mobile phones, calculators, or external help during the hunt.",
"Teams must stick together—splitting up will lead to penalties.",
"No tampering with hidden objects or sabotaging other teams.",
"Any misconduct, cheating, or unfair play will result in disqualification.",
"Judges' decisions are final and binding.",
"Winners will receive certificates and prizes.",      
       ]
},
{
    id: "WATER ROCKETRY_MECH",
    name: 'WATER ROCKETRY',
    subtitle: 'Fuel with Water, Fly to Glory!.',
    description: 'Get ready to launch into action with Water Rocketry, an exciting event where participants design, build, and launch water-powered rockets! This challenge tests your aerodynamics, creativity, and engineering skills in constructing a high-performance rocket.',
    image : '/nectechfest2k25/images/WATER ROCKETRY_MECH.png',
    poster : '/nectechfest2k25/images/WATER ROCKETRY_MECH.png',
    department:'Mechanical Association',
    category: 'non-tech',
    tags: ['Rocketry ','Mechanical', 'non-tech'],
    date: 'March 15, 2025',
    venue: 'Play Ground',
    registrationLink: ["will be filled up by dev"],
    organizer: 'Mechanical Engineering Association',
    facultyCoordinator: 'Mr. N. Muthu Saravanan AP/Mech',
    studentCoordinators: [{name:'Maragatha Guru R',contact:'8508975135'}],
    rules: [
" Only water and air pressure can be used for propulsion.",
"Teams must use safe launch procedures—failure to comply results in disqualification.",
"No external launching mechanisms—rockets must be launched using the provided system",
"No intentional tampering or interfering with other teams' rockets.",
"Judges' decisions are final.",
"Winners receive certificates and exciting prizes!",      
       ]
},
{
  "name": "Creating Design with AR Development in Real World",
  "title": "Creating Design with AR Development in Real World",
  "subtitle": "Bringing Augmented Reality to Life: Hands-on Development with Unity & Vuforia",
  "startingTime": "10:30 AM - 12:30 PM",
  "date": "14/03/2025",
  "organizer": "National Engineering College (Centralized)",
  "category": "workshops",
  "facultyCoordinator": "Mr. Karthikeyan J (AP/CSE), Ms. Vazhan Arul Santhiya R (AP/CSE)",
  "studentCoordinators": [
    { "name": "Aruna Varshini S", "contact": "9791769009" },
    { "name": "Harihara Sudhan M", "contact": "6380816379" }
  ],
  "description": "Gain hands-on experience in building AR mobile applications! Learn AR fundamentals, set up Unity with Vuforia, and develop your first AR app with expert guidance. Perfect for students, developers, and tech enthusiasts. Join us to create immersive digital experiences!",
  
  "resourcePerson": {
    "name": "Mr. J. Karthikeyan",
    "image": "/nectechfest2k25/images/ARDevelopment.jpg",
    "designation": "AP/CSE",
    "organization": "National Engineering College",
    "bio": "Mr. Karthikeyan J is an Assistant Professor in the Department of Computer Science and Engineering at National Engineering College, Kovilpatti. With over a decade of academic and research experience, he has contributed to projects like cognitive rehabilitation for autism using VR and authored multiple research publications. He is also a recipient of the NPTEL Discipline Star award and is passionate about emerging technologies in computer science.",
    "expertise": ["AR/VR"],
    "link": "https://www.linkedin.com/in/karthikeyanmecse"
  },

  "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
},

{
  "name": "Next-Gen Learning",
  "title": "Next-Gen Learning",
  "subtitle": "The Power of Metaverse in Education",
  "time": "10:30 AM - 12:30 PM",
  "date": "15/03/2025",
  "venue":'CSE DEPARTMENT',
  "organizer": "National Engineering College (Centralized)",
  "category": "workshops",
  "facultyCoordinator": "Mr. Karthikeyan J (AP/CSE), Ms. Janani Ratthna S G (AP/CSE)",
  "studentCoordinators": [
    { "name": "Shri Kannan D", "contact": "9080305479" },
    { "name": "Anisha S", "contact": "9363255203" }
  ],
  "description": "Discover how Virtual Reality transforms education! This hands-on workshop guides you in building interactive VR learning spaces using Unity, enabling real-time collaboration and immersive learning experiences. Step into the future of digital education with us!",

  "resourcePerson": {
    "name": "Mr. J. Karthikeyan",
    "image": "/nectechfest2k25/images/NextGenLearning.jpg",
    "designation": "AP/CSE",
    "organization": "National Engineering College",
    "bio": "Mr. Karthikeyan J is an Assistant Professor in the Department of Computer Science and Engineering at National Engineering College, Kovilpatti. With over a decade of academic and research experience, he has contributed to projects like cognitive rehabilitation for autism using VR and authored multiple research publications. He is also a recipient of the NPTEL Discipline Star award and is passionate about emerging technologies in computer science.",
    "expertise": ["AR/VR"],
    "vidwanLink": "https://www.linkedin.com/in/karthikeyanmecse"
  },

  "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
},
//ece wrokshops

{
  title: "Schematic Capture and PCB Layout",
  name: "Schematic Capture and PCB Layout",
  subtitle: "One Click, Infinite Stories!",
  description:
    "This workshop covers schematic capture and PCB layout design using industry best practices. Topics include component selection, routing techniques, design rule checks, and Gerber file generation. Participants will learn to optimize designs for signal integrity and manufacturing. Suitable for students, hobbyists, and professionals aiming for real-world PCB design skills.",
  image: "/nectechfest2k25/images/Schematic Capture and PCB Layout.png",
  poster: "/nectechfest2k25/images/Schematic Capture and PCB Layout.png",
  category: "workshops",
  tags: ["Schematic Capture and PCB Layout"],
  date: "2025-03-14",
  startingTime: "10 AM",
  venue: "Embedded Lab / ECE",
  registrationLink: "will be filled up by dev",
  organizer: "ECE Association",
  facultyCoordinator: "DR. A. Saravana Selvan",
  studentCoordinators: [
    { name: "S. Sankar", contact: "9087137622" },
    { name: "N. Renganathan", contact: "8667018382" },
  ],
  resourcePerson: {
    name: "DR. A. Saravana Selvan",
    image: "",
    designation: "Associate Professor",
    expertise: ["PCB Designing and VLSI Chip Designing"],
    vidwanLink: "https://vidwan.inflibnet.ac.in/profile/286249",
  },
    "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
},
{
  title: "Embedded System Design With Arm Processor",
  name: "Embedded System Design With Arm Processor",
  subtitle:
    "Optimizing Embedded Solutions: Efficient Design with ARM Processors",
  description:
    "This workshop covers ARM-based embedded system design, including architecture, programming, and real-time applications. Participants will gain hands-on experience in coding, interfacing, and system optimization.",
  image:
    "/nectechfest2k25/images/Embedded System Design With Arm Processor.png",
  poster:
    "/nectechfest2k25/images/Embedded System Design With Arm Processor.png",
  department: "ECE",
  category: "workshops",
  tags: ["Embedded System Design With Arm Processor"],
  date: "2025-03-15",
  startingTime: "9:30 AM",
  venue: "Embedded Lab",
  registrationLink: "will be filled up by dev",
  organizer: "ECE Association",
  facultyCoordinator: "Mr. T. Devakumar",
  studentCoordinators:[ { name: "Manikandan V", contact: "9342057131" }],
  resourcePerson: {
    name: "Mr. T. Devakumar",
    designation: "Assistant Professor (Senior Grade)",
    organization: "NEC Faculty",
    expertise: ["ARM Processor"],
    image:"",
    vidwanLink: "https://vidwan.inflibnet.ac.in/profile/211457",
  },
  "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
},
{
  title: "Emerging Middleware Technologies For Smart Wireless Sensor Networks In Iot Applications",
  name: "Emerging Middleware Technologies For Smart Wireless Sensor Networks In Iot Applications",
  subtitle: "Emerging Middleware Technologies",
  description:
    "This workshop explores emerging middleware technologies for smart wireless sensor networks in IoT, covering architectures, energy efficiency, scalability, and security. Attendees will gain insights into advancements, challenges, and real-world applications through case studies and expert discussions.",
  image:
    "/nectechfest2k25/images/Emerging Middleware Technologies For Smart Wireless Sensor Networks In Iot Applications.png",
  poster:
    "/nectechfest2k25/images/Emerging Middleware Technologies For Smart Wireless Sensor Networks In Iot Applications.png",
  department: "ECE",
  category: "workshops",
  tags: ["Emerging Middleware Technologies"],
  date: "2025-03-15",
  startingTime: "9:30 AM",
  venue: "Networks Lab",
  registrationLink: "will be filled up by dev",
  organizer: "ECE Association",
  facultyCoordinator: [
    "Ms. S. Priscilla Mary, AP/ECE",
    "Dr. S. Subaselvi, AP/ECE",
  ],
  studentCoordinators: [{ name: "E. Petchi Prabakaran", contact: "9344518072" }],
  rules: [],
  resourcePerson: {
    name: "Mr. Siva Sakthi Dharan",
    image: "",
    designation: "Development Engineer",
    organization: "COMCAST",
    bio: "Middleware Development Engineer at Comcast, specializing in Java and Linux.",
    expertise: ["Middleware Development"],
    vidwanLink: "https://www.linkedin.com/in/siva-sakthi-dharan-v/",
  },
    "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
},
{
  "title": "Software Defined Radio using USRP & LabVIEW",
  name: "Software Defined Radio using USRP & LabVIEW",
  subtitle:
    "Exploring Next-Gen Wireless Technologies: From SDR to 6G Evolution",
  description:
    "Join our immersive workshop on Software Defined Radio (SDR) using USRP & LabVIEW and dive into the future of wireless communication! This program offers a unique blend of theoretical knowledge and practical demonstration, guiding you through the evolution of wireless technologies from 5G to the cutting-edge advancements in 6G. Gain practical skills in designing and implementing wireless systems using Universal Software Radio Peripheral (USRP) hardware and LabVIEW software, empowering you to tackle real-world challenges in the field. This workshop will equip the students and researchers with the expertise and insights needed to excel in the rapidly growing domains of 5G and 6G, while also exploring exciting career opportunities in these transformative technologies. Don’t miss this chance to elevate your skills and stay ahead in the wireless communication revolution!",
  image:
    "/nectechfest2k25/images/Software Defined Radio using USRP & LabVIEW.png",
  poster:
    "/nectechfest2k25/images/Software Defined Radio using USRP & LabVIEW.png",
  
  category: "workshops",
  tags: ["SDR", "Wireless Communication", "5G6GTechnology"],
  date: "2025-03-14",
  startingTime: "9:30 AM",
  venue: "DSP Lab/ECE",
  registrationLink: "will be filled up by dev",
  organizer: "ECE Association",
  facultyCoordinator: "Mr. B. Ganapathy Ram, AP(SG)/ECE",
  studentCoordinators:[ { name: "Harihara Sudhan A", contact: "8072771323" }],
  rules: [],
  resourcePerson: {
    name: "Mr. B. Ganapathy Ram",
    image: "",
    designation: "Assistant Professor (Senior Grade)",
    organization: "National Engineering College",
    bio: "Biography",
    expertise: ["Wireless Communication", "IoT"],
    vidwanlink: "https://vidwan.inflibnet.ac.in/profile/180623",
  },
    "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
},
// EEE workshops

  {
    "name": "Embedded Systems with Arduino: IoT Applications",
    "title": "Embedded Systems with Arduino: IoT Applications",
    "subtitle": "Build Smart Solutions with Embedded Systems & IoT",
    "startingTime": "9:30 AM - 12:30 PM",
    "date": "14/03/2025",
    "venue": "EEE DEPARTMENT",
    "organizer": "EEE Association",
    "category": "workshops",
    "facultyCoordinator": "Dr. B. Venkatasamy, AP(SG)/EEE",
    "studentCoordinators": [
      { "name": "Reginold A", "contact": "9360665059" }
    ],
    "description": "This workshop introduces participants to Arduino-based embedded system development. Learn to interface sensors, actuators, and communication modules to build real-time applications. Ideal for beginners and enthusiasts looking to explore IoT and automation.",

    "resourcePerson": {
      "name": "Dr. B. Venkatasamy",
      "image": "/nectechfest2k25/images/ArduinoProgramming.jpg",
      "designation": "AP(SG)/EEE",
      "organization": "National Engineering College",
      "bio": "Dr. B. Venkatasamy, Assistant Professor (Senior Grade), holds a Ph.D. in Power Electronics from Anna University, Chennai. His expertise spans power electronics, embedded systems, renewable energy, and IoT applications. He has published research and developed innovative IoT-based solutions.",
      "expertise": ["Power Electronics", "Embedded Systems", "Renewable Energy", "IoT"],
      "link": "https://vidwan.inflibnet.ac.in/profile/214277"
    },

    "video": "/nectechfest2k25/images/ArduinoProgramming.mp4"
  },
  {
    "name": "High Voltage Insulator Flashover Analysis",
    "title": "High Voltage Insulator Flashover Analysis",
    "subtitle": "Enhancing Insulation Reliability in High Voltage Systems",
    "startingTime": "9:30 AM - 12:30 PM",
    "date": "15/03/2025",
    "venue": "EEE DEPARTMENT",
    "organizer": "EEE Association",
    "category": "workshops",
    "facultyCoordinator": "Dr. B. Vigneshwaran, Asso.Prof/EEE",
    "studentCoordinators": [
      { "name": "Madhubala S", "contact": "7418323003" }
    ],
    "description": "This workshop delves into the flashover characteristics of high-voltage insulators under various pollution conditions. Participants will analyze the performance of porcelain, glass, and polymer insulators, gaining insights into insulation reliability and maintenance.",

    "resourcePerson": {
      "name": "Dr. B. Vigneshwaran",
      "image": "/nectechfest2k25/images/HighVoltage.jpg",
      "designation": "Asso.Prof/EEE",
      "organization": "National Engineering College",
      "bio": "Dr. B. Vigneshwaran, Associate Professor in the Department of Electrical and Electronics Engineering at National Engineering College, specializes in high-voltage engineering and insulation studies. With over 10 years of teaching and research experience, his work focuses on partial discharge analysis, insulation performance enhancement, and high-voltage system reliability. His interests include signal processing, pattern recognition, and AI techniques in high-voltage engineering.",
      "expertise": ["High Voltage Engineering", "Insulation Studies", "Partial Discharge Analysis"],
      "link": "https://vidwan.inflibnet.ac.in/profile/211507"
    },

    "video": "/nectechfest2k25/images/HighVoltage.mp4"
  },
  {
    "name": "Numerical Relays",
    "title": "Numerical Relays",
    "subtitle": "Modern Protection Techniques for Power Systems",
    "startingTime": "9:30 AM - 12:30 PM",
    "date": "14/03/2025",
    "venue": "EEE DEPARTMENT",
    "organizer": "EEE Association",
    "category": "workshops",
    "facultyCoordinator": "Dr. S. Sankarakumar, AP(SG)/EEE",
    "studentCoordinators": [
      { "name": "Sivaranjani C", "contact": "8838600516" }
    ],
    "description": "This workshop focuses on modern power system protection using numerical relays. Topics include switchgear fundamentals, protective relaying for feeders, transformers, and motors, as well as SCADA-based automation. Learn to test relays and explore the use of advanced tools like ETAP for simulation and testing.",

    "resourcePerson": {
      "name": "Dr. S. Sankarakumar",
      "image": "/nectechfest2k25/images/NumericalRelays.jpg",
      "designation": "AP(SG)/EEE",
      "organization": "National Engineering College",
      "bio": "Dr. S. Sankarakumar, Assistant Professor (Senior Grade), specializes in power electronics, electrical drives, and renewable energy systems. He has significant expertise in power system protection, particularly in using numerical relays and SCADA automation for substation management.",
      "expertise": ["Power System Protection", "Numerical Relays", "SCADA", "Switchgear"],
      "link": "https://vidwan.inflibnet.ac.in/profile/214290"
    },

    "video": "/nectechfest2k25/images/NumericalRelays.mp4"
  },
  {
    "name": "Battery Management Systems (BMS) Workshop",
    "title": "Battery Management Systems (BMS) Workshop",
    "subtitle": "Optimizing Energy Storage for the Future",
    "startingTime": "9:30 AM - 12:30 PM",
    "date": "15/03/2025",
    "venue": "EEE DEPARTMENT",
    "organizer": "EEE Association",
    "category": "workshops",
    "facultyCoordinator": "Mr. K. Karthik Kumar, AP/EEE",
    "studentCoordinators": [
      { "name": "Abhishek Naykar", "contact": "8459765629" }
    ],
    "description": "This workshop provides an in-depth look at Battery Management Systems (BMS), covering battery monitoring, balancing, and protection strategies. Learn about the role of BMS in electric vehicles, renewable energy storage, and industrial applications.",

    "resourcePerson": {
      "name": "Mr. K. Karthik Kumar",
      "image": "/nectechfest2k25/images/BMS.jpg",
      "designation": "AP/EEE",
      "organization": "National Engineering College",
      "bio": "Mr. K. Karthik Kumar, Assistant Professor, holds a Master’s degree in Power Electronics and Drives. His expertise includes power electronics, system modeling, and energy storage technologies, focusing on optimizing battery management solutions.",
      "expertise": ["Power Electronics", "System Modeling", "Energy Storage", "Battery Management"],
      "link": "https://vidwan.inflibnet.ac.in/profile/287444"
    },

    "video": "/nectechfest2k25/images/BMS.mp4"
  },
  {
    "name": "Robotics and Automation Workshop",
    "title": "Robotics and Automation Workshop",
    "subtitle": "Innovating the Future with Intelligent Automation",
    "startingTime": "9:30 AM - 12:30 PM",
    "date": "15/03/2025",
    "venue": "EEE DEPARTMENT",
    "organizer": "EEE Association",
    "category": "workshops",
    "facultyCoordinator": "Mr. M. Sivapalanirajan, AP/EEE",
    "studentCoordinators": [
      { "name": "Esakki Dhas M", "contact": "8838597859" }
    ],
    "description": "This workshop introduces the fundamentals of robotics, intelligent automation, and sensor integration for control systems. Learn about the design and application of robotic systems, automation techniques, and the integration of sensors for enhanced functionality in industrial environments.",

    "resourcePerson": {
      "name": "Mr. M. Sivapalanirajan",
      "image": "/nectechfest2k25/images/Robotics.jpg",
      "designation": "AP/EEE",
      "organization": "National Engineering College",
      "bio": "Mr. M. Sivapalanirajan, Assistant Professor, holds a Master’s degree in Power Systems and has expertise in automation, robotics, and electrical system modeling. He is involved in developing intelligent control systems for robotics and industrial automation.",
      "expertise": ["Robotics", "Automation", "Intelligent Control Systems", "Sensors"],
      "link": "https://vidwan.inflibnet.ac.in/profile/214201"
    },

    "video": "/nectechfest2k25/images/Robotics.mp4"
  },
  ///ece events
  {
    id: "ElectroVision",
    name: "ElectroVision",
    subtitle: " Electro-Tech Quest ",
    description:
      " Electro-Tech Quest: Decode, Compete, and Innovate! A thrilling fusion of quizzes,charades, and Verilog challenges to test your electronics prowess.",
    image: "/nectechfest2k25/images/ElectroVision.png",
    poster: "/nectechfest2k25/images/ElectroVision.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Tech", "Verilog"],
    date: "15-03-2025",
    startingTime: "1:15 PM",
    venue: "Smart Classroom /ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE/IEEE",
    "facultyCoordinator": " Dr. R. Manjula Devi, AP(SG)/ECE ",
    "studentCoordinators": [
      { name: "Shenbaga Nandhini. A", contact: "9344894785" },
    ],
    rules: [
      "Teams should consist of 2 members.",
      "Knowledge of Verilog is a must for the final round.",
      "Each participant must bring their own laptop for the third round.",
    ],
  },
  {
    id: "Linkage",
    name: "Linkage",
    subtitle: "Connect & Create",
    description:
      "Linkage is an interactive and engaging game that challenges participants to connect technical components through a series of images. The event is structured for students to learn about analyzing challenges, think critically. This event combines Rapid fire, ConneXion to encourage both logical and creative thinking through connections.",
    image: "/nectechfest2k25/images/Linkage.png",
    poster: "/nectechfest2k25/images/Linkage.png",
    department: "ECE Association",
    category: "Technical",
    tags: [""],
    date: "2025-03-15",
    startingTime: "1:15 PM",
    venue: "H21,Classroom,ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": "Ms. S.Malathi , AP/ECE",
    "studentCoordinators": {
      name: "Sanjay kumar A",
      contact: "8778236050",
    },
    rules: ["A team must consists of two members"],
  },
  {
    id: "Exquiz me",
    name: "Exquiz me",
    subtitle: "Think Fast, Team Up, Triumph!",
    description:
      "'Exquiz me' is a fun, dynamic event with four exciting rounds—Mind Mash, Music Master, Feelopoly & Vision Vault—testing IQ, teamwork, and quick thinking. Join with friends, showcase  your wit, and enjoy a thrilling competition!",
    image: "/nectechfest2k25/images/Exquiz me.png",
    poster: "/nectechfest2k25/images/Exquiz me.png",
    department: "ECE Association",
    category: "non-tech",
    tags: ["Exquiz me"],
    date: "2025-03-15",
    startingTime: "3:15 PM",
    venue: "Smart Class Room/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": "Ms.G.Akalya Devi AP/ECE",
    "studentCoordinators": [
      { name: "Sornagomathi Balasubramanian", contact: "6369062219" },
    ],
    rules: ["A team must consists of two members"],
  },
  {
    id: "Fusion Frenzy",
    name: "Fusion Frenzy",
    subtitle: "Bound by challenges, United in thoughts",
    description:
      "An interesting event that tests team spirit and compatibility with your team mate and helps you to gain knowledge in electronics and communication domain. Explore the fun and knowledge at the same league!",
    image: "/nectechfest2k25/images/Fusion Frenzy.png",
    poster: "/nectechfest2k25/images/Fusion Frenzy.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Fusion Frenzy"],
    date: "2025-03-14",
    startingTime: "3:15 PM",
    venue: "Embedded Lab/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": " Mrs S.Pricilla Mary AP/ECE",
    "studentCoordinators": [{ name: "Shivagam", contact: "8300327157" }],
    rules: ["A team must consists of two members and should have laptop"],
  },
  {
    id: "Filmora",
    name: "Filmora",
    subtitle: "Filmora where you’re gameplay becomes blockbuster ",
    description:
      "Gear up for an electrifying experience at EmbedX – where innovation meets creativity, and ideas spark into reality! Join us for a journey through the future of embedded systems, with cutting-edge technologies and exciting challenges. Let’s create, innovate, and connect",
    image: "/nectechfest2k25/images/Filmora.png",
    poster: "/nectechfest2k25/images/Filmora.png",
    department: "ECE Association",
    category: "non-tech",
    tags: ["Filmora"],
    date: "2025-03-14",
    startingTime: "3:15 PM",
    venue: "Dsp Lab",
    "registration Link": "will be filled up by dev",
    organizer: "ECE Association",
    "facultyCoordinator": "Assistant professor S.Camillus ",
    "studentCoordinators": [{ name: "Dhiviya J", contact: "9524258709" }],
    rules: ["A team must consists of two members"],
  },
  {
    id: "Shake up the fun",
    name: "Shake up the fun",
    subtitle: " Think fast, play smart, and have a blast!",
    description:
      " Shake Up the Fun is an exciting event with four interactive rounds—Lyric Mania, Clue Rush, Quickfire Countdown, and Bingo Buzz—blending music, clues, and strategy. Participants will enjoy a thrilling mix of entertainment, teamwork, and cognitive challenges!",
    image: "/nectechfest2k25/images/Shake up the fun.png",
    poster: "/nectechfest2k25/images/Shake up the fun.png",
    department: "ECE Association",
    category: "non-tech",
    tags: ["Shake up the fun"],
    date: "2025-03-14",
    startingTime: "3:15 PM",
    venue: "Seminar Hall/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": " Dr.S.Subaselvi, AP/ECE ",
    "studentCoordinators": [{ name: "Akshaya S", contact: "9698371424" }],
    rules: ["A team must consists of two members"],
  },
  {
    id: "Decryptathon",
    name: "Decryptathon",
    subtitle: "Unleash your inner coder!",
    description:
      "Crack the Code, Conquer the Challenge! Get ready for an electrifying challenge where participants race against time to fix errors, solve coding puzzles, and prove their programming powers!!! ",
    image: "/nectechfest2k25/images/pngDecryptathon.png",
    poster: "/nectechfest2k25/images/pngDecryptathon.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Decryptathon"],
    date: "2025-03-14",
    startingTime: "2:00 PM",
    venue: "Networks Lab/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": "Dr. K.Subramanian AP(SG)/ECE",
    "studentCoordinators": [
      { name: "Jumana Maryam M", contact: "9789713993" },
    ],
    rules: ["2 members per team with Hackerrand I'd"],
  },
  {
    id: "Circuit Debugging",
    name: "Circuit Debugging",
    subtitle: "Debug, Spark, and Rule the Circuit",
    description:
      "Test your circuit knowledge in Circuit Debugging! Identify components, solve circuit problems, and debug breadboard errors",
    image: "/nectechfest2k25/images/Circuit Debugging.png",
    poster: "/nectechfest2k25/images/Circuit Debugging.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Circuit Debugging"],
    date: "2025-03-14",
    startingTime: "1:15 PM",
    venue: "ED Lab/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": "Mr.M.Sathish Kumar,AP(SG)/ECE ",
    "studentCoordinators": [
      { name: "Arumukam Ganes Moorthe V", contact: "7708112053" },
    ],
    rules: ["A team must consists of two members"],
  },
  {
    id: "WAVE WIRE",
    name: "WAVE WIRE",
    subtitle: "Sync Up, Stay Connected—Test Your Bond, Prove Your Connection!",
    description:
      "Wave Wire challenges partners to test their compatibility, communication, and teamwork to solve the Technical and non-tech Problems .",
    image: "/nectechfest2k25/images/WAVE WIRE.png",
    poster: "/nectechfest2k25/images/WAVE WIRE.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Wave Wire"],
    date: "2025-03-15",
    startingTime: "2:15 PM",
    venue: "DSP Lab / ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association ",
    "facultyCoordinator": " Ms.G.Akalya Devi AP/ECE ",
    "studentCoordinators": [
      { name: "G.K.UKESH KARTHIKEYAN", contact: "7540063855" },
    ],
    rules: [
      "A team must consists only of two members and not more or less than that",
    ],
  },
  {
    id: "Tech Detective",
    name: "Tech Detective",
    subtitle: "Unravel. Innovate. Solve – Be the Tech Sleuth!",
    description:
      "Tech Detective is an exciting event that challenges participants to analyze real-world technological problems and propose innovative solutions. This event encourages critical thinking, creativity, and teamwork, making it a perfect platform for future innovators.",
    image: "/nectechfest2k25/images/Tech Detective.png",
    poster: "/nectechfest2k25/images/Tech Detective.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Tech Detective"],
    date: "2025-03-15",
    startingTime: " ",
    venue: "Will be Annouced",
    "registration Link": "will be filled up dev",
    organizer: "ECE Association",
    "facultyCoordinator": "Ms.C.K.Balasundari, AP/ECE",
    "studentCoordinators": [{ name: "Hema Rubini M", contact: "7010355129" }],
    rules: ["Annouced on the spot"],
  },
  {
    id: "Crystal Pixel",
    name: "Crystal Pixel",
    subtitle: " Create, Code, Conquer.",
    description:
      "Crystel pixel is a thrilling two stage competition that tests your creativity and technical skills. The rounds include logo magic and Build-a-thon. This event helps you learn new skills, gain realworld experience, build your portfolio, and boost your confidence. Complete, showcase your talent, and have fun while unlocking your potential!",
    image: "/nectechfest2k25/images/Crystal Pixel.png",
    poster: "/nectechfest2k25/images/Crystal Pixel.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Crystal Pixel"],
    date: "2025-03-15",
    startingTime: "1:15 PM ",
    venue: "DSP Lab/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": "Ms.K.Karthika,AP/ECE ",
    "studentCoordinators": [{ name: "Uma R", contact: "9363574981" }],
    rules: ["A team must consists of two members"],
  },
  {
    id: "Tamizhodu Vilayaadu",
    name: "Tamizhodu Vilayaadu",
    subtitle: "Explore Tamil World ",
    description:
      " Tamilzhodu Vilayaadu is a fun interactive game that makes us to experience tamil culture, tradition and language. The game features quizzes, challenges, and riddles that test knowledge and vocabulary while promoting engagement and entertainment.",
    image: "/nectechfest2k25/images/Tamizhodu Vilayaadu.png",
    poster: "/nectechfest2k25/images/Tamizhodu Vilayaadu.png",
    department: "ECE Association",
    category: "non-tech",
    tags: ["Tamizhodu Vilayaadu"],
    date: "2025-03-15",
    startingTime: "3.15 PM",
    venue: "Seminar Hall/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": " Ms.P.Arishenbagam AP/ECE",
    "studentCoordinators": [{ name: "Kaleeswari B", contact: "8148920230" }],
    rules: ["A team must consists of two members"],
  },
  {
    id: "EmbedX",
    name: "EmbedX",
    subtitle: "Let's Get Embedded-Join the Revolution",
    description:
      "Gear up for an electrifying experience at EmbedX – where innovation meets creativity, and ideas spark into reality! Join us for a journey through the future of embedded systems, with cuttingedge technologies and exciting challenges. Let’s create, innovate, and connect",
    image: "/nectechfest2k25/images/EmbedX.png",
    poster: "/nectechfest2k25/images/EmbedX.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["EmbedX"],
    date: "14-03-2025",
    startingTime: "1:50 PM",
    venue: "Vlsi Lab/ECE",
    "registration Link": ["will be filled up by dev"],
    organizer: "Embedded Club",
    "facultyCoordinator": "Dr.I.Vivek Anand, AP(SG)/ECE ",
    "studentCoordinators": [{ name: "Arun Karthik A", contact: "9543322330" }],
    rules: ["A team must consists of two members"],
  },
  {
    id: "PAPER PRESENTATION_ECE",
    name: "PAPER PRESENTATION",
    subtitle: "Exploring Innovations and Insights",
    description:
      "Showcase your research skills and present your paper. Share your ideas, insights and findings with fellow enthusiasts and experts. Get feedback, network and take your research to the next level!",
    image: "/nectechfest2k25/images/PAPER PRESENTATION_ECE.png",
    poster: "/nectechfest2k25/images/PAPER PRESENTATION_ECE.png",
    department: "ECE Association",
    category: "Technical",
    tags: ["Paper Presentation"],
    date: "2025-03-14",
    startingTime: "11 AM ",
    venue: "H12 Smart class Room",
    "registration Link": ["will be filled up by dev"],
    organizer: "ECE Association",
    "facultyCoordinator": "Ms.C.Kalieswari, AP/ECE",
    "studentCoordinators": [
      { name: "Guru Akash S V J", contact: "8098809543" },
    ],
    rules: [
      "1. A team must consists of (1-4)members ",
      "2.Presentations should be 10-20 minutes long, followed by 2-3 minutes of Q&A,with a maximum of 15 slides",
    ],
  },
  //eee technical
  
    {
      "id": "PAPER_PRESENTATION_EEE",
      "name": "PAPER PRESENTATION",
      "subtitle": "Present Ideas, Inspire Innovation",
      "date": "14/02/2025",
      "department":"EEE Association",
      "venue": "Seminar Hall - EEE",
      "organizer": "EEE Association",
      "category": "TECHNICAL",
      "facultyCoordinator": "Mr. K. Karthik Kumar, AP/EEE",
      "studentCoordinators": [{ "name": "Keerthika S", "contact": "7094882206" }],
      "description": "Participants present their technical research or innovative ideas on engineering topics, showcasing their knowledge, analysis, and presentation skills.",
      "rules": [
        "Team Composition: 2 to 4 members per team.",
        "Present a paper on any Electrical or Electronics topic (open for all).",
        "Slides: 8 to 12 slides.",
        "No plagiarism.",
        "Judge's decision is final."
      ],
      "image": "/nectechfest2k25/images/PAPER_PRESENTATION_EEE.jpg",
      "poster": "/nectechfest2k25/images/PAPER_PRESENTATION_EEE.jpg"
    },
    {
      "id": "TECHNICAL_QUIZ_EEE",
      "name": "TECHNICAL QUIZ",
      "subtitle": "The Ultimate Knowledge Showdown",
      "date": "14/02/2025",
      "department":"EEE Association",
      "venue": "Active Classroom - EEE",
      "organizer": "EEE Association",
      "category": "TECHNICAL",
      "facultyCoordinator": "Dr. M. Gengaraj, AP(SG)/EEE",
      "studentCoordinators": [{ "name": "Shanmugavel S", "contact": "7639519852" }],
      "description": "A quiz competition that challenges participants on core concepts of electrical and electronics engineering, testing their technical knowledge and problem-solving skills.",
      "rules": [
        "Team Composition: 2 members per team.",
        "Round 1: Google Search round: Teams will search for answers to questions related to EEE.",
        "Round 2: MCQs on various topics related to Electrical and Electronics Engineering.",
        "Round 3: Real-time situational problems related to EEE will be given. Teams must solve practical, real-world scenarios using their engineering knowledge.",
        "Judges' decision is final.",
        "All rounds must be completed independently by the teams."
      ],
      "image": "/nectechfest2k25/images/TECHNICAL_QUIZ_EEE.jpg",
      "poster": "/nectechfest2k25/images/TECHNICAL_QUIZ_EEE.jpg"
    },
    {
      "id": "PROJECT_EXPO_EEE",
      "name": "PROJECT EXPO",
      "department":"EEE Association",
      "subtitle": "Innovate, Create, and Display",
      "date": "14/02/2025",
      "startingTime": "1:15 – 3:00",
      "venue": "Power Electronics Lab - EEE",
      "organizer": "EEE Association",
      "category": "TECHNICAL",
      "facultyCoordinator": "Dr. B. Vigneshwaran, Asso.Prof/EEE",
      "studentCoordinators": [{ "name": "Madhubala S", "contact": "7418323003" }],
      "description": "A platform for participants to showcase their technical projects, demonstrating creativity, problem-solving, and engineering skills.",
      "rules": [
        "Team Composition: 2 to 4 members per team.",
        "Teams will showcase their working project on any EEE-related topic.",
        "A short description of the project (written or printed) is required.",
        "Judges' decision is final.",
        "All projects should be functional and demonstrate practical applications.",
        "Teams must bring the completed project and a clear project description.",
        "Scoring based on innovation, functionality, and presentation."
      ],
      "image": "/nectechfest2k25/images/PROJECT_EXPO_EEE.jpg",
      "poster": "/nectechfest2k25/images/PROJECT_EXPO_EEE.jpg"
    },
    
      {
        "id": "CIRCUIT_DEBUGGING_EEE",
        "name": "CIRCUIT DEBUGGING",
        "department":"EEE Association",
        "subtitle": "Fix, Troubleshoot, and Win",
        "date": "14/02/2025",
        "startingTime": "1:15 – 3:00",
        "venue": "Electrical Workshop Lab - EEE",
        "organizer": "EEE Association",
        "category": "TECHNICAL",
        "facultyCoordinator": "Mrs. C. Dhanalakshmi, AP/EEE",
        "studentCoordinators": [{"name": "Sasi Kumar S", "contact": "9361922379"}],
        "description": "A challenge where participants analyze and fix faulty circuits, testing their debugging skills and understanding of electronics.",
        "rules": [
          "Team Composition: 2 to 4 members per team.",
          "Round 1: Solve basic electrical and electronic problems which test the fundamentals and analytical skills.",
          "Round 2: Using the given electronic components, design and assemble a functional circuit and apply the solution from the problem statement provided.",
          "Judges' decision is final.",
          "No disputes or re-evaluations after judging.",
          "External assistance is prohibited.",
          "All work must be done independently by the team."
        ],
        "image": "/nectechfest2k25/images/CIRCUIT_DEBUGGING_EEE.jpg",
        "poster": "/nectechfest2k25/images/CIRCUIT_DEBUGGING_EEE.jpg"
      },
      {
        "id": "CODING_CONTEST_EEE",
        "name": "CODING CONTEST",
        "department":"EEE Association",
        "subtitle": "Code, Compete, and Conquer",
        "date": "15/02/2025",
        "startingTime": "1:15 – 3:00",
        "venue": "New Computer Lab - EEE",
        "organizer": "EEE Association",
        "category": "TECHNICAL",
        "facultyCoordinator": "Mr. K. Kumar, AP/EEE",
        "studentCoordinators": [{"name": "Santhosh Kumar M", "contact": "6381867074"}],
        "description": "A competitive coding event where participants solve algorithmic challenges and optimize code within a time limit.",
        "rules": [
          "Team Composition: 2 members per team.",
          "Round 1: MCQ on the basics of C, C++, and Python.",
          "Round 2: Basic programming problems to be solved on HackerRank.",
          "Round 3: Intermediate programming problems to be solved on HackerRank.",
          "Judges' decision is final.",
          "All programs must be coded in C, C++, or Python only.",
          "No external help is allowed during the contest."
        ],
        "image": "/nectechfest2k25/images/CODING_CONTEST_EEE.jpg",
        "poster": "/nectechfest2k25/images/CODING_CONTEST_EEE.jpg"
      },
      {
        "id": "TECH_ENCRYPT_EEE",
        "name": "TECH ENCRYPT",
        "department":"EEE Association",
        "subtitle": "Decrypt Clues, Identify Components",
        "date": "15/02/2025",
        "startingTime": "1:15 – 3:00",
        "venue": "H2 Classroom - EEE",
        "organizer": "EEE Association",
        "category": "TECHNICAL",
        "facultyCoordinator": "Dr. P. Samuel Pakianathan, AP(SG)/EEE",
        "studentCoordinators": [{"name": "Nandhana P", "contact": "7845243046"}],
        "description": "An engaging event where participants decode clues to identify different electronic components.",
        "rules": [
          "Team Composition: 2 members per team.",
          "Round 1: Teams will be given clues related to electronic components and must identify them.",
          "Round 2: Teams will be given more complex encrypted clues involving advanced circuit design or programming tasks.",
          "Judges' decision is final.",
          "Teams must work independently and complete the tasks without external assistance."
        ],
        "image": "/nectechfest2k25/images/TECH_ENCRYPT_EEE.jpg",
        "poster": "/nectechfest2k25/images/TECH_ENCRYPT_EEE.jpg"
      },
      {
        "id": "LOGIC_LADDER_EEE",
        "name": "LOGIC LADDER",
        "subtitle": "Solve, Build, and Compete",
        "date": "15/02/2025",
        "startingTime": "1:15 – 3:00",
        "venue": "Electronics Lab - EEE",
        "organizer": "EEE Association",
        "category": "TECHNICAL",
        "facultyCoordinator": "Mr. M. Sivapalanirajan, AP/EEE",
        "studentCoordinators": [{"name": "Reginold A", "contact": "9360665059"}],
        "description": "Participants solve a combinational circuit using Karnaugh maps and later build it using logic gates.",
        "rules": [
          "Team Composition: 2 to 4 members per team.",
          "K-map Learning Session: Introduction to Karnaugh maps and simplification techniques.",
          "Round 1: Simplify a combinational circuit using K-map.",
          "Round 2: Top 5 teams from Round 1 will build the simplified circuit using logic gates.",
          "No external help allowed.",
          "Time management is key.",
          "Judge's decision is final."
        ],
        "image": "/nectechfest2k25/images/LOGIC_LADDER_EEE.jpg",
        "poster": "/nectechfest2k25/images/LOGIC_LADDER_EEE.jpg"
      },
      //eee non-tech
        {
          "id": "POSTER_DESIGN_EEE",
          "name": "POSTER DESIGN",
          "subtitle": "Design, Create, and Inspire Digitally!",
          "date": "14/02/2025",
          "startingTime": "3:15 – 5:00",
          "venue": "H3 Classroom - EEE",
          "organizer": "EEE Association",
          "category": "non-tech",
          "facultyCoordinator": "Dr. P. Samuel Pakianathan, AP(SG)/EEE",
          "studentCoordinators": [{"name": "Sujay Chandran R", "contact": "9865036195"}],
          "description": "Put your digital design skills to the test! Create a compelling and creative digital poster based on a surprise topic and impress the judges with your design skills.",
          "rules": [
            "Team Size: 2 members",
            "Topics will be provided on the spot during the event.",
            "Teams will create a digital poster based on the given topic.",
            "All designs must be original and created using digital tools (e.g., Photoshop, Illustrator, or other graphic design software). AI tools are strictly not allowed.",
            "Participants must adhere to the time limit of 2 hours to complete the design.",
            "The poster must clearly convey the message and be visually appealing.",
            "Teams must submit the final design in a high-resolution format by the end of the allotted time.",
            "Judging will be based on creativity, relevance to the topic, and overall design quality."
          ],
          "image": "/nectechfest2k25/images/POSTER_DESIGN_EEE.jpg",
          "poster": "/nectechfest2k25/images/POSTER_DESIGN_EEE.jpg"
        },
        {
          "id": "CUP_BRIDGE_EEE",
          "name": "CUP BRIDGE",
          "subtitle": "Stack, Act & Draw Your Way to Victory!",
          "date": "14/02/2025",
          "startingTime": "3:15 – 5:00",
          "venue": "Active Classroom - EEE",
          "organizer": "EEE Association",
          "category": "non-tech",
          "facultyCoordinator": "Mr. K. Kumar, AP/EEE",
          "studentCoordinators": [{"name": "Abinaya C", "contact": "8668192531"}],
          "description": "A perfect blend of skill, creativity, and teamwork! Stack fast, guess smart, and draw quick to bridge your way to the top!",
          "rules": [
            "Team Size: 2 members",
            "Round 1: Cup Stacking – Teams must quickly and efficiently stack cups in a given pattern within the time limit.",
            "Round 2: One team member will act out a word while the other guesses. Once guessed, they must draw the first letter of the word to complete the challenge.",
            "Teams must complete both tasks in each round to qualify.",
            "Speed, accuracy, and teamwork will determine the winners.",
            "Judges' decisions will be final."
          ],
          "image": "/nectechfest2k25/images/CUP_BRIDGE_EEE.jpg",
          "poster": "/nectechfest2k25/images/CUP_BRIDGE_EEE.jpg"
        },
        {
          "id": "WALKER_BOTTLE_EEE",
          "name": "WALKER BOTTLE",
          "subtitle": "Flip, Fold, and Win!",
          "date": "14/02/2025",
          "startingTime": "3:15 – 5:00",
          "venue": "Seminar Hall - EEE",
          "organizer": "EEE Association",
          "category": "non-tech",
          "facultyCoordinator": "Mr. M. Sivapalanirajan, AP/EEE",
          "studentCoordinators": [{"name": "Bharanisree V", "contact": "9514510063"}],
          "description": "Test your coordination and teamwork in this fun-filled challenge! Flip bottles and fold paper to outplay your competition in an exciting race to the finish.",
          "rules": [
            "Team Size: 2 members",
            "Round 1: Ddakji – Traditional Korean paper folding game.",
            "Round 2: Bottle Flip Challenge – Teams will compete to successfully flip a bottle and land it upright the most times within a set time."
          ],
          "image": "/nectechfest2k25/images/WALKER_BOTTLE_EEE.jpg",
          "poster": "/nectechfest2k25/images/WALKER_BOTTLE_EEE.jpg"
        },
        {
          "id": "GUESS_THE_BEAT_EEE",
          "name": "GUESS THE BEAT",
          "subtitle": "Act, Connect, and Guess the Beat!",
          "date": "15/02/2025",
          "startingTime": "3:15 – 5:00",
          "venue": "H5 Classroom - EEE",
          "organizer": "EEE Association",
          "category": "non-tech",
          "facultyCoordinator": "Mr. F. Antony Jeffrey Vaz, AP/EEE",
          "studentCoordinators": [{"name": "Madhavan R", "contact": "6379816912"}],
          "description": "Test your music knowledge and creativity as you connect beats and perform songs in an entertaining battle of wits. Guess the beats, act it out, and have fun with your teammate!",
          "rules": [
            "Team Size: 2 members",
            "Round 1: Connection – Teams will be given clues to identify the connection between different song beats or themes.",
            "Round 2: Dumb Charades – Teams will act out popular songs without speaking, while others guess the song title."
          ],
          "image": "/nectechfest2k25/images/GUESS_THE_BEAT_EEE.jpg",
          "poster": "/nectechfest2k25/images/GUESS_THE_BEAT_EEE.jpg"
        },
          {
            "id": "CAPTURE_REMEMBER_EEE",
            "name": "CAPTURE & REMEMBER",
            "subtitle": "Where Observation Meets Memory",
            "date": "15/02/2025",
            "startingTime": "3:15 – 5:00",
            "venue": "Seminar Hall",
            "organizer": "EEE Association",
            "category": "non-tech",
            "facultyCoordinator": "Dr. F.X. Edwin Deepak, AP/EEE",
            "studentCoordinators": [
              {
                "name": "Snowin Rubiha J",
                "contact": "8015811303"
              }
            ],
            "description": "Challenge your observation and memory in this exciting image-based challenge. Interpret visuals creatively and describe details with accuracy to showcase your perception skills.",
            "rules": [
              "Team Composition: 2 members per team.",
              "Round 1: An image will be displayed on the screen. Participants must write down the most pictures that they can recall.",
              "Round 2: Participants will be shown an image, and they must identify the location within the picture by describing where something is located. For example: 'The object is on the left side, near the top corner.' etc."
            ],
            "image": "/nectechfest2k25/images/CAPTURE_REMEMBER_EEE.jpg",
            "poster": "/nectechfest2k25/images/CAPTURE_REMEMBER_EEE.jpg"
          },
          {
            "id": "FAST_N_FROLIC_EEE",
            "name": "Fast'n Frolic",
            "subtitle": "Think Fast, Move Faster!",
            "date": "15/02/2025",
            "startingTime": "3:15 – 5:00",
            "venue": "Active Classroom - EEE",
            "organizer": "EEE Association",
            "category": "non-tech",
            "facultyCoordinator": "Dr. B. Venkatasamy, AP(SG)/EEE",
            "studentCoordinators": [
              {
                "name": "Afrinaa M",
                "contact": "9345378829"
              }
            ],
            "description": "Ready for a rollercoaster of fun? In Fast and Frolic, you’ll face surprise challenges that test your wit, speed, and teamwork. Expect the unexpected and race against time to win!",
            "rules": [
              "Team Composition: 2 members",
              "No of rounds: 3",
              "Rules will be explained at the time of the event."
            ],
            "image": "/nectechfest2k25/images/FAST_N_FROLIC_EEE.jpg",
            "poster": "/nectechfest2k25/images/FAST_N_FROLIC_EEE.jpg"
          },
          //civil
    {
      "id": "WordDebate_Civil",
      "name": "WORD DEBATE",
      "subtitle": "A Debate Contest Among Teams",
      "description": "A discussion contest to support and enrich your stands. Engage in a thought-provoking debate on non-technical topics and showcase your speaking and argumentation skills.",
      "image": "/nectechfest2k25/images/word_debate_image.jpg",
      "poster": "/nectechfest2k25/images/word_debate_poster.jpg",
      "category": "non-tech",
      "tags": ["DEBATE", "NON-TECHNICAL", "CIVIL"],
      "date": "2025-03-14",
      "venue": "Smart Classroom, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "Civil Engineering Association (CEA)",
      "facultyCoordinator": "Mr. Bala Murali G",
      "studentCoordinators": [
        {
          "name": "Subramanian N",
          "contact": "8148610845"
        }
      ],
      "rules": [
        "Team size: Minimum of 2 members and maximum of 3 members",
        "The teams will be chosen for debate based on lot",
        "Each team will be provided with 3 minutes of speaking time",
        "The topic will be purely non-technical",
        "Debaters should not attack or question the opposite debaters",
        "Debaters should not interrupt while the opposite debater is speaking",
        "The event has only one round, in which debaters will debate in front of the Judges",
        "Evaluation will be based on Time management, content delivery, and how they oppose their opponent",
        "Judge's decision will be final"
      ]
    },
    {
      "id": "TechPirates_TreasureHunt",
      "name": "TECH PIRATES",
      "subtitle": "TREASURE HUNT",
      "description": "This event focuses on the adventure activity in which participants search for hidden objects by the clues, solving puzzles, and completing challenges. The evaluation criteria include time taken, rule adherence, and clue-solving accuracy.",
      "image": "/nectechfest2k25/images/tech_pirates_image.jpg",
      "poster": "/nectechfest2k25/images/tech_pirates_poster.jpg",
      "category": "non-tech",
      "tags": ["TREASURE HUNT", "NON-TECHNICAL", "CIVIL"],
      "date": "2025-03-14",
      "venue": "Survey Lab, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "Civil Engineering Association (CEA)",
      "facultyCoordinator": "Mr. Marimuthu (A/P, Civil)",
      "studentCoordinators": [
        {
          "name": "Shiva Dharshini T",
          "contact": "7845611689"
        }
      ],
      "rules": [
        "A team consists of a minimum of two members and a maximum of four members",
        "Level 1: Find the map with the help of given clues (general)",
        "Level 2: Solve the map, which the team hunted in Level 1",
        "Level 3: Final level – Find the treasure using the answers from Level 2",
        "The first level consists of five clues, each one leading to the next clue",
        "The clues are to be found in a particular order. A team cannot skip a clue. Skipping a clue leads to the disqualification of the team",
        "Do not search for clues in off-limit areas",
        "All the clues of the teams are different and located at different places, but the final destination treasure is the same",
        "The team which finds the treasure is the winner",
        "Decisions taken by the judges will be treated as fair and final"
      ]
    },
    {
      "id": "CodeTwist_Civil",
      "name": "CODE TWIST",
      "subtitle": "Unravelling the Secrets of the Code Book",
      "description": "An engaging quiz competition organized by the Civil Engineering Association. The event consists of three rounds with increasing difficulty: Easy, Moderate, and High.",
      "image": "/nectechfest2k25/images/code_twist_image.jpg",
      "poster": "/nectechfest2k25/images/code_twist_poster.jpg",
      "department": "Civil Association",
      "category": "technical",
      "tags": ["CODE TWIST", "TECHNICAL", "CIVIL"],
      "date": "2025-03-14",
      "venue": "Smart Classroom, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "Civil Engineering Association (CEA)",
      "facultyCoordinator": "Mr. S. Kannan (AP/ Civil)",
      "studentCoordinators": [
        {
          "name": "Harine R",
          "contact": "8248312020"
        }
      ],
      "rules": [
        "Teams of two participants each",
        "Three rounds, each lasting 30 minutes",
        "Hardcopy will be provided for the first round",
        "Multiple-choice questions displayed on a projector for the 2nd and 3rd rounds",
        "A codebook will be provided for reference",
        "Participants must raise their hand to answer within 30 seconds",
        "Each correct answer earns 2 points",
        "Mobile phone use is strictly prohibited during the competition",
        "The team with the highest score wins the competition"
      ]
    },
    {
      "id": "BuildBattle_Civil",
      "name": "BUILD BATTLE",
      "subtitle": "Technical Quiz",
      "description": "Conducting a quiz game based on civil engineering can be a fun and engaging way to test knowledge and promote learning.",
      "image": "/nectechfest2k25/images/build_battle_image.jpg",
      "poster": "/nectechfest2k25/images/build_battle_poster.jpg",
      "department": "Civil Association",
      "category": "technical",
      "tags": ["QUIZ", "TECHNICAL", "CIVIL"],
      "date": "2025-03-15",
      "venue": "CAD Lab, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "Civil Engineering Association (CEA)",
      "facultyCoordinator": "Mr. Gowtham B",
      "studentCoordinators": [
        {
          "name": "Srinithi S",
          "contact": "9629694975"
        }
      ],
      "rules": [
        "A team consists of a minimum of two members and a maximum of three members.",
        "Round 1: The Construction Zone (1 Point) - Based on general topics of civil engineering.",
        "Round 2: Steel Your Knowledge (2 Points) - A technical connection round.",
        "Round 3: Pillars of Success (5 Points) - A technical round with MCQs.",
        "Tie Breaker: Bridge the Gap (1 Point) - Conducted if two teams have the same score.",
        "Do not search for answers on mobile phones or smartwatches.",
        "Teams must not communicate with other teams during the quiz.",
        "Teams are requested to display good team spirit and sportsmanship."
      ]
    },
    {
      "id": "PaperPresentation_Civil",
      "name": "Paper Presentation",
      "subtitle": "A Research-Based Technical Event",
      "description": "This event focuses on the research work of students in Civil Engineering. Participants will present their research findings, followed by a Q&A session. The evaluation criteria include content quality, presentation skills, slide visuals, and performance in Q&A.",
      "image": "/nectechfest2k25/images/paper_presentation_image.jpg",
      "poster": "/nectechfest2k25/images/paper_presentation_poster.jpg",
      "department": "Civil Association",
      "category": "technical",
      "tags": ["PRESENTATION", "TECHNICAL", "CIVIL"],
      "date": "2025-03-14",
      "venue": "Seminar Hall, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "Civil Engineering Association (CEA)",
      "facultyCoordinator": "Dr. V. Kannan (Professor, Civil)",
      "studentCoordinators": [
        {
          "name": "Armuga Parbhu J",
          "contact": "7092682507"
        }
      ],
      "rules": [
        "This event is completely based on the research work of students/participants.",
        "Each team must consist of 2-3 members.",
        "The duration of the presentation is 5-7 minutes, followed by 3 minutes for Q&A.",
        "A minimum of 15 slides is required.",
        "Participants must submit their abstract a day before the presentation."
      ]
    },
    {
      "id": "CadModeling_Civil",
      "name": "Cad Modeling",
      "subtitle": "Craft-Based Technical Event",
      "description": "This event is based on crafting the design based on civil engineering with the software AutoCAD.",
      "image": "/nectechfest2k25/images/CadModeling_Civil.png",
      "poster": "/nectechfest2k25/images/CadModeling_Civil.png",
      "department": "Civil Association",
      "category": "technical",
      "tags": ["modeling", "Technical", "Civil"],
      "date": "2025-03-14",
      "venue": "Cad Lab, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CEA",
      "facultyCoordinator": "Mr. M. Ashok Pandian (AP/Civil)",
      "studentCoordinators": [
        {
          "name": "S. Kumaranatarajan",
          "contact": "9344738380"
        }
      ],
      "rules": [
        "There are 2 rounds in this event.",
        "Round 1: Online - 20 MCQs based on craft and engineering graphics, with a time limit of 20 minutes.",
        "Round 2: CAD designing - A design will be provided, and participants will use provided computers to complete it within 30 minutes."
      ]
    },
    {
      "id": "TeamTango_Civil",
      "name": "TEAM TANGO",
      "subtitle": "WORD GAME",
      "description": "It’s a thrilling word game that challenges you and your friends to create, connect, and conquer words.",
      "image": "/nectechfest2k25/images/TeamTango_Civil.png",
      "poster": "/nectechfest2k25/images/TeamTango_Civil.png",
      "category": "non-tech",
      "tags": ["WORD GAME", "NON-TECHNICAL", "CIVIL"],
      "date": "2025-03-15",
      "venue": "LH3, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CEA",
      "facultyCoordinator": "Mr. KASIRAJAN P",
      "studentCoordinators": [
        {
          "name": "S. AKSHAYA",
          "contact": "8072343772"
        }
      ],
      "rules": [
        "Teams will consist of a minimum of 2 members and a maximum of 4 members.",
        "Each team will be divided into two groups: Group A and Group B. Members of Group A will be given a set of words. Members of Group B will be tasked with identifying the words by receiving one-word clues from their corresponding teammates in Group A.",
        "Total number of rounds: 3.",
        "Each team will be provided with a certain time limit for each round.",
        "The topic will be purely non-technical.",
        "Teams can skip a word and move on to the next one. There is no penalty for skipping a word.",
        "Teams must follow the one-word clue and one-word response format.",
        "Clues should be indirect yet related to the word (e.g., synonym, antonym, association, etc.).",
        "If Group A accidentally says the exact word given to Group B, the point for that word will be forfeited. No additional words or optional words will be provided, and the team must move on to the next word.",
        "The words should not be conveyed through any actions.",
        "A tiebreaker round will be conducted for tied teams.",
        "The team that earns the most points within the given time will be declared the winner."
      ]
    },
    {
      "id": "QuoteOrQuit_Civil",
      "name": "Quote or Quit",
      "subtitle": "Building plan-based technical event",
      "description": "This event focuses on the estimation and planning knowledge of students in Civil Engineering. Participants will quote the rate of the land, and the owners of the land must provide the building plan for the land. The evaluation criteria include accuracy of the plan, the efficient usage of the virtual amount, and Time Management.",
      "image": "/nectechfest2k25/images/QuoteOrQuit_Civil.png",
      "poster": "/nectechfest2k25/images/QuoteOrQuit_Civil.png",
      "department": "Civil Association",
      "category": "technical",
      "tags": ["BID", "PLAN", "TECHNICAL", "CIVIL"],
      "date": "2025-03-15",
      "venue": "Seminar Hall, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CEA",
      "facultyCoordinator": "Ms. S. Harshini (Prof. Civil)",
      "studentCoordinators": [
        {
          "name": "Pavya A",
          "contact": "8056968029"
        }
      ],
      "rules": [
        "Round 1",
        "Duration: 1 hr",
        "Number of participants: 2 to 3 per team",
        "Locations will be displayed on the screen, and participants are asked to quote the correct rate of the location.",
        "The team that quotes the exact or very close to the original amount will be given a point.",
        "Teams who have bought any land will be participating in the second round.",
        "A detailed explanation about the game and a preparation time of about 15 minutes will be provided at the start of the game.",
        "Round 2",
        "Duration: 1 hr",
        "Participants are asked to draw the building plan as they wish for the land they bought.",
        "Mobile phones are strictly not allowed."
      ]
    },
    {
      "id": "TriwizardTruss_Civil",
      "name": "Triwizard Truss",
      "subtitle": "Truss Design and Construction Challenge",
      "description": "Using the materials provided, participants will construct their trusses according to the design specifications. They must ensure that their structure is stable, and all the joints are securely connected. Teams will have a limited amount of time to complete the build, testing their efficiency and teamwork.",
      "image": "/nectechfest2k25/images/TriwizardTruss_Civil.png",
      "poster": "/nectechfest2k25/images/TriwizardTruss_Civil.png",
      "category": "non-tech",
      "tags": ["Non-Technical", "Civil"],
      "date": "2025-03-14",
      "venue": "Soil Lab, Civil Department",
      "registrationLink": "[will be filled up by dev]",
      "organizer": "CEA",
      "facultyCoordinator": "Ms. K. Ramani (AP/Civil)",
      "studentCoordinators": [
        {
          "name": "Haleelur Rahman T",
          "contact": "9965603069"
        }
      ],
      "rules": [
        "The maximum duration to complete the truss design and construction is 30 minutes.",
        "Teams must consist of a minimum of 2 members and a maximum of 3 members.",
        "Materials provided: Ice Sticks, Bamboo Sticks, Gum.",
        "Evaluation Criteria:",
        " - Construction Quality: The precision and durability of the truss construction.",
        " - Load-Bearing Capacity: The maximum load the truss can support without failure."
      ]
    },
    //civil workshop
    {
      "name": "BIM in Civil Engineering",
      "title": "BIM in Civil Engineering",
      "subtitle": "Exploring Building Information Modeling (BIM) in Civil Projects",
      "time": "9:30 AM - 12:30 PM",
      "date": "14/03/2025",
      "organizer": "Civil Engineering Association",
      "category": "workshops",
      "facultyCoordinator": "Mr. K. Marimuthu, AP/Civil",
      "studentCoordinators": [
        { "name": "Soorya V.A", "contact": "8754997131" }
      ],
      "description": "Understanding of BIM fundamentals and software, knowledge of collaboration and data management in BIM, insights into successful BIM implementation in civil engineering projects.",
      "registrationLink": "will be filled up by dev",
      "resourcePerson": {
        "name": "Mr. K. Marimuthu",
        "image": "/nectechfest2k25/images/CEA_Workshops_BIM.png",
        "designation": "Assistant Professor",
        "organization": "NEC Faculty",
        "bio": "Mr. K. Marimuthu is an Assistant Professor in the Civil Engineering department at National Engineering College. With extensive experience in the field, he specializes in building information modeling (BIM) and has led several civil engineering projects involving BIM for efficient project management and design.",
        "expertise": ["BIM", "Civil Engineering"],
        "link": "https://vidwan.inflibnet.ac.in/profile/211457"
      },
      
      "venue": "CAD Lab, Civil Department",
      "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
    },
    {
      "name": "AI Applications in Civil Engineering",
      "title": "AI Applications in Civil Engineering",
      "subtitle": "Exploring the Role of AI in Civil Engineering Design and Construction",
      "time": "9:30 AM - 12:30 PM",
      "date": "15/03/2025",
      "organizer": "Civil Engineering Association",
      "category": "workshops",
      "facultyCoordinator": "Mr. V. Arulpandian, AP/Civil",
      "studentCoordinators": [
        { "name": "T. Yuvasri", "contact": "9080178579" }
      ],
      "description": "This interactive workshop explores the exciting applications of Artificial Intelligence (AI) in Civil Engineering. Participants will discover how AI can transform the design, construction, and maintenance of infrastructure projects, improving efficiency, safety, and sustainability.",
      "registrationLink": "will be filled up by dev",
      "resourcePerson": {
        "name": "Mr. V. Arulpandian",
        "image": "/nectechfest2k25/images/CEA_Workshops_AI.jpg",
        "designation": "Assistant Professor",
        "organization": "NEC Faculty",
        "bio": "Mr. V. Arulpandian is an Assistant Professor in the Civil Engineering department at National Engineering College. He specializes in the application of Artificial Intelligence in civil engineering and has been a part of several projects that leverage AI for smarter infrastructure solutions.",
        "expertise": ["AI", "Civil Engineering", "Remote Sensing", "GIS"],
        "link": "https://vidwan.inflibnet.ac.in/profile/211457"
      },
      
      "venue": "CAD Lab, Civil Department",
      "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
    },
    {
      "name": "Standard Penetration Test",
      "title": "Standard Penetration Test",
      "subtitle": "A Comprehensive Overview of the Standard Penetration Test in Geotechnical Engineering",
      "time": "9:30 AM - 12:30 PM",
      "date": "15/03/2025",
      "organizer": "Civil Engineering Association",
      "category": "workshops",
      "facultyCoordinator": "Mrs. M. Balamaheswari, AP/Civil",
      "studentCoordinators": [
        { "name": "Vasanth M", "contact": "9345508862" }
      ],
      "description": "This workshop provides a comprehensive overview of the Standard Penetration Test (SPT), a widely used in-situ testing method for determining the geotechnical properties of soils. Participants will learn about the principles, procedures, and applications of SPT, including test equipment, sampling methods, and data interpretation.",
      
      "resourcePerson": {
        "name": "Mrs. M. Balamaheswari",
        "image": "/nectechfest2k25/images/CEA_Workshops_SPT.jpg",
        "designation": "Assistant Professor",
        "organization": "NEC Faculty",
        "bio": "Mrs. M. Balamaheswari is an Assistant Professor in the Civil Engineering department at National Engineering College. She specializes in geotechnical engineering and has extensive experience in soil testing techniques, including the Standard Penetration Test (SPT).",
        "expertise": ["Soil Testing", "Geotechnical Engineering", "SPT"],
        "link": "https://vidwan.inflibnet.ac.in/profile/211457"
      },
      
      "venue": "Data Analytics Lab",
      "video": "/nectechfest2k25/images/Workshop_venue_video.mp4"
    },
    
      {
        id: "Devfest_aids",
        name: "Devfest",
        subtitle: "Data Exploration & Visualization",
        description:
          "Devfest is the ultimate event for diving into the world of data exploration and visualization! Participants will explore innovative techniques for analyzing complex datasets and transforming them into clear, visually impactful insights.",
        image: "/nectechfest2k25/images/Devfest.jpg",
        poster: "/nectechfest2k25/images/Devfest.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["DATA SCIENCE", "TECHFEST", "AI"],
        date: "2025-03-14",
        startingtime: "1:15 PM",
        venue: "Data Analytics Lab",
        registrationLink: ["will be filled up by dev"],
        organizer: " AI&DS Association ",
        facultyCoordinator: "Ms. P. Rampriya, AP/AI&DS",
        studentCoordinators: [
          {
            name: "Malaiarasu G",
            contact: "8270484867",
          },
        ],
        rules: [
          "Team Size: 1-2 members",
          "Challenge: Question in the domain of Data Science, Deep Learning, & Machine Learning with sample code references.",
          "Language: Python",
          "No Online Code Editors: Use offline environments only",
          "Evaluation: Implementation",
          "Quality of the solution",
          "Explanation: Clarity of approach",
        ],
      },
    
      {
        id: "AI Builders Sprint_aids",
        name: "AI Builders Sprint",
        subtitle: "Generative AI Hackathon",
        description:
          "AI Builder Sprint is a high-energy, Gen AI-focused hackathon where participants create innovative solutions using the latest generative AI technologies. Teams will compete to build AI-driven applications using language models, image generation tools, and more.",
        image: "/nectechfest2k25/images/AI Builders Sprint.jpg",
        poster: "/nectechfest2k25/images/AI Builders Sprint.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["AI", "HACKATHON", "GENERATIVE AI"],
        date: "2025-03-14",
        startingtime: "1:15 PM",
        venue: "AI Lab",
        registrationLink: ["will be filled up by dev"],
        organizer: "AI Club",
        facultyCoordinator: "Ms.K.Poorani, AP/AI&DS",
        studentCoordinators: [
          {
            name: "E.Vignesh",
            contact: "8286354549",
          },
        ],
        rules: [
          "Teams can have 1 to 3 members.",
          "Projects must be based on text-based or image-based LLMs.",
          "Ideas should be innovative, practical, and demonstrate clear use of LLMs.",
          "Judging will be based on innovation (40%), functionality (30%), implementation (20%), and presentation (10%).",
          "Projects must be completed and submitted within the 3-hour timeframe.",
        ],
      },
    
      {
        id: "Unfold Chronicles of Data_aids",
        name: "Unfold Chronicles of Data",
        subtitle: "Data Science Case Study",
        description:
          "Unleash the power of coding in this thrilling data science showdown! Participants will receive a real-world scenario and a CSV dataset, analyze data, and provide innovative solutions—all using code.",
        image: "/nectechfest2k25/images/Unfold Chronicles of Data.jpg",
        poster: "/nectechfest2k25/images/Unfold Chronicles of Data.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["DATA SCIENCE", "CASE STUDY", "PYTHON"],
        date: "2025-03-14",
        startingtime: "3:15 PM",
        venue: "Deep Learning Lab",
        registrationLink: ["will be filled up by dev"],
        organizer: "AI&DS Association",
        facultyCoordinator: "Ms. P. Rampriya, AP/AI&DS",
        studentCoordinators: [
          {
            name: "Malaiarasu G",
            contact: "8270484867",
          },
        ],
        rules: [
          "Team Size: 1-2 members per team.",
          "No online code editors are allowed. Code must be written and executed locally.",
          "Programming Language: Python.",
          "Personal laptops are allowed.",
          "Evaluation Criteria:",
          "Innovation: Originality and creativity in solving the problem.",
          "Presentation: Clarity and effectiveness in presenting the project.",
          "Accuracy: Correctness and precision of the solution",
        ],
      },
      {
        id: "Connexion_aids",
        name: "Connexion",
        subtitle: "Team-Based Logic Event",
        description:
          "Get ready to connect ideas and collaborate in this exciting event! Participants will team up to tackle challenges and create innovative solutions.",
        image: "/nectechfest2k25/images/Connexion.jpg",
        poster: "/nectechfest2k25/images/Connexion.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["LOGIC", "TEAMWORK", "TECH"],
        date: "2025-03-14",
        startingtime: "3:15 PM",
        venue: "Seminar Hall",
        registrationLink: ["will be filled up by dev"],
        organizer: " AI&DS Association",
        facultyCoordinator: "Ms. P. Rampriya, AP/AI&DS",
        studentCoordinators: [
          {
            name: "Malaiarasu G",
            contact: "8270484867",
          },
        ],
        rules: [
          "Phones must be submitted before the event starts.",
          "Top scorers from Round 1 will move to Round 2.",
          "Team Size: 2",
          "The highest scorer wins the competition.",
        ],
      },
    
      {
        id: "Listen and Identify_aids",
        name: "Listen and Identify",
        subtitle: "Music and Rhythm Challenge",
        description:
          "Team up for an exciting musical journey in Harmony Quest! This non-technical event invites duos to showcase their creativity, rhythm, and passion for music. No experience needed—just bring your love for melody and let the fun begin!",
        image: "/nectechfest2k25/images/Listen and Identify.jpg",
        poster: "Listen and Identify.jpg",
        category: "non-tech",
        tags: ["MUSIC", "CREATIVITY", "ENTERTAINMENT"],
        date: "2025-03-14",
        startingtime: "3:15 PM",
        venue: "AI Lab",
        registrationLink: ["will be filled up by dev"],
        organizer: " AI&DS Association",
        facultyCoordinator: "Ms. P. Rampriya, AP/AI&DS",
        studentCoordinators: [
          {
            name: "Malaiarasu G",
            contact: "8270484867",
          },
        ],
        rules: [
          "Each team (2 members) can bring only 1 phone for use.",
          "The event has three rounds.",
          "Teams will listen to audio clips and identify sounds, voices, or music.",
          "Negative marks will be applied in all rounds for wrong answers.",
          "he team with the highest total score wins.",
        ],
      },
    
    
      {
        id: "AI Product Demo_aids",
        name: "AI Product Demo",
        subtitle: "AI Paper/Project Expo",
        description:
          "Present your cutting-edge AI research or projects at the AI Paper/Project Expo. Share innovative solutions, spark discussions, and gain valuable feedback from experts and peers.",
        image: "/nectechfest2k25/images/ai_product_demo.jpg",
        poster: "/nectechfest2k25/images/ai_product_demo.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["AI", "Research", "Projects", "Innovation"],
        date: "2025-03-15",
        startingtime: "1:15 PM",
        venue: "Lecture Hall",
        registrationLink: ["will be filled up by dev"],
        organizer: " AI Club ",
        facultyCoordinator: "Ms.K.Poorani, AP/AI&DS",
        studentCoordinators: [
          {
            name: " E.Vignesh ",
            contact: "8286354549",
          },
        ],
    
        rules: [
          "Teams can have 1-2 members.",
          "Ideas must be in the domain of AI, ML, or DL.",
          "Participants can present either ideas or a project demo.",
          "Communication must be in English.",
          "Extra marks will be given if participants present both ideas and a project demo (prototype accepted).",
          "Evaluation will be based on Idea Uniqueness, Body Language, and Presentation Skill.",
        ],
      },
      {
        id: "AI Thought Craft_aids",
        name: "AI Thought Craft",
        subtitle: "AI-Powered Storytelling",
        description:
          "Participants will create 45 to 60-second advertisement videos using AI, combining their imagination with cutting-edge tools. They’ll experiment with innovative techniques and learn how AI enhances storytelling.",
        image: "/nectechfest2k25/images/AI Thought Craft.jpg",
        poster: "/nectechfest2k25/images/AI Thought Craft.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["AI", "CREATIVITY", "VIDEO"],
        date: "2025-03-15",
        startingtime: "1:15 PM",
        venue: "AI Lab",
        registrationLink: ["will be filled up by dev"],
        organizer: " AI&DS Association ",
        facultyCoordinator: "Ms. P. Rampriya, AP/AI&DS",
        studentCoordinators: [
          {
            name: "Malaiarasu G",
            contact: "8270484867",
          },
        ],
        rules: [
          "Team size: Maximum of 2 members per team.",
          "AI tools only for video generation.",
          "Video length: 45 to 60 seconds long.",
          "Original content – No plagiarism or pre-made videos.",
          "Technical setup responsibility: Participants must handle their own setup and ensure everything works smoothly.",
        ],
      },
    
      {
        id: "Act and React_aids",
        name: "Act and React",
        subtitle: "Tech Charades",
        description:
          "Explore the dynamic interplay of actions and reactions in AI and interactive systems at Act and React. Design and experiment with real-time AI applications that respond to stimuli, actions, and user input.",
        image: "/nectechfest2k25/images/act_and_react.jpg",
        poster: "/nectechfest2k25/images/act_and_react.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["AI", "Interactive Systems", "Automation", "Chatbots"],
        date: "2025-03-15",
        startingtime: "3:15 PM",
        venue: "Seminar Hall",
        registrationLink: ["will be filled up by dev"],
        organizer: "AI&DS Association",
        facultyCoordinator: "Ms. P. Rampriya, AP/AI&DS",
        studentCoordinators: [
          {
            name: "Malaiarasu G",
            contact: "8270484867",
          },
        ],
        rules: [
          "Team size: 2 members.",
          "Only actions allowed – No words or sounds.",
          "Total rounds: 2.",
          "Teams must act out given scenarios while the other member reacts accordingly.",
        ],
      },
      {
        id: "Adventure Hunt_aids",
        name: "Adventure Hunt",
        subtitle: "Online Treasure Hunt",
        description:
          "Embark on an exciting treasure hunt with a tech twist! Participants will navigate through AI-powered clues and challenges, testing problem-solving skills.",
        image: "/nectechfest2k25/images/Adventure Hunt.jpg",
        poster: "/nectechfest2k25/images/Adventure Hunt.jpg",
        department: "AI&DS Association",
        category: "Technical",
        tags: ["PUZZLE", "AI", "TEAMWORK"],
        date: "2025-03-15",
        startingtime: "3:15 PM",
        venue: "AI Lab",
        registrationLink: ["will be filled up by dev"],
        organizer: " AI&DS Association ",
        facultyCoordinator: "Ms. P. Rampriya, AP/AI&DS",
        studentCoordinators: [
          {
            name: "Malaiarasu G",
            contact: "8270484867",
          },
        ],
    
        rules: [
          "This event consists of two rounds",
          "Team of 2 members ",
          "Laptops mandatory",
        ],
      },
    
    //cse Technical
    
      {
        id: "Paper Presentation",
        name: "Paper Presentation",
        subtitle: "Showcase Your Research on Emerging Tech",
        description:
          "Present your research on the latest computer science technologies and contribute to the future of digital transformation. Inspire the audience with groundbreaking ideas and innovative solutions.",
        image: "/nectechfest2k25/images/paperpresentation.jpg",
        poster: "/nectechfest2k25/images/paperpresentation.jpg",
        department: "CSE Association",
        category: "Technical",
        tags: ["Research", "Innovation", "Technology"],
        date: "2025 - 03 - 14",
        startingTime: "9:30 AM",
        venue: "APJ Lab, CVR Lab, F7 Hall, F12 Hall/CSE",
        registrationLink: "[will be filled up by dev]",
        organizer: "CSEA",
        facultyCoordinator: "Ms. Kanthimathi M",
        studentCoordinators: [
          {
            name: "Sunil Kumar S",
            contact: "9345591735",
          },
          {
            name: "Uma Maheswari S",
            contact: "8667281369",
          },
        ],
        rules: [
          "Each team must have 2 members.",
          "Presentation time: 4 minutes, followed by a 2-minute Q&A session.",
          "Topics must be focused on emerging computer science technologies.",
          "Judges’ decision is final.",
          "PPT submission deadline: 19th February 2025.",
        ],
      },
      {
        id: "War of UI/UX",
        name: "War of UI/UX",
        subtitle: "Design with Precision and Creativity",
        description:
          "Compete in a high-intensity UI/UX challenge where designers craft user-centric interfaces based on a surprise theme. Showcase your creativity and problem-solving skills using Figma or similar tools.",
        image: "/nectechfest2k25/images/warofuiux.jpg",
        poster: "/nectechfest2k25/images/warofuiux.jpg",
        department: "CSE Association",
        category: "Technical",
        tags: ["UI/UX", "Design", "Creativity"],
        date: "2025 - 03 - 14",
        startingTime: "1.15 PM",
        venue: "CISCO Lab, RM Lab/CSE",
        registrationLink: "[will be filled up by dev]",
        organizer: "CSEA",
        facultyCoordinator: "Ms. Vazhan Arul Santhiya R",
        studentCoordinators: [
          {
            name: "Dinesh Ram A",
            contact: "7339045995",
          },
          {
            name: "Jaya Chithra N",
            contact: "7598661869",
          },
        ],
        rules: [
          "Top 5 should present their work.",
          "Individual participation only.",
          "Participants must bring their own laptops and design using tools of their choice.",
          "AI-based design generators are discouraged.",
          "Strict 45-minute time limit; no extensions.",
          "Judges’ decision is final.",
        ],
      },
      {
        id: "Code Cool",
        name: "Code Cool",
        subtitle: "The Ultimate Coding Face-Off",
        description:
          "A team-based coding competition testing logic, speed, and adaptability. Navigate intense rounds, including Code Relay and Blind Coding, to prove your problem-solving prowess.",
        image: "/nectechfest2k25/images/codecool.jpg",
        poster: "/nectechfest2k25/images/codecool.jpg",
        department: "CSE Association",
        category: "Technical",
        tags: ["Coding", "Logic", "Teamwork"],
        date: "2025 - 03 - 14",
        startingTime: "1.15 PM",
        venue: "ICL Lab, IBM Lab/CSE",
        registrationLink: "[will be filled up by dev]",
        organizer: "CSEA",
        facultyCoordinator: "TBA",
        studentCoordinators: [
          {
            name: "Jesintha Sharon S",
            contact: "6379010034",
          },
          {
            name: "Karan S",
            contact: "9566791735",
          },
        ],
        rules: [
          "Teams must have 2 members.",
          "Code Relay: Teammates switch coding every 5 minutes without communication.",
          "Blind Coding: Participants code without monitor visibility.",
          "Ranking based on accuracy and speed.",
          "Any malpractice results in immediate disqualification.",
        ],
      },
      {
        id: "promptengineering",
        name: "Prompt Engineering",
        subtitle: "The Battle Between Prompts",
        description:
          "Test your AI expertise in a two-round challenge designed to push the boundaries of prompt engineering. Compete in a knowledge-packed quiz and tackle real-world AI problem-solving scenarios.",
        image: "/nectechfest2k25/images/promptengineering.jpg",
        poster: "/nectechfest2k25/images/promptengineering.jpg",
        department: "CSE Association",
        category: "Technical",
        tags: ["AI", "Prompt Engineering", "Problem-Solving"],
        date: "2025 - 03 - 15",
        startingTime: "1.15 PM",
        venue: "CISCO Lab, RM Lab/CSE",
        registrationLink: "[will be filled up by dev]",
        organizer: "CSEA",
        facultyCoordinator: "Ms. Vazhan Arul Santhiya R",
        studentCoordinators: [
          {
            name: "Jeremiah Sampitch W",
            contact: "8754670308",
          },
          {
            name: "Subalakshmi A",
            contact: "8825769163",
          },
        ],
        rules: [
          "Individual participation only.",
          "Round 1: 40-question MCQ quiz on AI tools and prompt engineering.",
          "Round 2: AI-driven problem-solving challenge with progressive unlocking of tasks.",
          "No AI tools allowed in Round 1; any AI tool permitted in Round 2.",
          "Winners are those who unlock the final challenge first.",
        ],
      },
      {
        id: "techquizfaceoff",
        name: "Tech Quiz Face-Off",
        subtitle: "Battle of Technical Brilliance",
        description:
          "A high-energy, three-round quiz competition testing technical expertise, logical reasoning, and problem-solving skills. Engage in fast-paced rounds and emerge victorious!",
        image: "/nectechfest2k25/images/techquizfaceoff.jpg",
        poster: "/nectechfest2k25/images/techquizfaceoff.jpg",
        department: "CSE Association",
        category: "Technical",
        tags: ["Quiz", "Tech Knowledge", "Problem-Solving"],
        date: "2025 - 03 -14",
        startingTime: "3.15 PM",
        venue: "CISCO Lab/CSE",
        registrationLink: "[will be filled up by dev]",
        organizer: "CSEA",
        facultyCoordinator: "TBA",
        studentCoordinators: [
          {
            name: "Dhana Karthick S",
            contact: "7339293929",
          },
          {
            name: "Princy Selvarani A",
            contact: "7010570442",
          },
        ],
        rules: [
          "Teams of 2 members allowed.",
          "Round 1: Online quiz with 25 MCQs.",
          "Round 2: 10 clue-based questions by identifying connections.",
          "Round 3: 10 Buzzer round questions with high-stakes challenges.",
          "Negative marking applies in the final round.",
        ],
      },
    
    
      
      
    
    
    
    
    
  
];

// Custom hook for managing events
export const useEvents = () => {
  const getEventsByDepartment = (deptId) => {
    const dept = departments.find(d => d.id === deptId);
    const deptName = dept ? dept.name : deptId;
    return events.filter((event) => event.department === deptName);
  };

  const getEventsByCategory = (categoryId) => {
    return events.filter((event) => event.category === categoryId);
  };

  const getEventsByTag = (tag) => {
    return events.filter((event) => event.tags.includes(tag));
  };

  const getEventsById = (id) => {
    const event = events.find((event) => event.id == id);
    return event;
  };

  const searchEvents = (query) => {
    return events.filter(
      (event) =>
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase())
    );
  };
  const getWorkshopByTitle = (title) => {
    const event = events.find((event) => event.title == title);
    return event;
  }

  return {
    events,
    departments,
    tags,
    getEventsById,
    getEventsByDepartment,
    getEventsByCategory,
    getEventsByTag,
    searchEvents,
    getWorkshopByTitle,
  };
};

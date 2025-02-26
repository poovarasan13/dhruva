const cse = {
  id: 1,
  departmentName: "Department of Computer Science and Engineering",
  cardName: "Computer Science and Engineering",
  shortName: "CSE",
  technicalEventCount: 7,
  nonTechnicalEventCount: 3,
  workshop: 4,
  departmentDescription:
    "Dhruva 2025 technical festival organized by the Computer Science and Engineering department to showcase innovation, creativity, and technical excellence. It provides a platform for students to enhance their technical skills, compete in exciting challenges, and engage with industry experts. We will be hosting 3 workshops, 5 technical events and 2 non-technical events, and designed to be informative and engaging for students, faculty, and industry professionals.",
  coordinatorName: "Dr.V.Vignesh / ASP",
  coordinatorContactPhone: "9894642277",
  coordinatorEmail: "vignesh.v@kce.ac.in",
  events: [
    {
      posterUrl: "",
      eventName: "Hackathon",
      eventType: "Hackathon",
      eventSubType: "Technical",
      eventTime: "1:00 PM – 4:30 PM",
      eventDescription: "Join our AI/ML Hackathon and unleash your creativity in artificial intelligence! Build innovative solutions, collaborate with tech enthusiasts, and solve real-world challenges using AI and ML. Compete for exciting prizes, gain hands-on experience. Innovate, Build, Transform!",
      eventRules: [
          	"Team Size: Each team must have exactly 4 members; no individual participation.Offline Development: All coding must be done offline within the given duration. No pre-built solutions.",
  	        "Resources Allowed: Open-source libraries and APIs are permitted but must be disclosed.",
  	        "Submission & Judging: Projects must be submitted before the deadline and judged on innovation, implementation, impact, functionality, theme adherence, and code quality.",
   	        "Live Demo: Teams must present a live demo of their project to the judges.",    
   	         "Professional Conduct: Respect all participants, mentors, and organizers. Projects must be unique. Judges’ decisions are final."
      ],
      eventVenue: "Academic Hall 2",
      eventRounds: [
        "Round 1: Preliminary Round : Participants will answer 25 multiple-choice questions (MCQs) covering C, Java, and Python.Only the top performers will advance to the next round.",
        "Round 2: Technical & Puzzle Solving : Shortlisted participants will face 15 questions, including: Technical Image Interpretation : Puzzle Solving Challenges Only the best problem-solvers will move to the final round.",
        "Round 3: The Ultimate Challenge : The final round consists of 10 high-level MCQs, including: 5 Output-Based Questions 5 Hard-Level Conceptual MCQs",

      ],
      eventPrize: [
        "The winner will receive a prize of Rs. 3000, while the runner will receive a prize of Rs.2000.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Ms.Mariyammal C",
        contact: "8667676119",
      },
      studentCoordinator: [
        {
          name: "Deepakkumar S",
          contact: "9087729108",
        },
        {
          name: "Gajendran A",
          contact: "9944919805",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Workshop on Industrial 4.0",
      eventType: "Workshop",
      eventSubType: "WorkShop",
      eventTime: "11:30 AM - 01:00 PM",
      eventDescription:
        "The primary goal of this workshop is to familiarize aspiring engineers with both conceptual and practical knowledge of Industry 4.0. It covers smart manufacturing, automation, IoT, AI, and data-driven technologies, preparing participants for the future of industrial innovation.",
      eventRules: [],
      eventVenue: "ACADEMIC HALL 2",
      eventRounds: [],
      eventPrize: [],
      eventStaffCoordinator: {
        name: "Mr.Venkatesh",
        contact: "9976730649",
        
      },
      studentCoordinator: [
        {
          name: "Prisha K",
          contact: "9042373480",
        },
        {
          name: "Logeshwari I ",
          contact: "9750000990",
        },
      ],
    },
    {
      posterUrl: "",
      eventThumbnail: "",
      eventName: "Workshop on AI and Machine Learning",
      eventType: "Workshop",
      eventSubType: "WorkShop",
      eventTime: "11:30 AM - 01:00 PM",
      eventDescription:
        "The primary goal of this workshop is to familiarize aspiring engineers with both conceptual and practical knowledge of Artificial Intelligence and Machine Learning. It covers core concepts, algorithms, real-world applications, and hands-on implementation to enhance AI skills.",
      eventRules: [],
      eventVenue: "ACADEMIC HALL 1",

      eventRounds: [],
      eventPrize: [],
      eventStaffCoordinator: {
        name: "Ms. Vidya Prabha C V /AP",
        contact: "9894580726 ",
      },

      studentCoordinator: [
        {
          name: "Nikitha X",
          contact: "9003975405",
        },
        {
          name: "Logaprasath S",
          contact: "809865227",
        },
      ],
    },
    {
      posterUrl: "",
      eventThumbnail: "",
      eventName: "Workshop on Web Development with ReactJS",
      eventType: "Workshop",
      eventSubType: "WorkShop",
      eventTime: "1:00 PM - 02:30 PM",
      eventDescription:
        "The primary goal of this workshop is to familiarize aspiring engineers     with both conceptual and practical knowledge on Web Development using ReactJS.",
      eventRules: [],
      eventVenue: "AT LAB",

      eventRounds: [],
      eventPrize: [],
      eventStaffCoordinator: {
        name: "Dr. Kala",
        contact: "9944628403",
      },

      studentCoordinator: [
        {
          name: "Godwin V ",
          contact: "8610214284",
        },
        {
          name: "Poothesh M",
          contact: "7339396268",
        },
      ],
    },
    {
      posterUrl: "",
      eventThumbnail: "",
      eventName: "Workshop on Photoshop",
      eventType: "Workshop",
      eventSubType: "WorkShop",
      eventTime: "01:00 PM - 02:30 PM",
      eventDescription:
        "The primary goal of this workshop is to familiarize aspiring designers with both conceptual and practical knowledge of Adobe Photoshop. It covers essential tools, image editing techniques, graphic design principles, and hands-on projects to enhance creativity and digital design skills.",
      eventRules: [],
      eventVenue: "IBM LAB",

      eventRounds: [],
      eventPrize: [],
      eventStaffCoordinator: {
        name: "Ms.Jasmine J ",
        contact: "8778174797",
      },

      studentCoordinator: [
        {
          name: "Venkatesh Ram M",
          contact: "9500754471",
        },
        {
          name: "Siva Pazhani S",
          contact: "6383820988",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Paper Presentation",
      eventType: "Technical",
      eventSubType: "Technical",
      eventTime: "9:30 AM – 11:00 AM",
      eventDescription:
        "Join us for an exciting Paper Presentation event, where participants will showcase their research, technical expertise, and innovative ideas. This event provides a platform for aspiring professionals to present their papers and gain insights through discussions.",
      eventVenue: "Academic Hall(A1,A2)",
      eventRules: [
        "Team Size: 4 members per team.",
"Presentation Time: Each team will be given a specific time slot.",
"Evaluation Criteria: Clarity, Innovation, Research Depth, and Presentation Skills.",
"Paper Presentation Titles: Participants can choose their own topics.",
      ],
      eventRounds: [],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000",
        " while the runner-up will receive a prize of Rs. 750. ",
        "All participants will receive a participation certificate.",
      ],
      eventStaffCoordinator:
        {
          name: "Dr.Muthanantha Murugavel, Dr.Kala R  ",
          contact: "9894839142",
        },
      studentCoordinator: [
        {
          name: "Ms. Shakthi R ",
          contact: "9080574783",
        },
        {
          name: "Ms.Swetha VL",
          contact: "8778446726",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Project Presentation",
      eventType: "Technical",
      eventSubType: "Technical",
      eventTime: "11:00 AM to 12:30 PM",
      eventDescription:
        "Join us for an exciting Project Presentation event, where participants will showcase their innovations through live demos. With 5-10 minutes per team, PPTs with hands-on presentations and a project summary. Prizes await the best explanations and responses to judges' queries!",
      eventRules: [
        "Team Size: 1-4 members per team.",
        "Presentation Time: Each team will be allotted 5-10 minutes for the live demonstration.",
        "Evaluation Criteria: Project Explanation, Innovation, Practical Implementation, and Responses to Queries."
      ],
      eventVenue: "C-block / Room No. : C- 203, C 202",
      eventRounds: [],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Dr.S.Sangeetha, Dr. J Jasmine",
        contact: "9962008892",
      },
      studentCoordinator: [
        {
          name: "Karuna Prakash",
          contact: "9443662898",
        },
        {
          name: "Ajmal Khan",
          contact: "8807125196",
        }
      ],
    },
    {
      posterUrl: "",
      eventName: "Code Relay",
      eventType: "Technical",
      eventSubType: "Technical",
      eventTime: "02:00 PM – 03:30 PM",
      eventDescription:
        "Code Relay is a thrilling, team-based coding challenge that tests both individual skills and seamless collaboration. Each team must complete a solution within a structured relay format: Phase 1: The first coder writes the initial half of the solution within a set time (20-30 minutes). Phase 2: The second coder takes over, continuing from where their teammate left off to complete the solution. Communication Rule:  Team members cannot discuss their approach while coding. The handoff relies entirely on code readability and comments. Judging criteria include correctness, number of test cases passed, and code efficiency. Prepare to put your coding and teamwork skills to the ultimate test",
      eventRules: [
        "Team Size: 2 members per team.",
      ],
      eventVenue: "C-block / Communication Lab",
      eventRounds: [
        "Round 1 : Selection Round.",
        "Round 2 : Final Round."
      ],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Mr. Venkatesh R /AP",
        contact: "9976730649",
      },
      studentCoordinator: [
        {
          name: "Darshaan S P",
          contact: "9894111211",
        },
        {
          name: "Jaivant S B",
          contact: "7904055151",
        }
      ],
    },
    {
      posterUrl: "",
      eventName: "Technical Quiz ",
      eventDepartement: "Department Of Computer Science And Engineering",
      eventType: "Technical",
      eventSubType: "Technical",
      eventTime: "02:00 PM – 03:00 PM",
      eventDescription: "Join us for an exciting Tech Quiz, where participants will test their programming knowledge, problem-solving skills, and logical reasoning. This event challenges aspiring tech enthusiasts with multiple rounds of MCQs, puzzles, and output-based questions, providing a platform to showcase their technical expertise and analytical thinking.",
      eventRules: [],
      eventVenue: "C-block / Room No: C204",
      eventRounds: [
        "Round 1: Preliminary Round : Participants will answer 25 multiple-choice questions (MCQs) covering C, Java, and Python.Only the top performers will advance to the next round.",
        "Round 2: Technical & Puzzle Solving : Shortlisted participants will face 15 questions, including: Technical Image Interpretation : Puzzle Solving Challenges Only the best problem-solvers will move to the final round.",
        "Round 3: The Ultimate Challenge : The final round consists of 10 high-level MCQs, including: 5 Output-Based Questions 5 Hard-Level Conceptual MCQs",

      ],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Ms.Vidya Prabha C V / AP",
        contact: "9894580726",
      },
      studentCoordinator: [
        {
          name: "Vishaal S S",
          contact: "9566521094",
        },
        {
          name: "ManoKarthick",
          contact: "9047178491",
        },
      ],
    },
    
    {
      posterUrl: "",
      eventName: "Anime IQ",
      eventType: "Non-Technical",
      eventSubType: "NonTechnical",
      eventTime: "1:30 PM – 3:00PM",
      eventDescription: " Join us for Anime IQ, the ultimate quiz challenge for anime enthusiasts! Test your knowledge across different anime series in a thrilling competition that will push your memory and expertise to the limit and prove you're the ultimate anime expert!",
      eventRules: ["Solo participation only (Maximum of 1 member per team)",
                "Accuracy and speed matter—think fast and answer wisely!"],
      eventVenue: "C-block/Room No.C108",
      eventRounds: ["Round 1 : Sort listing", "Round 2 : Final round."],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Ms.Nalini AP/CS",
        contact: "96779 61781",
      },
      studentCoordinator: [
        {
          name: "Akshayaharshitha K S",
          contact: "9342767035 ",
        },
        {
          name: "Kanisma R",
          contact: "8428781207",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Content Creation",
      eventType: "Non-Technical",
      eventSubType: "NonTechnical",
      eventTime: "1:30 PM - 03:00 PM",
      eventDescription: " Join our Content Creation Photography & Filmmaking and compete in the, where creativity meets storytelling! Learn to capture and edit stunning photos and videos, then put your skills to the test in a team-based competition. With a set time limit, showcase originality and editing talent for a chance to win cash prizes!",
      eventRules: [
       "On-Spot Capture & Editing:Teams must capture and edit photos/videos within the college premises within the given time.",
      "Capture & Editing: 1 hour for photography, videography, and editing.",
      "Rules & Submission:Use only smartphones or cameras.Editing must be done on-spot using mobile/laptop software (no pre-edited content).All submissions must be original; plagiarism leads to disqualification.",
      "Each team submits:One best photo (JPEG/PNG).One best video (35-45 sec, MP4)."
      ],
      eventVenue: "C-Block / Room No:C103",
      eventRounds: ["All teams participate within the given time frame.Judges evaluate entries based on creativity, composition, storytelling, and editing quality."],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Mr. Antony Vijay",
        contact: "9626444469",
      },
      studentCoordinator: [
        {
          name: "Monish M",
          contact: "8667541251",
        },
        {
          name: "Vedesh A",
          contact: "9944940460 ",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Mr and Ms Aura",
      eventType: "Non-Technical",
      eventSubType: "NonTechnical",
      eventTime: "10:00 AM - 4:00 PM",
      eventDescription: " Join us for the exciting Mr. and Miss Aura event, where participants will showcase their confidence, creativity, expression, and spontaneity. This event provides a platform for individuals to express their true selves and boost their confidence.",
      eventRules: [
        "Team Size: An Individual",
        "Rounds: 4 engaging rounds with eliminations.",
        "Evaluation Criteria: Confidence, Creativity, Expression, and Spontaneity.",    
      ],
      eventVenue: "C104,C102, Academic Hall(A2)",
      eventRounds: [
        "Round 1: ACT IT OUT- Participants will pick a random scenario or emotion.They must act it out using expressions and gestures.",
        "Round 2: THE CRAZY QUESTION ROUND-Participants get a random, funny question and must respond in 10 seconds with full confidence.",
        "Round 3: DARE TO BE BOLD-Participants spin a wheel and must complete the dare with full confidence.",
        "Round  4:  THE HILARIOUS PITCH-Participants are given a random, absurd object.They must pitch it like a real salesperson and make the judges want to \"buy\" it.",
      ],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Dr.Muthanantha Murugavel, Dr.Sangeetha",
        contact: "9894839142",
      },
      studentCoordinator: [
        {
          name: "Kirithik J",
          contact: "9514422999",
        },
        {
          name: "Raghav S",
          contact: "9952635355",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Bug Smash",
      eventType: "Technical",
      eventSubType: "Technical",
      eventTime: "10.30 AM -12.00PM",
      eventDescription: "Hunt the Bugs, Fix the Code! Join us for Bug Smash, an electrifying debugging challenge where precision, logic, and coding expertise will set you apart! If you have keen eye for spotting errors and a knack for fixing broken code, this is your moment to shine!",
      eventRules: ["Team Size: Maximum of 2 members per team.",
"Think logically, debug efficiently, and compete to be the best!"],
      eventVenue: "C-block/AT lab",
      eventRounds: ["Round 1: Preliminary Round : Teams will tackle 15 multiple-choice questions on C and Java, testing their knowledge of programming concepts and debugging techniques.",
                    "Final Round: Shortlisted teams will advance to face more complex challenges, where precision and problem-solving speed will determine the winners!"],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "MS.Rajapriya D",
        contact: "7373013000",
      },
      studentCoordinator: [
        {
          name: "Denishree L",
          contact: "9500472693",
        },
        {
          name: "Akilesh D",
          contact: "9994076307",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "PromptX",
      eventType: "Technical",
      eventSubType: "Technical",
      eventTime: "11.30 AM – 01.00 PM",
      eventDescription: "The event consists of three rounds. In the preliminary round, participants will be given a theme and must generate an image within 15 minutes. In the elimination round, participants will be required to generate a specific text within 3 prompts. In the final round, contestants must obtain the desired text output with a single prompt within one minute.",
      eventRules: ["2 members/team"],
      eventVenue: "C-block / Communication Lab",
      eventRounds: ["Round 1: Preliminary Round.","Round 2: Selection Round.","Round 3: Final Round."],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Ms. Sharmila",
        contact: "8508445001",
      },
      studentCoordinator: [
        {
          name: "Nandini R T",
          contact: "7826040476",
        },
        {
          name: "Priya C",
          contact: "8610411455",
        },
      ],
    },
    {
      posterUrl: "",
      eventName: "Web Wizards",
      eventType: "Technical",
      eventSubType: "Technical",
      eventTime: "10.30 AM to 12.00 PM",
      eventDescription: "The Frontend Development Challenge is a one-round, final competition where participants must design and develop a webpage within the given time. With no additional rounds, this is the ultimate test of creativity, responsiveness, and coding skills. The best submission wins!",
      eventRules: ["Team Size: Maximum of 2 members per team.","No frameworks—only HTML, CSS, and JavaScript allowed.","Focus on design, responsiveness, and functionality to impress the judges.",
"The best-designed and most efficient webpage wins the competition!"],
      eventVenue: "IBM Lab - C block",
      eventRounds: ["Round 1: Rapid Frontend Development - The Final Showdown"],
      eventPrize: [
        "The winner will receive a prize of Rs. 1000, while the runner will receive a prize of Rs.750.",
        "All the candidates will be given participation certificates.",
      ],
      eventStaffCoordinator: {
        name: "Mr.Ramaraj S /AP",
        contact: "8072432169 ",
      },
      studentCoordinator: [
        {
          name: "Supreeta S",
          contact: "6380423006 ",
        },
        {
          name: "Surya K ",
          contact: "9047409321",
        },
      ],
    },
  ],
};
export default cse;

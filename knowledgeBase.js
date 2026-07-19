const knowledgeBase = {
  personal: {
    fullName: "Kandena Kurchika",
    nickname: "Kurchika",
    education: "Bachelor of Technology (B.Tech)",
    college: "Vignan's Institute of Information Technology (VIIT)",
    degree: "Electronics and Computer Engineering",
    year: "4th Year (Expected Graduation 2027)",
    cgpa: "8.50"
  },

  internships: [
    {
      company: "InternPe",
      role: "AI/ML Intern",
      duration: "Online | May 2026 - June 2026",
      description:
        "Completed an online internship in Artificial Intelligence and Machine Learning. Gained hands-on experience in predictive modeling, data processing, and model training. Successfully built and implemented four ML projects: 1) Diabetes Prediction, 2) Breast Cancer Detection, 3) IPL Winning Team Prediction, and 4) Car Price Predictor."
    },
    {
      company: "Slash Mark",
      role: "Python Developer Intern",
      duration: "Online | May 2026 - June 2026",
      description:
        "Completed an online Python Developer internship. Designed and built functional scripts and algorithms. Successfully developed four projects: 1) Password Generator, 2) AI Chatbot, 3) Voice Assistant, and 4) License Plate Recognition."
    },
    {
      company: "Brainovision Solutions India Pvt. Ltd.",
      role: "Artificial Intelligence for Generation & Automation Intern",
      duration: "Offline | June 1, 2026 - June 30, 2026",
      description:
        "Completed a hybrid internship focused on Artificial Intelligence for Generation and Automation. Worked on prompt design and generative AI applications. Built a Small Language Model (SLM) project: an AI Interview Simulator."
    },
    {
      company: "InternPe",
      role: "Java Programmer Intern",
      duration: "1 Month (June 2025 - July 2025)",
      description:
        "Completed a one-month internship in Java Programming. Gained hands-on experience in core Java concepts such as OOPs, exception handling, and collections. Developed interactive Java-based games including Rock Paper Scissors, Tic Tac Toe, and Connect 4, which strengthened logical thinking, problem-solving, and coding skills."
    }
  ],

  skills: [
    "C",
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "MySQL",
    "VS Code",
    "Word",
    "Excel",
    "PowerPoint"
  ],

  projects: [
    {
      title: "InstaSOS – Smart Emergency Safety Web Application",
      company: "Personal Project",
      tech: [
        "Node.js",
        "Express",
        "HTML",
        "CSS",
        "JavaScript",
        "REST APIs"
      ],
      description:
        "Designed and implemented a real-time SOS alert system using Node.js (Express) with REST APIs (/sos) for sending and retrieving alerts. Built a responsive multi-page frontend with dynamic alert display, and integrated advanced features like voice-based trigger (secret word), camera capture, and alert logging to enhance safety."
    },

    {
      title: "TripNova — Smart Travel Itinerary Planner",
      company: "Personal Project",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Local Storage"
      ],
      description:
        "Developed a web-based trip planning application designed to help users build custom day-by-day itineraries, track budgets, and manage travel logs. Built a responsive user interface with drag-and-drop capability and offline-first persistence."
    },

    {
      title: "Life Pulse — Daily Life Tracker",
      company: "Personal Project",
      tech: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      description:
        "A comprehensive daily life tracking application for monitoring habits, health metrics, and personal goals. Features intuitive dashboards, data visualization, and local data management."
    },

    {
      title: "Personal Portfolio Website",
      company: "Personal Project",
      tech: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      description:
        "A personal portfolio website built to showcase my skills, projects, and journey as a developer. Features a modern, responsive design with smooth animations, scroll reveal, and a customized AI chatbot (KAI)."
    }
  ],

  certifications: [
    {
      name: "Python Essentials",
      issuer: "Cisco Networking Academy"
    },
    {
      name: "Cyber Security Virtual Experience",
      issuer: "Tata (Forage)"
    },
    {
      name: "HTML & CSS Certification",
      issuer: "HCL GUVI"
    },
    {
      name: "Web-Full Stack Development, AI - ML Certification",
      issuer: "EduSkills Academy"
    },
    {
      name: "Python Programming",
      issuer: "Infosys Springboard"
    }
  ],

  goals: {
    shortTerm:
      "To secure an entry-level software developer or programming role where I can apply my skills in programming, data structures, and web development to contribute to innovative projects.",
    longTerm:
      "To grow into a highly skilled software engineer, designing scalable solutions and leading technical projects that drive impact and leverage emerging technologies."
  },

  contact: {
    email: "kurchikakandena1435@gmail.com",
    phone: "+91-6305771594",
    github: "https://github.com/KandenaKurchika",
    linkedin: "https://www.linkedin.com/in/kandena-kurchika/"
  },

  strengths: [
    "Quick Learner",
    "Problem Solver",
    "Analytical Thinking",
    "Adaptable",
    "Team Player",
    "Self-Motivated"
  ],

  interests: [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Competitive Programming"
  ],

  languages: [
    "English",
    "Telugu"
  ],

  hobbies: [
    "Solving coding challenges on platforms like LeetCode and CodeChef",
    "Participating in tech events and hackathons",
    "Exploring new software tools"
  ]
};

function formatProject(project) {
  return `
<div class="response-card">
  <h3>📂 ${project.title}</h3>
  <p><strong>🏢 Organization:</strong> ${project.company}</p>
  <p><strong>🛠 Tech Stack:</strong> ${project.tech.join(" • ")}</p>
  <p><strong>📝 Description:</strong><br>${project.description}</p>
</div>`;
}

function formatContact() {
  return `
<div class="response-card">
  <h3>📬 Contact Kurchika</h3>
  <div class="contact-item">
    <strong>📧 Email</strong><br>
    <a href="mailto:${knowledgeBase.contact.email}">${knowledgeBase.contact.email}</a>
  </div>
  <div class="contact-item" style="margin-top: 8px;">
    <strong>📞 Phone</strong><br>
    <span style="color: var(--text-secondary);">${knowledgeBase.contact.phone}</span>
  </div>
  <div class="contact-item" style="margin-top: 8px;">
    <strong>💻 GitHub</strong><br>
    <a href="${knowledgeBase.contact.github}" target="_blank">Visit GitHub Profile</a>
  </div>
  <div class="contact-item" style="margin-top: 8px;">
    <strong>💼 LinkedIn</strong><br>
    <a href="${knowledgeBase.contact.linkedin}" target="_blank">Visit LinkedIn Profile</a>
  </div>
</div>`;
}

function formatInternship(internship) {
  return `
<div class="response-card">
  <h3>🏢 ${internship.company}</h3>
  <p><strong>💼 Role:</strong> ${internship.role}</p>
  <p><strong>📅 Duration:</strong> ${internship.duration}</p>
  <p><strong>📝 Description:</strong><br>${internship.description}</p>
</div>`;
}

function formatCertification(certification) {
  return `
<div class="response-card">
  <h3>🏆 ${certification.name}</h3>
  <p><strong>🏢 Issued By:</strong> ${certification.issuer}</p>
</div>`;
}

function formatSkills() {
  return `
<div class="response-card">
  <h3>💻 Technical Skills</h3>
  <p><strong>Programming Languages:</strong></p>
  <p>C • Python • Java</p>
  <p style="margin-top: 8px;"><strong>Frontend Technologies:</strong></p>
  <p>HTML • CSS • JavaScript</p>
  <p style="margin-top: 8px;"><strong>Databases:</strong></p>
  <p>SQL • MySQL</p>
  <p style="margin-top: 8px;"><strong>Tools & Editors:</strong></p>
  <p>VS Code • Word • Excel • PowerPoint</p>
</div>`;
}

function formatHelp() {
  return `
<div class="response-card">
  <h3>🤔 I couldn't understand that question.</h3>
  <p>You can ask me about:</p>
  <ul>
    <li>👨‍🎓 Education & College</li>
    <li>💻 Skills & Tech Stack</li>
    <li>📂 Projects I've built</li>
    <li>🏢 Internships & Experience</li>
    <li>🏆 Certifications</li>
    <li>📧 How to contact me</li>
  </ul>
  <p style="margin-top: 8px;">💡 Example: <em>"What projects did you build?"</em> or <em>"Do you have certifications?"</em></p>
</div>`;
}

const intents = {
  introduction: [
    "who is kurchika",
    "about kurchika",
    "introduce yourself",
    "tell me about yourself",
    "who are you",
    "name",
    "profile",
    "kandena"
  ],
  education: [
    "education",
    "study",
    "college",
    "degree",
    "university",
    "btech",
    "cgpa",
    "gpa",
    "grade",
    "score",
    "marks",
    "vignan",
    "viit",
    "ecm",
    "electronics"
  ],
  skills: [
    "skills",
    "skill",
    "technology",
    "technologies",
    "tech stack",
    "programming",
    "languages",
    "expertise",
    "tools"
  ],
  projects: [
    "project",
    "projects",
    "portfolio",
    "developed",
    "built",
    "applications",
    "software",
    "sos",
    "instasos",
    "tripnova",
    "trip nova",
    "lifepulse",
    "life pulse"
  ],
  internship: [
    "internship",
    "internships",
    "experience",
    "internpe",
    "slash mark",
    "slashmark",
    "brainovision",
    "braino vision",
    "work",
    "job"
  ],
  certification: [
    "certification",
    "certifications",
    "certificate",
    "certified",
    "cisco",
    "guvi",
    "infosys",
    "eduskills"
  ],
  contact: [
    "contact",
    "email",
    "github",
    "linkedin",
    "reach",
    "phone",
    "number",
    "call"
  ],
  achievements: [
    "achievement",
    "achievements",
    "codechef",
    "leetcode",
    "hackerrank",
    "hackathon",
    "hackathons",
    "solve",
    "solved"
  ]
};

function hasIntent(input, intentName) {
  return intents[intentName].some(keyword => input.includes(keyword));
}

let conversationContext = {
  lastIntent: null
};

function searchProjects(keyword) {
  keyword = keyword.toLowerCase();
  return knowledgeBase.projects.filter(project =>
    project.title.toLowerCase().includes(keyword) ||
    project.description.toLowerCase().includes(keyword) ||
    project.tech.some(tech => tech.toLowerCase().includes(keyword))
  );
}

function getBotResponse(message) {
  const input = message.toLowerCase();

  // Dynamic search logic for project keywords
  const projectKeywords = [
    "java",
    "javascript",
    "python",
    "node",
    "express",
    "html",
    "css",
    "tripnova",
    "sos",
    "pulse",
    "mysql"
  ];

  for (const keyword of projectKeywords) {
    if (input.includes(keyword) && hasIntent(input, "projects")) {
      const results = searchProjects(keyword);
      if (results.length > 0) {
        return `
<h2>🔍 Projects using "${keyword}"</h2>
${results.map(formatProject).join("<br>")}`;
      }
    }
  }

  // Follow-up context checking
  const followUps = [
    "tell me more",
    "more",
    "explain more",
    "details",
    "can you explain",
    "elaborate"
  ];

  if (followUps.some(word => input.includes(word))) {
    switch (conversationContext.lastIntent) {
      case "projects":
        return "I have developed InstaSOS (emergency alert web app), TripNova Itinerary Planner, Life Pulse Tracker, and my Personal Portfolio. Ask me about any specific project to know more details!";
      case "skills":
        return "My core programming languages are Java, Python, and C. On the web side, I work with HTML, CSS, JavaScript, Node.js, Express, and MySQL database management.";
      case "internship":
        return "I have completed four internships: 1) AI/ML Intern at InternPe (May-June 2026) building ML predictors; 2) Python Developer Intern at Slash Mark (May-June 2026) developing scripts and utilities; 3) Artificial Intelligence for Generation & Automation Intern at Brainovision (June 1-30, 2026) building an SLM interview simulator; and 4) Java Programmer Intern at InternPe (June-July 2025).";
      default:
        return "Could you specify what topic you'd like to know more about?";
    }
  }

  if (hasIntent(input, "introduction")) {
    conversationContext.lastIntent = "introduction";
    return `
<strong>${knowledgeBase.personal.fullName}</strong> is a final year <strong>${knowledgeBase.personal.degree}</strong> student at <strong>${knowledgeBase.personal.college}</strong>. People call her <strong>${knowledgeBase.personal.nickname}</strong>. She is passionate about coding, problem-solving, and web development.`;
  }

  if (hasIntent(input, "education")) {
    conversationContext.lastIntent = "education";
    return `
I am pursuing my <strong>${knowledgeBase.personal.education}</strong> in <strong>${knowledgeBase.personal.degree}</strong> at <strong>${knowledgeBase.personal.college}</strong>.<br><br>
<strong>📊 CGPA:</strong> ${knowledgeBase.personal.cgpa}<br>
<strong>🎓 Timeline:</strong> 2023 - Expected Graduation in 2027.`;
  }

  if (hasIntent(input, "skills")) {
    conversationContext.lastIntent = "skills";
    return formatSkills();
  }

  if (hasIntent(input, "projects")) {
    conversationContext.lastIntent = "projects";
    return `
<h2>📂 My Projects</h2>
${knowledgeBase.projects.map(formatProject).join("<br><br>")}`;
  }

  if (hasIntent(input, "internship")) {
    conversationContext.lastIntent = "internship";
    return `
<h2>🏢 Internship Experience</h2>
${knowledgeBase.internships.map(formatInternship).join("<br>")}`;
  }

  if (hasIntent(input, "certification")) {
    conversationContext.lastIntent = "certification";
    return `
<h2>🏆 Certifications</h2>
${knowledgeBase.certifications.map(formatCertification).join("<br>")}`;
  }

  if (hasIntent(input, "contact")) {
    conversationContext.lastIntent = "contact";
    return formatContact();
  }

  if (hasIntent(input, "achievements")) {
    conversationContext.lastIntent = "achievements";
    return `
<div class="response-card">
  <h3>🏆 Achievements & Programming Profile</h3>
  <p><strong>💻 Coding & Problem Solving:</strong> Solve problems on platforms like LeetCode, CodeChef, and HackerRank to keep logical thinking sharp.</p>
  <p style="margin-top: 8px;"><strong>📚 Academics:</strong> Maintained a strong CGPA of <strong>8.50</strong> while focusing on core computer systems subjects.</p>
  <p style="margin-top: 8px;"><strong>🌟 Collaboration:</strong> Participated actively in college tech events, workshops, and hackathons.</p>
</div>`;
  }

  return formatHelp();
}

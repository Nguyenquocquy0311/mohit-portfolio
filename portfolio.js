import emoji from "react-easy-emoji";

export const greetings = {
  name: "NQQ",
  title: "Hi all, I'm Nguyen Quoc Quy",
  description:
    "I'm Quy.❤️ Highly motivated Computer Science student at the University of Engineering and Technology with a strong foundation in front-end development and experience building web applications. Eager to leverage my software development skills to contribute to innovative solutions within a dynamic and challenging environment.",
  resumeLink:
    "https://drive.google.com/file/d/1o9eTciHm_dS9Uf8p31ghrOWOhvLuFMRj/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Nguyenquocquy0311",
};

export const contact = {};

export const socialLinks = {
  //	url: "https://1hanzla100.github.io/",
  linkedin:
    "https://www.linkedin.com/in/qu%E1%BB%91c-qu%C3%BD-nguy%E1%BB%85n-470b4128b/",
  github: "https://github.com/Nguyenquocquy0311",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "Web application developer with strengths in developing user interfaces and experiences",
  data: [
    // {
    //   title: "Machine Learning Engineer",
    //   lottieAnimationFile: "/lottie/skills/machine_learning.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing end-to-end machine learning projects."
    //     ),
    //     emoji("⚡	Experienced in Exploratory data analysis."),
    //     emoji("⚡ Experience of creating Computer Vision and Language Models."),
    //     emoji("⚡ Creating some model related to smell."),
    //     emoji(
    //       "⚡ Also have created a small machine learning library using basic libraries."
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "logos:python",
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "logos:heroku-icon",
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "logos:postgresql",
    //     },
    //     {
    //       skillName: "Github",
    //       fontAwesomeClassname: "akar-icons:github-fill",
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "logos:aws",
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "logos:microsoft-azure",
    //     },
    //   ],
    // },
    {
      title: "Web Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Nodejs and ExpressJs"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji("⚡ Experience of working on multiple cloud platforms"),
    //     emoji(
    //       "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
    //     ),
    //     emoji(
    //       "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "logos:aws",
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "logos:microsoft-azure",
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "logos:heroku-icon",
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "logos:postgresql",
    //     },
    //     {
    //       skillName: "Github",
    //       fontAwesomeClassname: "akar-icons:github-fill",
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "logos:docker-icon",
    //     },
    //     {
    //       skillName: "Github Actions",
    //       fontAwesomeClassname: "logos:github-actions",
    //     },
    //     {
    //       skillName: "Cloudinary",
    //       fontAwesomeClassname: "logos:cloudinary",
    //     },
    //     {
    //       skillName: "Nginx",
    //       fontAwesomeClassname: "logos:nginx",
    //     },
    //     {
    //       skillName: "Sentry",
    //       fontAwesomeClassname: "logos:sentry-icon",
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend (Reactjs, Nextjs)", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend (Nodejs, MongoDB)",
    progressPercentage: "70",
  },
  {
    Stack: "Programming (Javascript, Typescript)",
    progressPercentage: "90",
  },
  {
    Stack: "Version Control (Git, GitHub)",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName:
      "University of Engineering and Technology - Vietnam National University",
    subHeader: "Bachelors of Computer Science",
    duration: "Oct 2020 - Present",
    desc: "Participated in the various coding contest and published a paper.",
    grade: "Grade B",
    descBullets: [
      "I am currently pursuing minor in Software Engineering.",
      "I have also studied DBMS, OS, Computer Networks and other computer science fundamentals.",
    ],
  },
];

export const experience = [
  {
    role: "Machine Learning Engineer",
    app: "Snapedit.app",
    applogo: "https://assets.snapedit.app/images/landing/snapedit-logo.svg",
    date: "Sep 2023 – Jun 2024",
    // desc: "I worked as Machine Learning Engineer to design and create the AI algorithms capable of learning and making predictions. I worked here as a type and contributed myself as a enthusiastic ML Developer.",
    descBullets: [
      "SnapEdit.App is a visual online photo editing website that leverages AI technology to help automatically remove objects/people from images; retouch, enhance, colorize, correct, cartoonize, and animate photos in a snap, replacing other photo editing tools Photoshop, Pixlr editor, or Photopea.",
      "SnapEdit object remover works simpler but as effective as other legacy photo editing software, all thanks to the support of in-house AI models.",
      "SnapEdit picture editing website lets you edit photos’ backgrounds conveniently on smartphones, PCs, and tablets. All features are neat to your screen to edit photos and easily save them to your device.",
      "Snapedit is the best free photo editor online 4K to enhance your photos. The AI edit photo tool can make low-resolution images vibrant like a professional designer.",
    ],
    link: "https://snapedit.app",
  },
  {
    role: "FrontEnd Developer",
    app: "Remove-BG.AI",
    applogo:
      "https://silverai.com/wp-content/uploads/2023/08/logo-silverai-2.png",
    date: "Sep 2023 – Jun 2024",
    descBullets: [
      "Remove-BG.AI, you no longer need complex and expensive software like Photoshop, Adobe, or Canva to remove the background image. Simply follow our instructions below, and in just a few seconds our AI background remover will effortlessly create a new background-free image in HD quality!",
      "The advanced AI allows the automatic detection of objects, foregrounds, and borders in seconds. It handles complex backgrounds with hair and fur easily with improved algorithms. Remove-BG.AI is useful for image editors, designers, marketers, and creators of all levels.",
      "Manually refine the cutout.",
      "Remove-BG.AI cuts the image background out completely and efficiently. With your new transparent image, get creative with different background colors and create compositing images!",
      "100+ templates to replace your erased background",
    ],
    link: "https://remove-bg.ai",
  },
  {
    role: "FrontEnd Developer",
    app: "Dewatermark.AI",
    applogo:
      "https://assets.dewatermark.ai/images/watermark-remover/logo_header_new.png",
    date: "Sep 2023 – Jun 2024",
    descBullets: [
      "AI watermark remover detects and removes even the most annoying watermarks from images.",
      "Beyond the common logo and text watermarks, sometimes you will encounter some better protected ones with multiple layers, densely packed with details, or ones that blend watermarks with image colors. Our tool can help you deal with them all.",
      "Removing watermark with AI lends the powerful ability to automatically detect & separate watermarks layers from the background images.",
      //   "We commit great effort to retaining the original quality (even upscale) of the images. You can safely clear watermark with us without worrying about losing quality or details.",
      "We provide a manual in-app brush for you to watermark removal even more thoroughly. Simply brush over the remaining watermarks details to completely remove them from image (while still retaining quality).",
    ],
    link: "https://dewatermark.ai",
  },
  {
    role: "FrontEnd Developer",
    app: "Betterimage.ai",
    applogo:
      "https://silverai.com/wp-content/uploads/2023/08/logo-silverai-2.png",
    date: "Sep 2023 – Jun 2024",
    descBullets: [
      "Betterimage.ai is the best free image upscaler for hobbyists, photographers, and any casual users.",
      "Upload your photo, and our AI image upscaler will increase its resolution up to 4K.",
      "Betterimage.ai works perfectly for casual users. Bring new life to low-resolution portraits, selfies, graphic designs, or anime photos. Our AI makes them clear, high-quality, so you can confidently post on any platform.",
      "Turn blurry faded old photos into new vivid ones. Betterimage.ai helps you keep memories over time.",
      "Enhance your product images for e-commerce. Our AI sharpens product photos, meeting the requirements of sales platforms and making them more appealing to buyers.",
    ],
    link: "https://betterimage.ai/vi",
  },
];

export const projects = [
  //   {
  //     name: "VEHICLE REGISTRATION",
  //     desc: "Develop a nationwide web application to streamline vehicle registration for the Registry Department and registration centers. This comprehensive system will unify the management of car registrations, license plates, registration papers, and inspection certificates. Citizens can conveniently register their vehicles at any participating center.",
  //     github: "https://github.com/Nguyenquocquy0311/Registry-app",
  //     // link: "https://bit.ly/3AINU77",
  //   },
  //   {
  //     name: "ASSET MANAGEMENT",
  //     desc: "Build an enterprise asset management website.",
  //     github: "https://github.com/Nguyenquocquy0311/datn",
  //   },
  {
    name: "VEHICLE REGISTRATION",
    desc: [
      "Develop a nationwide web application to streamline vehicle registration for the Registry Department and registration centers.",
      "This comprehensive system will unify the management of car registrations, license plates, registration papers, and inspection certificates.",
      "Citizens can conveniently register their vehicles at any participating center.",
    ],
    github: "https://github.com/Nguyenquocquy0311/Registry-app",
    // link: "https://bit.ly/3AINU77",
  },
  {
    name: "ASSET MANAGEMENT",
    desc: [
      "Building a enterprise asset management website helps businesses optimize internal equipment and asset management processes.",
      "Analyze, design and develop user interfaces for the system.",
      "Build CRUD API for asset management, user management, and user activities in the system.",
      "Database design and configuration.",
    ],
    github: "https://github.com/Nguyenquocquy0311/datn",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "My Portfolio",
  description: "A passionate Front-end Developer.",
  author: "Nguyen Quoc Quy",
  image: "https://avatars.githubusercontent.com/u/71754779?v=4",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Quy",
    "Nguyen Quoc Quy",
    "@chessman786",
    "Nguyenquocquy0311",
    "Portfolio",
    "Quy Portfolio ",
    "Nguyen Quoc Quy Portfolio",
  ],
};

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Srija's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Srija Shenkeshi Portfolio",
    type: "website",
    url: "http://srija-shenkeshi.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Srija Shenkeshi",
  logo_name: "SrijaShenkeshi",
  nickname: "Srija",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1Pa0VNEPeVvUZr5lMlXbRgVy0RPyEXw5z/view?usp=sharing",
  portfolio_repository: "https://github.com/srija-shenkeshi",
  githubProfile: "https://github.com/srija-shenkeshi",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/srija-shenkeshi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/srija-shenkeshi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/@srijashenkeshi",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:srijashenkeshi1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/srija_shenkeshi",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/srija0x11/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/srija_shenkeshi/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing various REST APIs using Spring Boot, Spring Native, Spring WebFlux",
        "⚡ Implementing JUnit tests to ensure code quality and increase test coverage",
        "⚡ Developing various Micro-services with Spring Cloud Stream, Spring Functions with variety of message brokers like Apache Kafka, RabbitMQ",
        "⚡ Configuring applications with various logging agents like Log4j2, Logback with simple facade SLF4J",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "logos:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
      ],
    },
    {
      title: "DevOps Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Automating deployments over infrastructure using GitHub Actions",
        "⚡ Automating code coverages, static code analysis, vulnerabilities scans and deployment of reports to GitHub Pages",
        // "⚡ Deploying and managing applications on Kubernetes clusters",
        // "⚡ Automating cloud infrastructure provisioning using Terraform scrips",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          // style: {
          //   color: "#FF9900",
          // },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          // style: {
          //   color: "#0089D6",
          // },
        },
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "logos:google-cloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
        // {
        //   skillName: "Prometheus",
        //   fontAwesomeClassname: "simple-icons:prometheus",
        //   style: {
        //     color: "#F06101",
        //   },
        // },
        // {
        //   skillName: "Grafana",
        //   fontAwesomeClassname: "logos:grafana",
        //   style: {
        //     color: "#EC8D27",
        //   },
        // },
        // {
        //   skillName: "Terraform",
        //   fontAwesomeClassname: "logos:terraform-icon",
        //   style: {
        //     color: "#4040B2",
        //   },
        // },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Github Pages",
          fontAwesomeClassname: "simple-icons:githubpages",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#F06101",
          },
        },
        {
          skillName: "OpenSearch",
          fontAwesomeClassname: "simple-icons:opensearch",
          style: {
            color: "#3162a7",
          },
          // https://icon-sets.iconify.design/logos/elasticsearch/
        },
        {
          skillName: "ElasticSearch",
          fontAwesomeClassname: "logos:elasticsearch",
          style: {
            color: "#3162a7",
          },
        },
        // {
        //   skillName: "Logstash",
        //   fontAwesomeClassname: "logos:logstash",
        //   style: {
        //     color: "#00BFB3",
        //   },
        // },
        // {
        //   skillName: "Beats",
        //   fontAwesomeClassname: "logos:beats",
        //   style: {
        //     color: "#0077CC",
        //   },
        // },
        // {
        //   skillName: "Fluentd",
        //   fontAwesomeClassname: "simple-icons:fluentd",
        //   style: {
        //     color: "#3162A7",
        //   },
        // },
        // {
        //   skillName: "Fluentbit",
        //   fontAwesomeClassname: "simple-icons:fluentbit",
        //   style: {
        //     color: "#3162A7",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/SrijaShenkeshi",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/vishalmamidi",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/vishalmamidi",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@vishalmamidi",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/vishalmamidi",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vaagdevi College of Engineering",
      subtitle: "B.Tech. in Computer Science and Engineering",
      // logo_path: "iiitk_logo.png",
      logo_path: "vaagdevi_logo.png",
      alt_name: "Vaagdevi",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Java, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.vaagdevi.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "AZ900",
      logo_path: "AZ900_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-in/SRIJASHENKESHI/80981685CE88666?sharingId",
      alt_name: "AZ900",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Software Developer and below are the details.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "ValueMomentum. Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/valuemomentum/",
          logo_path: "vm_logo.jpg",
          duration: "Jun 2021 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "Designed and implemented Spring Boot-based RESTful Microservices."+
            "Implemented JUnit tests to ensure code quality and increase test coverage, resulting in a 20% reduction in bugs."+
            "Participated in code reviews, identifying and resolving issues to improve overall code quality. ",
          color: "#0879bf",
        },
        // {
        //   title: "Software Engineer",
        //   company: "Virtusa Consulting Services. Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/virtusa/",
        //   logo_path: "virtusa_logo.jpg",
        //   duration: "Dec 2018 - Aug 2021",
        //   location: "Chennai, Tamil Nadu",
        //   description:
        //     "Developing various REST micro-services with Spring Web, Spring WebFlux, Spring Cloud. "+
        //     "Develop PL/SQL procedure for various internal banking operations ",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Process Associate",
        //   company: "Modak Analytics. Pvt. Ltd.",
        //   company_url: "https://modak.com/",
        //   logo_path: "modak_logo.jpg",
        //   duration: "Dec 2017 - May 2018",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Worked on data processing, cleansing to obtain information limitations for data processing projects using ETL Method.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     // {
    //     //   title: "Microsoft Student Partner",
    //     //   company: "Microsoft",
    //     //   company_url: "https://www.microsoft.com/",
    //     //   logo_path: "microsoft_logo.png",
    //     //   duration: "Aug 2016 - May 2017",
    //     //   location: "Hyderabad, Telangana",
    //     //   description:
    //     //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organized hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //     //   color: "#D83B01",
    //     // },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "KITS Warangal",
    //       company_url:
    //         "https://www.kitsw.ac.in/",
    //       logo_path: "kits_logo.png",
    //       duration: "Jan 2016 - May 2017",
    //       location: "Warangal, Telangana",
    //       description:
    //         "We have well established developer club in college. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on web services development and cloud.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2022 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Fluentd, Fluentbit, OpenSearch etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create GitHub Actions workflows and deploy them to kubernetes.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    email: "mailto:srijashenkeshi1@gmail.com",
    profile_image_path: "me.png",
    description:
      "You can drop a mail. I can help you with Spring Boot, Docker, Kubernetes, GitHub Actions and DevOps operations.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://vishalmamidi.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Warangal, Telangana - 506002",
    avatar_image_path: "address_image.svg",
    location_map_link: "mailto:srijashenkeshi1@gmail.com",
  },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "+91 8074259529",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};

import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.avif';
  import Work2 from './assets/project-2.jpeg';
  import Work3 from './assets/project-3.jpeg';
  import Work4 from './assets/project-4.avif';
  import Work5 from './assets/project-5.avif';
  import Work6 from './assets/project-6.jpg';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Abdullah',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Qayyum',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '18 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Pakistan',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Lahore',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+92 302 4495957',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'muhammadabdullah6075@gmail.com',
    },
  
    {
      id: 9,
      title: 'Instagram : ',
      description: 'itx.ab3',
    },
  
    {
      id: 10,
      title: 'Langages : ',
      description: 'Urdu, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '3+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '30+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '20+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '40+',
      title: ' Awards <br /> Won',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2021 - PRESENT',
      title: 'Web Developer <span> Envato </span>',
      desc: 'I have a solid foundation in web development,with experience in creating responsive and user friendly websites. I excel in HTML, CSS, JavaScript, React and have a keen eye for design aesthetic.',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2022 - Present',
      title: 'UI/UX Designer <span> Themeforest </span>',
      desc: 'I excel in web design, using tools like Figma, AdobeXD, Illustrator and Photoshop to create aesthetically pleasing and functional websites.',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2020 - Present',
      title: 'Video Editing <span> Udemy </span>',
      desc: 'I am skilled in Adobe aftereffets and KineMaster, proficiently using them to craft visually stunning and engaging videos. My expertise includes animation, effects and precise editing for a polished final product',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021',
      title: 'Matric Degree <span> Gulistan High School </span>',
      desc: 'My education up to Matric has provided me with strong discipline and foundational knowledge, forming the basis of my learning journey.',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2022',
      title: 'Intermediate Degree <span> LDA College </span>',
      desc: 'I have completed my college degree, which has been instrumental in broadening my intellectual horizons and preparing me for my career.',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Start Development and Designing <span> Online Courses </span>',
      desc: 'I have started pursuing additional education in development and designing alongside my studies.',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '75',
    },
  
    {
      id: 2,
      title: 'CSS',
      percentage: '70',
    },
  
    {
      id: 3,
      title: 'Bootstrap',
      percentage: '65',
    },
  
    {
      id: 4,
      title: 'Tailwind CSS',
      percentage: '45',
    },
  
    {
      id: 5,
      title: 'JavaScript',
      percentage: '70',
    },
  
    {
      id: 6,
      title: 'React',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'Figma',
      percentage: '85',
    },
  
    {
      id: 8,
      title: 'Photoshop',
      percentage: '55',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Landing Page',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Landing Page',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Fiverr',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Figma',
        },        
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Fiverr',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website Design',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Freelauncer',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe XD, Figma',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Graphics Designing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Thumbnails,Logo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Fiverr',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Photo Editing',
      details: [
        {
          title: 'Project : ',
          desc: 'Photoediting',
        },
        {
          title: 'Client : ',
          desc: 'Upwork',
        },
        {
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Prototype',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Prototype',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Facebook',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Figma, Adobe XD',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  
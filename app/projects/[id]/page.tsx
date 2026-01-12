'use client';

import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

// Import your works data
const works = [
  {
    id: '1',
    slug: 'playsphere',
    title: 'Playsphere By Divaca',
    type: 'Web App',
    description: 'About the project',
    year: '2024',
    link: 'https://playsphere-divaca.onrender.com/',
    images: {
      logo: '/images/playsphere/logo.png',
      main: '/images/playsphere/playsphere4.png',
      supporting: [
        '/images/playsphere/playsphere3.png',
        '/images/playsphere/playsphere2.png',
        '/images/playsphere/playsphere1.png'
      ],
      Logoimg: [
        '/images/playsphere/next.png',
        '/images/playsphere/react.png',
        '/images/playsphere/tailwind.png',
        '/images/playsphere/js.png'
      ]
    },
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript'
    ],
    devInfo: 'Supporting information about the development process, challenges, and solutions.',
  },
  {
    id: '2',
    slug: 'divaca-health',
    title: 'DivacaHealth By Divaca',
    type: 'Web App',
    description: 'Healthcare management platform',
    year: '2024',
    link: 'https://divacahealth-divaca.onrender.com/',
    images: {
      logo: '/images/divacahealth/logo.png',
      main: '/images/divacahealth/divaca2.png',
      supporting: [
        '/images/divacahealth/divaca1.png',
        '/images/divacahealth/divaca3.png'
      ],
      Logoimg: [
        '/images/divacahealth/next.png',
        '/images/divacahealth/react.png',
        '/images/divacahealth/tailwind.png',
        '/images/divacahealth/js.png'
      ]
    },
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript'
    ],
    devInfo: 'Built to streamline healthcare operations...',
    features: [
      'Patient management',
      'Appointment scheduling',
      'Medical records'
    ]
  },
  {
    id: '3',
    slug: 'portfolio-type-1',
    title: 'Portfolio Version 1',
    type: 'Website',
    description: 'Modern portfolio template',
    year: '2023',
    link: 'https://portfolio-version-1.onrender.com/',
    images: {
      logo: '/images/portfolio/logo.png',
      main: '/images/portfolio/portfolio2.png',
      supporting: [
        '/images/portfolio/portfolio1.png',
        '/images/portfolio/portfolio3.png'
      ],
      Logoimg: [
        '/images/portfolio/next.png',
        '/images/portfolio/react.png',
        '/images/portfolio/tailwind.png',
        '/images/portfolio/js.png'
      ]
    },
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript'
    ],
    devInfo: 'Clean and minimalist design approach...',
    features: [
      'Responsive design',
      'Dark mode',
      'Smooth animations'
    ]
  },
  {
    id: '4',
    slug: 'livestock-management',
    title: 'Livestock Health Management System',
    type: 'Web App',
    description: 'Comprehensive livestock tracking',
    year: '2023',
    link: 'https://livestock-health-management-system.onrender.com/',
    images: {
      logo: '/images/livestock/logo.png',
      main: '/images/livestock/livestock1.png',
      supporting: [
       '/images/livestock/livestock2.png',
       '/images/livestock/livestock3.png'
      ],
      Logoimg: [
        '/images/livestock/next.png',
        '/images/livestock/react.png',
        '/images/livestock/tailwind.png',
        '/images/livestock/js.png'
      ]
    },
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript'
    ],
    devInfo: 'Designed for farmers to track animal health...',
    features: [
      'Health monitoring',
      'Vaccination tracking',
      'Analytics dashboard'
    ]
  },
  {
    id: '5',
    slug: 'weather-project',
    title: 'Weather Forecasting Project',
    type: 'Web App',
    description: 'Real-time weather application',
    year: '2023',
    link: 'https://weather-forecasting-project.onrender.com/',
    images: {
      logo: '/images/weather/logo.png',
      main: '/images/weather/weather1.png',
      supporting: [
        '/images/weather/weather2.png',
        '/images/weather/weather3.png',
      ],
      Logoimg: [
        '/images/playsphere/next.png',
        '/images/playsphere/react.png',
        '/images/playsphere/tailwind.png',
        '/images/playsphere/js.png'
      ]
    },
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript'
    ],
    devInfo: 'Displays current weather and forecasts...',
    features: [
      'Current conditions',
      '7-day forecast',
      'Location search'
    ]
  },
  {
    id: '6',
    slug: 'housing-miniproject',
    title: 'Housing Miniproject',
    type: 'Website',
    description: 'Housing marketplace platform',
    year: '2022',
    link: 'https://react-housing-project.onrender.com/',
    images: {
      logo: '/images/housing/logo.png',
      main: '/images/housing/housing1.png',
      supporting: [
        '/images/housing/housing2.png',
        '/images/housing/housing3.png'
      ],
      Logoimg: [
        '/images/housing/next.png',
        '/images/housing/react.png',
        '/images/housing/tailwind.png',
        '/images/housing/js.png'
      ]
    },
    techStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript'
    ],
    devInfo: 'Simple platform for browsing housing listings...',
    features: [
      'Property listings',
      'Search filters',
      'Contact forms'
    ]
  }
];

const titles = [
  "FRONTEND DEVELOPER",
  "WEB DEVELOPER",
  "SOFTWARE DEVELOPER",
  "CREATIVE DEVELOPER",
  "PROBLEM SOLVER"
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  // Find the specific project
  const project = works.find(work => work.id === params.id);
  
  // Find current project index and get next project
  const currentIndex = works.findIndex(work => work.id === params.id);
  const nextProject = works[(currentIndex + 1) % works.length];
  
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Scroll behavior for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Title rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 flex flex-col items-center max-w-[1400px] m-auto">
      {/* TOP BAR */}
      <div className={`w-[95%] md:w-[90%] lg:w-[70%] h-auto md:h-[70px] rounded-full flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-3 md:py-0 fixed top-2 md:top-5 z-50 transition-transform duration-500 ease-in-out ${
        showNav ? 'translate-y-0' : '-translate-y-32'
      }`}>
        <div className="text-white w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
          <h1 className="text-lg md:text-2xl font-quintessential font-semibold">TOLULOPE DAIRO</h1>
          <div className="relative h-5 md:h-6 overflow-hidden">
            {titles.map((title, index) => (
              <h3
                key={index}
                className={`absolute left-0 w-full text-xs md:text-sm font-heading transition-all duration-[4000ms] ease-in-out transform ${
                  index === currentTitleIndex
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-90 -translate-y-1'
                }`}
              >
                {title}
              </h3>
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
          <Link className="px-3 md:px-4 py-1.5 md:py-2 bg-[#19191F] rounded-[11px] text-white text-sm md:text-base" href="/">Work</Link>
          <a
            href="/files/Tolulope Dairo job CV.pdf"
            download="Tolulope_Resume.pdf"
            className="px-3 md:px-4 py-1.5 md:py-2 flex gap-2 md:gap-3 items-center justify-center bg-[#19191F] rounded-[11px] text-white cursor-pointer text-sm md:text-base"
          >
            <img src="/images/icon11.svg" alt="ICON" className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]" />
            <span className="hidden sm:inline">Download resume</span>
            <span className="sm:hidden">Resume</span>
          </a>
          <Link
            className="px-3 md:px-4 py-1.5 md:py-2 bg-[#19191F] rounded-[11px] text-white cursor-pointer text-sm md:text-base"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
              });
            }}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* PROJECTS */}
      <div className="w-[95%] md:w-[85%] lg:w-[75%] mx-auto text-white mt-24 md:mt-20 p-2">
        {/* Project Hero */}
        <div className="mt-8 flex flex-col md:flex-row items-center md:items-center gap-5">
          <div>
            <img src={project.images.logo} alt='LOGO' className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-[50px] md:rounded-[60px] lg:rounded-[70px]' />
          </div>
          <div className="text-center md:text-left">
            <h3 className='text-3xl md:text-4xl lg:text-5xl'>{project.title}</h3>
            <h3 className='text-xl md:text-2xl lg:text-3xl'>{project.type}</h3>
          </div>
        </div>

        {/* Project main image */}
        <div className='w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-none md:rounded-[40px] lg:rounded-[50px] mt-8 md:mt-16 flex items-center justify-center p-1 bg-opacity-100'>
          <img src={project.images.main} alt='' className='w-full h-full rounded-[30px] md:rounded-[40px] lg:rounded-[50px] z-10 object-cover' />
        </div>

        {/* Project overview and Tech stack */}
        <div className='w-full h-fit mt-8 md:mt-16 flex flex-col lg:flex-row items-stretch z-10 justify-between gap-6 md:gap-8 rounded-[30px] md:rounded-[40px] lg:rounded-[50px]'>
          <div className='w-full lg:w-[60%] border-[0.1px] border-white p-4 md:p-5 flex flex-col gap-4 md:gap-5 rounded-[30px] md:rounded-[40px] lg:rounded-[50px]'>
            <div className='border-b-[0.1px] border-b-white py-2 md:py-3'>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Overview</h3>
            </div>
            <h3 className='w-full text-xl md:text-2xl lg:text-3xl'>{project.description}</h3>
          </div>
          <div className='w-full lg:w-[40%] z-10 flex flex-col items-center justify-between gap-4 md:gap-5'>
            <div className='w-full border-[0.1px] rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-white p-4 md:p-5 flex flex-col gap-2 md:gap-3'>
              <div className='border-b-[0.1px] border-b-white py-2 md:py-3'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Tech Stack</h3>
              </div>
              {project.techStack.map((tech, index) => (
                <div key={index} className='w-full flex gap-3 md:gap-5 items-center py-2'>
                  <img 
                    src={project.images.Logoimg?.[index] || 'https://via.placeholder.com/70'} 
                    alt={`${tech} logo`} 
                    className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-[10px] md:rounded-[12px] lg:rounded-[14px] object-cover'
                  />
                  <h3 className='text-lg md:text-2xl lg:text-3xl'>{tech}</h3>
                </div>
              ))}
            </div>
            <div className='w-full z-10 border-[0.1px] rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-white flex flex-col gap-4 md:gap-5 p-6 md:p-8'>
              <div className='border-b-[0.1px] border-b-white py-2 md:py-3'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Created</h3>
              </div>
              <h3 className='text-xl md:text-2xl lg:text-3xl'>{project.year}</h3>
            </div>
            <Link href={project.link} className='w-full bg-[#0000EE] border-[0.1px] rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-white p-4 md:p-5 px-6 md:px-8 flex items-center justify-between'>
              <h3 className='text-lg md:text-2xl lg:text-3xl'>See Website</h3>
              <img src="/images/icon16.svg" alt="ICON" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]" />
            </Link>
          </div>
        </div>

        {/* project pictures */}
        {project.images.supporting.length > 0 && (
          <>
            <div className='w-full h-auto md:h-[400px] lg:h-[550px] xl:h-[650px] mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10 z-10'>
              {project.images.supporting[0] && (
                <div className='h-[300px] md:h-full w-full md:w-[40%] rounded-[30px] md:rounded-[40px] lg:rounded-[50px] z-10'>
                  <img src={project.images.supporting[0]} alt="" className='w-full h-full rounded-[30px] md:rounded-[40px] lg:rounded-none object-scale-down' />
                </div>
              )}
              {project.images.supporting[1] && (
                <div className='h-[300px] md:h-full w-full md:w-[40%] rounded-[30px] md:rounded-[40px] lg:rounded-[50px] z-10'>
                  <img src={project.images.supporting[1]} alt="" className='w-full h-full rounded-[30px] md:rounded-[40px] lg:rounded-none object-scale-down' />
                </div>
              )}
            </div>
            {/* {project.images.supporting[2] && (
              <div className='w-full h-[50vh] mt-10 rounded-[50px] z-10'>
                <img src={project.images.supporting[2]} alt="" className='w-full h-full rounded-[50px]' />
              </div>
            )} */}
          </>
        )}

        {/* Development */}
        <div className='w-full mt-6 md:mt-10 h-fit flex flex-col gap-3 md:gap-4'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-display'>Development</h3>
          <h4 className='text-base md:text-lg'>{project.devInfo}</h4>
        </div>

        {/* Next project */}
        <div className='mt-6 md:mt-10 w-full h-fit z-10'>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-3 md:mb-4'>Next Project</h3>
          <Link 
            href={`/projects/${nextProject.id}`}
            className='group block'
          >
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full sm:w-fit gap-4 sm:gap-10 z-10'>
              <div>
                <p className='text-xs md:text-sm text-gray-500 uppercase mb-2'>{nextProject.type}</p>
                <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white group-hover:text-gray-400 transition-colors'>
                  {nextProject.title}
                </h3>
              </div>
              <img 
                src="/images/icon16.svg" 
                alt="Next" 
                className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] group-hover:translate-x-2 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-[95%] md:w-[85%] lg:w-[80%] h-auto md:h-[100px] mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between z-10 mb-[50px] md:mb-[100px] gap-6 md:gap-0">
        <div className="w-full md:w-1/2 h-auto md:h-1/2 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0">
          <div className="flex gap-6 md:gap-10 md:mr-10">
            <Link href="mailto:toludairo534@gmail.com?subject=Hello&body=I wanted to reach out about your services...">
              <img src="/images/icon12.svg" alt="ICON" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
            </Link>
            <Link href="https://github.com/minibot47">
              <img src="/images/icon13.svg" alt="ICON" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
            </Link>
            <Link href="https://www.linkedin.com/in/tolu-dairo-8344111b7/">
              <img src="/images/icon14.svg" alt="ICON" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
            </Link>
          </div>
          <h2 className="text-white text-lg md:text-xl lg:text-2xl font-londrina font-extrabold text-center md:text-left">Tolulope . D @ 2026</h2>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-1/2 flex items-center justify-center md:justify-end">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="relative w-fit px-5 md:px-7 py-2 flex items-center gap-2 rounded-[11px] border-[0.1px] border-white bg-black animated-border cursor-pointer"
          >
            <h3 className="text-white text-sm md:text-base">Scroll to Top</h3>
            <img src="/images/icon15.svg" alt="ICON" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client';

import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from "next/link";

// Import your works data
const works = [
  {
    id: '1',
    slug: 'playsphere',
    title: 'Playsphere By Divaca',
    type: 'Web App',
    description: 'About the project',
    year: '2024',
    link: 'https://playsphere.com',
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
    link: 'https://divacahealth.com',
    images: {
      logo: '/images/divacahealth/logo.png',
      main: '/images/divacahealth/main.png',
      supporting: [
        '/images/divacahealth/support1.png',
        '/images/divacahealth/support2.png'
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
    link: 'https://portfolio.com',
    images: {
      logo: '/images/portfolio/logo.png',
      main: '/images/portfolio/main.png',
      supporting: [
        '/images/portfolio/support1.png'
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
    link: 'https://livestock.com',
    images: {
      logo: '/images/livestock/logo.png',
      main: '/images/livestock/main.png',
      supporting: [],
    Logoimg: [
        '/images/playsphere/next.png',
        '/images/playsphere/react.png',
        '/images/playsphere/tailwind.png',
        '/images/playsphere/js.png'
    ],},
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
    link: 'https://weather.com',
    images: {
      logo: '/images/livestock/logo.png',
      main: '/images/livestock/main.png',
      supporting: [],
    Logoimg: [
        '/images/playsphere/next.png',
        '/images/playsphere/react.png',
        '/images/playsphere/tailwind.png',
        '/images/playsphere/js.png'
    ],},
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
    link: 'https://housing.com',
    images: {
      logo: '/images/livestock/logo.png',
      main: '/images/livestock/main.png',
      supporting: [],
    Logoimg: [
        '/images/playsphere/next.png',
        '/images/playsphere/react.png',
        '/images/playsphere/tailwind.png',
        '/images/playsphere/js.png'
    ],
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
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center">
        {/* TOP BAR */}
        <div className="w-[75%] h-[70px] mb-10 rounded-full flex justify-between items-center px-8 bg-[#111]">
          <div className="text-white">
            <h1 className="text-2xl font-quintessential font-semibold">TOLULOPE DAIRO</h1>
            <h3 className="text-sm font-heading opacity-70">{titles[currentTitleIndex]}</h3>
          </div>

          <nav className="flex gap-2">
            <Link className="px-4 py-2 bg-[#19191F] rounded-[11px] text-white" href="/">Work</Link>
            <Link className="px-4 py-2 bg-[#19191F] rounded-[11px] text-white" href="/">Resume</Link>
            <Link className="px-4 py-2 bg-[#19191F] rounded-[11px] text-white" href="/">Contact</Link>
          </nav>
        </div>

        {/* PROJECTS*/}
      <div className="w-[75%] mx-auto text-white p-2">
        {/* Project Hero */}
        <div className="mt-8 flex items-center gap-5">
            <div>
                <img src={project.images.logo} alt='LOGO' className='w-[250px] h-[250px] rounded-[70px]'></img>
            </div>
            <div>
                <h3 className='text-5xl'>{project.title}</h3>
                <h3 className='text-3xl'>{project.type}</h3>
            </div>
        </div>

        {/* Project main image*/}
        <div className='w-full h-[80vh] bg-black rounded-[50px] mt-16 flex items-center justify-center '>
            <img src={project.images.main} alt='' className=' w-full h-full bg-green-500 rounded-[50px]'></img>
        </div>

        {/* Project overview and Tech stack*/}
        <div className='w-full h-fit mt-16 flex items-stretch justify-between gap-8 rounded-[50px]'>
            <div className='w-[60%] border-[0.1px] border-white p-5 flex flex-col gap-5 rounded-[50px]'>
                <div className='border-b-[0.1px] border-b-white py-3'>
                    <h3 className='text-4xl font-bold'>Overview</h3>
                </div>
                <h3 className='w-full text-3xl'>{project.description}</h3>
            </div>
            <div className='w-[40%] flex flex-col items-center justify-between gap-5'>
                <div className='w-full border-[0.1px] rounded-[50px] border-white p-5 flex flex-col gap-3'>
                    <div className='border-b-[0.1px] border-b-white py-3'>
                        <h3 className='text-4xl font-bold'>Tech Stack</h3>
                    </div>
                    {project.techStack.map((tech, index) => (
                    <div key={index} className='w-full flex gap-5 items-center py-2'>
                        <img 
                        src={project.images.Logoimg?.[index] || 'https://via.placeholder.com/70'} 
                        alt={`${tech} logo`} 
                        className='w-[70px] h-[70px] rounded-[14px] object-cover'
                        />
                        <h3 className='text-3xl'>{tech}</h3>
                    </div>
                    ))}
                </div>
                <div className='w-full border-[0.1px] rounded-[50px] border-white flex flex-col gap-5 p-8'>
                    <div className='border-b-[0.1px] border-b-white py-3'>
                        <h3 className='text-4xl font-bold'>Created</h3>
                    </div>
                    <h3 className='text-3xl'>{project.year}</h3>
                </div>
                <Link href={project.link} className='w-full bg-[#0000EE] border-[0.1px] rounded-[50px] border-white p-5 px-8 flex items-center justify-between'>
                    <h3 className='text-3xl'>See Website</h3>
                    <img src="/images/icon16.svg" alt="ICON" className="w-[35px] h-[35px]"></img>
                </Link>
            </div>
        </div>

        {/* project pictures*/}
        <div className='w-full h-[50vh] mt-10 flex gap-10'>
            <div className=' h-full w-[60%] rounded-[50px]'>
                <img src={project.images.supporting[0]} className='w-full h-full rounded-[50px]'></img>
            </div>
            <div className='h-full w-[40%] rounded-[50px]'>
                <img src={project.images.supporting[1]} className='w-full h-full rounded-[50px]'></img>
            </div>
        </div>
        <div className='w-full h-[50vh] mt-10 rounded-[50px]'>
            <img src={project.images.supporting[2]} className='w-full h-full rounded-[50px]'></img>
        </div>

        {/*Development*/}
        <div className='w-full mt-10 h-fit flex flex-col gap-4'>
            <h3 className='text-4xl font-display'>Development</h3>
            <h4 className='text-lg'>{project.devInfo}</h4>
        </div>

        {/*Next project*/}
        <div className='mt-10 w-full h-fit '>
          <h3 className='text-5xl font-bold text-gray-400 mb-4'>Next Project</h3>
          <Link 
            href={`/projects/${nextProject.id}`}
            className='group block'
          >
            <div className='flex items-center justify-between  w-fit gap-10'>
              <div>
                <p className='text-sm text-gray-500 uppercase mb-2'>{nextProject.type}</p>
                <h3 className='text-5xl font-bold text-white group-hover:text-gray-400 transition-colors'>
                  {nextProject.title}
                </h3>
              </div>
              <img 
                src="/images/icon16.svg" 
                alt="Next" 
                className="w-[35px] h-[35px] group-hover:translate-x-2 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
        {/* Footer*/}
        <footer className="w-[80%] h-[100px] mt-20 flex items-center justify-between mb-[100px] ">
            <div className=" w-1/2 h-1/2 flex items-center">
            <div className="flex gap-10 mr-10">
                <Link href="mailto:toludairo534@gmail.com?subject=Hello&body=I wanted to reach out about your services...">
                <img src="/images/icon12.svg" alt="ICON" className="w-[30px] h-[30px]"></img>
                </Link>
                <Link href="https://github.com/minibot47">
                <img src="/images/icon13.svg" alt="ICON" className="w-[30px] h-[30px]"></img>
                </Link>
                <Link href="https://www.linkedin.com/in/tolu-dairo-8344111b7/" >
                <img src="/images/icon14.svg" alt="ICON" className="w-[30px] h-[30px]"></img>
                </Link>
            </div>
            <h2 className="text-white text-2xl font-londrina font-extrabold">Tolulope . D @ 2026</h2>
            </div>
            <div className="w-1/2 h-1/2 flex items-center justify-end ">
            <div className="relative w-fit px-7 py-2 flex items-center gap-2 rounded-[11px] border-[0.1px] border-white bg-black animated-border">
                <h3 className="text-white">Scroll to Top</h3>
                <img src="/images/icon15.svg" alt="ICON" className="w-[30px] h-[30px]"></img>
            </div></div>
        </footer>
    </div>
  );
}
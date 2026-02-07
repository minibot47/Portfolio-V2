'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from 'react'; 
import { useRouter } from "next/router";

const icons = [
  "/images/icon1.png",
  "/images/icon2.png",
  "/images/icon3.png",
  "/images/icon4.png",
  "/images/icon5.png",
  "/images/icon6.png",
  "/images/icon7.png",
  "/images/icon8.png",
];

const titles = [
  "FRONTEND DEVELOPER",
  "WEB DEVELOPER",
  "SOFTWARE DEVELOPER",
  "CREATIVE DEVELOPER",
  "PROBLEM SOLVER"
];

const projects = [
  "/images/playsphere/playsphere4.png",
  "/images/divacahealth/divaca2.png",
  "/images/portfolio/portfolio2.png",
  "/images/livestock/livestock1.png",
  "/images/weather/weather1.png",
  "/images/housing/housing1.png",
];

const works = [
  {
    id: 1,
    type: "WEB APP",
    title: "Playsphere By Divaca",
    description: "Navigate the world of proper Game Management",
    image: "/images/playsphere/playsphere4.png",
    icon: "📱"
  },
  {
    id: 2,
    type: "WEB APP",
    title: "DivacaHealth By Divaca",
    description: "Modern analytics for the modern world of healthcare",
    image: "/images/divacahealth/divaca2.png",
    icon: "💻"
  },
  {
    id: 3,
    type: "Website",
    title: "Portfolio Version 1",
    description: "Manage your projects with ease",
    image: "/images/portfolio/portfolio2.png",
    icon: "💰"
  },
  {
    id: 4,
    type: "WEB APP",
    title: "Livestock Health Management System",
    description: "A practical system for managing livestock health",
    image: "/images/livestock/livestock1.png",
    icon: "📚"
  },
  {
    id: 5,
    type: "Web App",
    title: "Weather Forecasting Project",
    description: "Track your weather forecast progress",
    image: "/images/weather/weather1.png",
    icon: "📊"
  },
  {
    id: 6,
    type: "website",
    title: "Housing Miniproject",
    description: "Your personal housing companion",
    image: "/images/housing/housing1.png",
    icon: "🏋️"
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null); // Move this inside the component
  const [isVisible, setIsVisible] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  

  // Title rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Add this useEffect for the scroll behavior
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < lastScrollY || currentScrollY < 10) {
      // Scrolling up or at the top
      setShowNav(true);
    } else {
      // Scrolling down
      setShowNav(false);
    }
    
    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center p-4 md:p-5 max-w-[1400px] m-auto">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] min-h-screen flex flex-col items-center gap-5">

        {/* TOP BAR */}
        <div className={`w-[95%] sm:w-[85%] lg:w-[70%] h-auto sm:h-[70px] rounded-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-3 sm:py-0 fixed top-2 sm:top-5 z-50 transition-transform duration-500 ease-in-out ${
          showNav ? 'translate-y-0' : '-translate-y-32'
        }`}>
          <div className="text-white text-center sm:text-left w-full sm:w-auto mb-2 sm:mb-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-quintessential font-semibold">TOLULOPE DAIRO</h1>
            <div className="relative h-5 sm:h-6 overflow-hidden">
              {titles.map((title, index) => (
                <h3
                  key={index}
                  className={`absolute left-0 w-full text-xs sm:text-sm font-heading transition-all duration-[4000ms] ease-in-out transform ${
                    index === currentIndex
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-90 -translate-y-1'
                  }`}
                >
                  {title}
                </h3>
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap gap-2 justify-center sm:justify-end w-full sm:w-auto">
            <Link className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#19191F] rounded-[11px] text-white text-sm sm:text-base" href="/">Work</Link>
            <Link
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#19191F] rounded-[11px] text-white cursor-pointer text-sm sm:text-base"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth',
                });
              }}
            >
              Resume
            </Link>
            <Link
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#19191F] rounded-[11px] text-white cursor-pointer text-sm sm:text-base"
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

        {/* HERO */}
        <div className="w-full sm:w-[85%] lg:w-[80%] flex flex-col gap-10 items-center justify-center sm:mt-20 mt-20 ">
          <section className="relative overflow-hidden rounded-[30px] sm:rounded-[40px] w-full sm:w-[70%] lg:w-[50%] h-[320px] sm:h-[360px] lg:h-[420px] flex items-center justify-center">

            {/* PROFILE IMAGE (SEPARATE) */}
            <div className="relative z-10 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px] rounded-full border-[8px] sm:border-[10px] border-gray-900 overflow-hidden">
              <img
                src="/images/Profile1.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* ICON SCROLLER */}
            <div className="absolute bottom-6 w-full overflow-hidden z-20 edge-fade">
              <div className="flex w-max animate-scrollX">
                {[...icons, ...icons].map((icon, i) => (
                  <div
                    key={i}
                    className="mx-1 flex h-14 w-14 items-center justify-center rounded-xl bg-transparent backdrop-blur"
                  >
                    <img src={icon} alt="" className="h-11 w-11" />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="w-full sm:w-[70%] lg:w-[70%] z-10">
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl text-center leading-relaxed sm:leading-9">Hi, <span className="font-londrina">i'm Tolulope</span> i specialize in developing fully functional, responsive <span className="font-quintessential">Web applications</span> and <span className="font-quintessential">websites</span> with seamless cross-browser compatibility.</h3>
          </div>
          <div className="relative w-fit px-4 py-2 flex items-center gap-2 rounded-[11px] bg-black animated-border">
            <div className="bg-green-500 rounded-full h-[8px] w-[8px]"></div>
            <h3 className="text-white">Open to Work</h3>
          </div>
        </div>
      </div>
      
      {/* WORKS*/}
      <div className="hidden sm:flex w-full h-fit mb-15 mt-20 sm:mb-32">
        <div 
          ref={sectionRef}
          className={`w-full overflow-hidden edge-fade transition-transform duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        >
          <div className="flex w-max animate-scrollX gap-3 sm:gap-5">
            {[...projects, ...projects].map((project, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-[220px] w-[280px] sm:h-[320px] sm:w-[380px] lg:h-[350px] lg:w-[450px] rounded-[16px] overflow-hidden  backdrop-blur"
              >
                <img 
                  src={project} 
                  alt="" 
                  className="h-full w-full object-scale-down" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects*/}
      <div className="bg-white/5 w-[95%] md:w-[85%] h-fit rounded-3xl">
        <div className="min-h-screen bg-black p-5 sm:p-8 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {works.map((work) => (
                <Link 
                  key={work.id}
                  href={`/projects/${work.id}`}
                  className="group relative rounded-3xl overflow-visible transition-all duration-300 hover:scale-[1.02] block"
                >
                  {/* Image Container - Behind, floating with glow */}
                  <div className="relative h-[320px] sm:h-[380px] lg:h-[450px] flex items-center justify-center p-6 sm:p-8 ">
                    {/* Glow effect behind image on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/30 group-hover:via-blue-500/30 group-hover:to-pink-500/30 blur-3xl transition-all duration-500 rounded-2xl"></div>
                    
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                      />
                    </div>
                  </div>

                  {/* Content - In front, semi-transparent with backdrop blur */}
                  <div className="relative -mt-16 sm:-mt-20 bg-[#0a0a0a]/80 backdrop-blur-md rounded-3xl border border-[#1a1a1a] p-5 sm:p-6 space-y-2 transition-all duration-300 group-hover:bg-[#0a0a0a]/60 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
                      {work.type}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {work.description}
                    </p>
                  </div>

                  {/* Icon in corner
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 z-20">
                    {work.icon}
                  </div> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact*/}
      <div id="contact-section" className="w-[95%] md:w-[85%] z-10 h-fit flex flex-col lg:flex-row items-center justify-between mt-16 md:mt-20 gap-10">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-start">
          <div className="w-full sm:w-[80%] flex flex-col items-start gap-4 sm:gap-5">
            <h2 className="text-white font-display text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left">Get in touch</h2>
            <button 
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText('toludairo534@gmail.com');
                  setEmailCopied(true);
                  setTimeout(() => setEmailCopied(false), 2000);
                } catch (err) {
                  console.error('Failed to copy:', err);
                }
              }}
              className="w-full px-4 sm:px-5 py-3 flex items-center justify-center gap-3 bg-gray-900 rounded-[11px] cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <img src="/images/icon10.svg" alt="ICON" className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]"></img>
              <h2 className="text-white text-lg sm:text-2xl font-quintessential break-words text-center">
                {emailCopied ? 'Copied!' : 'toludairo534@gmail.com'}
              </h2>
            </button>
            <a
              href="https://docs.google.com/document/d/1Qw3SdOQbAOG7AKbO4uHqVGlNJr8LcFSlDbDRGH4bL18/edit?usp=sharing"
              target="_blank"
              // download="Tolulope_Resume.pdf"
              className="w-full px-4 sm:px-5 py-3 flex items-center justify-center gap-3 bg-gray-900 rounded-[11px]"
            >
              <img src="/images/icon11.svg" alt="ICON" className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]" ></img>
              <h2 className="text-white text-lg sm:text-2xl font-quintessential">Download resume</h2>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-fit flex items-center z-10 justify-center">
          <img src="/images/tolulope1.png" alt="profile" className="h-[320px] sm:h-[450px] lg:h-[600px] w-[240px] sm:w-[340px] lg:w-[420px] rounded-[11px] object-cover"></img>
        </div>
      </div>

      {/* Footer*/}
      <footer className="w-[95%] md:w-[85%] h-auto md:h-[80px] mt-12 md:mt-20 z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="w-full md:w-1/2 h-auto md:h-1/2 flex flex-col sm:flex-row items-center sm:items-center">
          <div className="flex gap-6 sm:gap-8 md:gap-10 sm:mr-10">
            <Link href="mailto:toludairo534@gmail.com?subject=Hello&body=I wanted to reach out about your services...">
              <img src="/images/icon12.svg" alt="ICON" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]"></img>
            </Link>
            <Link href="https://github.com/minibot47">
              <img src="/images/icon13.svg" alt="ICON" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]"></img>
            </Link>
            <Link href="https://www.linkedin.com/in/tolu-dairo-8344111b7/" >
              <img src="/images/icon14.svg" alt="ICON" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[30px]"></img>
            </Link>
          </div>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-londrina font-extrabold text-center sm:text-left mt-2 sm:mt-0">Tolulope . D @ 2026</h2>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-1/2 flex items-center justify-center md:justify-end ">
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative w-fit px-6 md:px-7 py-2 flex items-center gap-2 rounded-[11px] border-[0.1px] border-white bg-black animated-border cursor-pointer">
            <h3 className="text-white text-sm sm:text-base">Scroll to Top</h3>
            <img src="/images/icon15.svg" alt="ICON" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"></img>
          </div>
        </div>
      </footer>

    </main>
  );
}
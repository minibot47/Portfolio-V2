'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from 'react'; // Add useRef here

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
  "/images/work1.png",
  "/images/work2.png",
  "/images/work3.png",
  "/images/work4.png",
  "/images/work5.png",
  "/images/work6.png",
];

const works = [
  {
    id: 1,
    type: "WEB APP",
    title: "Playsphere By Divaca",
    description: "Navigate the world of web technology",
    image: "/images/work1.png",
    icon: "📱"
  },
  {
    id: 2,
    type: "WEB APP",
    title: "DivacaHealth By Divaca",
    description: "Modern analytics for the modern world",
    image: "/images/work2.png",
    icon: "💻"
  },
  {
    id: 3,
    type: "Website",
    title: "Portfolio Version 1",
    description: "Manage your finances with ease",
    image: "/images/work3.png",
    icon: "💰"
  },
  {
    id: 4,
    type: "WEB APP",
    title: "Livestock Health Management System",
    description: "A beautiful home for your books",
    image: "/images/work4.png",
    icon: "📚"
  },
  {
    id: 5,
    type: "Web App",
    title: "Weather Forecasting Project",
    description: "Track your progress and goals",
    image: "/images/work5.png",
    icon: "📊"
  },
  {
    id: 6,
    type: "website",
    title: "Housing Miniproject",
    description: "Your personal workout companion",
    image: "/images/work6.png",
    icon: "🏋️"
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null); // Move this inside the component
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <main className="min-h-screen bg-black flex flex-col items-center p-5">
      <div className="w-[80%] h-[100vh] flex flex-col items-center gap-5">

        {/* TOP BAR */}
        <div className="w-[70%] h-[70px] rounded-full flex justify-between items-center px-8 bg-[#111]">
          <div className="text-white">
            <h1 className="text-2xl font-quintessential font-semibold">TOLULOPE DAIRO</h1>
            <div className="relative h-6 overflow-hidden">
              {titles.map((title, index) => (
                <h3
                  key={index}
                  className={`absolute left-0 w-full text-sm font-heading transition-all duration-[4000ms] ease-in-out transform ${
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

          <nav className="flex gap-2">
            <Link className="px-4 py-2 bg-[#19191F] rounded-[11px] text-white" href="/">Work</Link>
            <Link className="px-4 py-2 bg-[#19191F] rounded-[11px] text-white" href="/">Resume</Link>
            <Link className="px-4 py-2 bg-[#19191F] rounded-[11px] text-white" href="/">Contact</Link>
          </nav>
        </div>

        {/* HERO */}
        <div className="w-[80%] h-[80%] flex flex-col gap-5 items-center justify-center ">
          <section className="relative overflow-hidden rounded-[40px]  w-[50%] h-[50%] flex items-center justify-center">

            {/* PROFILE IMAGE (SEPARATE) */}
            <div className="relative z-10 h-[260px] w-[260px] rounded-full border-[10px] border-gray-900 overflow-hidden">
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
          <div className="w-[50%] z-10">
            <h3 className="text-white text-3xl text-center">Hi, <span className="font-londrina">i'm Tolulope</span> i specialize in developing fully functional, responsive <span className="font-quintessential">Web applications</span> and <span className="font-quintessential">websites</span> with seamless cross-browser compatibility.</h3>
          </div>
          <div className="relative w-fit px-4 py-2 flex items-center gap-2 rounded-[11px] bg-black animated-border">
            <div className="bg-green-500 rounded-full h-[8px] w-[8px]"></div>
            <h3 className="text-white">Open to Work</h3>
          </div>
        </div>
      </div>
      
      {/* WORKS*/}
      <div className="w-[100%] h-fit mb-40">
        <div 
          ref={sectionRef}
          className={`w-full overflow-hidden edge-fade transition-transform duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        >
          <div className="flex w-max animate-scrollX gap-5">
            {[...projects, ...projects].map((project, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-[350px] w-[450px] rounded-[16px] overflow-hidden bg-white/10 backdrop-blur"
              >
                <img 
                  src={project} 
                  alt="" 
                  className="h-full w-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects*/}
      <div className="bg-white w-[80%] h-fit">
        <div className="min-h-screen bg-black p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {works.map((work) => (
                <Link 
                  key={work.id}
                  href={`/projects/${work.id}`}
                  className="group relative rounded-3xl overflow-visible transition-all duration-300 hover:scale-[1.02] block"
                >
                  {/* Image Container - Behind, floating with glow */}
                  <div className="relative h-[450px] flex items-center justify-center p-8">
                    {/* Glow effect behind image on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/30 group-hover:via-blue-500/30 group-hover:to-pink-500/30 blur-3xl transition-all duration-500 rounded-2xl"></div>
                    
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                      />
                    </div>
                  </div>

                  {/* Content - In front, semi-transparent with backdrop blur */}
                  <div className="relative -mt-20 bg-[#0a0a0a]/80 backdrop-blur-md rounded-3xl border border-[#1a1a1a] p-6 space-y-2 transition-all duration-300 group-hover:bg-[#0a0a0a]/60 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {work.type}
                    </p>
                    <h3 className="text-3xl font-bold text-white">
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
      <div className="w-[80%] h-fit flex items-center justify-between mt-20">
        <div className="w-1/2 h-full  flex flex-col items-center justify-start">
          <div className=" h-[50%] w-[70%] flex flex-col items-start gap-5">
            <h2 className="text-white font-display text-6xl">Get in touch</h2>
            <Link href="" className="px-5 py-3 flex items-center justify-center gap-3 bg-gray-900 rounded-[11px]">
              <img src="/images/icon10.svg" alt="ICON" className="h-[30px] w-[30px]"></img>
              <h2 className="text-white text-2xl font-quintessential">toludairo534@gmail.com</h2>
            </Link>
            <a
              href="/files/Tolulope Dairo job CV.pdf"
              download="Tolulope_Resume.pdf"
              className="px-5 py-3 flex items-center justify-center gap-3 bg-gray-900 rounded-[11px]"
            >
              <img src="/images/icon11.svg" alt="ICON" className="h-[30px] w-[30px]" ></img>
              <h2 className="text-white text-2xl font-quintessential">Download resume</h2>
            </a>
          </div>
        </div>
        <div className="w-1/2 h-fit  flex items-center z-10 justify-center">
          <img src="/images/tolulope1.png" alt="profile" className="h-[600px] w-[420px] rounded-[11px]"></img>
        </div>
      </div>

      {/* Footer*/}
      <footer className="w-[80%] h-[80px] mt-20 flex items-center justify-between ">
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
          </div>
        </div>
      </footer>

    </main>
  );
}
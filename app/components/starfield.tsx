'use client';

import { useEffect, useMemo } from 'react';

const STAR_COUNT = 140;
const SHOOTING_COUNT = 8;

export default function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }).map(() => ({
        x: Math.pow(Math.random(), 2) * 100,
        y: Math.pow(Math.random(), 2) * 100,
        size: Math.random() * 1.5 + 0.5,
        depth: Math.random() * 0.8 + 0.2,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 3,
      })),
    []
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: SHOOTING_COUNT }).map(() => ({
        x: Math.random() * 15,
        y: Math.random() * 20,
        delay: Math.random() * 8,
        depth: Math.random() * 0.5 + 0.6,
      })),
    []
  );

  // Mouse parallax (GPU-friendly)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      document.documentElement.style.setProperty('--px', `${x}px`);
      document.documentElement.style.setProperty('--py', `${y}px`);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_0%,transparent_35%,rgba(0,0,0,0.7)_65%,black_100%)]" />

      {/* Static stars */}
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white will-change-transform"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.depth,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            transform: `
              translate3d(
                calc(var(--px, 0px) * ${s.depth}),
                calc(var(--py, 0px) * ${s.depth}),
                0
              )
            `,
          }}
        />
      ))}

    {/* Shooting stars */}
    {shootingStars.map((s, i) => (
    <div
        key={`shoot-${i}`}
        className="absolute will-change-transform"
        style={{
        left: `${s.x}%`,
        top: `${s.y}%`,
        animation: `shoot 5s linear ${s.delay}s infinite`,
        }}
    >
        {/* Clean meteor line */}
        <div
        className="relative w-[60px] h-[0.5px]"
        style={{
            transform: 'rotate(37deg)',
            background:
            'linear-gradient(to left, rgba(120,120,120,0.7), rgba(150,150,150,0.5), transparent)',
            boxShadow: '0 0 1px rgba(180,180,180,0.15)',
            borderRadius: '999px',
        }}
        >
        {/* Tiny but stable head */}
        <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] rounded-full"
            style={{
            background: 'rgba(160,160,160,0.7)',
            boxShadow: '0 0 2px 1px rgba(180,180,180,0.2)',
            }}
        />
        </div>
    </div>
    ))}


      {/* Animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shoot {
        0% {
            transform: translate(0, 0);
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        80% {        /* stays bright longer */
            opacity: 0.8;
        }
        100% {
            transform: translate(800px, 600px);
            opacity: 0;
        }
        }
      `}</style>
    </div>
  );
}
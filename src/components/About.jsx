import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- Cinematic Stagger Entrance on Scroll ---
    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // --- Interactive Magnetic Mouse Spotlight per Bento Card ---
    const cards = cardRefs.current;

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;

      const listener = (e) => handleMouseMove(e, card);

      card.addEventListener('mousemove', listener);

      return () => card.removeEventListener('mousemove', listener);
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Cinematic Red Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>

            <span className="text-red-500 font-bold">
              EPISODE 01
            </span>

            <span className="text-white/40">|</span>

            <span>
              ABOUT THE PROFESSIONAL
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            PROFESSIONAL SYNOPSIS <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              EXPERIENCE & IMPACT.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout with Interactive Mouse Light Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Professional Background (Span 7) */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              01
            </div>

            <div className="space-y-5 relative z-10">

              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                Professional Background
              </h3>

              <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">
                I am{' '}
                <span className="text-white font-bold drop-shadow">
                  Pinky Mishra
                </span>
                , an E-Commerce Operations Consultant with 11 years of experience in managing and optimising e-commerce platforms, streamlining operations, and enhancing customer satisfaction.
              </p>

              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                My experience spans e-commerce operations, storefront optimisation, marketplace management, advertising, data analytics, reporting, project management, and cross-functional collaboration between marketing, design, and analytics teams.
              </p>

            </div>

            <div className="pt-8 flex flex-wrap gap-2 relative z-10">

              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                E-Commerce Operations
              </span>

              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                Storefront Optimisation
              </span>

              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                Marketplace Management
              </span>

            </div>
          </div>

          {/* Card 2: Achievements & Certifications (Span 5) */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              02
            </div>

            <div className="space-y-5 relative z-10">

              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                Impact & Expertise
              </h3>

              <ul className="space-y-3.5 text-sm text-white/80 font-light">

                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    &#8250;
                  </span>

                  <span>
                    Increased business revenue by up to{' '}
                    <strong className="text-white">
                      300%
                    </strong>{' '}
                    through innovative solutions and cross-functional collaboration.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    &#8250;
                  </span>

                  <span>
                    Reduced operational costs by up to{' '}
                    <strong className="text-white">
                      40%
                    </strong>{' '}
                    in one year while improving productivity.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    &#8250;
                  </span>

                  <span>
                    Worked across Shopify, Amazon, Myntra, Nykaa, Flipkart, Walmart and Etsy.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    &#8250;
                  </span>

                  <span>
                    Certified in{' '}
                    <strong className="text-white">
                      Amazon Sponsored Ads
                    </strong>
                    .
                  </span>
                </li>

              </ul>

            </div>

            <div className="pt-6 font-mono text-xs text-white/40 relative z-10">
              // SEASON_01 PROFESSIONAL HIGHLIGHTS
            </div>

          </div>

          {/* Card 3: E-Commerce Ecosystem (Span 12) */}
          <div
            ref={addToRefs}
            className="md:col-span-12 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-red-600/60 transition-all duration-500 overflow-hidden relative group"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)'
              }}
            ></div>

            <div className="space-y-2 text-left relative z-10">

              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                E-Commerce Ecosystem
              </h3>

              <p className="text-base md:text-lg font-semibold text-white">
                Experienced across storefronts, marketplaces, advertising, analytics, project management and AI tools.
              </p>

            </div>

            <div className="flex flex-wrap items-center gap-3 relative z-10">

              {[
                'Shopify',
                'Amazon',
                'Myntra',
                'Nykaa',
                'Flipkart',
                'Walmart',
                'Etsy',
                'Google Ads',
                'Meta',
                'Amazon Seller Board',
                'Shopify Analytics',
                'Polar Analytics',
                'Jira',
                'Asana',
                'Notion',
                'Microsoft Teams',
                'Click Up',
                'ChatGPT',
                'Gemini',
                'Claude',
                'Perplexity',
                'Higgsfield'
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-white shadow-inner hover:bg-red-600/20 hover:border-red-600/40 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const caseStudiesData = [
  {
    number: "01",
    title: "Amazon Channel Revival",
    client: "Kashmir Box",
    tag: "MARKETPLACE GROWTH",
    gradient: "from-[#1f0a0c] via-[#121212] to-[#0a0a0a]",

    challenge:
      "Dormant Amazon seller account with poor performance metrics.",

    action: [
      "Redesigned product infographics and optimized shelf presentation",
      "Restructured listing hierarchy and keyword optimization",
      "Implemented competitive pricing strategy"
    ],

    results: [
      "Revived account within 30 days",
      "Seller rating: 3.9 → 4.2 stars",
      "Monthly sales: ₹15,761 → ₹36,838",
      "133% increase in monthly sales",
      "Scaled across 101+ SKUs"
    ]
  },

  {
    number: "02",
    title: "Operations & Fulfillment Scaling",
    client: "E-Commerce Operations",
    tag: "OPERATIONS & SCALE",
    gradient: "from-[#1a0809] via-[#111111] to-[#090909]",

    challenge:
      "High order volume growth needed while maintaining quality and controlling costs.",

    action: [
      "Overhauled order processing and fulfillment workflows",
      "Implemented Shiprocket + Unicommerce integration",
      "Designed quality control measures for warehouse and pre-delivery checks",
      "Managed 3 digital marketers and coordinated with 10 cross-functional team members"
    ],

    results: [
      "Scaled operations from 100 → 450+ daily orders",
      "Achieved scale within 6 months",
      "Reduced handling time by 40%",
      "Fulfillment accuracy increased to 98%",
      "15% cost reduction while scaling",
      "20% improvement in inventory turnover"
    ]
  },

  {
    number: "03",
    title: "Multi-Marketplace Growth",
    client: "500+ SKU Operations",
    tag: "MARKETPLACE OPTIMIZATION",
    gradient: "from-[#220a0d] via-[#131313] to-[#0a0a0a]",

    challenge:
      "Inconsistent product listings and inventory planning across 5+ marketplaces for 500+ SKUs.",

    action: [
      "Built unified product listing strategy across 5+ major platforms",
      "Implemented data-driven demand forecasting model with 85% accuracy",
      "Established automated stock management protocols",
      "Designed AI-powered creative workflows"
    ],

    results: [
      "Reduced listing errors by 30%",
      "Improved stock turnover by 15%",
      "Eliminated overselling incidents",
      "Reduced out-of-stock cases by 20%",
      "CTR increased 25%",
      "CPC reduced 18% across Google + social ads",
      "Creative production timelines reduced by 35%"
    ]
  },

  {
    number: "04",
    title: "Performance Marketing Optimization",
    client: "Gaui Lifestyle",
    tag: "PERFORMANCE MARKETING",
    gradient: "from-[#1d090b] via-[#101010] to-[#080808]",

    challenge:
      "Maximize ROAS and customer lifetime value across a limited ad budget of ₹10L/month.",

    action: [
      "Consolidated ad spend across Amazon, Flipkart, and Meesho Ads",
      "Implemented AI-powered product recommendations at checkout",
      "Built WhatsApp marketing sequences and loyalty programs",
      "Executed A/B testing on creatives and copy across campaigns",
      "Aligned marketing, design, and analytics teams"
    ],

    results: [
      "ROAS: 287% across all campaigns",
      "AOV increased by 35% through upselling",
      "CTR improved by 25%",
      "Customer lifetime value increased by 45%",
      "Consistent brand messaging across all channels"
    ]
  }
];

const Expertise = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    // ============================================================
    // STACKING CARD ANIMATION
    // ============================================================

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      gsap.to(card, {
        scale: 0.92 - index * 0.025,
        y: -15 - index * 8,
        filter: "blur(6px)",
        opacity: 0.4,

        scrollTrigger: {
          trigger: card,
          start: `top ${90 + index * 20}px`,
          end: "bottom top",
          scrub: true
        }
      });
    });

    // ============================================================
    // MAGNETIC MOUSE SPOTLIGHT
    // ============================================================

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const listeners = [];

    cards.forEach((card) => {
      if (!card) return;

      const listener = (e) => handleMouseMove(e, card);

      card.addEventListener('mousemove', listener);

      listeners.push({
        card,
        listener
      });
    });

    return () => {
      listeners.forEach(({ card, listener }) => {
        card.removeEventListener('mousemove', listener);
      });

      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-20 px-6 md:px-12 select-none overflow-hidden"
    >

      {/* ==========================================================
          CINEMATIC RED AMBIENT GLOW
      ========================================================== */}

      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-900/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">

        {/* ========================================================
            SECTION HEADER
        ======================================================== */}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">

          <div className="space-y-3 max-w-xl">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-red-600/40 text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">

              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>

              <span className="text-red-500 font-bold">
                EPISODE 03
              </span>

              <span className="text-white/40">
                |
              </span>

              <span>
                CASE STUDIES
              </span>

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">

              DIRECTOR'S CUT
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_25px_rgba(229,9,20,0.35)]">
                Case Studies.
              </span>

            </h2>

          </div>

          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Real-world e-commerce growth, marketplace optimisation,
            operational scaling, inventory management, and performance
            marketing outcomes.
          </p>

        </div>

        {/* ========================================================
            CASE STUDY STACK
        ======================================================== */}

        <div className="relative flex flex-col gap-8 pb-20">

          {caseStudiesData.map((item, index) => (

            <div
              key={index}
              ref={addToRefs}
              className={`sticky w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] transform-gpu transition-all overflow-hidden group hover:border-red-600/50`}
              style={{
                zIndex: index + 1,
                top: `${95 + index * 16}px`
              }}
            >

              {/* ==================================================
                  DYNAMIC MOUSE SPOTLIGHT
              ================================================== */}

              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background:
                    'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.18), transparent 70%)'
                }}
              ></div>

              {/* ==================================================
                  CRIMSON ACCENT STRIPE
              ================================================== */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-10"></div>

              {/* ==================================================
                  CARD TOP
              ================================================== */}

              <div className="flex items-center justify-between w-full mb-6 relative z-10">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 px-2.5 py-0.5 rounded bg-red-600/10 border border-red-600/25">
                    {item.tag}
                  </span>

                  <span className="hidden sm:block text-[10px] font-mono text-white/30 uppercase tracking-widest">
                    CASE STUDY
                  </span>

                </div>

                <span className="text-2xl md:text-3xl font-mono font-black text-white/20">
                  {item.number}
                </span>

              </div>

              {/* ==================================================
                  TITLE
              ================================================== */}

              <div className="relative z-10 mb-7">

                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-snug group-hover:text-red-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="mt-2 text-xs md:text-sm font-mono text-red-500/80 uppercase tracking-widest">
                  {item.client}
                </div>

              </div>

              {/* ==================================================
                  CHALLENGE
              ================================================== */}

              <div className="relative z-10 mb-6">

                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/35 mb-2">
                  Challenge
                </div>

                <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-4xl">
                  {item.challenge}
                </p>

              </div>

              {/* ==================================================
                  ACTION
              ================================================== */}

              <div className="relative z-10 mb-7">

                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 mb-3">
                  Action
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">

                  {item.action.map((action, actionIndex) => (

                    <div
                      key={actionIndex}
                      className="flex items-start gap-2 text-xs md:text-sm text-white/65 font-light leading-relaxed"
                    >

                      <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-red-600"></span>

                      <span>
                        {action}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* ==================================================
                  RESULTS
              ================================================== */}

              <div className="relative z-10 pt-5 border-t border-white/10">

                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 mb-4">
                  Results
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                  {item.results.map((result, resultIndex) => (

                    <div
                      key={resultIndex}
                      className="px-3 py-2.5 rounded-lg bg-white/[0.035] border border-white/[0.07] hover:border-red-600/30 transition-colors"
                    >

                      <div className="flex items-start gap-2">

                        <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_8px_rgba(229,9,20,0.6)]"></span>

                        <span className="text-xs md:text-sm text-white/80 font-medium leading-relaxed">
                          {result}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* ==================================================
                  BOTTOM GLOW DOT
              ================================================== */}

              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:shadow-[0_0_10px_#E50914] z-10 transition-all"></div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Expertise;
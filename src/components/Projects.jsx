import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// PROJECT DATA
// ============================================================

const projectsData = [
  {
    title: "Kashmir Box",
    category: "E-Commerce Management",
    description:
      "Managed marketplace P&L across Myntra and Nykaa, onboarded Flipkart and Walmart, and drove ₹1.73 Cr GMV across 9,199 fulfilled orders.",
    tags: ["Shopify", "Myntra", "Nykaa", "Flipkart"],
    match: "99%",
    episode: "S01 E01",
  },
  {
    title: "Bird Eye India",
    category: "E-Commerce Operations",
    description:
      "Scaled e-commerce operations from 100 to 450+ daily orders within six months while maintaining operational efficiency and reducing costs by 15%.",
    tags: ["Shopify", "Amazon", "E-Commerce", "Operations"],
    match: "98%",
    episode: "S01 E02",
  },
  {
    title: "Gaui Lifestyle",
    category: "E-Commerce Consulting",
    description:
      "Optimized digital campaigns across Amazon, Flipkart and Meesho, achieving 287% ROAS while implementing AI-powered product recommendations and upselling strategies.",
    tags: ["Amazon Ads", "Flipkart Ads", "Meesho", "AI"],
    match: "97%",
    episode: "S01 E03",
  },
  {
    title: "Milltex.co / Bell Rangers / Lotus Mills",
    category: "E-Commerce Consulting",
    description:
      "Directed multi-marketplace product listings across 5+ platforms, optimized 500+ SKUs, and introduced demand forecasting with 85% accuracy.",
    tags: ["E-Commerce", "Marketplaces", "Inventory", "AI"],
    match: "96%",
    episode: "S01 E04",
  },
  {
    title: "The Narayana Group",
    category: "Digital Transformation",
    description:
      "Led digital transformation initiatives including e-commerce optimization, cross-selling strategies, chatbot-assisted checkout, and digital marketing for education products.",
    tags: ["Digital Transformation", "E-Commerce", "Chatbots"],
    match: "98%",
    episode: "S01 E05",
  },
  {
    title: "ISANO Connect",
    category: "Travel & Concierge Operations",
    description:
      "Improved operational efficiency by 90 minutes per client through HubSpot and Zapier automation, enabling the team to serve three times more clients per working hour.",
    tags: ["HubSpot", "Zapier", "Automation", "Operations"],
    match: "97%",
    episode: "S01 E06",
  },
  {
    title: "nLearn LMS Platform",
    category: "EdTech & Digital Transformation",
    description:
      "Led a digital transformation initiative resulting in the launch of the nLearn LMS platform, reaching 15,000+ student registrations and ₹25 Lakhs in parent-purchased subscriptions within the first month.",
    tags: ["LMS", "EdTech", "Analytics", "Salesforce"],
    match: "99%",
    episode: "S01 E07",
  },
  {
    title: "Juspay Payment Gateway Integration",
    category: "Digital Payments",
    description:
      "Implemented Juspay digital payment gateway integration supporting 4,000+ transactions daily with a 99.7% transaction success rate.",
    tags: ["Juspay", "Transactions", "ECommerce", "Analytics"],
    match: "100%",
    episode: "S01 E08",
  },
];

// ============================================================
// PROJECTS COMPONENT
// ============================================================

const Projects = () => {
  const containerRef = useRef(null);

  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);

  const cardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const mobileCarouselRef = useRef(null);

  // ============================================================
  // GSAP
  // ============================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --------------------------------------------------------
      // FOLDER INITIAL STATE
      // --------------------------------------------------------

      gsap.set(
        [folderBackRef.current, folderFrontRef.current],
        {
          xPercent: -50,
          yPercent: -50,
        }
      );

      gsap.set(folderFrontRef.current, {
        transformOrigin: "bottom center",
      });

      // --------------------------------------------------------
      // DESKTOP GRID POSITION
      // --------------------------------------------------------

      const getGridPos = (index) => {
        const columns = 4;

        const row = Math.floor(index / columns);
        const col = index % columns;

        return {
          row,
          col,
        };
      };

      // --------------------------------------------------------
      // DESKTOP CARD INITIAL STATE
      // --------------------------------------------------------

      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          rotation: gsap.utils.random(-5, 5),
          scale: 0.82,
          opacity: 1,
        });
      });

      // --------------------------------------------------------
      // RESPONSIVE MATCH MEDIA
      // --------------------------------------------------------

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop, isMobile } = context.conditions;

          // ======================================================
          // DESKTOP
          // ======================================================

          if (isDesktop) {
            let floatTween;

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,

                start: "top 50%",
                end: "bottom 50%",

                toggleActions: "play reverse play reverse",

                onEnter: () => {
                  if (floatTween) floatTween.kill();
                },

                onEnterBack: () => {
                  if (floatTween) floatTween.kill();
                },

                onLeave: () => {
                  if (floatTween) floatTween.kill();
                },

                onLeaveBack: () => {
                  if (floatTween) floatTween.kill();
                },
              },

              onComplete: () => {
                floatTween = gsap.to(cardsRef.current, {
                  y: "+=8",
                  rotation: "+=0.7",

                  duration: 3.5,

                  yoyo: true,
                  repeat: -1,

                  ease: "sine.inOut",

                  stagger: {
                    amount: 1.5,
                    from: "random",
                  },
                });
              },
            });

            // ----------------------------------------------------
            // OPEN FOLDER
            // ----------------------------------------------------

            timeline.to(folderFrontRef.current, {
              rotationX: -130,
              duration: 1.2,
              ease: "power3.inOut",
            });

            // ----------------------------------------------------
            // CARDS RISE
            // ----------------------------------------------------

            timeline.to(
              cardsRef.current,
              {
                y: -130,
                scale: 0.88,
                zIndex: 70,

                duration: 0.6,

                stagger: 0.04,

                ease: "back.out(1.2)",
              },
              "-=0.6"
            );

            // ----------------------------------------------------
            // SPREAD INTO 4 × 2 GRID
            // ----------------------------------------------------

            timeline.to(
              cardsRef.current,
              {
                x: (i) => {
                  const cardWidth =
                    cardsRef.current[0]?.offsetWidth || 320;

                  const gap = 28;

                  const { col } = getGridPos(i);

                  return (col - 1.5) * (cardWidth + gap);
                },

                y: (i) => {
                  const cardHeight =
                    cardsRef.current[0]?.offsetHeight || 240;

                  const gap = 32;

                  const { row } = getGridPos(i);

                  return (row - 0.5) * (cardHeight + gap);
                },

                rotation: () =>
                  gsap.utils.random(-1.5, 1.5),

                scale: 1,

                duration: 1.4,

                stagger: {
                  amount: 0.45,
                  from: "center",
                },

                ease: "expo.out",
              },
              "-=0.2"
            );
          }

          // ======================================================
          // MOBILE
          // ======================================================

          if (isMobile) {
            const carousel = mobileCarouselRef.current;

            if (!carousel) return;

            // ----------------------------------------------------
            // MOBILE INITIAL STATE
            //
            // Important:
            // Do NOT use negative x positions here.
            // The carousel handles horizontal positioning.
            // ----------------------------------------------------

            mobileCardsRef.current.forEach((card) => {
              if (!card) return;

              gsap.set(card, {
                x: 0,
                y: 80,
                scale: 0.82,
                opacity: 0,
                rotation: 0,
              });
            });

            // ----------------------------------------------------
            // MOBILE FOLDER
            // ----------------------------------------------------

            gsap.set(folderBackRef.current, {
              scale: 0.9,
              opacity: 0.7,
            });

            gsap.set(folderFrontRef.current, {
              scale: 0.9,
              opacity: 0.8,
            });

            // ----------------------------------------------------
            // MOBILE SCROLL TRIGGER
            // ----------------------------------------------------

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,

                start: "top 65%",

                toggleActions: "play none none reverse",
              },
            });

            // ----------------------------------------------------
            // OPEN FOLDER
            // ----------------------------------------------------

            timeline.to(folderFrontRef.current, {
              rotationX: -130,

              duration: 0.8,

              ease: "power3.inOut",
            });

            // ----------------------------------------------------
            // MOBILE CARDS ENTER
            // ----------------------------------------------------

            timeline.to(
              mobileCardsRef.current,
              {
                y: 0,

                opacity: 1,

                scale: 1,

                duration: 0.7,

                stagger: 0.06,

                ease: "back.out(1.15)",
              },
              "-=0.35"
            );

            // ----------------------------------------------------
            // ENABLE SWIPE AFTER ANIMATION
            // ----------------------------------------------------

            timeline.call(() => {
              carousel.style.pointerEvents = "auto";
              carousel.style.overflowX = "auto";
            });
          }
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // ============================================================
  // JSX
  // ============================================================

  return (
    <section
      id="projects"
      ref={containerRef}
      className="
        relative
        w-full
        min-h-[100svh]
        md:min-h-[190vh]

        bg-[#0b0b0b]

        text-white
        font-sans

        overflow-x-hidden

        flex
        items-center
        justify-center

        py-24
        md:py-40

        select-none
      "
    >
      {/* ======================================================
          MOBILE SCROLLBAR STYLE
      ====================================================== */}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ======================================================
          BACKGROUND TITLE
      ====================================================== */}

      <div
        className="
          absolute
          top-8
          left-0

          w-full

          flex
          justify-center
          items-start

          pointer-events-none

          z-0

          overflow-hidden
        "
      >
        <h1
          className="
            text-[24vw]
            sm:text-[17vw]
            md:text-[20vw]

            font-black

            text-white/[0.03]

            tracking-tighter

            leading-none

            uppercase

            whitespace-nowrap
          "
        >
          PROJECTS
        </h1>
      </div>

      {/* ======================================================
          RED AMBIENT GLOW
      ====================================================== */}

      <div
        className="
          absolute

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[75vw]
          h-[75vw]

          md:w-[55vw]
          md:h-[55vw]

          bg-red-600/15

          rounded-full

          blur-[120px]
          md:blur-[160px]

          pointer-events-none

          z-0
        "
      />

      {/* ======================================================
          DESKTOP MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative

          w-full
          max-w-[1500px]

          h-full

          flex
          items-center
          justify-center

          perspective-[2000px]

          z-10
        "
      >
        <div
          className="
            relative

            w-0
            h-0

            transform-style-3d
          "
        >
          {/* ==================================================
              FOLDER BACK
          ================================================== */}

          <div
            ref={folderBackRef}
            className="
              absolute

              w-[85vw]
              md:w-[32vw]

              max-w-[380px]

              aspect-video

              bg-[#141414]

              rounded-[24px]

              border
              border-red-600/40

              shadow-[0_20px_50px_rgba(229,9,20,0.25)]

              flex
              items-center
              justify-center
            "
            style={{
              zIndex: 5,
            }}
          >
            {/* Folder Tab */}

            <div
              className="
                absolute

                -top-6
                left-6

                w-32
                h-8

                bg-[#1f1f1f]

                rounded-t-xl

                border-t
                border-red-600/30
              "
            />

            <div
              className="
                relative
                z-10

                text-red-600

                font-mono
                font-black

                text-xl
                md:text-2xl

                tracking-widest

                uppercase

                opacity-60
              "
            >
              CLIENT_ARCHIVE
            </div>
          </div>

          {/* ==================================================
              DESKTOP PROJECT CARDS
          ================================================== */}

          {projectsData.map((project, i) => (
            <div
              key={project.episode}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="
                hidden
                md:block

                absolute

                w-[300px]
                lg:w-[300px]
                xl:w-[320px]

                h-[250px]

                will-change-transform
              "
              style={{
                zIndex: 10 + i,
              }}
            >
              <div
                className="
                  group

                  relative

                  w-full
                  h-full

                  rounded-[24px]

                  overflow-hidden

                  border
                  border-white/15

                  bg-[#141414]/95

                  backdrop-blur-2xl

                  shadow-[0_25px_50px_rgba(0,0,0,0.9)]

                  p-6

                  flex
                  flex-col

                  transition-all
                  duration-500

                  hover:scale-[1.035]

                  hover:-translate-y-2

                  hover:border-red-600

                  hover:shadow-[0_35px_80px_rgba(229,9,20,0.35)]

                  cursor-pointer
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-tr
                    from-red-600/10
                    via-transparent
                    to-transparent

                    opacity-0

                    group-hover:opacity-100

                    transition-opacity
                    duration-500

                    pointer-events-none
                  "
                />

                {/* Header */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    items-center
                    justify-between

                    h-8

                    shrink-0
                  "
                >
                  <span
                    className="
                      inline-flex
                      items-center

                      h-6

                      text-[10px]

                      font-mono
                      font-bold

                      tracking-widest

                      uppercase

                      text-red-500

                      bg-red-600/10

                      px-2.5

                      rounded

                      border
                      border-red-600/20

                      whitespace-nowrap
                    "
                  >
                    {project.episode}
                  </span>

                  <div
                    className="
                      flex
                      items-center

                      gap-2
                    "
                  >
                    <span
                      className="
                        text-[11px]

                        font-mono
                        font-bold

                        text-red-400

                        whitespace-nowrap
                      "
                    >
                      {project.match} Match
                    </span>

                    <span
                      className="
                        text-[9px]

                        font-mono

                        border
                        border-white/30

                        px-1.5
                        py-0.5

                        text-white/70

                        whitespace-nowrap
                      "
                    >
                      PRO
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div
                  className="
                    relative
                    z-10

                    flex-1

                    min-h-0

                    flex
                    flex-col

                    justify-center

                    pt-2
                    pb-3
                  "
                >
                  <div
                    className="
                      h-5

                      flex
                      items-center

                      text-[10px]

                      font-mono

                      uppercase

                      tracking-[0.14em]

                      text-white/40

                      truncate

                      shrink-0
                    "
                  >
                    {project.category}
                  </div>

                  <h3
                    className="
                      mt-2

                      min-h-[52px]
                      max-h-[52px]

                      overflow-hidden

                      text-[22px]

                      leading-[1.12]

                      font-black

                      text-white

                      tracking-tight

                      line-clamp-2

                      group-hover:text-red-500

                      transition-colors
                      duration-300
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      min-h-[54px]
                      max-h-[54px]

                      overflow-hidden

                      text-[11px]

                      leading-[1.5]

                      text-white/65

                      font-light

                      line-clamp-3
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tags */}

                <div
                  className="
                    relative
                    z-10

                    shrink-0

                    h-[48px]

                    pt-3

                    border-t
                    border-white/10

                    overflow-hidden
                  "
                >
                  <div
                    className="
                      flex
                      flex-wrap

                      gap-1.5

                      max-h-[36px]

                      overflow-hidden
                    "
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="
                          inline-flex

                          items-center

                          h-5

                          text-[9px]

                          font-mono

                          text-white/70

                          bg-white/5

                          border
                          border-transparent

                          px-2

                          rounded

                          whitespace-nowrap

                          group-hover:border-red-600/20

                          transition-colors
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status */}

                <div
                  className="
                    absolute

                    bottom-4
                    right-4

                    w-2
                    h-2

                    rounded-full

                    bg-red-600

                    group-hover:shadow-[0_0_15px_#E50914]

                    transition-all
                  "
                />
              </div>
            </div>
          ))}

          {/* ==================================================
              FOLDER FRONT
          ================================================== */}

          <div
            ref={folderFrontRef}
            className="
              absolute

              w-[85vw]
              md:w-[32vw]

              max-w-[380px]

              aspect-video

              pointer-events-none

              will-change-transform
            "
            style={{
              zIndex: 60,
            }}
          >
            <div
              className="
                absolute

                bottom-0

                w-full
                h-[85%]

                bg-[#1c1c1c]

                rounded-b-[24px]

                rounded-t-md

                shadow-[0_-5px_20px_rgba(0,0,0,0.8)]

                flex
                flex-col
                justify-end

                p-6

                border-t
                border-red-600/40
              "
            >
              <div
                className="
                  w-20
                  h-1.5

                  bg-white/20

                  rounded-full

                  mx-auto
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          MOBILE CAROUSEL
      ====================================================== */}

      <div
        ref={mobileCarouselRef}
        className="
          md:hidden

          absolute
          inset-x-0

          top-1/2
          -translate-y-1/2

          w-full

          min-h-[340px]

          flex
          items-center

          overflow-x-auto
          overflow-y-visible

          hide-scrollbar

          snap-x
          snap-mandatory

          z-[100]

          pointer-events-none

          overscroll-x-contain

          touch-pan-x

          scroll-smooth

          px-[11vw]
        "
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {projectsData.map((project, i) => (
          <div
            key={`mobile-${i}`}
            ref={(el) => {
              mobileCardsRef.current[i] = el;
            }}
            className="
              shrink-0

              w-[78vw]
              max-w-[390px]

              min-h-[310px]

              snap-center

              relative

              z-10

              will-change-transform

              mr-[6vw]

              last:mr-0
            "
          >
            {/* ==================================================
                MOBILE CARD
            ================================================== */}

            <div
              className="
                relative

                w-full
                h-full

                min-h-[310px]

                rounded-[24px]

                overflow-hidden

                border
                border-white/15

                bg-[#141414]/95

                backdrop-blur-2xl

                p-5
                sm:p-6

                flex
                flex-col

                shadow-[0_25px_60px_rgba(0,0,0,0.95)]

                active:scale-[0.98]

                transition-transform
                duration-300
              "
            >
              {/* Mobile Red Glow */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-red-600/10
                  via-transparent
                  to-transparent

                  pointer-events-none
                "
              />

              {/* ==================================================
                  MOBILE HEADER
              ================================================== */}

              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  justify-between

                  gap-3

                  shrink-0
                "
              >
                <span
                  className="
                    inline-flex
                    items-center

                    text-[9px]
                    sm:text-[10px]

                    font-mono
                    font-bold

                    tracking-widest

                    text-red-500

                    bg-red-600/10

                    px-2
                    sm:px-2.5

                    py-1

                    rounded

                    border
                    border-red-600/20

                    whitespace-nowrap
                  "
                >
                  {project.episode}
                </span>

                <div
                  className="
                    flex
                    items-center

                    gap-2

                    shrink-0
                  "
                >
                  <span
                    className="
                      text-[10px]
                      sm:text-xs

                      font-mono
                      font-bold

                      text-red-400

                      whitespace-nowrap
                    "
                  >
                    {project.match} Match
                  </span>

                  <span
                    className="
                      hidden
                      xs:inline-flex

                      text-[8px]

                      font-mono

                      border
                      border-white/20

                      px-1.5
                      py-0.5

                      text-white/60
                    "
                  >
                    PRO
                  </span>
                </div>
              </div>

              {/* ==================================================
                  MOBILE CONTENT
              ================================================== */}

              <div
                className="
                  relative
                  z-10

                  flex-1

                  min-h-0

                  flex
                  flex-col

                  justify-center

                  py-5
                "
              >
                {/* Category */}

                <div
                  className="
                    text-[9px]
                    sm:text-[10px]

                    font-mono

                    uppercase

                    tracking-[0.12em]

                    text-white/40

                    truncate
                  "
                >
                  {project.category}
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-2

                    text-[21px]
                    sm:text-[23px]

                    leading-[1.1]

                    font-black

                    text-white

                    tracking-tight

                    line-clamp-2
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3

                    text-[11px]
                    sm:text-xs

                    leading-[1.55]

                    text-white/70

                    font-light

                    line-clamp-4
                  "
                >
                  {project.description}
                </p>
              </div>

              {/* ==================================================
                  MOBILE TAGS
              ================================================== */}

              <div
                className="
                  relative
                  z-10

                  shrink-0

                  pt-3

                  border-t
                  border-white/10
                "
              >
                <div
                  className="
                    flex
                    flex-wrap

                    gap-1.5

                    max-h-[46px]

                    overflow-hidden
                  "
                >
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        inline-flex
                        items-center

                        text-[8px]
                        sm:text-[9px]

                        font-mono

                        text-white/65

                        bg-white/5

                        border
                        border-white/5

                        px-2

                        py-1

                        rounded

                        whitespace-nowrap
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  MOBILE STATUS
              ================================================== */}

              <div
                className="
                  absolute

                  bottom-4
                  right-4

                  w-2
                  h-2

                  rounded-full

                  bg-red-600

                  shadow-[0_0_12px_rgba(229,9,20,0.7)]
                "
              />
            </div>
          </div>
        ))}
      </div>

      {/* ======================================================
          MOBILE SWIPE INDICATOR
      ====================================================== */}

      <div
        className="
          md:hidden

          absolute

          bottom-8
          left-1/2

          -translate-x-1/2

          z-[110]

          flex
          flex-col

          items-center

          gap-2

          pointer-events-none
        "
      >
        <div
          className="
            flex
            items-center
            gap-2

            text-[9px]

            font-mono

            uppercase

            tracking-[0.2em]

            text-white/35
          "
        >
          <span>SWIPE</span>

          <span className="text-red-500">→</span>
        </div>

        <div
          className="
            w-12
            h-px

            bg-gradient-to-r
            from-transparent
            via-red-600/60
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default Projects;
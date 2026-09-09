import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import pictureImg from '../assets/Portfolio/picture.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const spotlightRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const contentRef = useRef(null);

  const developerRoles = [
    'FEATURE FILM // E-COMMERCE OPERATIONS',
    'ORIGINAL SERIES // STOREFRONT OPTIMISATION',
    'BLOCKBUSTER // MARKETPLACE MANAGEMENT',
    'ACCLAIMED // E-COMMERCE ANALYTICS',
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const content = contentRef.current;

    if (!section || !card || !content) return;

    const mm = gsap.matchMedia();

    // ============================================================
    // DESKTOP
    // ============================================================

    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      });

      const header = section.querySelector('header');
      const animatedItems = content.querySelectorAll('.hero-anim-item');

      if (header) {
        tl.fromTo(
          header,
          {
            y: -60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          }
        );
      }

      tl.fromTo(
        animatedItems,
        {
          y: 50,
          opacity: 0,
          filter: 'blur(10px)',
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.12,
        },
        '-=0.7'
      );

      tl.fromTo(
        card,
        {
          scale: 0.75,
          opacity: 0,
          rotationY: 35,
          rotationX: -15,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          duration: 1.4,
          ease: 'back.out(1.2)',
        },
        '-=0.9'
      );

      // ------------------------------------------------------------
      // Desktop Mouse Physics
      // ------------------------------------------------------------

      gsap.set([cursorDotRef.current, cursorRingRef.current], {
        scale: 0.5,
        opacity: 0,
        transformOrigin: '50% 50%',
      });

      const xToDot = gsap.quickTo(cursorDotRef.current, 'x', {
        duration: 0.05,
        ease: 'power2.out',
      });

      const yToDot = gsap.quickTo(cursorDotRef.current, 'y', {
        duration: 0.05,
        ease: 'power2.out',
      });

      const xToRing = gsap.quickTo(cursorRingRef.current, 'x', {
        duration: 0.15,
        ease: 'power3.out',
      });

      const yToRing = gsap.quickTo(cursorRingRef.current, 'y', {
        duration: 0.15,
        ease: 'power3.out',
      });

      const xTilt = gsap.quickTo(card, 'rotationY', {
        duration: 0.4,
        ease: 'power3.out',
      });

      const yTilt = gsap.quickTo(card, 'rotationX', {
        duration: 0.4,
        ease: 'power3.out',
      });

      const glareX = gsap.quickTo(glareRef.current, 'x', {
        duration: 0.3,
        ease: 'power2.out',
      });

      const glareY = gsap.quickTo(glareRef.current, 'y', {
        duration: 0.3,
        ease: 'power2.out',
      });

      const handleMouseMove = (e) => {
        const rect = section.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dotSize = 12;
        const ringSize = 48;

        // Spotlight
        if (spotlightRef.current) {
          spotlightRef.current.style.transform =
            `translate3d(${x - 300}px, ${y - 300}px, 0)`;
        }

        // Cursor dot
        xToDot(x - dotSize / 2);
        yToDot(y - dotSize / 2);

        // Cursor ring
        xToRing(x - ringSize / 2);
        yToRing(y - ringSize / 2);

        // Card tilt
        const cardRect = card.getBoundingClientRect();

        const cardCenterX =
          cardRect.left +
          cardRect.width / 2 -
          rect.left;

        const cardCenterY =
          cardRect.top +
          cardRect.height / 2 -
          rect.top;

        const rotateX =
          -((y - cardCenterY) /
            (cardRect.height / 2)) *
          16;

        const rotateY =
          ((x - cardCenterX) /
            (cardRect.width / 2)) *
          16;

        xTilt(rotateY);
        yTilt(rotateX);

        // Glare
        glareX(
          x -
            cardRect.left -
            cardRect.width / 2
        );

        glareY(
          y -
            cardRect.top -
            cardRect.height / 2
        );
      };

      const handleMouseEnter = () => {
        gsap.to(
          [
            cursorDotRef.current,
            cursorRingRef.current,
          ],
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          }
        );

        if (spotlightRef.current) {
          gsap.to(spotlightRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(
          [
            cursorDotRef.current,
            cursorRingRef.current,
          ],
          {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: 'power2.inOut',
          }
        );

        if (spotlightRef.current) {
          gsap.to(spotlightRef.current, {
            opacity: 0,
            duration: 0.3,
          });
        }

        xTilt(0);
        yTilt(0);
      };

      section.addEventListener(
        'mousemove',
        handleMouseMove
      );

      section.addEventListener(
        'mouseenter',
        handleMouseEnter
      );

      section.addEventListener(
        'mouseleave',
        handleMouseLeave
      );

      return () => {
        section.removeEventListener(
          'mousemove',
          handleMouseMove
        );

        section.removeEventListener(
          'mouseenter',
          handleMouseEnter
        );

        section.removeEventListener(
          'mouseleave',
          handleMouseLeave
        );
      };
    });

    // ============================================================
    // MOBILE
    // ============================================================

    mm.add('(max-width: 767px)', () => {
      const mobileItems =
        content.querySelectorAll('.hero-anim-item');

      // Make sure mobile starts visible but animated
      gsap.set(mobileItems, {
        y: 25,
        opacity: 0,
      });

      gsap.set(card, {
        scale: 0.9,
        opacity: 0,
        y: 30,
        rotationY: 0,
        rotationX: 0,
      });

      const mobileTimeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      mobileTimeline
        .to(
          mobileItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
          }
        )
        .to(
          card,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'back.out(1.1)',
          },
          '-=0.35'
        );

      // Disable desktop cursor effects on mobile
      gsap.set(
        [
          cursorDotRef.current,
          cursorRingRef.current,
          spotlightRef.current,
        ],
        {
          opacity: 0,
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative
        w-full
        min-h-screen
        bg-[#050505]
        overflow-x-hidden
        overflow-y-visible
        flex
        flex-col
        select-none
        cursor-auto
        md:cursor-none
      "
    >

      {/* ============================================================
          BACKGROUND ANIMATION
      ============================================================ */}

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        @media (max-width: 767px) {
          .animate-marquee {
            animation-duration: 45s;
          }
        }
      `}</style>

      {/* ============================================================
          CINEMATIC BACKGROUND
      ============================================================ */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#050505]
          via-black/95
          to-[#050505]
          z-0
          overflow-hidden
          pointer-events-none
        "
      >

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            overflow-hidden
            opacity-[0.07]
          "
        >
          <div className="flex whitespace-nowrap animate-marquee">

            {[...developerRoles, ...developerRoles].map(
              (role, idx) => (
                <span
                  key={idx}
                  className="
                    text-[18vw]
                    md:text-[14vw]
                    font-black
                    text-red-600
                    mx-6
                    md:mx-8
                    uppercase
                    tracking-tighter
                  "
                >
                  {role} &bull;
                </span>
              )
            )}

          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE RED AMBIENT GLOW
      ============================================================ */}

      <div
        className="
          absolute
          top-[35%]
          left-1/2
          -translate-x-1/2
          w-[80vw]
          h-[80vw]
          rounded-full
          bg-red-600/10
          blur-[100px]
          pointer-events-none
          md:hidden
        "
      />

      {/* ============================================================
          DESKTOP SPOTLIGHT
      ============================================================ */}

      <div
        ref={spotlightRef}
        className="
          absolute
          top-0
          left-0
          hidden
          md:block
          w-[600px]
          h-[600px]
          rounded-full
          pointer-events-none
          z-10
          opacity-0
          blur-[90px]
          transition-opacity
          duration-300
        "
        style={{
          background:
            'radial-gradient(circle, rgba(229,9,20,0.35) 0%, rgba(229,9,20,0.1) 40%, transparent 70%)',
        }}
      />

      {/* ============================================================
          NAVBAR
      ============================================================ */}

      <header
        className="
          absolute
          top-0
          left-0
          z-50
          w-full
          px-5
          sm:px-6
          md:px-12
          py-5
          md:py-6
          flex
          items-center
          justify-between
          pointer-events-auto
        "
      >

        {/* Logo */}

        <div
          className="
            text-xl
            sm:text-2xl
            font-black
            text-red-600
            tracking-tighter
            flex
            items-center
            gap-2
            drop-shadow-[0_2px_15px_rgba(229,9,20,0.9)]
          "
        >
          PINKY

          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-white
              inline-block
            "
          />
        </div>

        {/* Desktop Navigation */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-xs
            font-mono
            uppercase
            tracking-widest
            text-white/80
          "
        >
          <a
            href="#home"
            className="hover:text-red-500 transition-colors"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-red-500 transition-colors"
          >
            About
          </a>

          <a
            href="#expertise"
            className="hover:text-red-500 transition-colors"
          >
            Expertise
          </a>

          <a
            href="#skills"
            className="hover:text-red-500 transition-colors"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-red-500 transition-colors"
          >
            Projects & Experience
          </a>
        <a
            href="#design-works"
            className="hover:text-red-500 transition-colors"
          >
            Design Works
          </a>
          
        </nav>

        {/* Contact Button */}

        <a
          href="#contact"
          className="
            px-3
            sm:px-5
            py-2
            rounded
            bg-red-600
            hover:bg-red-700
            text-white
            font-bold
            text-[10px]
            sm:text-xs
            uppercase
            tracking-widest
            transition-all
            duration-300
            shadow-[0_0_20px_rgba(229,9,20,0.6)]
            hover:scale-105
            active:scale-95
            whitespace-nowrap
          "
        >
          Contact Me
        </a>

      </header>

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

      <div
        ref={contentRef}
        className="
          relative
          z-20
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          md:px-12
          pt-28
          md:pt-32
          pb-8
          md:pb-12
          flex
          flex-col
          min-h-screen
        "
      >

        {/* ==========================================================
            TOP BADGE
        ========================================================== */}

        <div
          className="
            hero-anim-item
            w-full
            flex
            items-center
            justify-center
            md:justify-between
            mb-8
            md:mb-0
          "
        >

          <div
            className="
              inline-flex
              items-center
              justify-center
              flex-wrap
              gap-2
              sm:gap-2.5
              px-3
              sm:px-4
              py-2
              rounded
              bg-black/80
              backdrop-blur-2xl
              border
              border-red-600/40
              text-[9px]
              sm:text-xs
              font-mono
              uppercase
              tracking-wider
              sm:tracking-widest
              text-white
              shadow-2xl
              text-center
              max-w-full
            "
          >

            <span
              className="
                w-1.5
                h-1.5
                sm:w-2
                sm:h-2
                shrink-0
                rounded-full
                bg-red-600
                animate-ping
              "
            />

            <span className="text-red-500 font-bold">
              E-COMMERCE OPERATIONS SERIES
            </span>

            <span className="text-white/40 hidden sm:inline">
              |
            </span>

            <span className="text-white/80">
              11 YEARS EXPERIENCE
            </span>

          </div>

          {/* Desktop category badges */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              text-xs
              font-mono
              text-white/50
              tracking-wider
            "
          >

            <span
              className="
                px-2
                py-0.5
                border
                border-white/20
                rounded
                bg-black/40
              "
            >
              E-COMMERCE
            </span>

            <span
              className="
                px-2
                py-0.5
                border
                border-white/20
                rounded
                bg-black/40
              "
            >
              ANALYTICS
            </span>

          </div>

        </div>

        {/* ==========================================================
            MAIN HERO LAYOUT
        ========================================================== */}

        <div
          className="
            flex-1
            flex
            flex-col
            lg:grid
            lg:grid-cols-12
            items-center
            lg:items-center
            gap-8
            lg:gap-8
            py-4
            md:py-8
          "
        >

          {/* ========================================================
              LEFT / MAIN INFORMATION
          ======================================================== */}

          <div
            className="
              lg:col-span-5
              w-full
              flex
              flex-col
              items-center
              lg:items-start
              space-y-5
              text-center
              lg:text-left
              order-1
            "
          >

            {/* Experience */}

            <div
              className="
                hero-anim-item
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-start
                gap-2
                sm:gap-3
                max-w-full
              "
            >

              <span
                className="
                  px-2.5
                  py-1
                  bg-red-600
                  text-white
                  font-black
                  text-[10px]
                  sm:text-xs
                  rounded
                  tracking-widest
                  shadow-[0_0_20px_rgba(229,9,20,0.8)]
                  animate-pulse
                "
              >
                11 YEARS
              </span>

              <span
                className="
                  text-white/80
                  text-[10px]
                  sm:text-xs
                  font-mono
                  tracking-wider
                  sm:tracking-widest
                  uppercase
                "
              >
                E-Commerce Operations Consultant
              </span>

            </div>

            {/* Name */}

            <h1
              className="
                hero-anim-item
                text-[52px]
                xs:text-[58px]
                sm:text-6xl
                md:text-7xl
                font-black
                tracking-tighter
                text-white
                leading-[0.9]
                drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]
              "
            >
              PINKY
              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-red-500
                  via-rose-600
                  to-red-700
                  drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]
                "
              >
                MISHRA
              </span>
            </h1>

            {/* Performance Stats */}

            <div
              className="
                hero-anim-item
                w-full
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-start
                gap-x-2
                gap-y-2
                text-[9px]
                sm:text-xs
                font-mono
                text-red-400
                font-bold
                uppercase
              "
            >

              <span
                className="
                  px-2
                  py-1
                  bg-red-500/10
                  border
                  border-red-500/30
                  rounded
                  text-red-500
                  whitespace-nowrap
                "
              >
                300% REVENUE GROWTH
              </span>

              <span className="text-white/40">
                •
              </span>

              <span>
                MARKETPLACE
              </span>

              <span className="text-white/40">
                •
              </span>

              <span>
                ANALYTICS
              </span>

              <span className="text-white/40">
                •
              </span>

              <span className="text-white/70">
                OPERATIONS
              </span>

            </div>

            {/* Description */}

            <p
              className="
                hero-anim-item
                text-sm
                sm:text-base
                text-white/80
                font-light
                leading-relaxed
                max-w-md
                drop-shadow
              "
            >
              E-Commerce Operations Consultant with 11 years of
              experience in managing and optimising e-commerce
              platforms, streamlining operations, and enhancing
              customer satisfaction.
            </p>

            {/* Buttons */}

            <div
              className="
                hero-anim-item
                w-full
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-3
                sm:gap-4
                pt-1
              "
            >

              <a
                href="#projects"
                className="
                  w-full
                  sm:w-auto
                  px-6
                  sm:px-8
                  py-3.5
                  bg-white
                  text-black
                  font-bold
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-widest
                  rounded
                  hover:bg-red-600
                  hover:text-white
                  transition-all
                  duration-300
                  shadow-[0_10px_35px_rgba(255,255,255,0.3)]
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:scale-105
                  active:scale-95
                  whitespace-nowrap
                "
              >

                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

                View Experience

              </a>

              <a
                href="#contact"
                className="
                  w-full
                  sm:w-auto
                  px-6
                  sm:px-8
                  py-3.5
                  bg-neutral-900/80
                  text-white
                  border
                  border-white/20
                  font-bold
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-widest
                  rounded
                  hover:bg-neutral-800
                  transition-all
                  duration-300
                  shadow-xl
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:scale-105
                  active:scale-95
                  whitespace-nowrap
                "
              >

                <svg
                  className="
                    w-4
                    h-4
                    fill-none
                    stroke-current
                    stroke-2
                  "
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />

                  <line
                    x1="12"
                    y1="8"
                    x2="12"
                    y2="12"
                  />

                  <line
                    x1="12"
                    y1="16"
                    x2="12.01"
                    y2="16"
                  />
                </svg>

                Contact Me

              </a>

            </div>

          </div>

          {/* ========================================================
              PORTRAIT
          ======================================================== */}

          <div
            className="
              lg:col-span-4
              w-full
              flex
              justify-center
              items-center
              perspective-[1200px]
              order-2
              py-2
              md:py-0
            "
          >

            <div
              ref={cardRef}
              className="
                relative
                group
                transform-gpu
                transition-transform
                duration-100
                ease-out
                will-change-transform
              "
            >

              {/* Neon Glow */}

              <div
                className="
                  absolute
                  -inset-3
                  bg-gradient-to-r
                  from-red-600/70
                  via-rose-600/40
                  to-purple-600/20
                  rounded-3xl
                  blur-3xl
                  opacity-80
                  md:opacity-90
                  group-hover:opacity-100
                  animate-pulse
                "
              />

              {/* Poster */}

              <div
                className="
                  relative
                  w-[230px]
                  xs:w-[245px]
                  sm:w-[270px]
                  md:w-[320px]
                  p-2.5
                  sm:p-3.5
                  bg-[#141414]/90
                  backdrop-blur-2xl
                  rounded-2xl
                  border
                  border-red-600/40
                  shadow-[0_40px_80px_rgba(0,0,0,0.95)]
                  overflow-hidden
                "
              >

                {/* Glare */}

                <div
                  ref={glareRef}
                  className="
                    absolute
                    inset-[-50%]
                    w-[200%]
                    h-[200%]
                    bg-gradient-to-tr
                    from-transparent
                    via-white/10
                    to-transparent
                    pointer-events-none
                    transform-gpu
                    z-40
                  "
                />

                {/* Featured Tag */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    sm:top-6
                    sm:left-6
                    z-30
                    px-2
                    sm:px-3
                    py-1
                    bg-red-600
                    text-white
                    font-mono
                    text-[8px]
                    sm:text-[10px]
                    font-bold
                    tracking-widest
                    rounded
                    shadow-xl
                    whitespace-nowrap
                  "
                >
                  FEATURED CONSULTANT
                </div>

                {/* Image */}

                <img
                  src={pictureImg}
                  alt="Pinky Mishra"
                  className="
                    w-full
                    h-[285px]
                    xs:h-[300px]
                    sm:h-[325px]
                    md:h-[390px]
                    object-cover
                    object-center
                    rounded-xl
                    filter
                    contrast-125
                    brightness-105
                    group-hover:scale-[1.02]
                    transition-transform
                    duration-500
                  "
                />

              </div>

            </div>

          </div>

          {/* ========================================================
              RIGHT EXPERTISE
          ======================================================== */}

          <div
            className="
              hero-anim-item
              lg:col-span-3
              w-full
              flex
              flex-col
              items-center
              lg:items-end
              space-y-4
              text-center
              lg:text-right
              order-3
            "
          >

            <div
              className="
                w-full
                max-w-sm
                lg:max-w-xs
                p-5
                bg-black/80
                backdrop-blur-2xl
                border
                border-white/15
                rounded-xl
                shadow-2xl
              "
            >

              <h3
                className="
                  text-xs
                  font-mono
                  uppercase
                  tracking-widest
                  text-red-500
                  font-bold
                  mb-2
                "
              >
                Core Expertise
              </h3>

              <p
                className="
                  text-xs
                  text-white/80
                  leading-relaxed
                  font-light
                "
              >
                Storefront Optimisation, Marketplace Ads
                Management, PPC Campaign Analysis,
                E-commerce Data Analytics & Reporting,
                and Project Management.
              </p>

            </div>

          </div>

        </div>

        {/* ==========================================================
            BOTTOM TICKER
        ========================================================== */}

        <div
          className="
            hero-anim-item
            hidden
            sm:flex
            items-center
            justify-between
            gap-4
            text-[9px]
            md:text-xs
            font-mono
            text-white/50
            tracking-widest
            uppercase
            pt-4
            md:pt-0
          "
        >

          <span>
            E-COMMERCE OPERATIONS & OPTIMISATION
          </span>

          <span>
            [ PORTFOLIO RELEASE v2.6 ]
          </span>

        </div>

      </div>

      {/* ============================================================
          CUSTOM DESKTOP CURSOR
      ============================================================ */}

      <div
        ref={cursorDotRef}
        className="
          absolute
          top-0
          left-0
          z-[100]
          pointer-events-none
          hidden
          md:block
          w-3
          h-3
          bg-red-600
          rounded-full
          shadow-[0_0_15px_#E50914]
        "
      />

      <div
        ref={cursorRingRef}
        className="
          absolute
          top-0
          left-0
          z-[100]
          pointer-events-none
          hidden
          md:flex
          w-12
          h-12
          border
          border-red-600/60
          rounded-full
          items-center
          justify-center
          backdrop-blur-[1px]
        "
      />

    </section>
  );
};

export default Hero;
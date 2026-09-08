import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ============================================================
// DESIGN WORK IMAGES
// ============================================================

import walnutKernels from "../assets/Portfolio/walnut-kernels.png";
import hibiscusRoseTea from "../assets/Portfolio/hibiscus-rose-tea.png";
import himalayanShilajit from "../assets/Portfolio/himalayan-shilajit.png";
import kashmiriKagziBadaam from "../assets/Portfolio/kashmiri-kagzi-badaam.png";
import acaciaHoney from "../assets/Portfolio/acacia-honey.png";
import applePlumTea from "../assets/Portfolio/apple-plum-tea.png";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// DESIGN WORK DATA
// ============================================================

const designWorks = [
  {
    number: "01",
    title: "Kashmiri Kagzi Badaam",
    subtitle: "Premium Product Campaign",
    category: "Food & Wellness",
    description:
      "A premium visual campaign created around Kashmiri Kagzi Badaam, combining natural textures, elegant typography and a warm luxury palette to communicate purity, nutrition and premium quality.",
    tags: [
      "Product Design",
      "Packaging",
      "Art Direction",
      "Food Branding",
    ],
    image: hibiscusRoseTea,
  },

  {
    number: "02",
    title: "Premium Walnut Kernels",
    subtitle: "Kashmir Origin Campaign",
    category: "Food & Wellness",
    description:
      "An editorial product composition highlighting premium Kashmiri walnut kernels with a natural green and earthy visual system designed to communicate authenticity, freshness and origin.",
    tags: [
      "Product Campaign",
      "Visual Design",
      "Branding",
      "Art Direction",
    ],
    image: walnutKernels,
  },

  {
    number: "03",
    title: "Hibiscus Rose Tea",
    subtitle: "Wellness Product Story",
    category: "Tea & Wellness",
    description:
      "A soft lifestyle-focused product design that combines botanical photography, handwritten details and warm pink accents to create a feminine and wellness-oriented visual identity.",
    tags: [
      "Lifestyle Design",
      "Product Visual",
      "Wellness",
      "Creative Direction",
    ],
    image: himalayanShilajit,
  },

  {
    number: "04",
    title: "Original Acacia Honey",
    subtitle: "Golden Purity",
    category: "Natural Products",
    description:
      "A premium honey campaign built around warm golden tones, natural textures and cinematic product photography to create a sophisticated natural-luxury presentation.",
    tags: [
      "Product Photography",
      "Campaign Design",
      "Luxury Branding",
      "Art Direction",
    ],
    image: kashmiriKagziBadaam,
  },

  {
    number: "05",
    title: "Dried Apple & Plum Tea",
    subtitle: "Warmth & Wellness",
    category: "Tea Collection",
    description:
      "A cozy lifestyle campaign combining product storytelling, warm interiors and natural ingredients to create an inviting visual experience around the tea ritual.",
    tags: [
      "Lifestyle Campaign",
      "Product Design",
      "Storytelling",
      "Creative Direction",
    ],
    image: acaciaHoney,
  },

  {
    number: "06",
    title: "Himalayan Shilajit",
    subtitle: "Sourced From The Himalayas",
    category: "Ayurvedic Wellness",
    description:
      "A strong heritage-inspired visual direction using Himalayan landscapes, earthy materials and bold typography to position the product as authentic, natural and premium.",
    tags: [
      "Wellness Branding",
      "Product Campaign",
      "Packaging",
      "Visual Direction",
    ],
    image: applePlumTea,
  },
];

// ============================================================
// DESIGN WORKS
// ============================================================

const DesignWorks = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      // --------------------------------------------------------
      // CARD ENTRANCE
      // --------------------------------------------------------

      gsap.set(cards, {
        opacity: 0,
        y: 70,
        scale: 0.97,
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // --------------------------------------------------------
      // IMAGE PARALLAX
      // --------------------------------------------------------

      cards.forEach((card) => {
        const image = card.querySelector(".design-image");

        if (!image) return;

        gsap.fromTo(
          image,
          {
            scale: 1.1,
          },
          {
            scale: 1,
            ease: "none",

            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // --------------------------------------------------------
      // DECORATIVE BACKGROUND
      // --------------------------------------------------------

      gsap.to(".design-orbit", {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="design-works"
      className="
        relative
        w-full
        min-h-screen

        overflow-hidden

        bg-[#0b0b0b]
        text-white

        pt-10
        md:pt-16
        lg:pt-20

        pb-24
        md:pb-32
        lg:pb-40
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        {/* Large background typography */}

        <div
          className="
            absolute
            top-[30px]
            left-1/2
            -translate-x-1/2

            text-[28vw]
            md:text-[21vw]

            font-black

            tracking-[-0.1em]

            leading-none

            whitespace-nowrap

            text-white/[0.025]
          "
        >
          DESIGN
        </div>

        {/* Dark red glow */}

        <div
          className="
            absolute

            top-[8%]
            right-[-12%]

            w-[480px]
            h-[480px]

            rounded-full

            bg-red-600/[0.045]

            blur-[130px]
          "
        />

        {/* Second dark red glow */}

        <div
          className="
            absolute

            bottom-[10%]
            left-[-12%]

            w-[450px]
            h-[450px]

            rounded-full

            bg-red-600/[0.035]

            blur-[130px]
          "
        />

        {/* Decorative circle */}

        <div
          className="
            design-orbit

            absolute

            top-[22%]
            right-[4%]

            hidden
            lg:block

            w-[230px]
            h-[230px]

            rounded-full

            border
            border-red-600/[0.12]

            border-dashed
          "
        />
      </div>

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          w-full
          max-w-[1500px]

          mx-auto

          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row

            md:items-end
            md:justify-between

            gap-8

            mb-14
            md:mb-20
          "
        >
          <div>
            {/* Small label */}

            <div
              className="
                flex
                items-center
                gap-3

                mb-5
              "
            >
              <span
                className="
                  w-8
                  h-[1px]

                  bg-red-600
                "
              />

              <span
                className="
                  text-[10px]
                  md:text-xs

                  font-mono

                  uppercase

                  tracking-[0.28em]

                  text-red-500
                "
              >
                Selected Design Work
              </span>
            </div>

            {/* Main heading */}

            <h2
              className="
                text-[12vw]
                sm:text-[9vw]
                md:text-[7vw]
                lg:text-[6vw]

                font-black

                tracking-[-0.06em]

                leading-[0.85]

                text-white
              "
            >
              DESIGN<span className="text-red-600">.</span>
            </h2>

            <p
              className="
                mt-6

                max-w-[580px]

                text-sm
                md:text-base

                leading-relaxed

                text-white/45

                font-light
              "
            >
              A collection of premium product visuals, packaging
              concepts and lifestyle campaigns created around
              natural products, wellness and Kashmiri heritage.
            </p>
          </div>

          {/* Counter */}

          <div
            className="
              hidden
              md:flex

              items-end

              gap-4
            "
          >
            <span
              className="
                text-[70px]
                lg:text-[90px]

                font-black

                tracking-[-0.08em]

                leading-none

                text-white
              "
            >
              06
            </span>

            <div
              className="
                pb-2

                text-[10px]

                font-mono

                uppercase

                tracking-[0.2em]

                text-white/35

                leading-relaxed
              "
            >
              Selected
              <br />
              Works
            </div>
          </div>
        </div>

        {/* ====================================================
            DESKTOP GRID
        ==================================================== */}

        <div
          className="
            hidden
            md:grid

            grid-cols-2
            lg:grid-cols-3

            gap-x-5
            lg:gap-x-7

            gap-y-8
            lg:gap-y-12
          "
        >
          {designWorks.map((work, index) => (
            <DesignCard
              key={work.number}
              work={work}
              index={index}
              cardsRef={cardsRef}
            />
          ))}
        </div>

        {/* ====================================================
            MOBILE CAROUSEL
        ==================================================== */}

        <div
          className="
            md:hidden

            -mx-5

            flex

            gap-5

            px-5

            pb-8

            overflow-x-auto

            snap-x
            snap-mandatory

            scrollbar-hide
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {designWorks.map((work, index) => (
            <div
              key={`mobile-${work.number}`}
              className="
                shrink-0

                w-[86vw]
                max-w-[410px]

                snap-center
              "
            >
              <DesignCard
                work={work}
                index={index}
                cardsRef={cardsRef}
                mobile
              />
            </div>
          ))}
        </div>

        {/* ====================================================
            MOBILE SWIPE
        ==================================================== */}

        <div
          className="
            md:hidden

            flex
            items-center
            justify-center

            gap-3

            mt-3
          "
        >
          <span
            className="
              text-[9px]

              font-mono

              uppercase

              tracking-[0.25em]

              text-white/25
            "
          >
            Swipe to explore
          </span>

          <span
            className="
              text-red-600

              text-sm
            "
          >
            →
          </span>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// DESIGN CARD
// ============================================================

const DesignCard = ({
  work,
  index,
  cardsRef,
  mobile = false,
}) => {
  return (
    <article
      ref={(el) => {
        cardsRef.current[index] = el;
      }}
      className={`
        group

        relative

        overflow-hidden

        bg-[#111111]

        border
        border-white/[0.09]

        rounded-[18px]

        transition-all
        duration-500

        hover:-translate-y-2

        hover:border-red-600/50

        ${
          mobile
            ? "min-h-[500px]"
            : index === 0
            ? "lg:col-span-2"
            : ""
        }
      `}
    >
      {/* ====================================================
          IMAGE AREA
      ==================================================== */}

      <div
        className={`
          relative

          overflow-hidden

          bg-[#181818]

          ${
            mobile
              ? "h-[275px]"
              : index === 0
              ? "h-[360px] lg:h-[410px]"
              : "h-[285px]"
          }
        `}
      >
        <img
          src={work.image}
          alt={work.title}
          className="
            design-image

            absolute
            inset-0

            w-full
            h-full

            object-cover

            transition-transform
            duration-[1200ms]
            ease-out

            group-hover:scale-[1.07]
          "
          loading="lazy"
        />

        {/* Image darkening */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-[#111111]

            via-[#111111]/10

            to-black/10

            opacity-90
          "
        />

        {/* Dark red hover tint */}

        <div
          className="
            absolute
            inset-0

            bg-red-600/0

            group-hover:bg-red-600/[0.06]

            transition-colors
            duration-700
          "
        />

        {/* ==================================================
            TOP NUMBER
        ================================================== */}

        <div
          className="
            absolute

            top-5
            left-5

            flex
            items-center

            gap-3
          "
        >
          <span
            className="
              text-[10px]

              font-mono
              font-bold

              tracking-[0.15em]

              text-white

              bg-black/60

              backdrop-blur-md

              border
              border-white/10

              rounded-full

              px-3
              py-1.5
            "
          >
            {work.number}
          </span>

          <span
            className="
              text-[9px]

              font-mono

              uppercase

              tracking-widest

              text-white/50
            "
          >
            Visual Story
          </span>
        </div>

        {/* ==================================================
            CATEGORY
        ================================================== */}

        <div
          className="
            absolute

            top-5
            right-5
          "
        >
          <span
            className="
              text-[8px]

              font-mono

              uppercase

              tracking-[0.15em]

              text-white/90

              bg-black/60

              backdrop-blur-md

              border
              border-white/10

              rounded-full

              px-3
              py-1.5
            "
          >
            {work.category}
          </span>
        </div>

        {/* ==================================================
            IMAGE BOTTOM
        ================================================== */}

        <div
          className="
            absolute

            bottom-5
            left-5
            right-5

            flex
            items-center
            justify-between

            gap-4
          "
        >
          <span
            className="
              text-[9px]

              font-mono

              uppercase

              tracking-[0.18em]

              text-white/55
            "
          >
            {work.subtitle}
          </span>

          {/* Arrow */}

          <div
            className="
              w-9
              h-9

              shrink-0

              rounded-full

              border
              border-white/15

              bg-black/30

              backdrop-blur-md

              flex
              items-center
              justify-center

              text-white/60

              group-hover:border-red-600/60
              group-hover:text-red-500

              transition-all
              duration-300
            "
          >
            ↗
          </div>
        </div>
      </div>

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <div
        className="
          relative

          px-5
          md:px-6

          pt-5
          pb-6

          bg-[#111111]
        "
      >
        {/* Red line */}

        <div
          className="
            absolute

            top-0
            left-5
            md:left-6

            w-8
            h-[2px]

            bg-red-600

            group-hover:w-16

            transition-all
            duration-500
          "
        />

        {/* ==================================================
            TITLE
        ================================================== */}

        <h3
          className="
            text-xl
            md:text-[23px]

            leading-[1.1]

            font-black

            tracking-tight

            text-white

            group-hover:text-red-500

            transition-colors
            duration-300
          "
        >
          {work.title}
        </h3>

        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            mt-3

            text-[11px]
            md:text-xs

            leading-[1.65]

            text-white/45

            font-light

            line-clamp-3
          "
        >
          {work.description}
        </p>

        {/* ==================================================
            TAGS
        ================================================== */}

        <div
          className="
            mt-5

            flex
            flex-wrap

            gap-1.5
          "
        >
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[8px]
                md:text-[9px]

                font-mono

                text-white/45

                border
                border-white/[0.08]

                bg-white/[0.025]

                rounded-full

                px-2.5
                py-1

                group-hover:border-red-600/20

                transition-colors
                duration-300
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ==================================================
            BOTTOM META
        ================================================== */}

        <div
          className="
            mt-6

            pt-4

            border-t
            border-white/[0.07]

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[8px]

              font-mono

              uppercase

              tracking-[0.2em]

              text-white/20
            "
          >
            Creative Portfolio
          </span>

          <span
            className="
              text-[9px]

              font-mono

              text-red-600

              opacity-60

              group-hover:opacity-100

              transition-opacity
            "
          >
            EXPLORE ↗
          </span>
        </div>
      </div>
    </article>
  );
};

export default DesignWorks;
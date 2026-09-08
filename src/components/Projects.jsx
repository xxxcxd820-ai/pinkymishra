import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import kashmirBox from "../assets/Portfolio/Kashmirbox.jpeg";
import gauiLifestyle from "../assets/Portfolio/Gausilifestyle.jpeg";
import milltex from "../assets/Portfolio/Milltex.jpeg";
import narayana from "../assets/Portfolio/narayana.png";
import birdeye from "../assets/Portfolio/Birdeye.jpeg";
import isano from "../assets/Portfolio/Isano.jpeg";
import nlearn from "../assets/Portfolio/nlearn.png";
import juspay from "../assets/Portfolio/juspay.png";
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
    episode: "01",
    imageUrl: kashmirBox,
  },

  {
    title: "Bird Eye India",
    category: "E-Commerce Operations",
    description:
      "Scaled e-commerce operations from 100 to 450+ daily orders within six months while maintaining operational efficiency and reducing costs by 15%.",
    tags: ["Shopify", "Amazon", "E-Commerce", "Operations"],
    match: "98%",
    episode: "02",
    imageUrl: birdeye,
  },

  {
    title: "Gaui Lifestyle",
    category: "E-Commerce Consulting",
    description:
      "Optimized digital campaigns across Amazon, Flipkart and Meesho, achieving 287% ROAS while implementing AI-powered product recommendations and upselling strategies.",
    tags: ["Amazon Ads", "Flipkart Ads", "Meesho", "AI"],
    match: "97%",
    episode: "03",
    imageUrl: gauiLifestyle,
  },

  {
    title: "Milltex.co / Bell Rangers / Lotus Mills",
    category: "E-Commerce Consulting",
    description:
      "Directed multi-marketplace product listings across 5+ platforms, optimized 500+ SKUs, and introduced demand forecasting with 85% accuracy.",
    tags: ["E-Commerce", "Marketplaces", "Inventory", "AI"],
    match: "96%",
    episode: "04",
    imageUrl: milltex,
  },

  {
    title: "The Narayana Group",
    category: "Digital Transformation",
    description:
      "Led digital transformation initiatives including e-commerce optimization, cross-selling strategies, chatbot-assisted checkout, and digital marketing for education products.",
    tags: ["Digital Transformation", "E-Commerce", "Chatbots"],
    match: "98%",
    episode: "05",
    imageUrl: narayana,
  },

  {
    title: "ISANO Connect",
    category: "Travel & Concierge Operations",
    description:
      "Improved operational efficiency by 90 minutes per client through HubSpot and Zapier automation, enabling the team to serve three times more clients per working hour.",
    tags: ["HubSpot", "Zapier", "Automation", "Operations"],
    match: "97%",
    episode: "06",
    imageUrl: isano,
  },

  {
    title: "nLearn LMS Platform",
    category: "EdTech & Digital Transformation",
    description:
      "Led a digital transformation initiative resulting in the launch of the nLearn LMS platform, reaching 15,000+ student registrations and ₹25 Lakhs in parent-purchased subscriptions within the first month.",
    tags: ["LMS", "EdTech", "Analytics", "Salesforce"],
    match: "99%",
    episode: "07",
    imageUrl: nlearn  ,
  },

  {
    title: "Juspay Payment Gateway Integration",
    category: "Digital Payments",
    description:
      "Implemented Juspay digital payment gateway integration supporting 4,000+ transactions daily with a 99.7% transaction success rate.",
    tags: ["Juspay", "Transactions", "E-Commerce", "Analytics"],
    match: "100%",
    episode: "08",
    imageUrl: juspay,
  },
];

// ============================================================
// PROJECTS
// ============================================================

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      gsap.set(cards, {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // --------------------------------------------------------
      // DESKTOP IMAGE PARALLAX
      // --------------------------------------------------------

      cards.forEach((card) => {
        const image = card.querySelector(".project-image");

        if (!image) return;

        gsap.fromTo(
          image,
          {
            scale: 1.08,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        w-full
        min-h-screen

        bg-[#0b0b0b]
        text-white

        py-24
        md:py-36

        overflow-hidden
      "
    >
      {/* ======================================================
          BACKGROUND ELEMENTS
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        {/* Large background text */}

        <div
          className="
            absolute
            top-10
            left-1/2

            -translate-x-1/2

            text-[25vw]
            md:text-[20vw]

            font-black

            tracking-[-0.08em]

            text-white/[0.025]

            leading-none

            whitespace-nowrap
          "
        >
          WORK
        </div>

        {/* Red glow */}

        <div
          className="
            absolute

            top-[15%]
            right-[-15%]

            w-[450px]
            h-[450px]

            rounded-full

            bg-red-600/[0.035]

            blur-[120px]
          "
        />

        <div
          className="
            absolute

            bottom-[10%]
            left-[-15%]

            w-[400px]
            h-[400px]

            rounded-full

            bg-red-600/[0.025]

            blur-[120px]
          "
        />
      </div>

      {/* ======================================================
          CONTAINER
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
            SECTION HEADER
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
                Selected Work
              </span>
            </div>

            {/* Heading */}

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
              PROJECTS<span className="text-red-600">.</span>
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
              A selection of e-commerce, digital transformation,
              automation and technology projects delivered across
              different industries.
            </p>
          </div>

          {/* Project counter */}

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
              08
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
              Projects
            </div>
          </div>
        </div>

        {/* ====================================================
            PROJECT GRID
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
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.episode}
              project={project}
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

            overflow-x-auto

            flex

            gap-5

            px-5

            pb-8

            snap-x
            snap-mandatory

            scrollbar-hide
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={`mobile-${project.episode}`}
              className="
                shrink-0

                w-[86vw]
                max-w-[410px]

                snap-center
              "
            >
              <ProjectCard
                project={project}
                index={index}
                cardsRef={cardsRef}
                mobile
              />
            </div>
          ))}
        </div>

        {/* ====================================================
            MOBILE SWIPE TEXT
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
// PROJECT CARD
// ============================================================

const ProjectCard = ({
  project,
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

        hover:border-red-600/50

        hover:-translate-y-2

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
          IMAGE
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
        {project.imageUrl ? (
          <>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="
                project-image

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

            {/* Hover red tint */}

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
          </>
        ) : (
          /* ==================================================
             EMPTY IMAGE STATE
          ================================================== */

          <div
            className="
              absolute
              inset-0

              flex
              flex-col

              items-center
              justify-center

              bg-[#151515]
            "
          >
            <div
              className="
                text-[80px]

                font-black

                tracking-[-0.08em]

                text-white/[0.035]
              "
            >
              {project.episode}
            </div>

            <span
              className="
                mt-2

                text-[9px]

                font-mono

                uppercase

                tracking-[0.25em]

                text-white/20
              "
            >
              Project Preview
            </span>
          </div>
        )}

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
            {project.episode.padStart(2, "0")}
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
            Case Study
          </span>
        </div>

        {/* ==================================================
            MATCH SCORE
        ================================================== */}

        <div
          className="
            absolute

            top-5
            right-5

            flex
            items-center
            gap-2
          "
        >
          <span
            className="
              w-1.5
              h-1.5

              rounded-full

              bg-red-600

              shadow-[0_0_12px_rgba(229,9,20,0.8)]
            "
          />

          <span
            className="
              text-[10px]

              font-mono

              font-bold

              text-white/80
            "
          >
            {project.match}
          </span>
        </div>

        {/* ==================================================
            IMAGE BOTTOM CATEGORY
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
            {project.category}
          </span>

          <div
            className="
              w-9
              h-9

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
          {project.title}
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
          {project.description}
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
          {project.tags.map((tag) => (
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
            Digital Portfolio
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
            VIEW PROJECT ↗
          </span>
        </div>
      </div>
    </article>
  );
};

export default Projects;
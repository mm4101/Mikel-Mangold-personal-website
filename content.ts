// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components - they read from this file.
// ────────────────────────────────────────────────────────────────

// Navigation bar at the top of every page.
export const nav = {
  brand: "Mikel Mangold",
  links: [
    { label: "About", href: "/#about" },
    { label: "CV", href: "/#experience" },
    { label: "Selected Work", href: "/#projects" },
    { label: "My Book", href: "/book" },
    { label: "Media", href: "/media" },
  ],
};

// Placeholder shown at /media until the page is built.
export const media = {
  heading: "Media",
  title: "Coming soon",
  text: "Talks, podcasts, and press are on their way. Check back soon.",
};

export const hero = {
  name: "Mikel Mangold",
  role: "Entrepreneur · Commercial GTM · Chemist · Author",
  location: "Berlin, Germany",
  headline:
    "I'm an entrepreneur working at the edge of deep tech - photonics, semiconductors, 2D materials, and advanced materials - turning hard science into commercial traction.",
  // Second line of the intro. The link text is shown in gold.
  dayNight: {
    before: "Venture builder at Fraunhofer HHI by day. By night, I run an outbound, HubSpot, and marketing agency at ",
    linkLabel: "goldup-e.ai",
    linkHref: "https://goldup-e.ai",
    after: ".",
  },
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm an entrepreneur and commercial GTM leader with a chemist's background. I work at the edge of deep tech - photonics, semiconductors, 2D materials, quantum, and advanced materials - translating hard science into revenue, partnerships, and market traction.",
    "Today I'm a venture builder at Fraunhofer HHI, working with the team on hybrid and heterogeneous integration across lithium niobate, silicon nitride, indium phosphide, and PolyBoard, a polymer photonics platform. My path here runs from polymer chemistry research in Switzerland, to Bayer's biotech and digital-health incubators in Silicon Valley, to venture building at Niterra (where a venture I helped build, Nanell, was acquired), to scaling go-to-market at ATLANT 3D.",
    "My core expertise is GTM, and I love building the commercial engine: business development, and best-in-class outbound, inbound, and ecosystem-led growth that gets frontier products into the market. I'm also an author.",
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Venture Builder - Quantum & Photonics",
      company: "Fraunhofer HHI",
      // Shown as a small box under the dates.
      stage: { label: "Tech transfer office", detail: "Germany's leading national research lab · 33,000 employees" },
      period: "2026 - Present",
      summary:
        "Building ventures around integrated photonics with the Hybrid Integration team - hybrid and heterogeneous integration on lithium niobate, silicon nitride, indium phosphide, and the PolyBoard polymer platform - and bringing the go-to-market lens to turn the technology into commercial traction.",
    },
    {
      title: "Team Lead, BD & Channel Partnerships",
      company: "ATLANT 3D",
      // Shown as a small box under the dates.
      stage: { label: "Series A startup", detail: "$40 million funded" },
      period: "2024 - 2026",
      summary:
        "Leading business development, revenue operations, and a global distributor network across semiconductor, energy, quantum, and materials-science markets. Secured LOIs and paid pilots with Tier-1 players, implemented HubSpot CRM, and onboarded 30+ distributors and ambassadors to scale partnerships.",
    },
    {
      title: "Head of Partnerships, EMEA",
      company: "CyberProtonics",
      // Shown as a small box under the dates.
      stage: { label: "Pre-seed startup", detail: "Unfunded" },
      period: "2024",
      summary:
        "Drove early-stage BD and investor relations for a quantum-resistant cybersecurity venture. Engaged 20+ top-tier cybersecurity investors across EMEA, built the sales infrastructure from scratch (HubSpot CRM), and led OEM partnership initiatives to validate market fit.",
    },
    {
      title: "Innovation Project Manager - Venture Building",
      company: "Venture Lab, Niterra Group",
      // Shown as a small box under the dates.
      stage: { label: "Corporate venture builder", detail: "Building pre-seed companies as spin-outs inside a $5B corporate · 16,000+ employees" },
      period: "2021 - 2024",
      summary:
        "Three years building pre-seed companies as spin-outs inside a $5B corporate with 16,000+ employees - venture creation, product development, and GTM strategy, including one exit (Nanell, acquired by MediKarma). Led a 6-month Open Innovation Challenge with Hello Tomorrow engaging 50+ global stakeholders, and built the EMEA startup-ecosystem framework with EU–Japan PoCs.",
    },
    {
      title: "Business Development - CoLaborator & G4A Incubators",
      company: "Bayer (Silicon Valley)",
      // Shown as a small box under the dates.
      stage: { label: "Startup incubator", detail: "Inside a 100,000+ employee corporate" },
      period: "2019 - 2021",
      summary:
        "Worked inside Bayer's biotech incubator and digital-health accelerator in the San Francisco Bay Area. Built KPI frameworks adopted across Berlin, Moscow, and Kobe, and connected startup founders with internal experts, VCs, universities, and medical centers.",
    },
  ],
};

export const projects = {
  heading: "Selected work",
  items: [
    {
      title: "Nanell - Venture Build to Exit",
      year: "2024",
      summary:
        "Helped build a digital women's-health venture inside Niterra's Venture Lab from concept through GTM. Nanell was acquired by MediKarma to accelerate its value-based, women's-health expansion.",
      link: {
        label: "Learn more",
        href: "https://www.businesswire.com/news/home/20260222347535/en/MediKarma-Acquires-Nanell-from-Niterra-Co.-Ltd.-to-Accelerate-Womens-Health-Expansion-and-Value-Based-Care-Footprint",
      },
    },
    {
      title: "ATLANT 3D Global Channel Network",
      year: "2025",
      summary:
        "Built the go-to-market and partner engine for an atomic-scale manufacturing company - onboarding 30+ distributors and ambassadors, implementing CRM and full-funnel KPI tracking, and securing paid pilots with Tier-1 semiconductor and materials players.",
      link: { label: "Learn more", href: "/work/atlant-3d-channel-network" },
    },
    {
      title: "EU–Japan Open Innovation Challenge",
      year: "2022",
      summary:
        "Led a 6-month Open Innovation Challenge with Hello Tomorrow, engaging 50+ global stakeholders and securing a med-tech partnership - part of building the EMEA deep-tech ecosystem framework.",
      link: { label: "Learn more", href: "/work/eu-japan-open-innovation-challenge" },
    },
  ],
};

// ────────────────────────────────────────────────────────────────
// CASE STUDY PAGES - the "Learn more" pages behind Selected work.
// Each entry becomes a page at /work/<slug>.
// ────────────────────────────────────────────────────────────────
type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  // Optional highlighted box under the title, linking to further reading.
  callout?: { label: string; title: string; text: string; cta: string; href: string };
  intro: string[];
  // Each section shows: heading, lead, steps (visual), bullets, paragraphs.
  sections: {
    heading: string;
    lead?: string;
    logo?: { src: string; alt: string; caption: string; href: string };
    steps?: { title: string; text: string }[];
    video?: { id: string; title: string };
    bullets?: string[];
    paragraphs?: string[];
  }[];
  sources: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "atlant-3d-channel-network",
    eyebrow: "Case study · ATLANT 3D · 2024 - 2026",
    title: "Building ATLANT 3D's Global Channel Partner Network",
    subtitle:
      "The 5-step channel partner program I set up for distributors and ambassadors, and ran on a PRM called Introw.",
    callout: {
      label: "From my blog",
      title: "Running BD at a $30M Funded Semiconductor Startup: My 7 Commercial Learnings",
      text: "Want the bigger picture? I wrote up what 1 year and 10 months at ATLANT 3D taught me about selling deep-tech equipment - from pilots and niche markets to RevOps and channel partners.",
      cta: "Read the post on Substack",
      href: "https://mikelmangold.substack.com/p/running-bd-at-a-30m-funded-semiconductor",
    },
    intro: [
      "When I joined ATLANT 3D in December 2024, the company had a breakthrough technology - atomic-scale, direct-write manufacturing - and potential customers spread across semiconductors, photonics, quantum, energy, and materials research, on every continent. A small commercial team in Europe cannot be on the ground in Tokyo, Bangalore, and Boston at the same time. So I built a channel: a network of partners who could be.",
    ],
    sections: [
      {
        heading: "One channel, two kinds of partners",
        paragraphs: [
          "Distributors were companies that sell and support locally. I recruited and supported them across Japan, Singapore, Korea, Taiwan, Italy, Poland, the United States, and India. Ambassadors were individuals with the network to open doors, grouped into four profiles: Nano Pioneers (professors and lab heads), Nano Catalysts (PhD students, postdocs, and early-career researchers), Nano Strategists (senior industry leaders), and Nano Connectors (business developers and tech-transfer professionals).",
          "Different partners, same logic. Both were channel partners, and both followed more or less the same five-step partner program.",
        ],
      },
      {
        heading: "The 5-step partner program",
        // Shown as a visual: a numbered strip plus one card per step.
        steps: [
          {
            title: "Recruiting",
            text: "Find the right partners, not the most partners: the right territory, the right network, and real access to the customers we wanted.",
          },
          {
            title: "Onboarding and launch",
            text: "Agree the terms, introduce the team and the technology, and launch the partnership with a clear starting point.",
          },
          {
            title: "Activation and enablement",
            text: "Give partners what they need to act: training and technical certification on a technology that is hard to explain, plus the material to pitch it.",
          },
          {
            title: "Growth",
            text: "Keep partners engaged and make progress visible. For ambassadors we used a points system - a post, an introduction, a hosted seminar, an opportunity, a closed deal - that moved them from Silver to Gold to Platinum.",
          },
          {
            title: "Exit",
            text: "Not every partnership works. A defined way to end one keeps the network healthy and the relationship intact.",
          },
        ],
        paragraphs: [
          "Writing the steps down mattered as much as the steps themselves. Every partner knew where they stood, and we knew what to do next with each of them.",
        ],
      },
      {
        heading: "Running it on Introw",
        // Logo box shown under the heading. The file lives in public/logos/.
        logo: {
          src: "/logos/introw-white.svg",
          alt: "Introw",
          caption: "The PRM behind the partner program",
          href: "https://www.introw.io",
        },
        paragraphs: [
          "A program like this does not scale on spreadsheets and email. I introduced Introw, a partner relationship management (PRM) platform, to enable and engage partners in one place. Through it we onboarded 30+ distributors and ambassadors. It ran alongside the HubSpot CRM I had implemented, so partner-sourced opportunities were tracked with the same discipline as our direct pipeline.",
        ],
      },
      {
        heading: "What I learned",
        bullets: [
          "Channel partners scale what already works. They are for an established sales process, not for finding product-market fit. If you cannot yet sell it repeatably yourself, a partner cannot do it for you.",
          "Enable before you ask. Partners need training and material before they need targets.",
          "Make the rules explicit. One shared program did more for engagement than any reminder email.",
          "Be on the ground. Opening the United States and India meant visiting customer sites, meeting stakeholders, and listening until the real pain points were clear.",
          "Plan the exit on day one. It makes recruiting easier, not harder.",
        ],
        paragraphs: [
          "By the time I left in 2026, ATLANT 3D had a network of 30+ distributors and ambassadors, with distribution partners in eight countries - and a repeatable way to add the next one.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "eu-japan-open-innovation-challenge",
    eyebrow: "Case study · Niterra Venture Lab × Hello Tomorrow · 2022",
    title: "The EU–Japan Open Innovation Challenge",
    subtitle:
      "What I learned leading a startup challenge that connected a Japanese corporate with startups from 25 countries.",
    intro: [
      "Niterra (formerly NGK Spark Plug) is a Japanese company that sells spark plugs in over 100 countries - and knows that market is in decline. Its answer was the Venture Lab: a business creation and investment hub with a $100 million fund, building new businesses in mobility, utilities, and medical. I joined in 2021 and led its Open Innovation Startup Challenge, run together with Hello Tomorrow.",
    ],
    sections: [
      {
        heading: "The challenge",
        // YouTube video shown at the end of this section (id = the part after "v=" in the link).
        video: {
          id: "4gxaiaG1K3k",
          title: "Open Innovation Startup Challenge, Niterra Venture Lab",
        },
        paragraphs: [
          "The topic was home health: changing the paradigm to improve patient care. It started with a five-week call for applications. 100 startups from 25 countries applied, from seed stage to Series B. The three best-ranked were invited to a bootcamp in Berlin.",
          "This was not a pitch contest. The goal of the bootcamp was to define, together, the investment opportunities and a collaboration plan - licensing, joint ventures, and more. We brainstormed market needs, consumer profiles, the technologies required, and the economics, combining the scaling power of the corporate with the technological innovation of the startups. As the video about the bootcamp puts it: \"we have to go on a relationship level to get trust.\" Over six months the project engaged 50+ stakeholders, and it closed with a demo day in Silicon Valley in July 2022.",
        ],
      },
      {
        heading: "What I tell startups about corporates",
        video: {
          id: "I7OWvX7jH0M",
          title: "Doing business with corporates: what startups need to know (Hello Tomorrow)",
        },
        lead:
          "Two weeks after the demo day, Hello Tomorrow hosted a talk, \"Doing business with corporates: what startups need to know\", where I shared the lessons alongside Amaël Cohades (CEO, CompPair) and Jeff Marshall of Rhythm Diagnostic Systems, one of the challenge finalists.",
        bullets: [
          "Don't just ask for cash. A corporate fund is a strategic investor, not a VC. Ask which initiatives the company is running, and show where you fit in its long-term vision.",
          "Expect a pilot before an investment. Corporates like a test-and-learn period. A pilot project builds trust and credibility, and puts you first in line when the round comes.",
          "Share only what you are comfortable sharing. Trust on IP is built step by step, with open communication about who evaluates your data and why.",
          "It is a people business. Timelines differ, cultures differ, and over-communication and transparency are what close the gap.",
        ],
      },
      {
        heading: "Why it mattered",
        paragraphs: [
          "Jeff described the difference well: with a pure VC the conversation is about capital, while with a strategic partner you talk about the product and building a business together. That is the point of open innovation done properly - not scouting for its own sake, but two very different organisations finding one strategy they can both commit to.",
        ],
      },
    ],
    sources: [
      {
        label: "Video: Open Innovation Startup Challenge, Niterra Venture Lab (YouTube)",
        href: "https://www.youtube.com/watch?v=4gxaiaG1K3k",
      },
      {
        label: "Talk: Doing business with corporates - what startups need to know (Hello Tomorrow, YouTube)",
        href: "https://www.youtube.com/watch?v=I7OWvX7jH0M",
      },
      {
        label: "Event page: Hello Tomorrow webinar with Venture Lab NGK Spark Plug, 26 July 2022 (Livestorm)",
        href: "https://app.livestorm.co/hello-tomorrow/a-tale-of-a-startup-corporate-collaboration-with-venture-lab-ngk-spark-plug?type=detailed",
      },
    ],
  },
];

export const skills = {
  heading: "What I work with",
  groups: [
    {
      label: "Commercial & GTM",
      items: ["Business development", "Go-to-market strategy", "Outbound, inbound & ecosystem-led growth", "Channel & partnerships", "Fundraising & investor relations", "Venture building"],
    },
    {
      label: "Systems & Ops",
      items: ["HubSpot", "Clay", "Claude", "Smartlead", "Closelyhq", "Surfe", "PandaDoc", "Notion"],
    },
    {
      label: "Domains",
      items: ["Photonics", "Semiconductors", "2D materials", "Quantum", "Energy", "Materials science", "Deep tech", "Polymer chemistry"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    {
      text:
        "Mikel was instrumental in opening new markets - most notably the United States and India - and he did it the right way: on the ground, meeting stakeholders, visiting customer sites, and listening deeply until he understood the customer's real pain points. I recommend him warmly and without reservation.",
      author: "Dr. Tom Walsh",
      role: "Board Member & Chair of the Advisory Board, ATLANT 3D · Former CEO of NEXX Systems (acquired by Tokyo Electron)",
      linkedin: "https://www.linkedin.com/in/tom-walshphd/",
      photo: "/testimonials/tom-walsh.png",
      date: "June 23, 2026",
    },
    {
      text:
        "Mikel performed all duties to our complete satisfaction. He consistently demonstrated strong commercial judgment, exceptional HubSpot expertise, and a highly data-driven approach to business development. We recommend him without reservation for leadership roles in business development, partnerships, and sales.",
      author: "Greg Welch",
      role: "Chief Executive Officer, CyberProtonics",
      linkedin: "https://www.linkedin.com/in/gowelch/",
      photo: "/testimonials/greg-welch.png",
      date: "2024",
    },
    {
      text:
        "He is without a doubt the most motivated, persistent and interested intern I ever had. He is curious, driven, and has a lot of energy that he puts to work to engage with stakeholders on all levels and to learn. I can highly recommend him.",
      author: "Dirk Schapeler",
      role: "President, Business Creation Company, NGK/NTK",
      linkedin: "https://www.linkedin.com/in/dhealthinno/",
      photo: "/testimonials/dirk-schapeler.png",
      date: "November 11, 2019",
    },
    {
      text:
        "Mikel is VERY passionate about innovation and brought so much energy and great ideas to our group. He is a professional networker who uses the power of communication and collaboration to accelerate outcomes. I have no doubt that Mikel will be a future global, empathetic and disruptive leader. I highly recommend him!",
      author: "Christopher A. Haskell",
      role: "Executive Leader & Biotech Advisor, Bayer CoLaborator",
      linkedin: "https://www.linkedin.com/in/haskell/",
      photo: "/testimonials/christopher-haskell.png",
      date: "June 10, 2020",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Open to conversations with founders, deep-tech teams, investors, and partners. Whether it's go-to-market, partnerships, or a new venture - reach out.",
  email: "hello@mikelmangold.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mikelmangold" },
    { label: "Website", href: "/welcome" },
  ],
};

export const book = {
  heading: "My Book",
  title: "Today's Superpower - Building Networks",
  subtitle: "7 Mindsets & Principles to Thrive in a Fast-Changing World",
  cover: "/book-cover.png",
  description:
    "A playbook for building ecosystems of ideas, resources, and people in the startup and multi-stakeholder economy. Packed with frameworks for anyone who wants to create partnerships and alliances that generate lasting growth.",
  pullQuote:
    "A balanced mixture of hard science, soft skills, and bold speculation - the definitive guide to both the present and the future of our economy.",
  praiseHeading: "Praise from",
  praise: [
    "Greg Satell",
    "Charlene Li",
    "Keith Ferrazzi",
    "Susan Windham-Bannister",
    "Frank Kumli",
    "Ian Hathaway",
  ],
  // Homepage "My Book" section CTA now opens the dedicated book page below.
  cta: { label: "Read more about the book", href: "/book" },

  // Full content for the dedicated /book page (recreated from mikelmangold.com/book).
  page: {
    intro: [
      "Change happens when people with a collaborative and ecosystem mindset are plugged into the right networks. This book discusses seven mindset principles enabling the reader to thrive in the startup and multi-stakeholder economy by building and growing networks of ideas and knowledge, networks of resources such as capital and infrastructure, and networks of people to join your mission.",
      "Most people think change comes from a top-down approach, where the people in the middle and the bottom don't have much power to effect change. In Today's Superpower – Building Networks: 7 Mindset Principles to Thrive in a Fast-Changing World, Mikel Mangold challenges this common-held belief - showing that anyone can drive a transformation - answering questions like:",
    ],
    questions: [
      "What is a startup ecosystem?",
      "Why should I care about the new economy?",
      "How can I be successful in this fast-changing world?",
      "And more…",
    ],
    readMore: {
      label: "Read more about it",
      href: "https://mikelmangold.com/3networkstochangetheworld/",
    },
    order: { label: "Get your copy", href: "/#contact" },
    podcast: {
      heading: "Watch the podcasts",
      caption:
        "Talks and conversations on building networks, partnerships, and innovation ecosystems - the ideas behind Today's Superpower: Building Networks.",
      videos: [
        {
          youtubeId: "36NPq_rv-MM",
          title:
            "Today's Superpower: Building Networks - Why and how to build your business ecosystem",
        },
        {
          youtubeId: "fsuPN9gCpM0",
          title: "Guide for Startups: How to Partner",
        },
        {
          youtubeId: "JflAgQVgzwA",
          title:
            "The Innovation Room E09 - The Power of Networks and Innovation Ecosystems",
        },
      ],
    },
  },
};

export const meta = {
  title: "Mikel Mangold - Entrepreneur & Commercial GTM Leader",
  description: "Berlin-based entrepreneur turning deep tech into commercial traction. Currently a venture builder at Fraunhofer HHI, working on photonics and semiconductors.",
};

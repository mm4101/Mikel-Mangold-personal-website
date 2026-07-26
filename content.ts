// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components - they read from this file.
// ────────────────────────────────────────────────────────────────

export const hero = {
  name: "Mikel Mangold",
  role: "Entrepreneur · Commercial GTM · Chemist · Author",
  location: "Berlin, Germany",
  headline:
    "I turn deep-tech into commercial traction - building business, partnerships, and go-to-market for frontier companies across semiconductors, quantum, energy, and materials. Currently leading BD & Channel Partnerships at ATLANT 3D.",
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm an entrepreneur and commercial GTM leader with a chemist's background. I work at the edge of deep tech - atomic-scale manufacturing, quantum, energy, and advanced materials - translating hard science into revenue, partnerships, and market traction.",
    "My path runs from polymer chemistry research in Switzerland, to Bayer's biotech and digital-health incubators in Silicon Valley, to venture building at Niterra (where a venture I helped build, Nanell, was acquired), and now to scaling go-to-market at ATLANT 3D.",
    "I build the commercial engine: business development, channel and partnership networks, CRM and pipeline discipline, and the GTM strategy that gets frontier products into the market. I'm also an author.",
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Team Lead, BD & Channel Partnerships",
      company: "ATLANT 3D",
      period: "2024 - Present",
      summary:
        "Leading business development, revenue operations, and a global distributor network across semiconductor, energy, quantum, and materials-science markets. Secured LOIs and paid pilots with Tier-1 players, implemented HubSpot CRM, and onboarded 30+ distributors and ambassadors to scale partnerships.",
    },
    {
      title: "Head of Partnerships, EMEA",
      company: "CyberProtonics",
      period: "2024",
      summary:
        "Drove early-stage BD and investor relations for a quantum-resistant cybersecurity venture. Engaged 20+ top-tier cybersecurity investors across EMEA, built the sales infrastructure from scratch (HubSpot CRM), and led OEM partnership initiatives to validate market fit.",
    },
    {
      title: "Innovation Project Manager - Venture Building",
      company: "Venture Lab, Niterra Group",
      period: "2021 - 2024",
      summary:
        "Three years of venture creation, product development, and GTM strategy - including one exit (Nanell, acquired by MediKarma). Led a 6-month Open Innovation Challenge with Hello Tomorrow engaging 50+ global stakeholders, and built the EMEA startup-ecosystem framework with EU–Japan PoCs.",
    },
    {
      title: "Business Development - CoLaborator & G4A Incubators",
      company: "Bayer (Silicon Valley)",
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
      link: { label: "Read more", href: "#" },
    },
    {
      title: "ATLANT 3D Global Channel Network",
      year: "2025",
      summary:
        "Built the go-to-market and partner engine for an atomic-scale manufacturing company - onboarding 30+ distributors and ambassadors, implementing CRM and full-funnel KPI tracking, and securing paid pilots with Tier-1 semiconductor and materials players.",
      link: { label: "Learn more", href: "#" },
    },
    {
      title: "EU–Japan Open Innovation Challenge",
      year: "2023",
      summary:
        "Led a 6-month Open Innovation Challenge with Hello Tomorrow, engaging 50+ global stakeholders and securing a med-tech partnership - part of building the EMEA deep-tech ecosystem framework.",
      link: { label: "Learn more", href: "#" },
    },
  ],
};

export const skills = {
  heading: "What I work with",
  groups: [
    {
      label: "Commercial & GTM",
      items: ["Business development", "Go-to-market strategy", "Channel & partnerships", "Fundraising & investor relations", "Venture building"],
    },
    {
      label: "Systems & Ops",
      items: ["HubSpot", "Clay", "Claude", "Smartlead", "Closelyhq", "Surfe", "PandaDoc", "Notion"],
    },
    {
      label: "Domains",
      items: ["Semiconductors", "Quantum", "Energy", "Materials science", "Deep tech", "Polymer chemistry"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    {
      text:
        "Add a real recommendation here - you have several on your LinkedIn profile. Copy your favourite quote in, along with the person's name and title.",
      author: "A colleague or partner",
      role: "Their title, Company",
    },
    {
      text:
        "A second recommendation works well here. Pick one that speaks to how you build commercial traction and relationships.",
      author: "An investor or founder",
      role: "Their title, Company",
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
  },
};

export const meta = {
  title: "Mikel Mangold - Entrepreneur & Commercial GTM Leader",
  description: "Berlin-based entrepreneur turning deep tech into commercial traction. Currently leading BD & Channel Partnerships at ATLANT 3D.",
};

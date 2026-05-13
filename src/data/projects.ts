import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "metric",
    name: "Metric",
    logo: "https://res.cloudinary.com/dgxc8nspo/image/upload/v1769330002/logo2_ah607m.png",
    shortDescription:
      "AI-powered mock interview platform for technical and voice interviews.",

    description:
      "Metric is a real-time AI interview platform that simulates technical and voice-based interviews with intelligent feedback systems and coding assessments.",

    techStack: [
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Judge0",
      "LiveKit",
      "Clerk",
    ],

    features: [
      "AI-powered mock interviews",
      "Voice-based real-time interviews",
      "DSA assessment engine using Judge0",
      "Resume-based interview generation",
      "AI-generated performance analytics",
      "Secure authentication with Clerk",
    ],

    gallery: [
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778680972/Screenshot_2026-05-13_192150_ahz32i.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778680971/Screenshot_2026-05-13_192207_plixkk.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778680972/Screenshot_2026-05-13_193209_evyg6k.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778680971/Screenshot_2026-05-13_192230_kgqlex.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778680971/Screenshot_2026-05-13_193122_mfofkg.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778680971/Screenshot_2026-05-13_193027_u8szm1.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778681238/Screenshot_2026-05-13_193704_zo966i.png"
    ],

    github: "https://github.com/yourusername/metric",
    live: "https://metric-seven-orpin.vercel.app",
  },

  {
    slug: "tktplz",
    name: "TktPlz",
    logo: "https://res.cloudinary.com/dgxc8nspo/image/upload/v1749873899/maw2lnlkowbftjvtldna.png",
    shortDescription:
      "Concurrency-safe real-time event ticket booking platform.",

    description:
      "TktPlz is a scalable event ticket booking system engineered for high-concurrency scenarios with secure payments and real-time seat locking.",

    techStack: [
      "Node.js",
      "Redis",
      "MySQL",
      "BullMQ",
      "Socket.IO",
    ],

    features: [
      "Concurrency-safe booking system",
      "Redis locking for seat allocation",
      "Real-time seat updates",
      "TTL-based seat locking",
      "BullMQ queue workflows",
      "Razorpay payment integration",
      "TOTP-based 2FA",
    ],

    gallery: [
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682024/Screenshot_2026-05-13_194313_wdgiqd.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682024/Screenshot_2026-05-13_194357_h3pft6.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682024/Screenshot_2026-05-13_194500_v0n8ax.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682024/Screenshot_2026-05-13_194702_ezcaxr.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682025/Screenshot_2026-05-13_194741_mxsd6m.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682025/Screenshot_2026-05-13_194753_lkvlnb.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682029/Screenshot_2026-05-13_194901_lmrqzo.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778682027/Screenshot_2026-05-13_194914_vcbznd.png"
    ],

    github: "https://github.com/Sumitbose5/tktplz",
    live: "https://tktplz.me",
  },

  {
    slug: "previda",
    name: "Previda",
    logo: "https://res.cloudinary.com/dgxc8nspo/image/upload/v1770216727/previda-removebg-preview_yfwmry.png",
    shortDescription:
      "AI-powered content insight engine for YouTube analytics.",

    description:
      "Previda uses LLM pipelines to analyze YouTube audience data, generate content ideas, and derive actionable insights from large-scale comments.",

    techStack: [
      "FastAPI",
      "Python",
      "OpenAI API",
      "Groq",
      "YouTube API",
    ],

    features: [
      "Comment sentiment analysis",
      "LLM-powered clustering",
      "Video idea generation",
      "Title & hook generation",
      "BYOK architecture",
      "Async FastAPI processing",
    ],

    gallery: [
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778681422/Screenshot_2026-05-13_193748_etollf.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778681422/Screenshot_2026-05-13_193831_ifljjx.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778681423/Screenshot_2026-05-13_193906_aqi883.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778681424/Screenshot_2026-05-13_193921_tybagr.png"
    ],

    github: "https://github.com/Sumitbose5/previda",
    live: "https://previda.tech",
  },

  {
    slug: "stockflow",
    name: "StockFlow",
    logo: "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683249/sf_yq4stv.png",

    shortDescription:
      "Modern inventory and sales management system for businesses.",

    description:
      "StockFlow is a full-stack inventory management system designed to streamline stock tracking, sales management, billing, and analytics for businesses. It provides real-time inventory updates, role-based access, PDF invoice/report generation, and insightful dashboards to help manage products, suppliers, purchases, and sales efficiently.",

    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Puppeteer",
    ],

    features: [
      "Inventory & stock management",
      "Purchase and sales tracking",
      "Real-time stock updates",
      "Role-based authentication & authorization",
      "Dashboard analytics and reports",
      "PDF invoice/report generation",
      "Low stock alerts",
      "Supplier and customer management",
      "Sales history tracking",
      "Responsive admin dashboard",
      "JWT-based secure authentication",
      "Search, filter, and pagination support",
    ],

    gallery: [
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683292/Screenshot_2026-05-13_195532_h91kac.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683293/Screenshot_2026-05-13_195601_yjfzqj.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683293/Screenshot_2026-05-13_195621_ewtfft.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683294/Screenshot_2026-05-13_195631_mbinmq.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683293/Screenshot_2026-05-13_195644_xvv3hb.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683295/Screenshot_2026-05-13_195750_hmqost.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683293/Screenshot_2026-05-13_195657_hie8kf.png",
      "https://res.cloudinary.com/dgxc8nspo/image/upload/v1778683293/Screenshot_2026-05-13_195717_ii3xwx.png"
    ],

    github: "https://github.com/Sumitbose5/IMS",
    live: "https://ims-frontend-omega.vercel.app",
  }
];

import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CloudCog,
  Code2,
  LayoutDashboard,
  Palette,
  SearchCheck,
  ServerCog,
  ShoppingBag
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
};

export type Article = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export const siteConfig = {
  name: "Kusham Lata",
  role: "Full-Stack Developer & Software Engineer",
  location: "India",
  availability: "Online",
  country: "India",
  description:
    "I build scalable full-stack products with React, Next.js, Node.js, Laravel, and cloud-ready backend systems for modern SaaS and enterprise teams.",
  heroBlurb:
    "My recent work spans REST APIs, real-time chat, HRMS SaaS platforms, e-commerce systems, and AI-powered experiences with a strong focus on performance and usability.",
  email: "kushamlata1897@gmail.com",
  phone: "+91 8077582146",
  github: "https://github.com/githubkusham123",
  linkedin: "#"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" }
];

export const stats: Stat[] = [
  { label: "Years Experience", value: "04+" },
  { label: "Core Projects", value: "04+" },
  { label: "Companies", value: "02" }
];

export const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Tailwind CSS",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Docker",
  "AWS"
];

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "Responsive web apps and portals built with React, Next.js, Node.js, Laravel, and strong product fundamentals.",
    icon: Code2
  },
  {
    title: "SaaS Dashboard Development",
    description: "Mobile-first dashboards and multi-tenant SaaS workflows designed for speed, clarity, and day-to-day operations.",
    icon: LayoutDashboard
  },
  {
    title: "UI/UX Design",
    description: "Clean frontend experiences with scalable components, thoughtful hierarchy, and modern interface patterns.",
    icon: Palette
  },
  {
    title: "API Development",
    description: "RESTful APIs, authentication flows, and backend integrations designed for reliability and low-latency delivery.",
    icon: ServerCog
  },
  {
    title: "AI Integration",
    description: "OpenAI-powered chat and workflow features integrated into production-ready applications and real-time systems.",
    icon: Bot
  },
  {
    title: "E-commerce Solutions",
    description: "Secure payments, OAuth login, and scalable storefront backends for seamless user transactions.",
    icon: ShoppingBag
  },
  {
    title: "Cloud & DevOps",
    description: "AWS deployment, Docker workflows, CI/CD, and operational tooling to support growing web products.",
    icon: CloudCog
  },
  {
    title: "SEO Optimization",
    description: "Performance-focused frontend delivery and structured pages that support better discoverability and load times.",
    icon: SearchCheck
  }
];

export const projects: Project[] = [
  {
    title: "AI-Powered Real-Time Chat Platform",
    description: "Real-time chat platform with Socket.io and OpenAI integrations, deployed on AWS EC2 with sub-second responses for 100+ concurrent users.",
    image: "/projects/sentinel-commerce.svg",
    tech: ["React", "Node.js", "Socket.io", "OpenAI API", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/githubkusham123"
  },
  {
    title: "HRMS SaaS",
    description: "Multi-tenant HRMS platform with attendance, recruitment, leave workflows, JWT auth, and robust Sequelize-backed data handling.",
    image: "/projects/zero-trust-dashboard.svg",
    tech: ["React.js", "Node.js", "MySQL", "Sequelize", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/githubkusham123"
  },
  {
    title: "WrapMyGift E-commerce Platform",
    description: "Secure e-commerce solution with Google OAuth, Razorpay and Stripe integration, and scalable APIs for 1,000+ concurrent shoppers.",
    image: "/projects/atlas-workflow-cloud.svg",
    tech: ["React.js", "Node.js", "MySQL", "OAuth", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/githubkusham123"
  }
];

export const skillHighlights = [
  { label: "Frontend Development", value: 92 },
  { label: "Backend Systems", value: 90 },
  { label: "Database Design", value: 86 },
  { label: "Cloud & DevOps", value: 82 }
];

export const timeline: TimelineItem[] = [
  {
    period: "Sep 2024 - Present",
    title: "Software Engineer",
    company: "Prakhar Software Solutions",
    description: "Building scalable Node.js and Express APIs, React dashboards, and AI-powered real-time features for SaaS products handling 50,000+ daily requests."
  },
  {
    period: "Jul 2021 - Aug 2024",
    title: "Software Developer",
    company: "Indovision Services",
    description: "Delivered enterprise client portals with Laravel and JavaScript, improving MySQL query response times by 40% for applications serving 1,000+ users."
  },
  {
    period: "2015 - 2019",
    title: "Bachelors Degree (CSE)",
    company: "Satya College of Engineering and Technology",
    description: "Completed undergraduate studies in Computer Science and Engineering, building the foundation for full-stack application development."
  }
];

export const articles: Article[] = [
  {
    title: "How I build full-stack SaaS products with React, Node.js, and cloud deployment",
    description: "A practical view of shipping scalable SaaS applications with modern frontend patterns and production-ready backend services.",
    href: "#",
    category: "Architecture"
  },
  {
    title: "Lessons from building AI-powered real-time chat applications",
    description: "What changes when OpenAI APIs, Socket.io, and responsive frontend experiences need to work together in production.",
    href: "#",
    category: "AI Products"
  },
  {
    title: "Improving API and database performance in growing web applications",
    description: "Small backend architecture and query optimization decisions that can noticeably reduce latency and improve user experience.",
    href: "#",
    category: "Engineering"
  }
];

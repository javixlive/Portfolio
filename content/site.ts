import type { StaticImageData } from 'next/image'

import novatechLanding from '../public/images/novatech/LandingPage.png'
import novatechHome from '../public/images/novatech/Home.png'
import novatechProductDetails from '../public/images/novatech/ProductDetails.png'
import novatechReviews from '../public/images/novatech/Reviews.png'
import novatechDashboard from '../public/images/novatech/Dashboard.png'
import novatechCreateProduct from '../public/images/novatech/CreateProduct.png'
import novatechCalendar from '../public/images/novatech/Calendar.png'
import scaraThumbnail from '../public/images/works/scara.png'
import scaraDesign from '../public/images/works/Design.png'
import scaraPid from '../public/images/works/PID.png'
import scaraSimulation from '../public/images/works/simulation.png'
import pendulumDesign from '../public/images/works/IWP.png'
import pendulumModel from '../public/images/works/IWP2.png'
import pendulumPid from '../public/images/works/IWP3.png'
import pendulumFinal from '../public/images/works/IWP4.png'

export type ExternalLink = {
  label: string
  href: string
}

export type SocialLink = ExternalLink & {
  network: 'linkedin' | 'github' | 'twitter' | 'email'
}

export type Role = {
  title: string
  company: string
  location: string
  start: string
  end: string
  highlights: string[]
}

export type Education = {
  credential: string
  school: string
  start: string
  end: string
}

export type TimelineEntry = {
  year: string
  text: string
}

export type SkillGroup = {
  name: string
  skills: string[]
}

export type ProjectImage = {
  src: StaticImageData
  alt: string
}

export type ProjectCategory = 'software' | 'engineering'

export type Project = {
  slug: string
  title: string
  year: number
  category: ProjectCategory
  summary: string
  description: string[]
  stack: string[]
  highlights: string[]
  links: ExternalLink[]
  thumbnail: StaticImageData
  images: ProjectImage[]
}

export const profile = {
  name: 'Javier Montaño Rodríguez',
  shortName: 'Javier Montaño',
  jobTitle: 'Software Engineer',
  tagline: 'Software Engineer ( Backend / Integrations / Full Stack )',
  greeting:
    "Hello, I'm a software engineer based in Guadalajara, Mexico. I build backend and integration services.",
  location: 'Guadalajara, Jalisco, Mexico',
  availability: 'Open to remote work',
  description:
    'Javier Montaño Rodríguez is a software engineer in Guadalajara, Mexico. He builds backend and integration services with Java, Spring Boot and MuleSoft, and is open to remote work.',
  about: [
    "I'm a software engineer with 2+ years of experience building backend integration services at Megacable, one of Mexico's largest telecom providers. I migrate MuleSoft (Mule 4) APIs to Spring Boot 3 and Java 21, and I build event-driven services on Apache Pulsar, SQL Server and Oracle OSM/UIM for payments, customer communications and network provisioning.",
    "I studied Mechatronics Engineering and moved into software through a full-stack bootcamp, so I also work with React, Node.js and TypeScript. I like automating things. I speak native Spanish and fluent English (C1), and I'm open to remote work. When I'm not working I love reading books."
  ],
  interests: 'Art, Music, Drawing, Books, Videogames',
  languages: ['Spanish: Native', 'English: Fluent (C1)'],
  email: 'javixlive@proton.me',
  siteUrl: 'https://javixlive.netlify.app',
  sourceUrl: 'https://github.com/javixlive/Portfolio',
  resume: {
    href: '/Resume.pdf',
    downloadName: 'Javier_Montano_Rodriguez_Resume.pdf'
  },
  avatar: '/images/Catbug.png'
} as const

export const socials: SocialLink[] = [
  {
    network: 'linkedin',
    label: '@javiermrod',
    href: 'https://www.linkedin.com/in/javiermrod/'
  },
  {
    network: 'github',
    label: '@javixlive',
    href: 'https://github.com/javixlive'
  },
  {
    network: 'twitter',
    label: '@Kitterbuggy',
    href: 'https://twitter.com/Kitterbuggy'
  },
  {
    network: 'email',
    label: profile.email,
    href: `mailto:${profile.email}`
  }
]

export const experience: Role[] = [
  {
    title: 'Software Developer (Backend & Integrations)',
    company: 'Megacable',
    location: 'Guadalajara, Mexico',
    start: 'Jul 2024',
    end: 'Present',
    highlights: [
      'Migrated MuleSoft (Mule 4) APIs to Spring Boot 3 / Java 21 for payments, network provisioning and document management (Alfresco). My endpoint-by-endpoint parity reports found about 25 behavioral differences and a missing scheduled job before cutover, and my runbooks guided canary releases alongside the legacy apps.',
      'Develop and maintain the Communication Platform, a chain of Spring Boot services (scheduled jobs, a Pulsar producer, 7 consumers and a delivery REST API). It sends account statements and lifecycle messages by SMS, email and Telegram through Infobip and SMTP, in batches of up to 6,000 recipients.',
      "Extend the Engagement pipeline that moves committed sales into fulfillment, using a state machine with record locking, automatic retries and end-to-end provisioning. Added REST endpoints for the sales agents' mobile app.",
      'Contribute to the migration of enterprise provisioning to Oracle OSM/UIM. I develop and maintain 30+ SQL Server stored procedures that generate, validate and log orders, and I run IP Transit regression suites (8 SKUs, every movement type) in UAT.',
      'Built an internal testing dashboard (Next.js, Spring Boot, H2, Server-Sent Events) that triggers service orders, streams their states live and compares generated JSON payloads against Oracle samples, which made manual UAT checks much faster.',
      'Set up AI-assisted workflows that generate and maintain technical documentation, API references and Postman collections.'
    ]
  },
  {
    title: 'Simulator Development Support',
    company: 'Consultoría Aeronáutica Integral S.A. de C.V.',
    location: 'Remote',
    start: 'Feb 2021',
    end: 'May 2021',
    highlights: [
      'Designed the experimental setup for a flight-simulator prototype and kept detailed experiment logs.',
      'Researched the underlying theory and prepared technical documentation for intellectual-property registration.'
    ]
  }
]

export const education: Education[] = [
  {
    credential: 'B.S. in Mechatronics Engineering',
    school: 'Universidad del Valle de México',
    start: 'Feb 2017',
    end: 'Jun 2021'
  },
  {
    credential: 'Full Stack Web Development Bootcamp',
    school: 'Henry',
    start: 'Sep 2022',
    end: 'Feb 2023'
  }
]

export const timeline: TimelineEntry[] = [
  { year: '1996', text: 'Born in Jalisco, Mexico.' },
  {
    year: '2021',
    text: 'Graduated in Mechatronics Engineering from Universidad del Valle de México (UVM).'
  },
  {
    year: '2021',
    text: 'Supported flight-simulator development at Consultoría Aeronáutica Integral.'
  },
  {
    year: '2023',
    text: "Completed Henry's Full Stack Web Development bootcamp."
  },
  {
    year: '2024',
    text: 'Joined Megacable as a backend and integrations developer.'
  }
]

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'SQL (T-SQL)', 'Python', 'C++']
  },
  {
    name: 'Backend & Integration',
    skills: [
      'Spring Boot',
      'MuleSoft (Mule 4, DataWeave, Anypoint)',
      'Node.js',
      'Express',
      'REST APIs',
      'SOAP',
      'OpenAPI/Swagger',
      'Microservices',
      'Event-Driven Architecture',
      'Scheduled Batch Jobs'
    ]
  },
  {
    name: 'Messaging',
    skills: ['Apache Pulsar', 'ActiveMQ']
  },
  {
    name: 'Databases',
    skills: [
      'Microsoft SQL Server',
      'Oracle',
      'PostgreSQL',
      'MongoDB',
      'H2',
      'Stored Procedures'
    ]
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Redux',
      'Angular',
      'Tailwind CSS',
      'Material UI'
    ]
  },
  {
    name: 'Tools & Platforms',
    skills: [
      'Git',
      'Maven',
      'Docker',
      'Postman',
      'Linux',
      'Oracle OSM',
      'Oracle UIM',
      'Alfresco',
      'AI-assisted development (Claude Code)'
    ]
  }
]

export const projectCategories: Record<ProjectCategory, string> = {
  software: 'Software',
  engineering: 'Mechatronics'
}

export const projects: Project[] = [
  {
    slug: 'novatech',
    title: 'NovaTech Power',
    year: 2023,
    category: 'software',
    summary: 'Full-stack e-commerce store for buying and selling PC parts.',
    description: [
      'NovaTech Power is a full-stack e-commerce platform where people buy and sell PC parts. It was my final project at the Henry bootcamp.'
    ],
    stack: [
      'React',
      'Redux Toolkit',
      'Material UI',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Socket.IO'
    ],
    highlights: [
      'Real-time group chat and push notifications over Socket.IO',
      'Google sign-in (OAuth)',
      'PayPal checkout',
      'PDF invoices',
      'Admin dashboard with live charts',
      'Product management (CRUD)',
      'Admins can promote a user to root',
      'Android app'
    ],
    links: [
      { label: 'Website', href: 'https://henrytech.vercel.app/' },
      {
        label: 'Source code',
        href: 'https://github.com/javixlive/NovaTech-Power'
      }
    ],
    thumbnail: novatechLanding,
    images: [
      { src: novatechHome, alt: 'NovaTech Power home page' },
      { src: novatechProductDetails, alt: 'NovaTech Power product details' },
      { src: novatechReviews, alt: 'NovaTech Power product reviews' },
      { src: novatechDashboard, alt: 'NovaTech Power admin dashboard' },
      { src: novatechCreateProduct, alt: 'NovaTech Power product form' },
      { src: novatechCalendar, alt: 'NovaTech Power calendar' }
    ]
  },
  {
    slug: 'scara',
    title: 'SCARA Robot',
    year: 2021,
    category: 'engineering',
    summary:
      'Design and 3D simulation of a Selective Compliance Articulated Robot Arm.',
    description: [
      'Design and 3D simulation of a Selective Compliance Articulated Robot Arm (SCARA). I modeled its kinematics, dynamics and trajectory generation, and validated a controller in a virtual-reality simulation.'
    ],
    stack: ['MATLAB', 'Simulink', 'V-Realm Builder', 'SolidWorks'],
    highlights: [
      'Direct and inverse kinematics',
      'Trajectory generation',
      'Dynamic model',
      'Mechanical model',
      'Analog controller',
      'Virtual-reality simulation'
    ],
    links: [],
    thumbnail: scaraThumbnail,
    images: [
      { src: scaraDesign, alt: 'SCARA robot mechanical design' },
      { src: scaraPid, alt: 'SCARA robot PID controller' },
      { src: scaraSimulation, alt: 'SCARA robot virtual-reality simulation' }
    ]
  },
  {
    slug: 'inertia-wheel',
    title: 'Inertia Wheel Pendulum',
    year: 2020,
    category: 'engineering',
    summary: 'Control design for a pendulum that holds a bar at a set angle.',
    description: [
      'Control design for a motor, propeller and rocker system mounted on a wall. The rocker is a bar with one degree of freedom. The controller raises the bar to a set angle and holds it there, and reaching the target height switches on an aromatherapy diffuser.'
    ],
    stack: ['MATLAB', 'Simulink', 'SolidWorks'],
    highlights: [],
    links: [],
    thumbnail: pendulumFinal,
    images: [
      { src: pendulumDesign, alt: 'Inertia wheel pendulum design' },
      { src: pendulumModel, alt: 'Inertia wheel pendulum model' },
      { src: pendulumPid, alt: 'Inertia wheel pendulum PID controller' },
      { src: pendulumFinal, alt: 'Inertia wheel pendulum final assembly' }
    ]
  }
]

// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — no need to touch the components.
//  Anything marked TODO is a placeholder: replace it with your
//  real details before publishing.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Uday',
  fullName: 'Uday Yadav',
  role: 'Frontend Developer',
  location: 'India · Remote worldwide',
  years: '4+',
  available: true,
  tagline: 'I build fast, beautiful websites that turn visitors into clients.',
  intro:
    'Frontend developer with 4+ years of experience crafting responsive, high-performance web apps with Vue, Nuxt and Svelte. I help startups and small businesses launch websites that look premium and load instantly.',
  email: 'udayyadavaa11@gmail.com',
  resumeUrl: '', // TODO: e.g. '/resume.pdf' (put the file in /public)
  socials: {
    github: 'https://github.com/udayaa11',
    linkedin: '', // TODO: your LinkedIn URL (hidden while empty)
  },
}

export const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '3', label: 'Core frameworks' },
  { value: '100%', label: 'Responsive builds' },
  { value: '24h', label: 'Reply time' },
]

export const about = {
  paragraphs: [
    "I'm a frontend developer who cares about the details — clean code, smooth interactions and pages that feel fast on every device.",
    'Over the last 4+ years I have built dashboards, marketing sites and product UIs using Vue, Nuxt, Svelte and TypeScript. I enjoy turning a rough idea or a Figma file into a polished, production-ready website.',
    'I work full-time as a Frontend Developer at Aimlabs Private Limited, and I also take on select freelance projects — taking them from design to deployment with clear communication along the way.',
  ],
  highlights: [
    'Pixel-perfect from Figma',
    'SEO & performance focused',
    'Clean, maintainable code',
    'Clear, on-time communication',
  ],
}

export const skills = [
  {
    group: 'Frameworks',
    items: ['Vue 3', 'Nuxt 3', 'Svelte', 'SvelteKit'],
  },
  {
    group: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    group: 'Styling & UI',
    items: ['Tailwind CSS', 'SCSS', 'Responsive design', 'Animations'],
  },
  {
    group: 'Tooling',
    items: ['Vite', 'Git & GitHub', 'Pinia', 'REST APIs', 'Vercel / Netlify'],
  },
]

// Real projects from github.com/udayaa11. `image` is optional — drop a
// screenshot into /public/projects/ and set e.g. image: 'projects/aimlabs.jpg' (no leading slash).
// Without an image, a cover is drawn using `icon` (a name from components/ProjectsSection.vue).
export const projects = [
  {
    title: 'Stake Casino Games',
    icon: 'Dices',
    description:
      'Currently building slot and casino game frontends for Stake at Aimlabs — game UI, animations and responsive layouts that run smoothly on mobile and desktop.', // TODO: confirm / add what you built
    tags: ['iGaming', 'Game UI', 'Animations'], // TODO: real tech stack
    live: '',
    code: '',
    image: '',
    private: true,
    current: true,
    accent: 'from-emerald-500/40 to-green-500/20',
  },
  {
    title: 'Aimlabs Company Website',
    icon: 'CodeXml',
    description:
      'Official multi-page website for Aimlabs — About Us (mission, vision, team), services, products, a careers section with dynamic job-role pages, and a contact form. Built with reusable components and touch-friendly carousels.',
    tags: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'Splide', 'Bun'],
    live: 'https://www.aimlabs.in',
    code: 'https://github.com/udayaa11/aimlabs-website',
    image: 'projects/aimlabs.jpg',
    accent: 'from-violet-500/40 to-fuchsia-500/20',
  },
  {
    title: 'LuckyReels Gaming Platform',
    icon: 'Coins',
    description:
      'Player-facing web platform for the LuckyReels gaming brand — game lobby, responsive layouts and UI built to stay smooth on mobile and desktop.', // TODO: confirm / add what you built
    tags: ['iGaming', 'Web app', 'Responsive UI'], // TODO: real tech stack
    live: 'https://luckyreels.com',
    code: '',
    image: 'projects/luckyreels.jpg',
    private: true,
    accent: 'from-rose-500/40 to-pink-500/20',
  },
  {
    title: 'Casino Games & Games SDK',
    icon: 'Gamepad2',
    description:
      'Frontends for slotGPT — an AI slot generator whose games launch on Stake — and other slot and casino titles, plus work on a shared games SDK used to build and ship new games faster.', // TODO: confirm / add details
    tags: ['iGaming', 'Game UI', 'SDK'], // TODO: real tech stack
    live: 'https://www.slotgpt.com',
    code: '',
    image: 'projects/slotgpt.jpg',
    private: true,
    accent: 'from-indigo-500/40 to-blue-500/20',
  },
  {
    title: 'Affiliate Program Platform',
    icon: 'Handshake',
    description:
      'Marketing site for an affiliate program — commission plans, partner brands, supported platforms, testimonials, news, a support hub and FAQ, with a responsive sidebar navigation for mobile.',
    tags: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'Splide'],
    live: '', // TODO: add the live URL if it's public
    code: 'https://github.com/udayaa11/affiliate',
    image: '',
    accent: 'from-cyan-500/40 to-sky-500/20',
  },
]

export const services = [
  {
    icon: 'Rocket',
    title: 'Landing Pages',
    description:
      'High-converting landing pages for products, launches and campaigns — fast, animated and optimized for SEO.',
    points: ['Custom design', 'Lead capture forms', 'Analytics setup'],
  },
  {
    icon: 'Briefcase',
    title: 'Business Websites',
    description:
      'Professional multi-page websites that build trust and bring in customers, with easy content updates.',
    points: ['Up to 8 pages', 'Contact & maps', 'SEO foundations'],
  },
  {
    icon: 'RefreshCw',
    title: 'Website Redesigns',
    description:
      'Turn an outdated site into a modern, mobile-first experience that loads in under a second.',
    points: ['UX audit', 'Performance boost', 'Modern stack'],
  },
  {
    icon: 'CodeXml',
    title: 'Frontend Development',
    description:
      'Need extra hands? I join your team to build features in Vue, Nuxt or Svelte from your designs and APIs.',
    points: ['Figma to code', 'API integration', 'Reusable components'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Aimlabs Private Limited',
    period: '4+ years · Present', // TODO: e.g. 'Jun 2022 — Present' once you confirm the start month
    description:
      "Building production frontends across Aimlabs' products and client platforms — currently slot and casino games for Stake, plus the official company website, iGaming platforms such as LuckyReels, online slot and casino game frontends, a shared games SDK, affiliate portals and internal product UIs.",
    tags: ['Vue 3', 'Nuxt 3', 'Svelte', 'TypeScript', 'Tailwind', 'Pinia'],
  },
]

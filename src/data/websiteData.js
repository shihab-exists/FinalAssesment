export const navLinks = [
  { label: 'Products', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];

export const heroContent = {
  headingLine1: 'Effortless custom contract',
  headingLine2: 'billing by Brillance',
  subheading: 'Streamline your billing process with seamless automation for every custom contract, tailored by Brillance.',
  ctaText: 'Start for free',
  ctaHref: '#pricing',
};

export const servicesData = [
  {
    id: 1,
    title: 'Plan your schedules',
    description: 'Streamline customer subscriptions and billing with automated scheduling tools.',
    imageSrc: '/assets/images/services/plan-your-schedules.jpeg',
    imageAlt: 'Plan schedules dashboard',
  },
  {
    id: 2,
    title: 'Analytics & insights',
    description: 'Transform your business data into actionable insights with real-time analytics.',
    imageSrc: '/assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg',
    imageAlt: 'Analytics dashboard',
  },
  {
    id: 3,
    title: 'Collaborate seamlessly',
    description: 'Keep your team aligned with shared dashboards and collaborative workflows.',
    imageSrc: '/assets/images/services/data-visualization-dashboard-with-interactive-char.jpg',
    imageAlt: 'Data visualization dashboard',
  },
];

export const testimonialData = {
  badgeText: 'Testimonials',
  heading: 'Confidence backed by results',
  subheading: 'Our customers achieve more each day because their tools are simple, powerful, and clear.',
  quote: '"In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!"',
  author: 'Jamie Marshall',
  role: 'Co-founder, Exponent',
  imageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_35_19%20AM-z4zSRLsbOQDp7MJS1t8EXmGNB6Al9Z.png',
};

export const featuresHeaderData = {
  badgeText: 'Services',
  heading: 'Built for absolute clarity and focused work',
  subheading: 'Stay focused with tools that organize, connect and turn information into confident decisions.',
};

export const featuresData = [
  {
    id: 1,
    title: 'Smart. Simple. Brilliant.',
    description: 'Your data is beautifully organized so you see everything clearly without the clutter.',
    imageSrc: '/assets/images/services/work-order.png',
    imageAlt: 'Smart organized work order',
    imageClass: 'h-1/2 object-cover',
    borderClasses: 'border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)]',
  },
  {
    id: 2,
    title: 'Your work, in sync',
    description: 'Every update flows instantly across your team and keeps collaboration effortless and fast.',
    imageSrc: '/assets/images/services/work-sync.png',
    imageAlt: 'Work synchronization',
    imageClass: 'h-full object-cover',
    borderClasses: 'border-b border-[rgba(55,50,47,0.12)]',
  },
  {
    id: 3,
    title: 'Effortless integration',
    description: 'All your favorite tools connect in one place and work together seamlessly by design.',
    imageSrc: '/assets/images/services/integration.png',
    imageAlt: 'Effortless integration',
    imageClass: 'h-full object-cover',
    borderClasses: 'border-r-0 md:border-r border-b md:border-b-0 border-[rgba(55,50,47,0.12)] bg-transparent',
  },
  {
    id: 4,
    title: 'Numbers that speak',
    description: 'Track growth with precision and turn raw data into confident decisions you can trust.',
    imageSrc: '/assets/images/services/speak.png',
    imageAlt: 'Numbers that speak analytics',
    imageClass: 'h-full object-cover',
    borderClasses: '',
  },
];

export const pricingHeaderData = {
  badgeText: 'Plans & Pricing',
  heading: 'Choose the perfect plan for your business',
  subheading: "Scale your operations with flexible pricing that grows with your team.\nStart free, upgrade when you're ready.",
};

export const pricingPlansData = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Essential billing automation for solo founders and early stage projects.',
    features: [
      'Up to 5 active client contracts',
      'Standard automated invoicing',
      'Community support & docs',
      'Real-time event webhooks',
    ],
    isPopular: false,
    buttonText: 'Start for free',
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$49',
    period: 'per month',
    description: 'Advanced custom contracts, real-time analytics, and automated schedules.',
    features: [
      'Unlimited custom contracts',
      'Automated scheduling & billing engine',
      'Multi-currency & tax automation',
      'Priority email & Slack support',
      'Detailed data visualization',
    ],
    isPopular: true,
    buttonText: 'Get started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$199',
    period: 'per month',
    description: 'Dedicated infrastructure, custom SLAs, and multi-team governance.',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom billing workflows & API access',
      '99.99% uptime SLA guarantee',
      'Custom security & audit compliance',
    ],
    isPopular: false,
    buttonText: 'Contact sales',
  },
];

export const footerData = {
  brand: {
    name: 'Brillance',
    tagline: 'Coding made effortless',
  },
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#features' },
        { label: 'Real-time Previews', href: '#services' },
        { label: 'Multi-Agent Coding', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '#' },
        { label: 'Our team', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Brand', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Terms of use', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
  ],
};

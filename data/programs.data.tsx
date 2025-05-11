// Centralized content structure
export const PROGRAMSCONTENT = {
  hero: {
    badge: "Our Work & Projects",
    title: "Transforming Communities Together",
    description:
      "Explore our portfolio of completed and ongoing projects that demonstrate our commitment to sustainable development and community empowerment. Each project represents a collaborative journey with local partners to create meaningful, lasting change.",
  },
  sectionTitle: "Our Projects",
  filters: [
    { id: "all", label: "All Projects" },
    { id: "education", label: "Education" },
    { id: "health", label: "Health" },
    { id: "environment", label: "Environment" },
    { id: "economic", label: "Economic Development" },
    { id: "women", label: "Women & Girls" },
    { id: "rural", label: "Rural Development" },
  ],
  emptyState: {
    title: "No projects found",
    description:
      "No projects match your current filter. Please try another category.",
  },
  cta: {
    title: "Partner With Us",
    description:
      "Join our network of collaborators and contribute your expertise to our ongoing and future projects. Together, we can create sustainable solutions to complex challenges.",
    primaryButton: {
      text: "Become a Partner",
      link: "#become-partner",
    },
    secondaryButton: {
      text: "View Upcoming Projects",
      link: "#upcoming-projects",
    },
  },
  works: [
    {
      id: 1,
      title: "Rural Education Transformation Project",
      category: "Education",
      year: "2023-2024",
      image: "/api/placeholder/640/360",
      description:
        "A comprehensive project focused on improving educational outcomes in rural areas through digital integration, teacher training, and infrastructure improvements.",
      outcomes: [
        "15 rural schools modernized with digital facilities",
        "85% improvement in student digital literacy",
        "378 teachers trained in modern teaching methodologies",
      ],
      tags: ["education", "technology", "rural"],
      link: "#project-details",
    },
    {
      id: 2,
      title: "Women's Cooperative Development Initiative",
      category: "Economic Empowerment",
      year: "2022-2023",
      image: "/api/placeholder/640/360",
      description:
        "Created sustainable women-led businesses through cooperative models, focusing on traditional crafts with modern market access strategies.",
      outcomes: [
        "3 successful women's cooperatives established",
        "127 women gained financial independence",
        "42% average increase in household income",
      ],
      tags: ["women", "economic", "rural"],
      link: "#project-details",
    },
    {
      id: 3,
      title: "Clean Water Infrastructure Project",
      category: "Health",
      year: "2022-2023",
      image: "/api/placeholder/640/360",
      description:
        "Developed sustainable water purification and distribution systems in areas with contaminated groundwater, using locally maintainable technology.",
      outcomes: [
        "Clean water access for 12 villages",
        "75% reduction in waterborne illnesses",
        "Local maintenance teams trained in 8 communities",
      ],
      tags: ["health", "infrastructure", "water"],
      link: "#project-details",
    },
    {
      id: 4,
      title: "Youth Leadership & Social Innovation Camp",
      category: "Youth Development",
      year: "2023",
      image: "/api/placeholder/640/360",
      description:
        "An intensive residential program teaching leadership, social entrepreneurship, and collaborative problem-solving to youth from diverse backgrounds.",
      outcomes: [
        "150 youth trained from 5 countries",
        "32 social impact projects launched",
        "87% of participants report improved leadership abilities",
      ],
      tags: ["youth", "education", "leadership"],
      link: "#project-details",
    },
    {
      id: 5,
      title: "Climate-Resilient Farming Initiative",
      category: "Environment",
      year: "2021-2023",
      image: "/api/placeholder/640/360",
      description:
        "Introduced sustainable agricultural practices to smallholder farmers in regions facing climate challenges, focusing on water conservation and organic methods.",
      outcomes: [
        "312 farmers adopted climate-smart techniques",
        "26% increase in crop yields despite drought conditions",
        "Reduced chemical fertilizer usage by 68%",
      ],
      tags: ["environment", "agriculture", "rural"],
      link: "#project-details",
    },
    {
      id: 6,
      title: "Mobile Health Clinics Network",
      category: "Healthcare",
      year: "2022-2024",
      image: "/api/placeholder/640/360",
      description:
        "Established a network of mobile health clinics to provide essential medical services to remote communities with limited healthcare access.",
      outcomes: [
        "8 mobile clinics operating across 45 villages",
        "12,500+ patients received care",
        "Prenatal care access increased by 65% in service areas",
      ],
      tags: ["health", "rural", "infrastructure"],
      link: "#project-details",
    },
    {
      id: 7,
      title: "Digital Skills for Entrepreneurs Program",
      category: "Economic Development",
      year: "2023-2024",
      image: "/api/placeholder/640/360",
      description:
        "Training program equipping small business owners with digital marketing, e-commerce, and financial technology skills to expand their market reach.",
      outcomes: [
        "185 entrepreneurs completed the program",
        "68% reported increased business revenue",
        "23 businesses established online sales channels",
      ],
      tags: ["economic", "technology", "education"],
      link: "#project-details",
    },
    {
      id: 8,
      title: "Waste Management & Recycling Initiative",
      category: "Environment",
      year: "2022-2023",
      image: "/api/placeholder/640/360",
      description:
        "Community-based waste management program introducing sustainable waste sorting, recycling systems, and creating value from recyclable materials.",
      outcomes: [
        "5 communities implemented comprehensive recycling systems",
        "Waste to landfill reduced by 45%",
        "18 green jobs created in waste processing",
      ],
      tags: ["environment", "waste", "community"],
      link: "#project-details",
    },
    {
      id: 9,
      title: "Girls' STEM Education Project",
      category: "Education",
      year: "2023-2024",
      image: "/api/placeholder/640/360",
      description:
        "Specialized program to encourage girls' participation in STEM subjects through hands-on workshops, mentorship, and technology exposure.",
      outcomes: [
        "320 girls participated in STEM workshops",
        "92% reported increased interest in STEM careers",
        "15 schools received STEM learning equipment",
      ],
      tags: ["education", "women", "technology"],
      link: "#project-details",
    },
  ],
};

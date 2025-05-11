import {
  Users,
  ShieldCheck,
  Globe,
  Zap,
  RefreshCw,
  Settings,
} from "lucide-react";
export const ABOUTCONTENT = {
  hero: {
    badge: "About Sabitri Foundation",
    title: "Our Story, Mission &",
    highlightedTitle: "Vision",
    description:
      "Founded in December 2023, Sabitri Foundation was established with a simple yet powerful vision: to create a collaborative platform where NGOs worldwide can unite, share resources, and amplify their collective impact. We work across borders to address some of the most pressing social, environmental, and economic challenges of our time.",
  },
  mission: {
    title: "Our Mission",
    description:
      "To foster global collaboration among non-governmental organizations, enabling them to share knowledge, pool resources, and implement effective programs that create lasting positive change in underserved communities. We strive to bridge gaps, build capacity, and amplify the impact of grassroots initiatives addressing critical social and environmental needs.",
  },
  vision: {
    title: "Our Vision",
    description:
      "A world where collaborative action transcends geographical, cultural, and organizational boundaries, where NGOs work together seamlessly to create inclusive, equitable, and sustainable communities. We envision a future where every individual has access to basic needs, opportunities for growth, and the ability to participate fully in shaping a better world for generations to come.",
  },
  values: {
    title: "Our Core Values",
    items: [
      {
        icon: <Users className="h-6 w-6 text-white" />,
        title: "Collaboration",
        description:
          "We believe in the power of partnerships and collective action to create sustainable impact.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6 text-white" />,
        title: "Integrity",
        description:
          "We are committed to transparency, accountability, and ethical practices in all our work.",
      },
      {
        icon: <Globe className="h-6 w-6 text-white" />,
        title: "Global Perspective",
        description:
          "We embrace diversity and respect cultural contexts while working across borders.",
      },
      {
        icon: <Zap className="h-6 w-6 text-white" />,
        title: "Innovation",
        description:
          "We seek creative solutions and embrace new approaches to address complex challenges.",
      },
      {
        icon: <RefreshCw className="h-6 w-6 text-white" />,
        title: "Sustainability",
        description:
          "We design programs with long-term impact in mind, focusing on self-sustaining solutions.",
      },
      {
        icon: <Settings className="h-6 w-6 text-white" />,
        title: "Adaptability",
        description:
          "We remain flexible and responsive to changing needs and emerging opportunities.",
      },
    ],
  },
  history: {
    title: "Our Journey",
    timeline: [
      {
        year: "Dec 2023",
        title: "Foundation Established",
        description:
          "Sabitri Foundation was founded with a mission to create a collaborative network of NGOs worldwide.",
        isLeft: true,
        delay: 0.1,
      },
      {
        year: "Feb 2024",
        title: "Together for Hygiene",
        description:
          "Initiated our first collaborative project with local NGOs in Nepal, focusing on educational access.",
        isLeft: false,
        delay: 0.2,
      },
      {
        year: "Mar 2024",
        title: "Hope Rising Children Home Visit",
        description:
          "Extended our network to include partner organizations across South Asia, connecting resources and expertise.",
        isLeft: true,
        delay: 0.3,
      },
      {
        year: "Mar 2025",
        title: "Women's Awareness and Donation Program",
        description:
          "Organized our inaugural Global Collaboration Summit, bringing together partners from 6 countries.",
        isLeft: false,
        delay: 0.5,
      },
      {
        year: "Apr 2025",
        title: "Short visit and Donation Program",
        description:
          "Established our digital collaboration platform to facilitate knowledge sharing among member organizations.",
        isLeft: true,
        delay: 0.4,
      },
    ],
  },
  team: {
    title: "Our Team",
    members: [
      {
        name: "Aarav Sharma",
        role: "Founder & Executive Director",
        image: "/api/placeholder/400/400",
      },
      {
        name: "Luna Rai",
        role: "Director of Operations",
        image: "/api/placeholder/400/400",
      },
      {
        name: "Kabir Joshi",
        role: "Program Manager",
        image: "/api/placeholder/400/400",
      },
      {
        name: "Bishal Chaurasia",
        role: "Technology Lead",
        image: "/api/placeholder/400/400",
      },
      {
        name: "Ananya Patel",
        role: "Partnerships Director",
        image: "/api/placeholder/400/400",
      },
      {
        name: "Rohan Thapa",
        role: "Community Outreach",
        image: "/api/placeholder/400/400",
      },
    ],
  },
  approach: {
    title: "Our Approach",
    framework: {
      title: "Collaborative Framework",
      description:
        "Our unique methodology brings together diverse organizations to create systemic change.",
    },
    solutions: {
      title: "Community-Driven Solutions",
      description:
        "We believe that lasting change must be rooted in the needs and aspirations of local communities. Our programs are designed in collaboration with community members to ensure relevance, ownership, and long-term sustainability.",
    },
    network: {
      title: "Resource Sharing Network",
      description:
        "Through our innovative platform, member organizations can share knowledge, best practices, expertise, and even physical resources. This collaborative approach maximizes efficiency and allows for greater impact with limited resources.",
    },
    measurement: {
      title: "Impact Measurement",
      description:
        "We are committed to rigorous evaluation and continuous learning. Every initiative includes clear metrics and evaluation frameworks to track progress, identify areas for improvement, and demonstrate meaningful impact.",
    },
  },
  sdg: {
    title: "UN SDG Alignment",
    heading: "Commited to Global Goals",
    description:
      "Our work is aligned with the United Nations Sustainable Development Goals (SDGs), a universal call to action to end poverty, protect the planet, and ensure prosperity for all. We specifically focus on these priority areas:",
    goals: [
      "SDG 1: No Poverty",
      "SDG 4: Quality Education",
      "SDG 5: Gender Equality",
      "SDG 13: Climate Action",
      "SDG 17: Partnerships for the Goals",
    ],
    goalNumbers: [1, 4, 5, 13, 17],
  },
  cta: {
    title: "Join Us in Making a Difference",
    description:
      "Whether you're an NGO looking to collaborate, a volunteer with skills to share, or a donor interested in supporting our mission, there are many ways to get involved with Sabitri Foundation.",
    buttons: {
      primary: "Partner With Us",
      secondary: "Support Our Work",
    },
  },
};

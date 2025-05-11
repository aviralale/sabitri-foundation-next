const MEMBERSHIP_CONTENT = {
  // Hero Section
  hero: {
    badge: "Join Our Community",
    title: "Become a Part of Our Mission",
    description:
      "Join our growing community of change-makers dedicated to sustainable development and community empowerment. As a member, you'll gain access to resources, partnerships, and opportunities to make a meaningful impact.",
  },

  // Membership Options Section
  membershipOptions: {
    heading: "Membership Options",
    description:
      "Choose the membership type that aligns with your goals and how you want to engage with our mission. All members become part of our collaborative network working toward sustainable development.",
    memberships: [
      {
        title: "Nonprofit Membership",
        price: "$350",
        period: "year",
        features: [
          "Access to capacity building resources",
          "Partnership opportunities with other nonprofits",
          "Participation in collaborative projects",
          "Representation in advocacy initiatives",
          "Quarterly networking events",
          "Shared resource library access",
        ],
        recommended: false,
      },
      {
        title: "Individual Membership",
        price: "$75",
        period: "year",
        features: [
          "Voting rights in annual general meetings",
          "Volunteer opportunities in projects",
          "Access to exclusive events and workshops",
          "Monthly newsletter and impact reports",
          "Discounted entry to paid events",
          "Digital badge for social media profiles",
        ],
        recommended: true,
      },
      {
        title: "Affiliate Membership",
        price: "$200",
        period: "year",
        features: [
          "Brand visibility on our platform",
          "Corporate volunteering opportunities",
          "Access to CSR project frameworks",
          "Co-branding opportunities for initiatives",
          "Quarterly impact assessment reports",
          "Priority invitation to conferences",
        ],
        recommended: false,
      },
    ],
  },

  // Benefits Section
  benefits: {
    heading: "Why Join Our NGO?",
    items: [
      {
        icon: "users", // This will map to the users SVG icon
        color: "blue",
        title: "Collaborative Network",
        description:
          "Connect with like-minded organizations and individuals working toward similar goals, creating opportunities for partnerships and collective impact.",
      },
      {
        icon: "beaker", // This will map to the beaker SVG icon
        color: "green",
        title: "Resource Access",
        description:
          "Gain access to toolkits, research, best practices, and funding opportunities that can enhance your capacity and effectiveness in implementing projects.",
      },
      {
        icon: "megaphone", // This will map to the megaphone SVG icon
        color: "purple",
        title: "Amplified Voice",
        description:
          "Join our advocacy efforts and campaigns with a stronger collective voice, influencing policy decisions and public awareness on critical development issues.",
      },
      {
        icon: "book-open", // This will map to the book-open SVG icon
        color: "orange",
        title: "Knowledge Sharing",
        description:
          "Learn from and contribute to a growing knowledge base of best practices, case studies, and lessons learned from projects around the world.",
      },
      {
        icon: "shield-check", // This will map to the shield-check SVG icon
        color: "red",
        title: "Governance Participation",
        description:
          "Have a say in the strategic direction of our organization through voting rights, ensuring that our work remains relevant and responsive to community needs.",
      },
      {
        icon: "lightning-bolt", // This will map to the lightning-bolt SVG icon
        color: "cyan",
        title: "Capacity Building",
        description:
          "Access training workshops, mentorship programs, and technical assistance to strengthen your organizational or personal capacity in development work.",
      },
    ],
  },

  // FAQ Section
  faq: {
    heading: "Frequently Asked Questions",
    questions: [
      {
        question: "What are the benefits of becoming a member?",
        answer:
          "Membership provides access to our resource network, collaboration opportunities, capacity building resources, advocacy support, and the ability to participate in our governance through voting rights.",
      },
      {
        question: "How are membership fees utilized?",
        answer:
          "Membership fees directly support our operational infrastructure, capacity building programs, advocacy efforts, and provide seed funding for collaborative initiatives among members.",
      },
      {
        question: "Can I upgrade my membership level later?",
        answer:
          "Yes, you can upgrade your membership at any time. The difference in fee will be prorated for the remaining period of your current membership term.",
      },
      {
        question:
          "Is there a membership option for students or low-income individuals?",
        answer:
          "We offer discounted membership rates for students and individuals from low-income backgrounds. Please contact our membership team for more information.",
      },
      {
        question: "How can I get involved beyond just paying membership fees?",
        answer:
          "Members can volunteer for projects, join working groups, participate in governance, contribute specialized skills, attend events, and help with fundraising efforts.",
      },
    ],
  },

  // CTA Section
  cta: {
    badge: "Limited Time Offer",
    heading: "Join Today and Become a Reason for Someone's Smile",
    description:
      "Become a part of our growing community dedicated to making a positive impact.",
    buttonText: "Join Now",
    buttonLink: "/join",
  },

  // Contact Section
  contact: {
    heading: "Have Questions?",
    description:
      "Our membership team is ready to assist you with any questions about joining our community or the benefits of membership.",
    buttonText: "Contact Membership Team",
    buttonLink: "/contact",
  },
};

export default MEMBERSHIP_CONTENT;

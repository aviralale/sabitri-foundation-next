import ArtandPlayImg from "@/assets/images/Arts and play.png";
import WomenEmpowermentImg from "@/assets/images/WomenEmpowerment.png";
import VisitCraftImg from "@/assets/images/VisitCraft.png";
import AutismImg from "@/assets/images/Autism.png";
export const HOMEDATA = {
  // Hero section data
  hero: {
    badge: "Sabitri Foundation | Est. Dec. 2023",
    title: {
      firstPart: "Making a Difference,",
      highlight: "One Life",
      lastPart: "at a Time",
    },
    description:
      "Sabitri Foundation brings together non-governmental organizations worldwide to collaborate, share resources, and drive sustainable development initiatives that create meaningful impact in communities that need it most.",
    buttons: [
      {
        text: "Join Our Network",
        href: "#join",
        variant: "primary",
      },
      {
        text: "Support Our Mission",
        href: "#donate",
        variant: "outline",
      },
    ],
    stats: [
      { number: "6", label: "Countries", delay: 0.9 },
      { number: "7", label: "Programs", delay: 1.0 },
      { number: "1000", label: "Lives Impacted", delay: 1.1 },
    ],
    teamMembers: [
      {
        name: "Aarav Sharma",
        image: "https://avatars.githubusercontent.com/u/121365480?v=4",
      },
      {
        name: "Luna Rai",
        image: "https://ui-avatars.com/api/?name=Luna+Rai&background=random",
      },
      {
        name: "Kabir Joshi",
        image: "https://ui-avatars.com/api/?name=Kabir+Joshi&background=random",
      },
      {
        name: "Bishal Chaurasia",
        image: "https://bisaalchaurasia.com/images/image.jpeg",
      },
    ],
  },

  // Programs section data
  programs: {
    title: "Empowering Hearts, Enriching Lives",
    subtitle:
      "Explore the diverse programs by Sabitri Foundation that bring hope, joy, and empowerment to communities across Nepal.",
    slides: [
      {
        title: "Art and Play Session",
        location: "Bhimsengola Sec. School",
        button: "Dive into Creativity",
        description:
          "A therapeutic and fun session designed to enhance emotional expression and learning through creative play.",
        impactNumber: "50+",
        impactLabel: "Students Engaged",
        src: ArtandPlayImg.src,
      },
      {
        title: "Women Awareness and Donation",
        location: "Subhashree Vaikalpik Mahila Vidhyalaya",
        button: "See the Vision",
        description:
          "Empowering women through essential health education and material donations to promote dignity and awareness.",
        impactNumber: "80+",
        impactLabel: "Women Reached",
        src: WomenEmpowermentImg.src,
      },
      {
        title: "World Autism Awareness Day",
        location: "Aashakiran Psychosocial Counselling and Autism Care",
        button: "Feel the Energy",
        description:
          "Celebrating neurodiversity through awareness activities, sensory play, and inclusive engagement.",
        impactNumber: "25+",
        impactLabel: "Children Supported",
        src: AutismImg.src,
      },
      {
        title: "Visit Craft and Play",
        location: "Hope Rising Children Home",
        button: "Uncover the Stories",
        description:
          "An interactive day full of storytelling, crafts, and laughter with children in a nurturing environment.",
        impactNumber: "30+",
        impactLabel: "Kids Inspired",
        src: VisitCraftImg.src,
      },
    ],
  },

  // Testimonials section data
  testimonials: [
    {
      id: 1,
      name: "Ramesh Patel",
      designation: "Founder",
      message:
        "Sabitri Foundation's vision of integrating NGOs under one platform is truly inspiring. Their support has helped us connect with like-minded organizations, share resources, and amplify our environmental initiatives. Together, we are making a bigger impact!",
      image: "https://randomuser.me/api/portraits/men/87.jpg",
    },
    {
      id: 2,
      name: "Ramesh Shah",
      designation: "Designer",
      message:
        "Sabitri Foundation's vision of integrating NGOs under one platform is truly inspiring. Their support has helped us connect with like-minded organizations, share resources, and amplify our environmental initiatives. Together, we are making a bigger impact!",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ],
};

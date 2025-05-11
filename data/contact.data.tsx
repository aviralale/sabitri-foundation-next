import { MapPin, Clock, MessageSquare } from "lucide-react";
export const CONTACTCONTENT = {
  hero: {
    badge: "Get In Touch",
    title: "Let's Start a",
    highlightedTitle: "Conversation",
    description:
      "Whether you're interested in collaborating on a project, joining our team, or simply learning more about our work, we'd love to hear from you. Reach out using any of the methods below, and our team will respond promptly.",
  },
  contactInfo: [
    {
      icon: <MapPin size={24} />,
      title: "Visit Our Office",
      details: ["Kalash Complex, Suncity, Pepsicola", "Kathmandu, Nepal"],
      link: {
        text: "View on Map",
        url: "https://www.google.com/maps/place/Sabitri+Reading+Room/@27.6935334,85.367872,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1b50cb347f1f:0x73c05143e3a8b2df!8m2!3d27.6935287!4d85.3704469!16s%2Fg%2F11vqschd3k?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D",
      },
    },
    {
      icon: <Clock size={24} />,
      title: "Office Hours",
      details: ["Sunday - Friday: 10:00 AM - 6:00 PM", "Saturday: Closed"],
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Communication Channels",
      details: [
        "Email: sabitrifoundation14@gmail.com",
        "Phone: +977-1-5911394",
        "WhatsApp: +977 9704804907",
      ],
    },
  ],
  form: {
    title: "Send Us a Message",
    description:
      "Fill out the form below and we'll get back to you as soon as possible.",
    inputs: [
      {
        label: "First Name",
        placeholder: "Enter your first name",
        name: "firstName",
        required: true,
        type: "text",
      },
      {
        label: "Last Name",
        placeholder: "Enter your last name",
        name: "lastName",
        required: true,
        type: "text",
      },
      {
        label: "Email Address",
        placeholder: "Enter your email address",
        name: "email",
        required: true,
        type: "email",
      },
      {
        label: "Phone Number",
        placeholder: "Enter your phone number",
        name: "phone",
        required: false,
        type: "tel",
      },
      {
        label: "Message",
        placeholder: "How can we help you?",
        name: "message",
        required: true,
        type: "textarea",
      },
    ],
    selectOptions: [
      { value: "", label: "Select an option" },
      { value: "partnership", label: "Partnership Inquiry" },
      { value: "volunteer", label: "Volunteering" },
      { value: "donation", label: "Donation Information" },
      { value: "media", label: "Media Inquiry" },
      { value: "other", label: "Other" },
    ],
    success: {
      title: "Message Sent Successfully!",
      message:
        "Thank you for reaching out. Our team will respond to your inquiry shortly.",
    },
    submitText: "Send Message",
    submittingText: "Sending...",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How can I volunteer with your organization?",
        answer:
          "We welcome volunteers with various skills and backgrounds. Please fill out our contact form specifying your interest in volunteering, and our volunteer coordinator will reach out with current opportunities that match your skills and availability.",
      },
      {
        question: "Do you offer internship opportunities?",
        answer:
          "Yes, we offer internships for students and recent graduates in fields related to sustainable development, education, public health, and nonprofit management. Internships are available both at our headquarters and at project sites.",
      },
      {
        question: "How can my organization partner with you on projects?",
        answer:
          "We're always looking for strategic partners who share our vision. Organizations interested in collaboration can reach out through our contact form or directly send a text through whatsapp with information about your organization and potential areas of collaboration.",
      },
      {
        question: "Do you accept donations of goods or services?",
        answer:
          "Yes, we accept in-kind donations that align with our project needs. Please contact us with details about what you'd like to donate, and our team will evaluate if it meets current project requirements and coordinate logistics if applicable.",
      },
      {
        question:
          "How can I request a speaker from your organization for an event?",
        answer:
          "Our team members are available for speaking engagements related to sustainable development, community empowerment, and our project areas. Please submit your request through the contact form at least 6 weeks before your event, including details about the audience, topic, and date.",
      },
    ],
  },
  newsletter: {
    title: "Stay Updated",
    description:
      "Subscribe to our newsletter to receive updates on our projects, events, and opportunities to get involved in creating positive change.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe Now",
  },
};

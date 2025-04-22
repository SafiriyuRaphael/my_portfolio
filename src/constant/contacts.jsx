import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const CONTACTITEMS = [
    {
      icon: <Mail className="text-orange-400" />,
      text: "safiriyuraphael@gmail.com",
      link: "mailto:safiriyuraphael@gmail.com",
      id: "email",
      index: 0,
    },
    {
      icon: <Phone className="text-green-400" />,
      text: "+2348051705212",
      link: "tel:+2348051705212",
      id: "phone",
      index: 1,
    },
    {
      icon: <img src="/whatsapp2.png" alt="WhatsApp" className="size-6" />,
      text: "08051705212",
      link: "https://wa.me/2348051705212?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
      id: "whatsapp",
      index: 2,
    },
    {
      icon: <MapPin className="text-orange-400" />,
      text: "Lagos, Nigeria",
      link: null,
      id: "location",
      index: 3,
    },
  ];

  const CONTACTLINKS= [
    {
      icon: <Github/>,
      link: "https://github.com/SafiriyuRaphael",
      label: "GitHub",
    },
    {
      icon: <Linkedin/>,
      link: "https://linkedin.com/in/raphael-safiriyu",
      label: "Linkedin",
    },
    {
      icon: <Twitter/>,
      link: "https://twitter.com/safiriyuraphael",
      label: "Twitter",
    },
    {
      icon: <Instagram/>,
      link: "https://instagram.com/safiriyuraphael",
      label: "Instagram",
    },
  ]

  export {CONTACTITEMS, CONTACTLINKS}

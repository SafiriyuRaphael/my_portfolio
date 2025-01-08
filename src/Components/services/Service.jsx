
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Service = () => {
  const controls = useAnimation(); // Animation controls
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animations only once
    threshold: 0.2, // 20% of the component is visible before triggering
  });

  // Start animations when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Cards start hidden
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Stagger the appearance of cards
        duration: 0.8,
      },
    }),
  };

  return (
    <>
      <p className="px-8 pt-8 text-center">
        I offer a range of professional services tailored to your needs. From web development and creative design to marketing, software solutions, and cybersecurity, I’m here to help you succeed.
      </p>
      <div ref={ref} className="grid md:grid-cols-3 gap-4 px-8">
        {[
          "Web Development & Design",
          "Graphic Design",
          "Digital Marketing",
          "Software Development",
          "Consulting & Coaching",
          "Creative Services",
          "Cybersecurity",
        ].map((service, index) => (
          <motion.div
            key={index}
            className="relative rounded bg-[#936639] p-4 text-white overflow-hidden hover:bg-black transition-colors hover:shadow-md hover:shadow-white duration-1000"
            initial="hidden"
            animate={controls}
            custom={index} // Pass index to the variant
            variants={cardVariants}
          >
            <h3 className="font-bold text-lg">{service}</h3>
            <p>
              {service === "Web Development & Design"
                ? "Responsive websites, e-commerce platforms, and CMS integration like WordPress and Shopify, all designed to meet your business goals."
                : service === "Graphic Design"
                ? "Branding, social media graphics, product packaging, and UI/UX design to elevate your visual identity."
                : service === "Digital Marketing"
                ? "Social media management, PPC campaigns, engaging content, and email marketing strategies to boost your reach."
                : service === "Software Development"
                ? "Custom software, mobile apps, and cloud solutions to enhance performance and efficiency."
                : service === "Consulting & Coaching"
                ? "Business strategy, project management, career coaching, and leadership development to guide success."
                : service === "Creative Services"
                ? "3D models, animations, games, and VR/AR experiences to bring your vision to life."
                : "Network security, penetration testing, and data recovery to protect your digital assets."}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Service;

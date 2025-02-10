import useView from "../hooks/inview";
import { motion } from "framer-motion";
import ContactForm from "../Components/ContactForm";
import MyContact from "../Components/MyContact";

const Contacts = () => {
  const { controls, ref, containerVariants } = useView();

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={containerVariants}
      className="max-w-7xl mx-auto py-12 bg-black text-white"
    >
      <h1 className="text-4xl font-bold text-[#fca311] mb-2 grid place-content-center">
        Contact Me
      </h1>
      <div className="lg:flex gap-3 p-10">
        <MyContact />
        <ContactForm />
      </div>
    </motion.section>
  );
};

export default Contacts;

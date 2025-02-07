import { Mail, Phone, MapPin } from "lucide-react";
import useView from "../hooks/inview";
import { motion } from "framer-motion";

const MyContact = () => {
  const { cardVariant3, cardVariants1, cardVariants2 } = useView();
  return (
    <div className="flex flex-col gap-7 lg:w-1/2">
      <div className="flex flex-col gap-5">
        <motion.h2
          variants={cardVariant3}
          className="text-5xl bg-gradient-to-r from-orange-500 via-green-300 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%]"
        >
          Let's work <span className="block">together!</span>
        </motion.h2>
        <motion.p variants={cardVariants1}>
          I'm currently available to take new projects, so feel free to send me
          a message about anything you would like to discuss. You can contact me
          anytime 24/7.
        </motion.p>
      </div>
      <div className="flex flex-col items-start gap-3 w-[60%]">
        <motion.div
          variants={cardVariants2}
          className="flex justify-around gap-5"
        >
          <Mail />{" "}
          <a href="mailto:toniaroyce@gmail.com">toniaroyce@gmail.com</a>
        </motion.div>
        <motion.div
          variants={cardVariants2}
          className="flex justify-around gap-5"
        >
          <Phone /> <a href="tel:+2348051705212">+2348051705212</a>
        </motion.div>
        <motion.div
          variants={cardVariants2}
          className="flex justify-around gap-5"
        >
          <img src="/whatsapp2.png" alt="" className="size-7 underline" />{" "}
          <a
            href="https://wa.me/2348051705212?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services%20or%20portfolio."
            target="_blank"
          >
            08051705212
          </a>
        </motion.div>
        <motion.div
          variants={cardVariants2}
          className="flex justify-around gap-5"
        >
          <MapPin /> <p>Lagos, Nigeria</p>
        </motion.div>
      </div>
    </div>
  );
};

export default MyContact;

import useView from "../hooks/inview";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { cardVariant3, cardVariants1 } = useView();
  return (
    <div className="sm:flex sm:items-center sm:justify-center flex-col">
      <motion.p variants={cardVariant3}>
        Need help? Reach out for any project or inquiries. I am here for you.
      </motion.p>
      <motion.form
        variants={cardVariants1}
        action="https://formspree.io/f/xyzzbadb"
        method="POST"
      >
        <label htmlFor="Fname" className="sr-only">
          First name
        </label>
        <input
          type="text"
          placeholder="First name"
          id="Fname"
          name="firstName"
          required
          className="m-4 border-b-2 border-[#D1603D] focus:outline-none focus:border-b-8 "
        />
        <label htmlFor="Lname" className="sr-only">
          Last name
        </label>
        <input
          type="text"
          placeholder="Last name"
          id="Lname"
          name="lastName"
          className="m-4 border-b-2 border-[#D1603D] focus:outline-none focus:border-b-8 "
          required
        />
        <br />
        <label htmlFor="mail" className="sr-only">
          Email
        </label>
        <input
          type="email"
          placeholder="Email address"
          id="mail"
          name="email"
          className="m-4 border-b-2 border-[#D1603D] focus:outline-none focus:border-b-8 "
        />
        <label htmlFor="phone" className="sr-only">
          Phone number
        </label>
        <input
          type="tel"
          placeholder="Phone number"
          id="phone"
          name="phone"
          className="m-4 border-b-2 border-[#D1603D] focus:outline-none focus:border-b-8 "
        />
        <br />
        <textarea
          placeholder="Message"
          className="m-4 border-b-2 resize-none border-[#D1603D] focus:outline-none focus:border-b-8  w-full h-24"
          required
          name="message"
        />
        <br />
        <button
          type="submit"
          className="m-4 bg-[#fca311] hover:bg-[#ff9800] focus:outline-none focus:ring-2 focus:ring-[#fca311] text-white px-6 py-2"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;

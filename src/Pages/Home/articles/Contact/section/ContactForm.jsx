import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import useView from "../../../../../hooks/inview";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { titleVariants, formItemVariants, formVariants, buttonVariants } =
    useView();
  const formControls = useAnimation();
  const [currentField, setCurrentField] = useState(null);
  const [formRef, formInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    if (formInView) {
      formControls.start("visible");
    }
  }, [formControls, formInView]);

  return (
    <motion.div
      ref={formRef}
      initial="hidden"
      animate={formControls}
      variants={formVariants}
      className="w-full lg:w-3/5"
    >
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black p-1 rounded-2xl shadow-xl overflow-hidden">
        {/* Subtle gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-green-500/20 to-black/20 rounded-2xl opacity-50"></div>

        <div className="relative p-8 lg:p-10 bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/5">
          <motion.h3
            variants={titleVariants}
            className="text-2xl font-bold mb-8 text-center"
          >
            Send Me a Message
          </motion.h3>

          {/* Form */}
          <motion.form action="https://formspree.io/f/xyzzbadb" method="POST" className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    custom={0}
                    variants={formItemVariants}
                    className="relative"
                    whileFocus="focus"
                    animate={currentField === "firstName" ? "focus" : ""}
                  >
                    <label
                      htmlFor="firstName"
                      className="absolute -top-2.5 left-2 px-1 text-xs text-gray-400 bg-gray-900"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      onFocus={() => setCurrentField("firstName")}
                      onBlur={() => setCurrentField(null)}
                      className="w-full bg-transparent border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 placeholder-gray-500"
                    />
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={formItemVariants}
                    className="relative"
                    whileFocus="focus"
                    animate={currentField === "lastName" ? "focus" : ""}
                  >
                    <label
                      htmlFor="lastName"
                      className="absolute -top-2.5 left-2 px-1 text-xs text-gray-400 bg-gray-900"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      onFocus={() => setCurrentField("lastName")}
                      onBlur={() => setCurrentField(null)}
                      className="w-full bg-transparent border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 placeholder-gray-500"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    custom={2}
                    variants={formItemVariants}
                    className="relative"
                    whileFocus="focus"
                    animate={currentField === "email" ? "focus" : ""}
                  >
                    <label
                      htmlFor="email"
                      className="absolute -top-2.5 left-2 px-1 text-xs text-gray-400 bg-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                  
                      onFocus={() => setCurrentField("email")}
                      onBlur={() => setCurrentField(null)}
                      className="w-full bg-transparent border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 placeholder-gray-500"
                    />
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={formItemVariants}
                    className="relative"
                    whileFocus="focus"
                    animate={currentField === "phone" ? "focus" : ""}
                  >
                    <label
                      htmlFor="phone"
                      className="absolute -top-2.5 left-2 px-1 text-xs text-gray-400 bg-gray-900"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+123 456 7890"
                      onFocus={() => setCurrentField("phone")}
                      onBlur={() => setCurrentField(null)}
                      className="w-full bg-transparent border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 placeholder-gray-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  custom={4}
                  variants={formItemVariants}
                  className="relative"
                  whileFocus="focus"
                  animate={currentField === "service" ? "focus" : ""}
                >
                  <label
                    htmlFor="service"
                    className="absolute -top-2.5 left-2 px-1 text-xs text-gray-400 bg-gray-900"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    onFocus={() => setCurrentField("service")}
                    onBlur={() => setCurrentField(null)}
                    className="w-full bg-transparent border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 text-gray-300 appearance-none"
                  >
                    <option
                      value=""
                      defaultValue={true}
                      className="bg-gray-800"
                    >
                      Select a service
                    </option>
                    <option value="web-development" className="bg-gray-800">
                      Web Development
                    </option>
                    <option value="ui-ux-design" className="bg-gray-800">
                      UI/UX Design
                    </option>
                    <option value="e-commerce" className="bg-gray-800">
                      E-Commerce Solutions
                    </option>
                    <option value="mobile-app" className="bg-gray-800">
                      Mobile Application
                    </option>
                    <option value="consultation" className="bg-gray-800">
                      Consultation
                    </option>
                    <option value="other" className="bg-gray-800">
                      Other
                    </option>
                  </select>
                  <div className="absolute right-4 top-3.5 pointer-events-none">
                    <ChevronDown className="pt-3" />
                  </div>
                </motion.div>

                <motion.div
                  custom={5}
                  variants={formItemVariants}
                  className="relative"
                  whileFocus="focus"
                  animate={currentField === "message" ? "focus" : ""}
                >
                  <label
                    htmlFor="message"
                    className="absolute -top-2.5 left-2 px-1 text-xs text-gray-400 bg-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    onFocus={() => setCurrentField("message")}
                    onBlur={() => setCurrentField(null)}
                    className="w-full bg-transparent border border-orange-500/30 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 placeholder-gray-500 resize-none"
                  />
                </motion.div>

                <motion.div
                  custom={6}
                  variants={formItemVariants}
                  className="flex pt-4 z-50"
                >
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium rounded-lg px-8 py-4 shadow-lg shadow-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-300/50 focus:ring-offset-2 focus:ring-offset-orange-900"
                  >
                    {/* Background animation on hover */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                    {/* Sparkle effects */}
                    <span className="absolute top-0 left-0 w-20 h-full bg-white/10 transform -skew-x-20 -translate-x-full group-hover:translate-x-[500%] transition-transform duration-1000 ease-in-out"></span>

                    <span className="relative flex items-center gap-2">
                      Send Message
                      <Send size={18} className="inline" />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;

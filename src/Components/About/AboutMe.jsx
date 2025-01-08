import { useState } from "react";
import Earth from "../../animations/Earth";
import { ClipboardCopy, CopyCheck } from "lucide-react";
import useView from "../../hooks/inview";
import { motion } from "framer-motion";

const Card = ({ imgSrc, alt, title, children, customClass }) => (
  <motion.div
    variants={customClass}
    className="bg-[#14213d] text-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow shadow-white duration-1000"
  >
    {imgSrc && (
      <img
        src={imgSrc}
        alt={alt}
        className="rounded-2xl h-[20rem] w-full object-cover"
        onError={(e) => (e.target.src = "/placeholder.jpg")}
      />
    )}
    <h2 className="text-xl font-semibold mb-4 text-blue-500">{title}</h2>
    <div>{children}</div>
  </motion.div>
);

const AboutMe = () => {
  const [copyText, setCopyText] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { controls, ref, cardVariant3, cardVariants1, cardVariants2, containerVariants } =
    useView();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("toniaroyce@gmail.com");
      setCopyText(true);
      setModalMessage("Text copied!");
      setModal(true);
      setTimeout(() => {
        setCopyText(false);
        setModal(false);
      }, 2500);
    } catch (err) {
      setModalMessage("Failed to copy text");
      setModal(true);
      setTimeout(() => setModal(false), 2500);
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#fca311] mb-2">About</h1>
        <h2 className="text-2xl font-semibold mb-4">Hi, I'm Raphael</h2>
        <p className="md:text-lg">
          A passionate and innovative web designer and developer who specializes
          in creating visually stunning, responsive, and user-friendly digital
          experiences. With experience, I combine creativity and
          technical expertise to bring ideas to life.
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <Card
          imgSrc="/pexels-gochrisgoxyz-2823936.jpg"
          alt="Representation of creativity in web development"
          title="What I Do"
          customClass={cardVariants2}
        >
          <ul className="space-y-2">
            <li>Responsive Design: Crafting seamless interfaces for all devices</li>
            <li>Custom Web Development: Tailor-made websites with modern tools</li>
            <li>Interactive Experiences: Engaging animations and interactivity</li>
            <li>Performance Optimization: Fast, efficient, and SEO-optimized websites</li>
          </ul>
        </Card>

        <Card
          imgSrc="/pexels-energepic-com-27411-159888.jpg"
          alt="A representation of finance and business"
          title="Why Work With Me?"
          customClass={cardVariants1}
        >
          <p className="text-white">
            I believe in merging creativity with functionality. My approach is
            collaborative, ensuring that every project reflects the unique
            vision and goals of my clients. Whether you’re a startup, a growing
            brand, or an established business, I can help you stand out in the
            digital landscape.
          </p>
        </Card>

        <Card
          imgSrc="/matrix1.jpg"
          alt="Representation of coding and technology"
          title="My Toolbox"
          customClass={cardVariant3}
        >
          <p className="text-white">
            I specialize in JavaScript with a focus on React and the Next.js
            ecosystem.
          </p>
        </Card>

        <Card title="Remote Work" customClass={cardVariants2}>
          <div className="h-72 w-full mb-4">
            <Earth />
          </div>
          <p className="text-white">
            I'm based in Nigeria and available for remote work across most timezones.
          </p>
        </Card>

        <Card
          imgSrc="/pexels-pixabay-373543.jpg"
          alt="Contact and collaboration"
          title="Contact Me"
          customClass={cardVariants1}
        >
          <p className="text-white">
            Have a project in mind? Reach out, and let’s create something amazing together!
          </p>
          <p className="grid place-content-center text-[18px] font-bold">
            toniaroyce@gmail.com
          </p>
          {!copyText && (
            <ClipboardCopy
              className="text-green-300 hover:text-green-200 w-fit justify-self-center cursor-pointer"
              onClick={handleCopy}
            />
          )}
          {copyText && <CopyCheck className="text-center w-full" />}
        </Card>
      </motion.div>

      {modal && (
        <p className="fixed bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-black text-white text-sm rounded-md shadow-lg z-50">
          {modalMessage}
        </p>
      )}
    </section>
  );
};

export default AboutMe;

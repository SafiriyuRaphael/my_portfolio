import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import useView from "../hooks/inview";

// Sample data for reviews
const reviews = [
  {
    text: "Absolutely amazing work! The project was delivered ahead of schedule and exceeded expectations.",
    client: "Tobi Amusan",
    position: "Finance Specialist",
    image: "/client/client.jpg",
  },
  {
    text: "Fantastic results, would definitely recommend to anyone. Very professional and attentive.",
    client: "Olatunde Bryan",
    position: "CEO of Octar",
    image: "/client/client1.jpg",
  },
  {
    text: "Impressive quality and excellent service. I’m very happy with the outcome of this project.",
    client: "Ido Dami",
    position: "Chartered Accountant",
    image: "/client/client2.jpg",
  },
  {
    text: "Great experience working with this team. Very responsive and skilled. Will hire again!",
    client: "Tolu francis",
    position: "A.c & Company",
    image: "/client/client3.jpg",
  },
  {
    text: "Remarkably creative and professional. Our collaboration was both enjoyable and highly productive.",
    client: "Collin Davis",
    position: "UX Designer",
    image: "/client/client5.jpg",
  },
  {
    text: "Professional, timely, and very dedicated. The quality of work was exceptional.",
    client: "Murray George",
    position: "Web Analyst",
    image: "/client/client4.jpg",
  },
  {
    text: "Outstanding attention to detail and an ability to deliver top-notch results on time. Truly impressive.",
    client: "Robert Martinez",
    position: "Data Scientist",
    image: "/client/client6.jpg",
  },
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current review index
  const totalReviews = reviews.length;
  const {
    controls,
    ref,
    cardVariant3,
    cardVariants1,
    cardVariants2,
    containerVariants,
  } = useView();

  // Automatically change the review every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews); // Loop through reviews
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.section
      id="reviews"
      className="my-16  rounded-xl text-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
    >
      <motion.h2 variants={cardVariants2} className="text-6xl font-bold mb-10 ">
        Clients <span className="text-[#fca311]">Feedbacks</span>
      </motion.h2>
      <motion.p className="px-20" variants={cardVariants1}>
        I strive to deliver quality results tailored to each client's needs.
        These testimonials reflect my commitment to excellence, highlighting how
        I work closely with clients to exceed expectations and build lasting
        relationships.
      </motion.p>

      <div className="relative">
        {/* Container for the carousel */}
        <motion.div
          className="flex gap-6 overflow-hidden justify-center"
          style={{ width: `${100 * totalReviews}vw` }} // Dynamically set width based on number of reviews
          animate={{ x: `-${currentIndex * 100}vw` }} // Moves to the current review index
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 1,
          }}
          variants={cardVariant3} // Smooth transition
        >
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-[#14213d]/40 text-white rounded-xl py-6 px-8 gap-5"
              style={{ width: "100vw" }} // Each item takes up 100% of the viewport width
            >
              <div
                className="size-32 rounded-full mb-4"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div className="text-lg bg-opacity-50 px-4 py-2 rounded-lg">
                <p className="text-center mb-4">"{item.text}"</p>
                <p>
                  <strong>- {item.client}</strong>
                </p>
                <p className="italic text-sm text-gray-600">{item.position}</p>
                <div className="flex items-center justify-center mt-3">
                  {/* Loop over 5 stars for rating */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="fill-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Reviews;

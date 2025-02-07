import { motion } from "framer-motion";
import useView from "../hooks/inview";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      type: "AUTODOCK",
      date: "May 19,2019",
      comment: "3 Comment",
      content: "Transitioning from Molecular Docking to Web Development",
      pics: "/blogs/blog1.jpg",
    },
    {
      type: "REACT",
      date: "June 23,2023",
      comment: "2 Comment",
      content: "Getting Started with React: A Web Developer’s Guide",
      pics: "/blogs/blog13.jpg",
    },
    {
      type: "JAVASCRIPT",
      date: "November 19,2023",
      comment: "5 Comment",
      content: "Creating Interactive Web Experiences with React and JavaScript",
      pics: "/blogs/blog3.jpg",
    },
    {
      type: "JAVASCRIPT",
      date: "May 19,2024",
      comment: "3 Comment",
      content: "Creating Interactive Web Experiences with React and JavaScript",
      pics: "/blogs/blog4.jpg",
    },
    {
      type: "JAVASCRIPT",
      date: "May 23,2024",
      comment: "6 Comment",
      content: "Showcasing My Web Development Projects",
      pics: "/blogs/blog5.jpg",
    },
    {
      type: "JAVASCRIPT",
      date: "May 26,2023",
      comment: "3 Comment",
      content: " Debugging Made Easy: Tips for JavaScript Developers",
      pics: "/blogs/blog6.jpg",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "Dec 15,2023",
      comment: "10 Comment",
      content: "10 React Best Practices Every Developer Should Know",
      pics: "/blogs/blog7.jpg",
    },
    {
      type: "JAVASCRIPT",
      date: "Jan 01,2024",
      comment: "8 Comment",
      content: "Bridging Science and Tech: Data Visualization with React",
      pics: "/blogs/blog8.jpg",
    },
    {
      type: "JAVASCRIPT",
      date: "Jan 02,2023",
      comment: "6 Comment",
      content: "Top ES6 Features Every JavaScript Developer Should Use",
      pics: "/blogs/blog9.jpg",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "May 02,2023",
      comment: "30 Comment",
      content: "Balancing Learning and Projects: My Web Dev Journey",
      pics: "/blogs/blog10.jpg",
    },
  ];

  const { controls, ref } = useView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold text-[#fca311] mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Blog
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-black p-4"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        {blogs.map(({ type, date, comment, content, pics }, index) => (
          <motion.div
            key={index}
            className="relative h-80 flex flex-col justify-between text-white cursor-pointer overflow-hidden rounded-lg"
            variants={cardVariants}
          >
            {/* Background with motion animation */}
            <motion.div
              className="absolute inset-0 z-0 bg-black/60"
              style={{
                backgroundImage: `url(${pics})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "darken",
              }}
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
              // Lazy loading for images
            />

            {/* Content Overlay */}
            <div className="relative z-10 p-4">
              <h5 className="p-1 bg-orange-600 rounded-md text-xs inline-block">
                {type}
              </h5>
              <div className="mt-auto">
                <p className="text-sm">{`${date} | ${comment}`}</p>
                <h4 className="text-lg font-semibold">{content}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Link to="/blogs">
        <motion.h1
          className="text-center mt-6 text-xl text-[#e5e5e5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          View more blogs ...
        </motion.h1>
      </Link>
    </section>
  );
};

export default Blog;

import { motion } from "framer-motion";
import useView from "../../hooks/inview";

import { Link } from "react-router-dom";

const MyBlog = () => {
  const blogs = [
    {
      type: "AUTODOCK",
      date: "May 19,2019",
      comment: "3 Comment",
      content: "Transitioning from Molecular Docking to Web Development",
      pics: "/blogs/blog1.jpg",
      link: "https://www.smashingmagazine.com/2019/05/molecular-docking-web-development/",
    },
    {
      type: "REACT",
      date: "June 23,2023",
      comment: "2 Comment",
      content: "Getting Started with React: A Web Developer’s Guide",
      pics: "/blogs/blog13.jpg",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      type: "JAVASCRIPT",
      date: "November 19,2023",
      comment: "5 Comment",
      content: "Creating Interactive Web Experiences with React and JavaScript",
      pics: "/blogs/blog3.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
    },
    {
      type: "JAVASCRIPT",
      date: "May 19,2024",
      comment: "3 Comment",
      content: "Creating Interactive Web Experiences with React and JavaScript",
      pics: "/blogs/blog4.jpg",
      link: "https://www.freecodecamp.org/news/learn-javascript-full-course/",
    },
    {
      type: "JAVASCRIPT",
      date: "May 23,2024",
      comment: "6 Comment",
      content: "Showcasing My Web Development Projects",
      pics: "/blogs/blog5.jpg",
      link: "https://www.medium.com/@alexdev/showcasing-my-web-development-projects/",
    },
    {
      type: "JAVASCRIPT",
      date: "May 26,2023",
      comment: "3 Comment",
      content: "Debugging Made Easy: Tips for JavaScript Developers",
      pics: "/blogs/blog6.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Debugging_in_Chrome",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "Dec 15,2023",
      comment: "10 Comment",
      content: "10 React Best Practices Every Developer Should Know",
      pics: "/blogs/blog7.jpg",
      link: "https://reactjs.org/docs/optimizing-performance.html",
    },
    {
      type: "JAVASCRIPT",
      date: "Jan 01,2024",
      comment: "8 Comment",
      content: "Bridging Science and Tech: Data Visualization with React",
      pics: "/blogs/blog8.jpg",
      link: "https://www.smashingmagazine.com/2021/07/creating-data-visualizations-react/",
    },
    {
      type: "JAVASCRIPT",
      date: "Jan 02,2023",
      comment: "6 Comment",
      content: "Top ES6 Features Every JavaScript Developer Should Use",
      pics: "/blogs/blog9.jpg",
      link: "https://www.freecodecamp.org/news/top-es6-features-you-should-know/",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "May 02,2023",
      comment: "30 Comment",
      content: "Balancing Learning and Projects: My Web Dev Journey",
      pics: "/blogs/blog10.jpg",
      link: "https://www.codeproject.com/Articles/1241670/Web-Development-Journey",
    },
    {
      type: "HTML",
      date: "March 10,2023",
      comment: "7 Comment",
      content: "Mastering HTML: From Beginner to Pro",
      pics: "/blogs/blog11.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      type: "CSS",
      date: "August 19,2023",
      comment: "12 Comment",
      content:
        "Styling with CSS: Essential Techniques Every Developer Should Know",
      pics: "/blogs/blog12.jpg",
      link: "https://www.w3schools.com/css/",
    },
    {
      type: "REACT",
      date: "September 23,2023",
      comment: "4 Comment",
      content: "React Hooks: Revolutionizing State Management",
      pics: "/blogs/blog14.jpg",
      link: "https://reactjs.org/docs/hooks-intro.html",
    },
    {
      type: "JAVASCRIPT",
      date: "October 15,2023",
      comment: "9 Comment",
      content: "The Power of Asynchronous Programming in JavaScript",
      pics: "/blogs/blog15.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "July 8,2023",
      comment: "15 Comment",
      content: "Building Responsive Websites: The Best Practices",
      pics: "/blogs/blog16.jpg",
      link: "https://www.freecodecamp.org/news/how-to-make-your-website-responsive/",
    },
    {
      type: "JAVASCRIPT",
      date: "August 5,2023",
      comment: "11 Comment",
      content: "Understanding JavaScript Closures and Their Uses",
      pics: "/blogs/blog17.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
    },
    {
      type: "NODEJS",
      date: "November 30,2023",
      comment: "2 Comment",
      content: "Introduction to Node.js for Backend Development",
      pics: "/blogs/blog18.jpg",
      link: "https://nodejs.org/en/docs/",
    },
    {
      type: "JAVASCRIPT",
      date: "December 13,2023",
      comment: "13 Comment",
      content: "Optimizing JavaScript Performance in Complex Applications",
      pics: "/blogs/blog19.jpg",
      link: "https://www.smashingmagazine.com/2020/01/javascript-performance-tips/",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "January 25,2024",
      comment: "5 Comment",
      content: "Building Scalable Web Apps with React and Node.js",
      pics: "/blogs/blog20.jpg",
      link: "https://www.digitalocean.com/community/tutorials/build-a-web-app-with-react-nodejs",
    },
    {
      type: "JAVASCRIPT",
      date: "February 10,2024",
      comment: "4 Comment",
      content: "JavaScript Design Patterns You Should Know",
      pics: "/blogs/blog21.jpg",
      link: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
    },
    {
      type: "CSS",
      date: "March 11,2024",
      comment: "6 Comment",
      content: "Advanced CSS Techniques for Modern Web Design",
      pics: "/blogs/blog22.jpg",
      link: "https://css-tricks.com/advanced-css-techniques/",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "April 5,2024",
      comment: "8 Comment",
      content: "Building Progressive Web Apps with React",
      pics: "/blogs/blog23.jpg",
      link: "https://developers.google.com/web/progressive-web-apps",
    },
    {
      type: "JAVASCRIPT",
      date: "May 10,2024",
      comment: "3 Comment",
      content: "Deep Dive into JavaScript’s Event Loop",
      pics: "/blogs/blog24.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
    },
    {
      type: "REACT",
      date: "June 19,2024",
      comment: "10 Comment",
      content: "Efficient React Component Patterns",
      pics: "/blogs/blog25.jpg",
      link: "https://reactjs.org/docs/composition-vs-inheritance.html",
    },
    {
      type: "JAVASCRIPT",
      date: "July 25,2024",
      comment: "5 Comment",
      content: "Exploring JavaScript’s New Features in ES2024",
      pics: "/blogs/blog26.jpg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    },
    {
      type: "WEB DEVELOPMENT",
      date: "August 13,2024",
      comment: "12 Comment",
      content: "Modern Web Development Trends to Watch Out For in 2024",
      pics: "/blogs/blog27.jpg",
      link: "https://www.smashingmagazine.com/2024/01/web-development-trends/",
    },
    {
      type: "JAVASCRIPT",
      date: "September 5,2024",
      comment: "9 Comment",
      content: "Debugging JavaScript: Tips and Tools for Better Code",
      pics: "/blogs/blog28.jpg",
      link: "https://www.freecodecamp.org/news/javascript-debugging-tips/",
    },
    {
      type: "REACT",
      date: "October 17,2024",
      comment: "15 Comment",
      content: "Understanding React’s Virtual DOM for Better Performance",
      pics: "/blogs/blog29.jpg",
      link: "https://reactjs.org/docs/advanced-performance.html",
    },
    {
      type: "JAVASCRIPT",
      date: "November 11,2024",
      comment: "3 Comment",
      content: "JavaScript: From Basics to Mastery",
      pics: "/blogs/blog30.jpg",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
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
    <main>
      <div className="h-[35vh] flex items-center pl-10 bg-[url('/matrix6.jpg')] bg-center bg-cover bg-blend-darken justify-center flex-col bg-black/50">
        <h1 className="text-6xl ">BLOG</h1>
        <div className="text-xl mt-4 tracking-wide flex gap-2">
          <Link to="/"> Home</Link> &gt;&gt; <p className="text-blue-600"> My Blogs </p></div>
      </div>
      <div className="max-w-7xl mx-auto py-12">
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
          {blogs.map(({ type, date, comment, content, pics, link }, index) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
              <motion.div
                
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
            </a>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default MyBlog;

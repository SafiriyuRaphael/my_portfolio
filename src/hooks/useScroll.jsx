import { useEffect, useRef } from "react";

const useScroll = () => {
  // Smooth scroll function with improved offset calculation

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = window.innerHeight > 768 ? -100 : -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };


  const heroRef = useRef(null);
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      const heroImage = heroElement.querySelector(".hero-image");
      const heroContent = heroElement.querySelector(".hero-content");

      if (heroImage && scrollPosition < window.innerHeight) {
        heroImage.style.transform = `scale(${
          1 + scrollPosition * 0.0004
        }) translateY(${scrollPosition * 0.1}px)`;
        if (heroContent) {
          heroContent.style.transform = `translateY(${
            scrollPosition * 0.15
          }px)`;
          heroContent.style.opacity = 1 - scrollPosition * 0.003;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return {scrollWithOffset, heroRef};
};

export default useScroll;

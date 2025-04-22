import BackGround from "./animations/BackGround";
import LeftContentContainer from "./section/LeftContentContainer";
import RightContentContainer from "./section/RightContentContainer";
import ScrollIndicator from "./animations/ScrollIndicator";
import useScroll from "../../../../hooks/useScroll";

const Hero = () => {
  const { heroRef } = useScroll();
  return (
    <article
      ref={heroRef}
      id="hero"
      className="relative lg:pt-36 pt-32 min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
    >
      <BackGround />

      {/* Content container with layout */}
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col lg:flex-row min-h-screen items-center">
          <LeftContentContainer />

          <RightContentContainer heroRef={heroRef} />
        </div>

        <ScrollIndicator />
      </div>
    </article>
  );
};

export default Hero;

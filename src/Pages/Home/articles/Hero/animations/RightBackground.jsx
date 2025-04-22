import React from "react";

const RightBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/40 to-purple-600/20 mix-blend-color"></div>
      <div className="absolute inset-0 bg-gray-900/20"></div>

      {/* Animated light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,176,59,0.1),transparent_70%)]"></div>
    </>
  );
};

export default RightBackground;

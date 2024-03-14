import React from "react";

const BackgroundImage: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <img
        src="/Vapiano/background.jpg"
        alt="Background"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BackgroundImage;

import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "50px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        About
      </h1>

      {/* Subtitle */}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Our Mission
      </h2>

      {/* Paragraph Text */}
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          lineHeight: "1.8",
          marginBottom: "20px",
        }}
      >
        Swap SC is a premier online platform exclusively designed for USC
        students to engage in trading, selling, or renting fashionable,
        pre-loved items. Our user-friendly interface and tailored
        functionalities cater specifically to the dynamic USC student
        community.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          lineHeight: "1.8",
        }}
      >
        We aim to provide a seamless experience for students to explore trendy
        fashion options and connect with their peers, enhancing their style
        choices and promoting sustainability in fashion.
      </p>
    </div>
  );
};

export default AboutUs;

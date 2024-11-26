import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#aa9c8d", // Light gray background
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        borderTop: "1px solid #d0d0d0",
      }}
    >
      {/* Title */}
      <div
        style={{
          textAlign: "left",
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: "#333",
          paddingBottom: "20px",
          marginLeft: "10px",
        }}
      >
        Contact Swap SC
      </div>

      {/* Footer Details */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "800px",
          margin: "0 auto",
          gap: "20px",
          textAlign: "left",
        }}
      >
        {/* Contact Info */}
        <div style={{ fontSize: "1rem", color: "#555" }}>
          <p>562-584-2548</p>
          <p>info@swapsc.com</p>
        </div>

        {/* Address */}
        <div style={{ fontSize: "1rem", color: "#555" }}>
          <p>3670 Trousdale Pkwy,</p>
          <p>Los Angeles, CA 90089</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

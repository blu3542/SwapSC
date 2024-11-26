import React from "react";

const MailingListForm = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // Slight off-white background
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Sign Up For Mailing List!
        </h2>

        {/* Form */}
        <form>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "url('https://flagcdn.com/us.svg') no-repeat center center",
                  backgroundSize: "20px 15px",
                  width: "20px",
                  height: "15px",
                  marginRight: "10px",
                }}
              ></span>
              <input
                type="tel"
                placeholder="Phone"
                style={{
                  flex: "1",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </form>

        {/* Footer */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "0.8rem",
            color: "#666",
            borderTop: "1px solid #ddd",
            paddingTop: "10px",
          }}
        >
          <p>
            Mailing List - <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>Create your own for free!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MailingListForm;

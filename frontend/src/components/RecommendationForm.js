import React, { useState } from "react";
import axios from "axios";

const RecommendationForm = () => {
    const [formData, setFormData] = useState({
        style: "",
        color: "",
        size: "",
        occasion: "",
    });

    const [recommendations, setRecommendations] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://127.0.0.1:5000/recommend", formData);
            const data = await res.data;
            setRecommendations(data.recommendations);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Clothing Recommendation Form</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Style:
                    <input
                        type="text"
                        name="style"
                        value={formData.style}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Color:
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Size:
                    <input
                        type="text"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Occasion:
                    <input
                        type="text"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>
                <button type="submit" style={styles.button}>
                    Get Recommendations
                </button>
            </form>

            <div style={styles.recommendationContainer}>
                <h2 style={styles.subtitle}>Recommended Clothes:</h2>
                <ul style={styles.list}>
                    {recommendations.map((item, index) => (
                        <li key={index} style={styles.listItem}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={styles.image}
                            />
                            <p style={styles.itemName}>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
        textAlign: "center",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "10px",
        color: "#555",
    },
    input: {
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "100%",
        marginTop: "5px",
    },
    button: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "10px",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
    recommendationContainer: {
        marginTop: "20px",
    },
    subtitle: {
        textAlign: "center",
        color: "#333",
    },
    list: {
        listStyleType: "none",
        padding: "0",
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
    },
    image: {
        width: "60px",
        height: "60px",
        borderRadius: "8px",
        marginRight: "15px",
        objectFit: "cover",
    },
    itemName: {
        fontSize: "16px",
        color: "#333",
        fontWeight: "bold",
    },
};

export default RecommendationForm;

import React, { useState } from "react";
import axios from 'axios';

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

    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/recommend", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setRecommendations(data.recommendations);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };

    return (
        <div>
            <h1>Clothing Recommendation Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Style:
                    <input
                        type="text"
                        name="style"
                        value={formData.style}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Color:
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Size:
                    <input
                        type="text"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Occasion:
                    <input
                        type="text"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Get Recommendations</button>
            </form>

            <div>
                <h2>Recommended Clothes:</h2>
                <ul>
                    {recommendations.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecommendationForm;

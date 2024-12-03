from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, resources={r"/recommend": {"origins": "http://localhost:3001"}})

# Example clothing data
CLOTHES_DATA = [
    {"id": 1, "name": "Aritzia Dress", "style": "formal", "color": "beige", "size": "M", "occasion": "party", "image": "/images/aritzidress.jpeg"},
    {"id": 2, "name": "Black Skirt", "style": "casual", "color": "black", "size": "S", "occasion": "office", "image": "/images/blackskirt.jpeg"},
    {"id": 3, "name": "Boots", "style": "winter", "color": "brown", "size": "L", "occasion": "outdoor", "image": "/images/boots.jpeg"},
    {"id": 4, "name": "Cargo Sweatpants", "style": "athleisure", "color": "gray", "size": "L", "occasion": "daily", "image": "/images/cargo sweatpants.png"},
    {"id": 5, "name": "Cozy Fleece Set", "style": "loungewear", "color": "cream", "size": "M", "occasion": "home", "image": "/images/cozy fleece set.png"},
    {"id": 6, "name": "Denim Skirt", "style": "casual", "color": "blue", "size": "M", "occasion": "daily", "image": "/images/denim skirt.png"},
    {"id": 7, "name": "Flared Leggings", "style": "athleisure", "color": "black", "size": "S", "occasion": "workout", "image": "/images/flared leggings.png"},
    {"id": 8, "name": "Longsleeve Minidress", "style": "formal", "color": "red", "size": "M", "occasion": "party", "image": "/images/longsleeve minidress.png"},
    {"id": 9, "name": "Off-the-Shoulder Sweater", "style": "casual", "color": "white", "size": "S", "occasion": "daily", "image": "/images/off-the-shoulder sweater.png"},
    {"id": 10, "name": "Straight Jeans", "style": "casual", "color": "blue", "size": "L", "occasion": "daily", "image": "/images/straight jeans.png"},
    {"id": 11, "name": "Sweater", "style": "casual", "color": "gray", "size": "M", "occasion": "daily", "image": "/images/sweater.jpeg"},
    {"id": 12, "name": "Tennis Skirt", "style": "sporty", "color": "white", "size": "S", "occasion": "sports", "image": "/images/tennis skirt.png"},
    {"id": 13, "name": "Turtleneck", "style": "formal", "color": "blue", "size": "M", "occasion": "office", "image": "/images/turtleneck.png"},
    {"id": 14, "name": "Vest", "style": "winter", "color": "black", "size": "L", "occasion": "outdoor", "image": "/images/vest.png"},
]

# Prepare the dataset
df = pd.DataFrame(CLOTHES_DATA)
df['combined_features'] = df['style'] + " " + df['color'] + " " + df['size'] + " " + df['occasion']

# Vectorize the combined features
vectorizer = CountVectorizer()
feature_matrix = vectorizer.fit_transform(df['combined_features'])

# Route for recommending clothes
@app.route("/recommend", methods=["OPTIONS", "POST"])
@cross_origin()
def recommend():
    # Handle preflight requests (OPTIONS)
    if request.method == "OPTIONS":
        response = jsonify({"message": "CORS preflight successful"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
        return response

    # Handle actual POST requests
    data = request.json
    user_input = f"{data.get('style', '').lower()} {data.get('color', '').lower()} {data.get('size', '').upper()} {data.get('occasion', '').lower()}"
    user_vector = vectorizer.transform([user_input])
    similarities = cosine_similarity(user_vector, feature_matrix).flatten()
    top_indices = similarities.argsort()[-3:][::-1]
    recommendations = df.iloc[top_indices].to_dict(orient="records")

    # Add CORS headers to the response
    response = jsonify({"recommendations": recommendations})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/api/data', methods=['POST'])
def handle_data():
    # Log the content received on the backend
    data = request.get_json()
    print("Data received on the backend:", data)
    
    # Respond back to the frontend
    return jsonify({"message": "Data received successfully!", "received_data": data}), 200

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS

app = Flask(__name__, static_folder="frontend/build")
CORS(app)  # Allow cross-origin requests from React

# Predefined family tree data
family_data = [
    {
        "id": "0",
        "rels": {},
        "data": {
            "first name": "Ragav",
            "last name": "Janardhan",
            "birthday": "2005-12-02",
            "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg",
            "gender": "M",
            "death date": ""  
        }
    }
]

# Endpoint to serve family tree data
@app.route('/family-data', methods=['GET'])
def get_family_data():
    return jsonify(family_data)

# Serving React App (index.html)
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Catch-all route for serving React's static assets (JS, CSS, etc.)
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="frontend/build")
CORS(app)  # Allow cross-origin requests from React

# API endpoint for testing communication between React and Flask
@app.route('/api')
def api():
    return jsonify({"message": "Hello from Flask!"})

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

from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="frontend/build")
CORS(app)

# API endpoint
@app.route('/api')
def api():
    return jsonify({"message": "Hello from Flask!"})

# Serving React App
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Catch-all for other React routes
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)

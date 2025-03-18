import os
from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from google.cloud import storage
import json

# Initialize Flask app
app = Flask(__name__, static_folder="frontend/build")
CORS(app)  # Allow cross-origin requests from React

# Initialize Google Cloud Storage client
storage_client = storage.Client()

# Google Cloud Storage bucket & file details
BUCKET_NAME = 'family-tree-bucket'
FILENAME = 'familyTreeData.json'  # Replace with actual filename in GCS

# Function to fetch the JSON file from Google Cloud Storage
def get_json_from_gcs():
    bucket = storage_client.bucket(BUCKET_NAME)
    blob = bucket.blob(FILENAME)
    
    # Download the content of the blob (JSON file) as a string
    json_data = blob.download_as_text()
    
    if json_data:
        print("JSON file successfully fetched from Google Cloud Storage.")
    else:
        print("Failed to fetch JSON file from Google Cloud Storage.")

    
    # Parse the JSON string into a Python dictionary
    return json.loads(json_data)

# Endpoint to serve family tree data from GCS
@app.route('/family-data', methods=['GET'])
def get_family_data():
    try:
        json_data = get_json_from_gcs()
        return jsonify(json_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

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

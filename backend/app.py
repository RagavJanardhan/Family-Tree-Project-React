import os
from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from google.cloud import storage
import json
import logging

# Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to point to the file
# Eventually want to store credentials in a more secure way
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "active-campus-427511-k5-76c899d06f85.json"

# Initialize Flask app
app = Flask(__name__, static_folder="frontend/build", static_url_path="")
CORS(app)  # Allow cross-origin requests from React

# Initialize Google Cloud Storage client
storage_client = storage.Client()

# Google Cloud Storage bucket & file details
BUCKET_NAME = os.getenv("BUCKET_NAME", "family-tree-bucket")  # Use environment variable or default

FILENAME = 'familyTreeData.json'  # .json filename in GCS bucket
#FILENAME = 'familyTree4Members.json'  #Alternative file
#FILENAME = 'deploymentTestData.json'  #Alternative file

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
    print("GET /family-data route called")
    try:
        json_data = get_json_from_gcs()
        return jsonify(json_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/save-family-data', methods=['POST'])
def save_family_data():
    print("POST /save-family-data route called")
    try:
        # Get the JSON data from the request
        updated_data = request.get_json()

        # Upload the updated data to the GCS bucket
        bucket = storage_client.bucket(BUCKET_NAME)
        blob = bucket.blob(FILENAME)

        # Convert the Python dictionary to a JSON string and upload it
        blob.upload_from_string(json.dumps(updated_data), content_type='application/json')

        return jsonify({"message": "Family tree data successfully updated."}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.before_request
def log_request_info():
    logger.info(f"Request Method: {request.method}")
    logger.info(f"Request URL: {request.url}")
    logger.info(f"Request Path: {request.path}")

# Catch-all route for unmatched paths
@app.errorhandler(404)
def catch_all(error):
    print("Catch-all route triggered for 404 error")
    return send_from_directory(app.static_folder, "index.html")

@app.errorhandler(500)
def server_error(error):
    logger.error(f"500 Error: {error}")
    return jsonify({"error": "Internal server error"}), 500

@app.route("/", defaults={"path": ""})
def serve_root(path):
    print("Root URL accessed")
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:path>")
def serve_path(path):
    print(f"Serve Path requested: {path}")
    try:
        return send_from_directory(app.static_folder, path)
    except FileNotFoundError:
        print("File not found, serving index.html instead")
        return send_from_directory(app.static_folder, "index.html")

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    print(app.url_map)
    app.run(debug=False)

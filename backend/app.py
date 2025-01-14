from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS

app = Flask(__name__, static_folder="frontend/build")
CORS(app)  # Allow cross-origin requests from React

# Predefined family tree data
family_data = [
    {
    "data": {
      "avatar": "https://media.licdn.com/dms/image/v2/C4D03AQFYrYS4yVf1Mg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643851825494?e=2147483647&v=beta&t=Ugq8Jf33WAuFKNc0Te5qiW9m1JgPfGH8U10dVmOOMjY",
      "birthday": "2005-12-02",
      "death date": "",
      "first name": "Ragav",
      "gender": "M",
      "last name": "Janardhan"
    },
    "id": "0",
    "rels": {}
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

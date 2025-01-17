# Family Tree Project

## Overview

The Family Tree Project is a web-based application designed to visualize family relationships interactively. It features a React front end integrated with a Flask back end. The project leverages the family-chart library for rendering the family tree and is planned for future deployment on Vercel.

## Current Features

- **React Front End**: The front end fetches family tree data from the Flask back end.
- **Flask Back End**: Manages data retrieval and serves as the API layer.
- **Family-Chart Library**: Provides the core visualization of the family tree.

## **File Structure**

### Flask Back End

```
Family-Tree-Project-React/
📦backend
 ┣ 📜app.py
 ┗ 📜requirements.txt         

```

---

### React Front End
```
Family-Tree-Project-React/
📦frontend
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂ContactPage
 ┃ ┃ ┃ ┗ 📜ContactPage.js
 ┃ ┃ ┣ 📂FamilyTree
 ┃ ┃ ┃ ┣ 📜FamilyTree.js
 ┃ ┃ ┃ ┣ 📜FamilyTreePage.js
 ┃ ┃ ┃ ┗ 📜FamilyTrees.css
 ┃ ┃ ┗ 📂HomePage
 ┃ ┃ ┃ ┣ 📜HomePage.css
 ┃ ┃ ┃ ┗ 📜HomePage.js
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┗ 📜index.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┣ 📜theme.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md

```

---


## Future Plans

### Deployment
- Host the application on Vercel for public accessibility.

### UI Improvements
- Enhance the React front end with better interactivity and styling.
- Improve mobile responsiveness and user experience.

### Feature Expansion
- Implement search function into the tree.
- Add analytics for members in the tree

## Setup Instructions

### Prerequisites

- **Node.js** (for React front end)
- **Python 3.x** (for Flask back end)

### **Steps to Run Locally**
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/family-tree-project.git
   cd family-tree-project-react
   ```

2. **Install Flask Dependencies:**
   ```bash
    cd backend
    pip install -r requirements.txt
   ```

3. **Run the Flask Server:**
   ```bash
   python app.py
   ```

2. **Install React Dependencies:**
   ```bash
    cd frontend
    npm install
    npm start
   ```

4. **Access the Application:**
   Open your web browser and navigate to `http://localhost:3000`.

---
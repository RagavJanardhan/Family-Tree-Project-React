import React from 'react';
import './styles/App.css';  // Importing CSS for the App component
import './components/HomePage/HomePage.css';  // Import the custom CSS file for HomePage
import FamilyTree from "./components/FamilyTree/familyTree.js";

// HomePage component
const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Family Tree Project</h1>
      <p>This is a simple React page with custom styling!</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Family Tree Visualization</h1>
      <FamilyTree />
    </div>
  );
}

export default App;

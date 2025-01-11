import React, { useEffect, useState } from 'react';
import './App.css';  // Importing CSS for the App component
import './HomePage.css';  // Import the custom CSS file for HomePage

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
  const [message, setMessage] = useState('');

  // Fetching data from the Flask API
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching API:', error));
  }, []);

  return (
    <div className="App">
      <HomePage /> {/* Adding the HomePage component here */}
      <h1>React + Flask</h1>
      <p>{message || 'Loading message from Flask API...'}</p>
    </div>
  );
}

export default App;
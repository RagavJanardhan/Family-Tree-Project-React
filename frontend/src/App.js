import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './styles/App.css';

// Importing the page components
import HomePage from './components/HomePage/HomePage';

// There may be an error here, It doesn't seem to affect compilation
// But the error persists
import FamilyTreePage from './components/FamilyTree/FamilyTreePage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink to="/" exact className="active">Home</NavLink></li>
            <li><NavLink to="/family-tree" className="active">Family Tree</NavLink></li>
            <li><NavLink to="/contact" className="active">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Route setup */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/family-tree" element={<FamilyTreePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

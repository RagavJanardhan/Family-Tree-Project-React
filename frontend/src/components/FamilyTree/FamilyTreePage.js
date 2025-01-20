import React from 'react';
import { useTheme } from '@mui/material/styles';
import FamilyTree from './FamilyTree'; // Import the FamilyTree component

const FamilyTreePage = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <div className="family-tree-page" 
    style={{
      height: '100%',
      '--primary-main': theme.palette.primary.main, // Inject primary.main as a CSS variable
      '--text-primary': theme.palette.text.primary,
      '--text-secondary': theme.palette.text.secondary, // Inject primary.main as a CSS variable
    }}
    >      
      {/* Family Tree Page Title */}
      <h3>
        Family Tree Visualization
      </h3>

      {/* Description */}
      <p>
        Here you can view the family tree and its relationships.
      </p>

      {/* Family Tree component */}
      <div style={{ width: '100%', margin: '0 auto' }}>
        <FamilyTree theme={theme}/>
      </div>
    </div>
  );
};

export default FamilyTreePage;

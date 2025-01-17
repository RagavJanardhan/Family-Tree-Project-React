import React from 'react';
import FamilyTree from './FamilyTree'; // Import the FamilyTree component

const FamilyTreePage = () => {
  return (
    <div className="family-tree-page" style={{ height: '100%' }}>      {/* Family Tree Page Title */}
      <h3>
        Family Tree Visualization
      </h3>

      {/* Description */}
      <p>
        Here you can view the family tree and its relationships.
      </p>

      {/* Family Tree component */}
      <div style={{ width: '100%', margin: '0 auto' }}>
        <FamilyTree />
      </div>
    </div>
  );
};

export default FamilyTreePage;

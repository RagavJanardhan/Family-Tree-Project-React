import React from 'react';
import FamilyTree from './FamilyTree';
const FamilyTreePage = () => {
  return (
    <div className="family-tree-page">
      <h1>Family Tree Visualization</h1>
      <p>Here you can view the family tree and its relationships.</p>
      <FamilyTree />
    </div>
  );
};

export default FamilyTreePage;

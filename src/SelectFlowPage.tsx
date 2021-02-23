import React from 'react';
import { Link } from 'react-router-dom';
import locations from './locations';

const SelectFlowPage = () => {
  return (
    <ul>
      <li><Link to={locations.v0.base}>Single route implementation</Link></li>
      <li><Link to={locations.v1.base}>Router navigation inside pages</Link></li>
    </ul>
  );
};

export default SelectFlowPage;
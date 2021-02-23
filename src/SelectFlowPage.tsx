import React from 'react';
import { Link } from 'react-router-dom';
import locations from './locations';

const SelectFlowPage = () => {
  return (
    <ul>
      <li><Link to={locations.v0.base}>Single route implementation</Link></li>
      <li><Link to={locations.v1.base}>Router navigation inside pages</Link></li>
      <li><Link to={locations.v2.base}>Router navigation on router level</Link></li>
      <li><Link to={locations.v3.base}>Router navigation on router level - location state</Link></li>
    </ul>
  );
};

export default SelectFlowPage;
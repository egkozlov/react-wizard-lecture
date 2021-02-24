import React from 'react';
import { Link } from 'react-router-dom';
import locations from './locations';
import PageContainer from './PageContainer';

const SelectFlowPage = () => {
  return (
    <PageContainer>
      <h1>Entrypoints</h1>
      <ul>
        <li><Link to={locations.v0.base}>Single route implementation</Link></li>
        <li><Link to={locations.v1.base}>Router navigation inside pages</Link></li>
        <li><Link to={locations.v2.base}>Router navigation on router level</Link></li>
        <li><Link to={locations.v3.base}>Router navigation on router level - location state</Link></li>
        <li><Link to={locations.v4.base}>Router navigation on router level - sessionStorage state</Link></li>
        <li><Link to={locations.v5.base}>Router navigation in location state - sessionStorage state</Link></li>
      </ul>
    </PageContainer>
  );
};

export default SelectFlowPage;
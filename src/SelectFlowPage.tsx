import React from 'react';
import { Link } from 'react-router-dom';
import locations from './locations';
import PageContainer from './PageContainer';

const SelectFlowPage = () => {
  return (
    <PageContainer>
      <h1>Entrypoints</h1>
      <ol>
        <li><Link to={locations.v0.base}>Variant 0</Link></li>
        <li><Link to={locations.v1.base}>Variant 1</Link></li>
        <li><Link to={locations.v2.base}>Variant 2</Link></li>
        <li><Link to={locations.v3.base}>Variant 3</Link></li>
        <li><Link to={locations.v4.base}>Variant 4</Link></li>
      </ol>
    </PageContainer>
  );
};

export default SelectFlowPage;
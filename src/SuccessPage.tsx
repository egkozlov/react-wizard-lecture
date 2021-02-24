import { Tile } from 'carbon-components-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageContainer from './PageContainer';

const SuccessPage = () => {
  const { state = {} } = useLocation<any>();
  return (<PageContainer>
    <h1>Success page</h1>
    <Tile>
      <pre>{JSON.stringify(state.user || {}, null, 2)}</pre>
    </Tile>
    <Link style={{ marginTop: '24px' }} to="/">Back to start page</Link>
  </PageContainer>);
};

export default SuccessPage;
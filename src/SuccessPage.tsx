import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const { state = {} } = useLocation<any>();
  return (<div>
    <h1>Success page</h1>
    <div>
      <pre>{JSON.stringify(state.user || {}, null, 2)}</pre>
    </div>
    <Link to="/">Back to start page</Link>

  </div>);
};

export default SuccessPage;
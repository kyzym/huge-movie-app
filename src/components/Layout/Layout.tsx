import { Box } from '../../utils/Box.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import * as SC from './Layout.styled';

const Layout = () => {
  return (
    <Box as="div">
      <SC.Header>
        <SC.Nav>
          <SC.Link to="/" end>
            Home
          </SC.Link>
          <SC.Link to="/movies">Movies</SC.Link>
        </SC.Nav>
      </SC.Header>
      <Suspense fallback={null}>{<Outlet />}</Suspense>
    </Box>
  );
};

export default Layout;

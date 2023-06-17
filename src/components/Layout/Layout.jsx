import { Box } from '../../utils/Box.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Loader } from 'components/Loader/Loader';

import * as SC from '../Layout/Layout.styled';

const Layout = () => {
  return (
    <Box as="div">
      <Box as="header" p="20px" borderBottom="1px solid black">
        <Box as="nav" display="flex" gridGap={12}>
          <SC.Link to="/" end>
            Home
          </SC.Link>
          <SC.Link to="/movies">Movies</SC.Link>
        </Box>
      </Box>
      <Suspense fallback={null}>{<Outlet />}</Suspense>
    </Box>
  );
};

export default Layout;

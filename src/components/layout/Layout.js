import { Box } from '@mui/material';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  const { children } = props;

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Header />
      </Box>
      <Box minHeight="calc(100vh - 160px)">
        <content>{children}</content>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Layout;

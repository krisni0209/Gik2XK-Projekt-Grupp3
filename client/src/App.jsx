import { Link, Outlet } from 'react-router-dom';  // <-- Import Outlet here
import {Box, AppBar, Toolbar, Typography, Button} from '@mui/material';
function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Hockey Shop</Link>
          </Typography>
          <Button color="inherit"><Link to="/Product/new">Nya Produkter</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Outlet />  {/* This will render the matched child route */}
    </>
  );
}

export default App;


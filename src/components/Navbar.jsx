import { Grid, GridItem } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Navbar() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Grid display={'flex'}>
        <ColorModeSwitcher justifyContent="flex-end" mr={'5'} />
        <Grid display={'flex'} flexDirection={'row'}>
          <GridItem mr={'5'}>
            <Link to="/">Home</Link>
          </GridItem>
          {location.pathname !== '/login' && (
            <GridItem mr={'5'}>
              <Link to="/login">Login</Link>
            </GridItem>
          )}
          {location.pathname !== '/register' && (
            <GridItem mr={'5'}>
              <Link to="/register">Register</Link>
            </GridItem>
          )}
        </Grid>
      </Grid>
    </>
  );
}

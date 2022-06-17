import Grid from '@material-ui/core/Grid';
import MenuBar from './MenuBar';
import NavBar from './NavBar';

import { Outlet } from 'react-router-dom';

export default function ManagerLayout() {
  return (
    <div className="root">
      <Grid container>
        <Grid item xs={2}>
          <MenuBar />
        </Grid>
        <Grid item xs={10}>
          <NavBar />
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}

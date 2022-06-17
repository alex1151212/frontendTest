import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Store } from '../Store';

export default function NavBar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [menu, setMenu] = useState(false);

  const ctxContext = useContext(Store);
  if (!ctxContext) return null;
  const { state, dispatch: ctxDispatch } = ctxContext;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    navigate('/');
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="flexgrow">
          管理系統
        </Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>使用者資訊</MenuItem>
          <MenuItem>更改密碼</MenuItem>
          <MenuItem onClick={logoutHandler}>登出</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

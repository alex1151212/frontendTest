import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InputLabel from '@material-ui/core/InputLabel';
import Collapse from '@material-ui/core/Collapse';
import Select from '@material-ui/core/Select';
import Tabletest from '../components/Tabletest';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import clsx from 'clsx';

import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    table: {
      minWidth: 550,
    },
  })
);

export default function DashboardScreen() {
  const intiFormState = {
    keyword: '',
    type: '全部',
    rangePicker: ['2022-06-01T00:00', '2022-06-01T00:00'],
  };

  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [menu, setMenu] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const [keyword, setKeyword] = useState(intiFormState.keyword);
  const [type, setType] = useState(intiFormState.type);
  const [rangePicker, setRangePicker] = useState(intiFormState.rangePicker);
  const [tableData, setTableData] = useState(intiFormState);

  const ctxContext = useContext(Store);
  if (!ctxContext) return null;
  const { state, dispatch: ctxDispatch } = ctxContext;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const selectHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };
  const logoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    navigate('/');
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTableData({ keyword, type, rangePicker });
  };
  const resetHandler = () => {
    setKeyword(intiFormState.keyword);
    setType(intiFormState.type);
    setRangePicker(intiFormState.rangePicker);
  };

  return (
    <div className="root">
      <Grid container>
        <Grid item xs={2}>
          <MenuList>
            <MenuItem onClick={() => navigate('/manager')}>搜尋</MenuItem>
            <MenuItem onClick={() => navigate('/dashboard')}>
              監控儀錶板
            </MenuItem>
            <MenuItem onClick={() => navigate('/account')}>對帳處裡</MenuItem>
          </MenuList>
        </Grid>
        <Grid item xs={10}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setMenu(!menu);
                  console.log(menu);
                }}
              >
                <MenuIcon />
              </IconButton>
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
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <CardHeader
                  title="搜尋設定"
                  action={
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  }
                />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <form onSubmit={submitHandler}>
                    <Grid container justifyContent="center" spacing={1}>
                      <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label">
                          類型
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={type}
                          onChange={selectHandler}
                          fullWidth
                        >
                          <MenuItem value={'全部'}>全部</MenuItem>
                          <MenuItem value={'信心值過低'}>信心值過低</MenuItem>
                          <MenuItem value={'信心值低'}>信心值低</MenuItem>
                          <MenuItem value={'信心值高'}>信心值高</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="standard-basic"
                          label="關鍵字"
                          fullWidth
                          value={keyword}
                          onChange={(e) => setKeyword(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Paper variant="outlined" square>
                          <TextField
                            id="datetime-local"
                            label="時間"
                            type="datetime-local"
                            defaultValue="2022-06-01T00:00"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={(e) =>
                              setRangePicker([e.target.value, rangePicker[1]])
                            }
                          />
                          <ArrowRightAltIcon
                            fontSize="large"
                            className="timeArrow"
                            viewBox="0 0 24 8"
                          />
                          <TextField
                            id="datetime-local"
                            label="時間"
                            type="datetime-local"
                            defaultValue="2022-06-01T00:00"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={(e) =>
                              setRangePicker([rangePicker[0], e.target.value])
                            }
                          />
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={1}>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          送出
                        </Button>{' '}
                        <Button
                          variant="contained"
                          onClick={resetHandler}
                          type="reset"
                        >
                          重設
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

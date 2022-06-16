import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import data from '../data';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

function SigninScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ctxContext = useContext(Store);
  if (!ctxContext) return null;
  const { state, dispatch: ctxDispatch } = ctxContext;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(state);

    const { users } = data;
    const userInfo = users.find((user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });
    if (userInfo) {
      ctxDispatch({ type: 'USER_SIGNIN', userInfo: userInfo.email });
      localStorage.setItem('userInfo', JSON.stringify(userInfo.email));
      console.log(state);
      navigate('/manager');
    } else {
      navigate('/');
    }
  };

  return (
    <Container maxWidth="xs">
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">管理系統</Typography>
        <form noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SigninScreen;

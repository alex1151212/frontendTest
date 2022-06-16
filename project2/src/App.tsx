import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
import ManagerScreen from './screens/ManagerScreen';
import DashboardScreen from './screens/DashboardScreen';
import AccountScreen from './screens/AccountScreen';
import './index.sass';
import { Store } from './Store';

function App() {
  const ctxContext = useContext(Store);
  if (!ctxContext) return null;
  const { state, dispatch: ctxDispatch } = ctxContext;

  const { userInfo } = state;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninScreen />}></Route>
        <Route path="/manager" element={<ManagerScreen />}></Route>
        <Route path="/dashboard" element={<DashboardScreen />}></Route>
        <Route path="/account" element={<AccountScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

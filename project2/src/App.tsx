import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagerLayout from './components/ManagerLayout';
import './index.sass';
import AccountScreen from './screens/AccountScreen';
import DashboardScreen from './screens/DashboardScreen';
import ManagerScreen from './screens/ManagerScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninScreen />}></Route>
        <Route element={<ManagerLayout />}>
          <Route path="/manager" element={<ManagerScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/account" element={<AccountScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

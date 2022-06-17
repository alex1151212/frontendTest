import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useNavigate } from 'react-router-dom';

export default function MenuBar() {
  const navigate = useNavigate();
  return (
    <MenuList>
      <MenuItem onClick={() => navigate('/manager')}>搜尋</MenuItem>
      <MenuItem onClick={() => navigate('/dashboard')}>監控儀錶板</MenuItem>
      <MenuItem onClick={() => navigate('/account')}>對帳處裡</MenuItem>
    </MenuList>
  );
}

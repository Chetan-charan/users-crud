import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import { User } from './User';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function UserList({ users, setUsers }) {
  const history = useHistory();

  //component to list all the users with their information along with buttons : delete user, edit user, show user Profile
  return <div className='all-users'>
    {users.map((usr, idx) => <User
      Name={usr.Name}
      age={usr.age}
      city={usr.city}
      pic={usr.profilePic}
      key={idx}
      deleteButton={<IconButton onClick={() => {
        const remainingUsers = users.filter((usr, key) => key !== idx);
        setUsers(remainingUsers);
      }} aria-label="delete">
        <DeleteIcon />
      </IconButton>}
      editButton={<IconButton onClick={() => {
        
        history.push('/editUser/' + idx);
      }} aria-label="delete">
        <EditIcon />
      </IconButton>} 
      showButton={<IconButton onClick={() => {
        
        history.push('/profile/' + idx);
      }} aria-label="delete">
        <KeyboardArrowDownIcon />
      </IconButton>}
      />)}
      
  </div>;
}

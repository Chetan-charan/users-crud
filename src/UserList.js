import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import { User } from './User';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect,useState } from 'react';

export function UserList() {
  const [users,setUsers] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    fetch('https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo')    //users data fetched from mockapi and setusers done
  .then((data) => data.json())
  .then((users) => setUsers(users));
  },[]);

  const getUsers = () => {                                            //function to get users
    fetch('https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo')
  .then((data) => data.json())
  .then((users) => setUsers(users));
  }

  //component to list all the users with their information along with buttons : delete user, edit user, show user Profile
  return <div className='all-users'>
    {users.map(({Name,age,city,profilePic,id}) => <User
      Name={Name}
      age={age}
      city={city}
      pic={profilePic}
      id={id}
      key={id}
      deleteButton={<IconButton onClick={() => {

        fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${id}`,{method: 'DELETE'})       //delete method when the delete button is clicked
        .then(() => getUsers());

      }} aria-label="delete">
        <DeleteIcon />
      </IconButton>}

      editButton={<IconButton onClick={() => {                        //edit user button, to change path of /edituser/id
        
        history.push('/editUser/' + id);
      }} aria-label="delete">
        <EditIcon />
      </IconButton>} 
      showButton={<IconButton onClick={() => {                        //button to show all details of user, path changed to /profile/id
        
        history.push('/profile/' + id);
      }} aria-label="delete">
        <KeyboardArrowDownIcon />
      </IconButton>}
      />)}
      
  </div>;
}

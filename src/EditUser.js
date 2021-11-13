import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

 //Component to Edit the user selected
export function EditUser({ users, setUsers }) {        
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  console.log(users);
  const user = users[id];
  console.log(user);
  const [Name, setName] = useState(user.Name);             //given the initial values which are equal to current values
  const [age, setAge] = useState(user.age);
  const [city, setCity] = useState(user.city);
  const [profilePic, setpic] = useState(user.profilePic);
  const usersCopy = [...users];
  const styles = {
    display: 'flex', flexDirection: 'column', gap: '10px', width: '40%', margin: '25px'
  };

  //changing values as per the entry
  return <div style={styles}>
    <TextField value={Name} onChange={(event) => setName(event.target.value)} id="standard-basic" label="Name" variant="standard" />
    <TextField value={age} onChange={(event) => setAge(event.target.value)} id="standard-basic" label="Age" variant="standard" />
    <TextField value={city} onChange={(event) => setCity(event.target.value)} id="standard-basic" label="City" variant="standard" />
    <TextField value={profilePic} onChange={(event) => setpic(event.target.value)} id="standard-basic" label="Profile Pic url" variant="standard" />
    <Button onClick={() => {
      usersCopy[id] = { Name, age, city, profilePic };
      setUsers(usersCopy);
      history.push('/users');
    }} variant="outlined">Save User</Button>
  </div>;                                      //on button click new values updated to the user and path set back to all users
}

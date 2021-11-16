import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

//component for creating user with the details and adding the values to all users list 
export function CreateUser({ users, setUsers }) {
  const history = useHistory();
  const [Name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [profilePic, setpic] = useState();     
  
  return <div className='input-fields'>

    <TextField onChange={(event) => setName(event.target.value)} id="standard-basic" label="Name" variant="standard" />
    <TextField onChange={(event) => setAge(event.target.value)} id="standard-basic" label="Age" variant="standard" />
    <TextField onChange={(event) => setCity(event.target.value)} id="standard-basic" label="City" variant="standard" />
    <TextField onChange={(event) => setpic(event.target.value)} id="standard-basic" label="pic url" variant="standard" />
    <Button onClick={() => {
      const newUser = { Name, age, city, profilePic };
      fetch('https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo',
      {
        method: 'POST',body: JSON.stringify(newUser),
        headers: {
        'Content-Type': 'application/json'
      },})
      .then(() =>   history.push('/users'));
      
    
    }} variant="contained">Add user</Button>
  </div>;


}

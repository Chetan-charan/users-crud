import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

 //Component to Edit the user selected
export function EditUser() {        
  const history = useHistory();
  const { id } = useParams();
  const [Name, setName] = useState('');           
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [profilePic, setpic] = useState('');

  useEffect(() => {
    fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${id}`,{method: 'GET'})   //get particular user data and fill the text fields with the values
    .then((data) => data.json())
    .then((user) => {
        setName(user.Name);
        setAge(user.age);
        setCity(user.city);
        setpic(user.profilePic);
    })
  },[])

  const styles = {
    display: 'flex', flexDirection: 'column', gap: '10px', width: '40%', margin: '25px'    //some styles used
  };

  //changing values as per the entry
  return <div style={styles}>
    <TextField value={Name} onChange={(event) => setName(event.target.value)} id="standard-basic" label="Name" variant="standard" />
    <TextField value={age} onChange={(event) => setAge(event.target.value)} id="standard-basic" label="Age" variant="standard" />
    <TextField value={city} onChange={(event) => setCity(event.target.value)} id="standard-basic" label="City" variant="standard" />
    <TextField value={profilePic} onChange={(event) => setpic(event.target.value)} id="standard-basic" label="Profile Pic url" variant="standard" />
    <Button onClick={() => {
      const editUser = {Name,age,city,profilePic};                          //new values updated on change
      fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${id}`,
      {method: 'PUT',headers: {
        'Content-type': 'application/json'
      },body: JSON.stringify(editUser)}
      ).then(() =>  history.push('/users'));                                 //on button click new values updated to the user and path set back to all users

    }} variant="outlined">Save User</Button>
  </div>;                                      
}

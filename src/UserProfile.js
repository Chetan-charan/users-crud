import Button from '@mui/material/Button';
import { useHistory,useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export function UserProfile() {                                 //Component to Display the profile of user with details.
  const { id } = useParams();
  const history = useHistory();
  const [userProfile,setuserProfile] = useState({});

  useEffect(() => {
    fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${id}`,{method: 'GET'})       //get particular user details
  .then((data) => data.json())
  .then((user) => setuserProfile(user));
  },[id]);
  
 
  
  //display the user details as below

  return <div className='user-Info'>  
    <img style={{ width: '400px', height: '380px', objectFit: 'cover' }} src={userProfile.profilePic} alt={userProfile.Name} />
    <h2>{userProfile.Name}</h2>
    <h5>Age: {userProfile.age}</h5>
    <h5>City: {userProfile.city}</h5>
    <Button  onClick={() => history.push('/') } variant="contained">Back</Button>
  </div>;


}

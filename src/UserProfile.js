import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';



export function UserProfile({ users }) {         //Component to Display the profile of user with details.
  const { id } = useParams();
  const history = useHistory();
  const userPro = users[id];
  return <div className='user-Info'>
    <img style={{ width: '400px', height: '380px', objectFit: 'cover' }} src={userPro.profilePic} alt={userPro.Name} />
    <h2>{userPro.Name}</h2>
    <h5>Age: {userPro.age}</h5>
    <h5>City: {userPro.city}</h5>
    <Button  onClick={() => history.goBack() } variant="contained">Back</Button>
  </div>;


}

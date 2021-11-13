
import './App.css';
import {useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { UserList } from './UserList';
import { CreateUser } from './CreateUser';
import { Redirect } from 'react-router-dom';
import { EditUser } from './EditUser';
import { UserProfile } from './UserProfile';


//This is the main component
function App() {

  // Array of users created
  const [users,setUsers] = useState([
    {
      Name: 'MS Dhoni',
      age: 32,
      city: 'Pune',
      profilePic: 'https://images.mid-day.com/images/images/2021/jul/dhoni-july-seven_d.jpg', 
    },
    {
     Name: 'Elon Musk',
     age: 30,
     city: 'New York',
     profilePic: 'https://cdn.vox-cdn.com/thumbor/qVjMPtyFVT5Dtwl_jSOCj4Y33TM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15980837/elon_musk_tesla_3036.jpg', 
    },
    {
      Name: 'Sachin',
      age: 35,
      city: 'Mumbai',
      profilePic: 'https://pbs.twimg.com/profile_images/1410819014255730689/u76ZqFWN_400x400.jpg', 
     },
     {
      Name: 'Virat Kohli',
      age: 30,
      city: 'Bangalore',
      profilePic: 'https://static.independent.co.uk/2021/09/16/14/64dc4040da8f53605a6fd3bf5f439987Y29udGVudHNlYXJjaGFwaSwxNjMxODgzNDE3-2.62239760.jpg?width=982&height=726&auto=webp&quality=75', 
     },
     {
      Name: 'A.R Rahman',
      age: 34,
      city: 'Chennai',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/6/66/AR_Rahman_2021.png', 
     },
     {
      Name: 'Surya',
      age: 31,
      city: 'Hyderabad',
      profilePic: 'https://s1.agaram.in/img/webp-img/founder_surya.webp', 
     },
     {
      Name: 'Sunil Chettri',
      age: 29,
      city: 'Bhopal',
      profilePic: 'https://images.indianexpress.com/2019/07/chhetri-1200.jpg', 
     },
     {
      Name: 'Sunny',
      age: 30,
      city: 'Coimbatore',
      profilePic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==', 
     },
  ]);

  const sty = {textDecoration: 'none'}
  
  //header with labels for navigation
  return (
    <div className="App">
      <div className='header'>
        <a className="nav-link" href><Link style={sty} to="/users"><h5>Users</h5></Link></a>
        <a className="nav-link" href><Link style={sty} to="/create-user"><h5>Create User</h5></Link></a>
        
        
      </div>
      {/* Routing to different paths based on User choice  */}
      <Switch>
      <Route path="/users">
          <UserList users={users} setUsers={setUsers}/>
        </Route>
        <Route path="/create-user">
         <CreateUser users={users} setUsers={setUsers}/>
        </Route>
        <Route path="/editUser/:id">
          <EditUser users={users} setUsers={setUsers}/>
        </Route>
        <Route path="/profile/:id">
          <UserProfile users={users}/>
        </Route>
        <Route path="/">
         <Redirect to='/users'/>
        </Route>
        
      </Switch>
      
      
    </div>
  );
}

export default App;

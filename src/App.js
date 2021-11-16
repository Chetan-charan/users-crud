
import './App.css';

import { Switch, Route, Link } from "react-router-dom";
import { UserList } from './UserList';
import { CreateUser } from './CreateUser';
import { Redirect } from 'react-router-dom';
import { EditUser } from './EditUser';
import { UserProfile } from './UserProfile';


//This is the main component
function App() {

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
          <UserList />
        </Route>
        <Route path="/create-user">
         <CreateUser />
        </Route>
        <Route path="/editUser/:id">
          <EditUser/>
        </Route>
        <Route path="/profile/:id">
          <UserProfile />
        </Route>
        <Route path="/">
         <Redirect to='/users'/>
        </Route>
        
      </Switch>
      
      
    </div>
  );
}

export default App;

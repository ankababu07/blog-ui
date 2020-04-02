import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
import Posts from './Components/Posts'
import UserPosts from './Components/UserPosts';
import UserPostComments from './Components/UserPostComments';

function App() {
  return (
    <div className="App">
      <Router>
        <ul className='links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        </ul>
        


        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/posts' component={Posts} />
        <Route path='/users/:id' component={UserPosts}/>
        <Route path='/posts/:pid' component={UserPostComments}/>



      </Router>

    </div>
  );
}

export default App;

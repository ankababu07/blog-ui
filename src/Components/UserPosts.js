import React, { Component } from 'react'
import axios from'axios'
import {Link} from 'react-router-dom'
import './Style.css'

class UserPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserPosts:[],
             User:{}

        }
    }

    componentDidMount(){
    const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp=>{
            const User=resp.data
            this.setState({User})
        })
        .catch(err=>{
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(resp=>{
            const UserPosts=resp.data
            this.setState({UserPosts})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
    
    render() {
        
        return (
            <div className='UserPosts'>
               <h1>USER NAME: {this.state.User.name}</h1> 
               <h1>POSTS WRITTEN BY USER</h1>
               <ul>
                    {this.state.UserPosts.map(usrposts=>{
                   return <li key={usrposts.id}><Link to={`/posts/${usrposts.id}`}>{usrposts.title}</Link></li>
               })}
               </ul>
               
            </div>
        )
    }
}

export default UserPosts

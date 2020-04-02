import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Style.css'
import {faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css';


class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Users:[]
        }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(resp=>{
            let Users=resp.data
            this.setState({Users})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className='Users'>
                <h1>USERS LIST: {this.state.Users.length}</h1>
                <ul id='AllUsers'>
                {this.state.Users.map(usr=>{
                    return ( <div className='usersdetails' key={usr.id}>
                             
                             <li  >Name :<Link to={`/users/${usr.id}`}>{usr.name}</Link></li>
                             <p className="title">Address :{usr.address.street}</p>
                             <p className="title">{usr.address.suite}   {usr.address.city}</p>
                             <p className="title">Zip :{usr.address.zipcode}</p>
                             <i className="fab fa-twitter"></i>
                    </div>
                    
                    )
                })}
                </ul>
                
            </div>
        )
    }
}

export default Users

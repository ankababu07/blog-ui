import React, { Component } from 'react'
import axios from'axios'
import {Link} from 'react-router-dom'
import './Style.css'

class Posts extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    
    componentDidMount(){
        this._isMounted = true;
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(resp=>{
            const posts=resp.data
            this.setState({posts})
        })
        .catch(err=>{
            console.log(err)
        })
    }


    componentWillUnmount() {
        this._isMounted = false;
      }
    
    render() {
        return (
            <div className='Posts'>
                
                <h1>Total Posts: {this.state.posts.length}</h1>
                <ul>
                {this.state.posts.map(post=>{
                     return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
                </ul>
                
            </div>
        )
    }
}

export default Posts

import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Style.css'

class UserPostComments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post:{},
             comments:[],
             user:{}
        }
    }
    
    componentDidMount(){
        const pid=this.props.match.params.pid
        axios.get(`https://jsonplaceholder.typicode.com/posts/${pid}`)
        .then(resp=>{
            const post=resp.data
            this.setState({post})
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(resp=>{
            const user=resp.data
            this.setState({user})
        })
        .catch(err=>{
            console.log(err)
        })
        })
        .catch(err=>{
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${pid}`)
        .then(resp=>{
            const comments=resp.data
            this.setState({comments})
        })
        .catch(err=>{
            console.log(err)
        })

        // setTimeout(()=>axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
        // .then(resp=>{
        //     const user=resp.data
        //     this.setState({user})
        // })
        // .catch(err=>{
        //     console.log(err)
        // }),4000)

    }
    render() {
        return (
            <div className='UserPostComments'>
               <h1>USER NAME: {this.state.user.name} </h1>
               <h1>TITLE: {this.state.post.title}</h1>
               <h1>BODY</h1>
               <h2>{this.state.post.body}</h2>
               <p></p>
               <hr/>
               <h1>Comments</h1> 
               <ul>
                 {
                     this.state.comments.map(comment=>{
                        return <li key={comment.id}>{comment.body}</li>
                     })
                 }
               </ul>

                <p><Link to={`/users/${this.state.post.userId}`}>More posts of author :{this.state.user.name} </Link></p>
               

            </div>
        )
    }
}

export default UserPostComments

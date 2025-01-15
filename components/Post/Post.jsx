import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Post = () => {
    const {posts,isLoading}  = useSelector(state => state.posts)

    if(isLoading){
        return <p>Esperando publicaciones...</p>
    }

    return (
    <div>
        {posts.map(post =>{
            return (<div key={post._id}>

                <Link to={"/postDetail/"+post._id}>
                <p>Title: {post.title}</p>
                </Link>
            </div>)
        })}
    </div>
  )
}

export default Post
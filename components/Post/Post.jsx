import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { like, unLike } from"../../src/features/post/postSlice"
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Post = () => {
    const {posts,isLoading}  = useSelector(state => state.posts)
    const {user}  = useSelector(state => state.auth)
    console.log(user);
    
    const dispatch = useDispatch();

    if(isLoading){
        return <p>Esperando publicaciones...</p>
    }

    return (
    <div>
        {posts.map(post =>{
            
        const isAlreadyLiked = post.likes?.includes(user?._id);

            return (<div key={post._id}>

                <Link to={"/postDetail/"+post._id}>
                <p>Title: {post.title}</p>

                </Link>
                likes:{post.likes?.length}
                
                {isAlreadyLiked ? (
                    <HeartFilled  onClick={()=>  dispatch(unLike(post._id))} />
                )

                : (
                    <HeartOutlined onClick={()=> dispatch(like(post._id))  } />
                  )
          
            }
                
{                console.log(post)
}            </div>)
        })}
    </div>
  )
}

export default Post
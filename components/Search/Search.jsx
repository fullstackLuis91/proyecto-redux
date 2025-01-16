import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getByTitle } from '../../src/features/post/postSlice';
import Post from '../Post/Post';

const Search = () => {
        const {title} = useParams()
        // console.log(title);  ver los Titulos que trae...
        const dispatch = useDispatch()

        useEffect(() => {
            console.log("ee")
            dispatch(getByTitle(title))
        },[title]);
  return (
    <div>Search
        <Post/>
    </div>
  )
}

export default Search
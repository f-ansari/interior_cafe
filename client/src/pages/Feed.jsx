import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllPost } from '../store/actions/PostActions'
import PostCard from '../components/posts/PostCard'

const state = ({ postState }) => {
    return postState
}

const action = (dispatch) => {
    return {
        fetchAllPost: () => dispatch(GetAllPost())
    }
}

const Feed = (props) => {
    useEffect(() => {
        props.fetchAllPost()
    },[])
    
    return (
        <div>
            <h1>I am Feed</h1>
            <PostCard
                mapPosts={props.mapPosts.data}
            />
        </div>
    )
}

export default connect(state,action)(Feed)
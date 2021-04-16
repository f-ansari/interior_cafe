import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllPost, UpdateLikes } from '../store/actions/PostActions'
import PostCard from '../components/posts/PostCard'

const state = ({ postState }) => {
    return { postState }
}

const action = (dispatch) => {
    return {
        fetchAllPost: () => dispatch(GetAllPost()),
        addLikeToPost: (post_id, like) => dispatch(UpdateLikes(post_id, like))
    }
}

const Feed = (props) => {
    console.log(props.postState.mapPosts.data)
    
    useEffect(() => {
        props.fetchAllPost()
        // eslint-disable-next-line
    },[])

    const likePost = (post_id, like) => {
        like += 1
        props.addLikeToPost(post_id, like)
    }
    
    return (
        <div>
            <h1>I am Feed</h1>
            <PostCard
                {...props}
                posts={props.postState.mapPosts}
                likePost={likePost}
            />
        </div>
    )
}

export default connect(state,action)(Feed)
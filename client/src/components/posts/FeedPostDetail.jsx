import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOnePost } from '../../store/actions/PostActions'
import { GetOneUser } from '../../store/actions/UserAction'

const state = ({ postState, userState }) => {
    return { postState, userState}
}

const action = (dispatch) => {
    return {
        fetchOnePost: (postId) => dispatch(GetOnePost(postId)),
        fetchUser: (userId) => dispatch(GetOneUser(userId))
    }
}

const FeedPostDetail = (props) => {
    
    const userId = props.postState.onePost.user_id

    useEffect(() => {
        props.fetchOnePost(props.match.params.post_id)
        props.fetchUser(userId)
        // eslint-disable-next-line
    }, [userId])


    const convertDate = (date) => {
        const event = new Date(date)
        return event.toDateString()
    }

    const onePost = props.postState.onePost
    const user = props.userState.otherUserInfo
        return (
            <div>
                <h1>Feed Post Detail section</h1>
                <button onClick={() => props.history.push(`/feed`)}>Go Back to feed</button>
                <h2>{onePost.title}</h2>
                <h4>{convertDate(onePost.created_at)}</h4>
                <h3>By: @{user.username}</h3>
                <h3>{onePost.like} 🤍</h3>
                <p>{onePost.description}</p>

                {onePost.images ? (onePost.images.map((images, i) => (
                    <div key={i}>
                        <img src={images.image} alt='user post details' />
                    </div>
                )))
                : <div>loading...</div>}

            </div>
        )
}

export default connect(state,action)(FeedPostDetail)
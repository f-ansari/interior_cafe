import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOnePost } from '../../store/actions/PostActions'
import { GetOneUser } from '../../store/actions/UserAction'
import '../../style/Feed.css'


const state = ({ postState, userState }) => {
    return { postState, userState }
}

const action = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(GetOneUser(userId)),
        fetchOnePost: (postId) => dispatch(GetOnePost(postId))
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
            <div className="component-container">
                <button className="gen-bttn component-header" onClick={() => props.history.push(`/feed`)}>Go Back to feed</button>
                <div>
                    <h2 className='component-header'>Title: {onePost.title}</h2>
                    <h4 className='component-text'>{convertDate(onePost.created_at)}</h4>
                    <h3 className='component-text'>By: @{user.username}</h3>
                    <h4 className='component-text'>{onePost.like} ♥️</h4>
                    <p className='component-text'>description: {onePost.description}</p>
                </div>
                <div className="grid-container">
                    {onePost.images ? (onePost.images.map((images, i) => (
                        <div className="card" key={i}>
                            <img className="card-img" src={images.image} alt='user post details' />
                        </div>
                    )))
                    : <div>loading...</div>}
                </div>

            </div>
        )
}

export default connect(state,action)(FeedPostDetail)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOnePost, DeletePost } from '../../store/actions/PostActions'

const state = ({ postState }) => {
    return {postState}
}

const action = (dispatch) => {
    return {
        destroyPost: (postId) => dispatch(DeletePost(postId)),
        fetchOnePost: (postId) => dispatch(GetOnePost(postId))
    }
}

const UserPostDetail = (props) => {
useEffect(() => {
    props.fetchOnePost(props.match.params.post_id)
    // eslint-disable-next-line
}, [])

const convertDate = (date) => {
    const event = new Date(date)
    return event.toDateString()
  }

  const handleSubmit = (e) => {
    props.destroyPost(props.match.params.post_id)
    props.history.push(`/userdash`) 
  }

const { onePost } = props.postState
    return (
        <div className="component-container">
            <div className="user-detail-bttn">
                <button className="gen-bttn component-header" onClick={() => props.history.push(`/userdash`)}>Go Back to Dash</button>
                <button className="gen-bttn component-header" onClick={(e) => handleSubmit(e)}>Delete this post</button>
            </div>
            <h2 className='component-header' >Title: {onePost.title}</h2>
            <h4 className='component-text'>{convertDate(onePost.created_at)}</h4>
            <h4 className='component-text'>{onePost.like} ♥️</h4>
            <p className='component-text'>description: {onePost.description}</p>

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

export default connect(state,action)(UserPostDetail)
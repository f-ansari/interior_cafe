import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOnePost, DeletePost } from '../../store/actions/PostActions'

const state = ({ postState }) => {
    return {postState}
}

const action = (dispatch) => {
    return {
        fetchOnePost: (postId) => dispatch(GetOnePost(postId)),
        destroyPost: (postId) => dispatch(DeletePost(postId))
    }
}
const PostDetail = (props) => {
    // console.log(props.match.params.post_id)
    // console.log(props)
useEffect(() => {
    props.fetchOnePost(props.match.params.post_id)
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
        <div>
            <h1>Post Detail section</h1>
            <button onClick={() => props.history.push(`/userdash`)}>Go Back to Dash</button>
            <button onClick={(e) => handleSubmit(e)}>Delete this post</button>
            <h2>{onePost.title}</h2>
            <h3>{convertDate(onePost.created_at)}</h3>
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

export default connect(state,action)(PostDetail)
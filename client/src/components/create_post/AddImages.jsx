import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOneUserPosts } from '../../store/actions/UserAction'
import { AppendImageToPost, SetUserId, SetPostId, AddCompletePost } from '../../store/actions/ImageAction'

const state = ({ userState, postImageFormState }) => {
    // console.log(userState)
    return { userState, postImageFormState }
}

const action = (dispatch) => {
    return {
        //something
        fetchUserPost: (userId) => dispatch(GetOneUserPosts(userId)),
        setUserId: (userId) => dispatch(SetUserId(userId)),
        setPostId: (postId) => dispatch(SetPostId(postId)),
        createImage: (formName, formValue) => dispatch(AppendImageToPost(formName, formValue)),
        setNewPostWImage: (formData) => dispatch(AddCompletePost(formData))
    }
}
const AddImages = (props) => {
    console.log(props.userState)
    const latestPost = props.userState.userPosts[props.userState.userPosts.length-1]
    
    useEffect(() => {
        props.fetchUserPost(props.userState.userId)
        props.setUserId(props.userState.userId)
        if (latestPost) setIdForPost();
        
        // eslint-disable-next-line
    }, [])
    
    const setIdForPost = () => {
         props.setPostId(latestPost.id)
        }
        
    // console.log(latestPost.id)

    const handleChange = (e) => {
        props.createImage(e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.setNewPostWImage(props.postImageFormState)
        const formValue = {
            user_id: props.userState.userId,
            post_id: latestPost.id,
            image: props.postImageFormState.image
        }

        props.setNewPostWImage(formValue)
        console.log(props.postImageFormState)
    }

    return latestPost !== undefined ? (

        <div>
            <h1>Add an Image to your post</h1>
            {/* {latestPost ? console.log(latestPost.id) : null} */}
            {/* value={latestPost ? latestPost.id : null} */}

            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    name="image"
                    placeholder="upload main image"
                    value={props.postImageFormState.image}
                    onChange={handleChange}
                />
                <br></br>
                <input
                    type="hidden"
                    name="post_id"
                    value={latestPost.id}
                    // onChange={handleChange}   
                />
                <button>Submit</button>
            </form>
        </div>
    ) : null;
}

export default connect(state,action)(AddImages)
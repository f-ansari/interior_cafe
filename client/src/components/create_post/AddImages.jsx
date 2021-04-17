import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOneUserPosts } from '../../store/actions/UserAction'
import { AppendImageToPost, SetUserId, SetPostId, AddCompletePost, FirstImageSubmit } from '../../store/actions/ImageAction'

const state = ({ userState, postImageFormState }) => {
    return { userState, postImageFormState }
}

const action = (dispatch) => {
    return {
        setPostId: (postId) => dispatch(SetPostId(postId)),
        setUserId: (userId) => dispatch(SetUserId(userId)),
        setFirstSubmit: () => dispatch(FirstImageSubmit()),
        fetchUserPost: (userId) => dispatch(GetOneUserPosts(userId)),
        setNewPostWImage: (formData) => dispatch(AddCompletePost(formData)),
        createImage: (formName, formValue) => dispatch(AppendImageToPost(formName, formValue))
    }
}
const AddImages = (props) => {
    
    const latestPost = props.userState.userPosts[props.userState.userPosts.length-1]
    
    useEffect(() => {
        props.fetchUserPost(props.userState.userId)
        props.setUserId(props.userState.userId)
        props.setPostId(props.userState.incomingNewPost.id)
        // eslint-disable-next-line
    }, [props.userState.incomingNewPost.id])

    const handleChange = (e) => {
        props.createImage(e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formValue = {
            user_id: props.userState.userId,
            post_id: latestPost.id,
            image: props.postImageFormState.image
        }
        props.setNewPostWImage(formValue)
        props.setFirstSubmit()
    }
    return (

        <div>
            <h1>Add an Image to your post</h1>

            <form>
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
                />

                <div>
                    {props.postImageFormState.firstSubmit ?
                    <div>
                        <button onClick={() => props.history.push(`/userdash`)}>Return to Dash</button>
                        <button onClick={handleSubmit}>Add More Image</button>
                    </div>
                    :
                    <button onClick={handleSubmit}>Submit</button>
                    } 
                </div>
            </form>
        </div>
    )
}

export default connect(state,action)(AddImages)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOneUserPosts } from '../../store/actions/UserAction'
import { AppendImageToPost, SetUserId, SetPostId, AddCompletePost, FirstImageSubmit, ResetImageForm } from '../../store/actions/ImageAction'

const state = ({ userState, postImageFormState }) => {
    return { userState, postImageFormState }
}

const action = (dispatch) => {
    return {
        setPostId: (postId) => dispatch(SetPostId(postId)),
        setUserId: (userId) => dispatch(SetUserId(userId)),
        setFirstSubmit: () => dispatch(FirstImageSubmit()),
        resetForm: () => dispatch(ResetImageForm()),
        fetchUserPost: (userId) => dispatch(GetOneUserPosts(userId)),
        setNewPostWImage: (formData) => dispatch(AddCompletePost(formData)),
        createImage: (formName, formValue) => dispatch(AppendImageToPost(formName, formValue))
    }
}
const AddImages = (props) => {
    
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
            post_id: props.userState.incomingNewPost.id,
            image: props.postImageFormState.image
        }
        props.setNewPostWImage(formValue)
        props.setFirstSubmit()
    }

    const resetPostForm = () => {
        props.history.push(`/userdash`)
        props.resetForm()
    }

    return (
        <div className="component-container create-form">
            <h1 className='component-header form-title'>Add images to your post</h1>

            <form>
                <input
                    type="url"
                    name="image"
                    placeholder="upload an image (add image url)"
                    value={props.postImageFormState.image}
                    onChange={handleChange}
                    className="create-input"
                />
                <br></br>
                <input
                    type="hidden"
                    name="post_id"
                />

                <div>
                    {props.postImageFormState.firstSubmit ?
                    <div className="images-bttn">
                        {/* <button className="gen-bttn create-bttn" onClick={() => props.history.push(`/userdash`)}>Return to Dash</button> */}
                        <button className="gen-bttn create-bttn" onClick={resetPostForm}>Return to Dash</button>
                        <button className="gen-bttn create-bttn" onClick={handleSubmit}>Add More Image</button>
                    </div>
                    :
                    <button className="gen-bttn create-bttn" onClick={handleSubmit}>Submit</button>
                    } 
                </div>
            </form>
        </div>
    )
}

export default connect(state,action)(AddImages)
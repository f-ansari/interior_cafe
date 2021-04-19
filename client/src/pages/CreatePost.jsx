import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CreateNewPost, AddPost, SetId } from '../store/actions/PostActions'
import '../style/CreatePost.css'

const state = ({ userState, postFormState }) => {
    return{ userState, postFormState }
}

const action = (dispatch) => {
    return {
        setUserId: (userId) => dispatch(SetId(userId)),
        setAddPost: (formData) => dispatch(AddPost(formData)),
        createAPost: (formName, formValue) => dispatch(CreateNewPost(formName, formValue))
    }
}

const CreatePost = (props) => {

    const handleChange = (e) => {
        props.createAPost(e.target.name, e.target.value)
    }

    const handleSubmit = () => {
        props.setAddPost(props.postFormState)
        props.history.push("/add/image")
    }

    useEffect(() => {
        props.setUserId(props.userState.userId)
        //eslint-disable-next-line
      }, [])

    return (
        <div className="component-container create-form">
            <h1 className='component-header form-title'>Let's bring your vision to life...</h1>
            <form type="submit">
                <h4 className="component-text">put a bold statement</h4>
                <input
                type="text"
                name="title"
                placeholder="add a title"
                value={props.postFormState.title}
                onChange={handleChange}
                className="create-input"
                />
                <br></br>
                <h4 className="component-text">describe your vision</h4>
                <textarea 
                type="text"
                name="description"
                placeholder="add a description"
                value={props.postFormState.description}
                onChange={handleChange}
                className="create-input"
                maxLength="500"
                />
                <br></br>
                <button className="gen-bttn create-bttn" type="button" onClick={handleSubmit}>Create a Post</button>
            </form>
        </div>
    )
} 
 export default connect(state,action)(CreatePost)
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
            <h1>Let's bring your vision to life...</h1>
            <form type="submit" >
                <input
                type="text"
                name="title"
                placeholder="add a title"
                value={props.postFormState.title}
                onChange={handleChange}
                />
                <br></br>
                <input 
                type="text"
                name="description"
                placeholder="add a description"
                value={props.postFormState.description}
                onChange={handleChange}
                />
                <br></br>
                <button type="button" onClick={handleSubmit}>Create a Post</button>
            </form>
        </div>
    )
} 
 export default connect(state,action)(CreatePost)
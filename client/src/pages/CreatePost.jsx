import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CreateNewPost, AddPost, SetId } from '../store/actions/PostActions'

const state = ({ userState, postFormState }) => {
    return{ userState, postFormState }
}

const action = (dispatch) => {
    return {
        createAPost: (formName, formValue) => dispatch(CreateNewPost(formName, formValue)),
        setAddPost: (formData) => dispatch(AddPost(formData)),
        setUserId: (userId) => dispatch(SetId(userId))
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
        <div>
            <h1>Here you will create a post</h1>
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
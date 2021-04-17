import React from 'react'
import { connect } from 'react-redux'
import { HandleLogin, LoginUser } from '../../store/actions/AuthAction'

const state = ({ userState, authState }) => {
    console.log(userState, authState)
    return { userState, authState }
}

const action = (dispatch) => {
    return {
        //put something
        setUser: (formName, formValue) => dispatch(HandleLogin(formName, formValue)),
        setLoginUser: (formData) => dispatch(LoginUser(formData))
    }
}

const Login = (props) => {

    const handleChange = (e) => {
        props.setUser(e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: props.authState.username,
            password_digest: props.authState.password_digest
        }
        props.setLoginUser(formData)
    }

    return (
        <div>
            <h1>Login Form</h1>
            
            <form type="submit" onSubmit={handleSubmit}>
                <input 
                type="text"
                name="username"
                placeholder="enter your username"
                value={props.authState.username}
                onChange={handleChange}
                />
                <br></br>
                <input
                type="password"
                name="password_digest"
                placeholder="enter your password"
                value={props.authState.password_digest}
                onChange={handleChange}
                />
                <br></br>
                <button>Login</button>
            </form>

        </div>
    )
}

export default connect(state,action)(Login)
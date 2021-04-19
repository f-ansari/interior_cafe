import React from 'react'
import { connect } from 'react-redux'
import { HandleLogin, LoginUser } from '../../store/actions/AuthAction'
import '../../style/Auth.css'

const state = ({ userState, authState }) => {
    return { userState, authState }
}

const action = (dispatch) => {
    return {
        setLoginUser: (formData) => dispatch(LoginUser(formData)),
        setUser: (formName, formValue) => dispatch(HandleLogin(formName, formValue))
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
        props.history.push('/userdash')
    }

    return (
        <div className="component-container create-form">
            <h1 className='component-header form-title'>Login to make wonders!</h1>
            
            <form type="submit" onSubmit={handleSubmit}>
                <input 
                type="text"
                name="username"
                placeholder="enter your username"
                value={props.authState.username}
                onChange={handleChange}
                className="create-input auth-input"
                />
                <br></br>
                <input
                type="password"
                name="password_digest"
                placeholder="enter your password"
                value={props.authState.password_digest}
                onChange={handleChange}
                className="create-input auth-input"
                />
                <br></br>
                <button className="gen-bttn create-bttn">Login</button>
            </form>

        </div>
    )
}

export default connect(state,action)(Login)
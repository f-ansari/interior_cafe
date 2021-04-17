import React from 'react'
import { connect } from 'react-redux'
import { CreateANewUser, SetAddUser } from '../../store/actions/AuthAction'

const state = ({ authState }) => {
    return { authState }
}

const action = (dispatch) => {
    return {
        setAddUser: (formData) => dispatch(SetAddUser(formData)),
        setUser: (formName, formValue) => dispatch(CreateANewUser(formName, formValue))
    }
}

const Register = (props) => {

    const handleChange = (e) => {
        props.setUser(e.target.name, e.target.value)
    }

    const handleSubmit = () => {
        props.setAddUser(props.authState)
        props.history.push(`/login`)
    }

    return (
        <div>
            <h1>Register Form</h1>

            <form type="submit" onSubmit={handleSubmit}>
                <input
                type="text"
                name="first_name"
                placeholder="enter first name"
                value={props.authState.first_name}
                onChange={handleChange}
                />
                <br></br>
                <input 
                type="text"
                name="last_name"
                placeholder="enter last name"
                value={props.authState.last_name}
                onChange={handleChange}
                />
                <br></br>
                <input
                type="text"
                name="username"
                placeholder="enter a username"
                value={props.authState.username}
                onChange={handleChange}
                />
                <br></br>
                <input 
                type="email"
                name="email"
                placeholder="enter an email"
                value={props.authState.email}
                onChange={handleChange}
                />
                <br></br>
                <input
                type="password"
                name="password_digest"
                placeholder="enter a password"
                value={props.authState.password_digest}
                onChange={handleChange}
                />
                <br></br>
                <button>Register</button>
            </form>

        </div>
    )
}

export default connect(state,action)(Register)
import React from 'react'
import { Link, NavLink , useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import { SetLogout } from '../../store/actions/UserAction'

const state = ({ userState }) => {
    return { userState}
}

const action = (dispatch) => {
    return {
        setLogout: () => dispatch(SetLogout())
    }
}
const Authenticated = (props) => {
    const history = useHistory()
    const logout = () => {
        props.setLogout()
        localStorage.clear()
        history.push('/')
    }

    return (
        <div>
            <nav>
                <NavLink className="bar-2" to='/feed'>Feed</NavLink>
                <NavLink className="bar-2" to='/create/post'>Create Post</NavLink>
                <NavLink className="bar-2" to='/userdash'>UserDash</NavLink>
                <Link onClick={logout}>Logout</Link>
            </nav>
        </div>
    )
}

export default connect(state,action)(Authenticated) 
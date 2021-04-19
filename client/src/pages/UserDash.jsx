import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOneUserPosts } from '../store/actions/UserAction'
import UserPosts from '../components/user_dash/UserPosts'
import '../style/UserDash.css'

const state = ({ userState }) => {
    return { userState }
}

const action = (dispatch) => {
    return {
        fetchUserPost: (userId) => dispatch(GetOneUserPosts(userId))
    }
}

const UserDash = (props) => {

    const userId = props.userState.userId
    useEffect(() => {
        props.fetchUserPost(userId)
        // eslint-disable-next-line
    }, [userId])
 
    return (
        <div className="component-container">
            <h1 className='component-header'>User Dash</h1>
            {props.userState ?
            <div>
                <h2 className='component-header'>Welcome {props.userState.firstName} {props.userState.lastName} to your Dashboard</h2>
                <UserPosts
                {...props}
                userPosts={props.userState.userPosts}
                />
            </div> : null}
        </div>
    )
}

export default connect(state,action)(UserDash)
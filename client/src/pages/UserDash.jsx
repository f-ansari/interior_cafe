import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOneUserPosts } from '../store/actions/UserAction'
import UserPosts from '../components/user_dash/UserPosts'

const state = ({ userState }) => {
    // console.log( user)
    return {userState}
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
        <div>
            <h1>User Dash</h1>
            {props.userState ?
            <div>
                <h2>Hello {props.userState.firstName} {props.userState.lastName}</h2>
                <UserPosts
                {...props}
                userPosts={props.userState.userPosts}
                />
            </div> : null}
        </div>
    )
}

export default connect(state,action)(UserDash)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetOneUserPosts } from '../store/actions/UserAction'
import UserPosts from '../components/user_dash/UserPosts'
const userId = 1

const state = ({ userState }) => {
    return {userState}
}

const action = (dispatch) => {
    return {
        fetchUserPost: (userId) => dispatch(GetOneUserPosts(userId))
    }
}

const UserDash = (props) => {
    useEffect(() => {
        props.fetchUserPost(userId)
    }, [])
    console.log(props)
    
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
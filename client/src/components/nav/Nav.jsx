import React from 'react'
import Public from './Public'
import Authenticated from './Authenticated'
import { NavLink } from 'react-router-dom'
import{ connect } from 'react-redux'

const state = ({ userState }) => {
    // console.log(userState)
    return { userState }
}

const action = (dispatch) => {
    return {
        //something
    }
}

const Nav = (props) => {
    return (
        <div>
            <nav className="bar">
                <h1 className="bar-1">InteriorCafé</h1>
                <NavLink className="bar-2" to='/'>Home</NavLink>
                
                { props.userState.authenticated ? (
                    <Authenticated />
                ):(
                    <Public />
                )}
            </nav>
        </div>
    )
}

export default connect(state,action)(Nav)
import React from 'react'
import '../../style/Nav.css'
import Public from './Public'
import Authenticated from './Authenticated'
import{ connect } from 'react-redux'

const state = ({ userState }) => {
    return { userState }
}

// const action = (dispatch) => {
//     return {}
// }

const Nav = (props) => {
    return (
        <div>
            <nav className="nav-container">
                <h1 className="bar-1">InteriorCafé</h1>
                <div className="bar-2-container">
                    { props.userState.authenticated ? (
                        <Authenticated />
                    ):(
                        <Public />
                    )}
                </div>
            </nav>
        </div>
    )
}

export default connect(state)(Nav)
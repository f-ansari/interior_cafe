import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <nav className="bar">
                <h1 className="bar-1">InteriorCafé</h1>
                <NavLink className="bar-2" to='/'>Home</NavLink>
                <NavLink className="bar-2" to='/feed'>Feed</NavLink>
                <NavLink className="bar-2" to='/userdash'>UserDash</NavLink>
                <NavLink className="bar-2" to='/create/post'>Create Post</NavLink>
                <NavLink className="bar-2" to='/login'>Login</NavLink>
                <NavLink className="bar-2" to='/register'>Register</NavLink>
            </nav>
        </div>
    )
}

export default Nav
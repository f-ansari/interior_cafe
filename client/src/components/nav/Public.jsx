import React from 'react'
import '../../style/Nav.css'
import { NavLink } from 'react-router-dom'

const Public = () => {
    return (
        <div>
            <nav>
            <NavLink className="bar-2" to='/'>Home</NavLink>
            <NavLink className="bar-2" to='/login'>Login</NavLink>
            <NavLink className="bar-2" to='/register'>Register</NavLink>
            </nav>
        </div>
    )
}

export default Public 
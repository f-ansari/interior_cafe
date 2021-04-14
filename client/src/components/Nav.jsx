import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav>
                <h1>InteriorCafé</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/feed'>Feed</NavLink>
            </nav>
        </div>
    )
}

export default Nav
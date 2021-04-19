import React from 'react'
import '../style/Home.css'

const Home = (props) => {
    return (
        <div className="component-container home-body create-form animate__animated animate__fadeInUp animate__delay-1s">
            <h1 className="header-title">InteriorCafé</h1>
            <h3 className="subtext">Original interior designs and architecture from all around the world.</h3>
            <h5 className="home-text">Welcome to InteriorCafé. A hub for interior designers to share the work to inspire other designers.<br></br>
            Sign up today to view elegant designs.</h5>

            <button className="gen-bttn create-bttn" onClick={() => props.history.push(`/register`)}>Register</button>
        </div>
    )
}

export default Home 

// animate__fadeInUp
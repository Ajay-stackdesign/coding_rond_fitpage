import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"

const Home = () => {
    return (
        <div className='home'>
            <h1><Link to="/page" className='link'>Please click Here to see stock market.</Link></h1>
        </div>
    )
}

export default Home
import React from 'react'
import '../styles/Home.css'
import BannerImage from '../assets/background.jpeg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Racoon Renegades</h1>
                <p>Strive to Perfection</p>
                <Link to='/events'>
                    <button>Events</button>
                </Link>

            </div>
        </div>
    )
}

export default Home
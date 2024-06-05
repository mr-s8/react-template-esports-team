import React, { useState } from 'react'
import Logo from '../assets/racoon.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/players">Players</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/players">Players</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>

            </div>
        </div>
    )
}

export default Navbar

// wenn größer als 600px muss der state auf false wieder
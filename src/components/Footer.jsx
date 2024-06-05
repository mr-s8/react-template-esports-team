import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer() {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <InstagramIcon /> <XIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
            <p>&copy; 2024 RacoonRenegades</p>
        </div>
    )
}

export default Footer
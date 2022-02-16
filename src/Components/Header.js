import React from 'react'
import './Header.css'

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>
            <img src="https://www.pngitem.com/pimgs/m/33-333622_tinder-icon-tinder-icon-png-transparent-png.png" alt="TinderLogo" className="header_logo" />
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon'/>
            </IconButton>


        </div>
    )
}

export default Header
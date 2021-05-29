import React from 'react'
import EcoIcon from '@material-ui/icons/Eco';

export const Sidenav = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><EcoIcon style={{ color: '#c3073f', fontSize: 50 }} /><a href='#'>kofi</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contect</a></li>
                <li><a href='#'>Privacy</a></li>
            </ul>
        </div>
    )
}

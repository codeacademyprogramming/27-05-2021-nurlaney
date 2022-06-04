import React from 'react'

export const Nav = ({ openDialog }) => {
    return (
        <nav className="navbar navbar-light">
            <button className='btn sort'>Finished orders</button>
            <button onClick={openDialog} className='btn add'>Add new order</button>
        </nav>
    )
}

import React from 'react'

export const Order = ({ order, coffee, handleRemoveOrder, handleClickOpenDialog, handleStatusChange }) => {
    return (
        <div className='order'>
            <span onClick={handleRemoveOrder} id={order.id} style={{ position: 'absolute', right: '30px', top: '34px', color: '#c3363f', cursor: 'pointer', fontWeight: 'bold' }} >X</span>
            <span onClick={handleClickOpenDialog} id={order.id} style={{ position: 'absolute', right: '50px', top: '34px', color: 'blue', cursor: 'pointer', fontWeight: 'bold' }}>edit</span>
            <div className='table-number'>
                <p>{order.tableNo}</p>
            </div>
            <div className='coffee'>
                <span>{coffee.name}</span>
                <span>{(coffee.price * order.count).toFixed(2)}$</span>
                <span>x{order.count}</span>
            </div>
            <div className='note'>
                <p>{order.note}</p>
            </div>
            <div className='status'>
                <select id={order.id} onChange={handleStatusChange} defaultValue={order.status}>
                    <option disabled={order.status === 'Done'}>Created</option>
                    <option disabled={order.status === 'Done'}>Preparing</option>
                    <option>Done</option>
                </select>
            </div>
        </div>
    )
}

import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export const Order = ({ order, coffee }) => {
    return (
        <div className='order'>
            <DeleteIcon style={{ position: 'absolute', right: '30px', top: '34px', color: '#c3363f', cursor: 'pointer' }} />
            <EditIcon style={{ position: 'absolute', right: '55px', top: '34px', color: 'blue', cursor: 'pointer' }} />
            <div className='table-number'>
                <p>{order.tableNo}</p>
            </div>
            <div className='coffee'>
                <span>{coffee.name}</span>
                <span>{coffee.price}$</span>
                <span>x{order.count}</span>
            </div>
            <div className='note'>
                <p> by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className='status'>
                <select defaultValue={order.status}>
                    <option disabled={order.status === 'Done'}>Created</option>
                    <option disabled={order.status === 'Done'}>Preparing</option>
                    <option>Done</option>
                </select>
            </div>
        </div>
    )
}

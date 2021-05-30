import React from 'react'
import EditIcon from '@material-ui/icons/Edit';

export const Order = ({ order, coffee, handleRemoveOrder }) => {
    return (
        <div className='order'>
            <span onClick={handleRemoveOrder} id={order.id} style={{ position: 'absolute', right: '30px', top: '34px', color: '#c3363f', cursor: 'pointer', fontWeight: 'bold' }} >X</span>
            <EditIcon style={{ position: 'absolute', right: '55px', top: '34px', color: 'blue', cursor: 'pointer' }} />
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
                <select defaultValue={order.status}>
                    <option disabled={order.status === 'Done'}>Created</option>
                    <option disabled={order.status === 'Done'}>Preparing</option>
                    <option>Done</option>
                </select>
            </div>
        </div>
    )
}

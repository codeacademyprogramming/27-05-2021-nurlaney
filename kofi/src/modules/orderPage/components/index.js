import '../styles/index.scss';
import React from 'react'
import { Sidenav } from './Sidenav'
import { Order } from './Order';

export const OrderPage = () => {
    return (
        <>
            <div className='row' style={{ marginRight: 0 }}>
                <div className='col-2' style={{ padding: 0 }}>
                    <Sidenav />
                </div>
                <div className='col-10' style={{ padding: 0 }}>
                    <div className='right'>
                        <div className='row'>
                            <div className='col-3'>
                                <Order />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

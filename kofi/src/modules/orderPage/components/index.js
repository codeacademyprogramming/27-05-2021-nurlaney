import '../styles/index.scss';
import React from 'react'
import { Sidenav } from './Sidenav'
import { Order } from './Order';
import { Nav } from './Nav';
import { useSelector } from 'react-redux';
import Loader from "react-loader-spinner";

export const OrderPage = () => {
    const orders = useSelector(state => state.orders);

    return (
        <>
            <div className='row' style={{ marginRight: 0 }}>
                <div className='col-2' style={{ padding: 0 }}>
                    <Sidenav />
                </div>
                <div className='col-10' style={{ padding: 0 }}>
                    <div className='right'>
                        <Nav />
                        {
                            orders.status === "LOADING" ?
                                (
                                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <Loader
                                            type="Grid"
                                            color="#6f2232"
                                            height={150}
                                            width={150}
                                            secondaryColor="#6f2232"
                                        />
                                    </div>
                                )
                                :
                                (
                                    <div className='row'>
                                        <div className='col-3'>
                                            <Order />
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

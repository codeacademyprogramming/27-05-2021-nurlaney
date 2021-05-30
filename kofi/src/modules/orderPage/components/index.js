import '../styles/index.scss';
import React, { useCallback, useState } from 'react'
import { Sidenav } from './Sidenav'
import { Order } from './Order';
import { Nav } from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "react-loader-spinner";
import { coffeeService } from '../coffeeService';
import { OrderOperations } from './OrderOperations';
import { addOrder } from '../actions/orderActions';

export const OrderPage = () => {
    const orders = useSelector(state => state.orders);
    const coffees = useSelector(state => state.coffees);
    const [openDialog, setOpenDidalog] = React.useState(false);
    const [formState, setformState] = useState({
        coffeeId: '',
        count: '',
        tableNo: '',
        note: ''
    });
    const dispatch = useDispatch();

    function handleChange(evt) {
        const { value, name } = evt.target
        setformState(prewState => {
            return {
                ...prewState,
                [name]: value
            }
        })
    }

    const handleClickOpenDialog = () => {
        setOpenDidalog(true);
    };

    const handleClickCloseDialog = () => {
        setOpenDidalog(false);
    };

    const handleAddDataToOrders = useCallback((e) => {
        e.preventDefault();
        const coffee = coffeeService.getCoffeeById(coffees.data, Number(formState.coffeeId));
        const payload = {
            ...formState,
            status: 'Created',
            price: Number(formState.count) * Number(coffee.price)
        };
        const editedPayload = {
            ...payload,
            coffeeId: Number(payload.coffeeId),
            count: Number(payload.count),
            tableNo: Number(payload.tableNo)
        }
        const dispatchAddOrder = addOrder(dispatch);
        dispatchAddOrder(editedPayload);
    }, [formState, dispatch, coffees.data]);

    return (
        <>
            <div className='row' style={{ marginRight: 0 }}>
                <OrderOperations handleChange={handleChange} formState={formState} handleAddDataToOrders={handleAddDataToOrders} coffees={coffees.data} openDialog={openDialog} closeDialog={handleClickCloseDialog} />
                <div className='col-2' style={{ padding: 0 }}>
                    <Sidenav />
                </div>
                <div className='col-10' style={{ padding: 0 }}>
                    <div className='right'>
                        <Nav openDialog={handleClickOpenDialog} />
                        {
                            orders.status === "LOADING" ?
                                (
                                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <Loader
                                            type="Grid"
                                            color="#6f2232"
                                            height={150}
                                            width={150}
                                        />
                                    </div>
                                )
                                :
                                (
                                    <div className='row'>
                                        {
                                            orders.data.map((order) => {
                                                const coffee = coffeeService.getCoffeeById(coffees.data, order.coffeeId);
                                                return (<div key={order.id} className='col-3'>
                                                    <Order order={order} coffee={coffee} />
                                                </div>)
                                            })
                                        }
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

import '../styles/index.scss';
import React, { useCallback, useState } from 'react'
import { Sidenav } from './Sidenav'
import { Order } from './Order';
import { Nav } from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "react-loader-spinner";
import { coffeeService } from '../coffeeService';
import { OrderOperations } from './OrderOperations';
import { addOrder, removeOrder, updateOrder } from '../actions/orderActions';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const OrderPage = () => {
    const orders = useSelector(state => state.orders);
    const coffees = useSelector(state => state.coffees);
    const [openDialog, setOpenDidalog] = React.useState(false);
    const [selectedOrder, setselectedOrder] = useState(null);
    const [formState, setformState] = useState({
        coffeeId: '',
        count: '',
        tableNo: '',
        note: ''
    });
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);
    const coffee = coffeeService.getCoffeeById(coffees.data, Number(formState.coffeeId));
    const [, setShowAlert] = useState(null);


    const handleStatusChange = (e) => {
        const order = orders.data.find(order => order.id === Number(e.target.id));
        const payload = {
            id: e.target.id,
            status: e.target.value,
            price: order.price,
            coffeeId: order.coffeeId,
            count: order.count,
            tableNo: order.tableNo,
            note: order.note
        }
        const dispatchUpdateOrder = updateOrder(dispatch);
        dispatchUpdateOrder(payload);
    }


    const showPopup = () => {
        setShowAlert({
            alert: (
                MySwal.fire({
                    didOpen: () => {
                        MySwal.clickConfirm()
                    }
                }).then(() => {
                    return MySwal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Saved successfully !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            )
        })
    }

    function handleChange(evt) {
        const { value, name } = evt.target
        setformState(prewState => {
            return {
                ...prewState,
                [name]: value
            }
        })
    }

    const handleRemoveOrder = useCallback((e) => {
        const payload = e.target.id;
        const dispatchRemoveOrder = removeOrder(dispatch);
        dispatchRemoveOrder(payload);
    }, [dispatch]);

    const handleClickOpenDialog = (e) => {
        setOpenDidalog(true);
        if (e.target.id) {
            const editedOrder = orders.data.find(order => order.id === Number(e.target.id));
            setformState({
                ...formState,
                coffeeId: editedOrder.coffeeId,
                count: editedOrder.count,
                tableNo: editedOrder.tableNo,
                note: editedOrder.note
            });
            setselectedOrder(Number(e.target.id));
        } else {
            setformState({
                ...formState,
                coffeeId: '',
                count: '',
                tableNo: '',
                note: ''
            })
            setselectedOrder(null);
        }
    };

    const handleClickCloseDialog = () => {
        setOpenDidalog(false);
    };

    const handleAddDataToOrders = useCallback((e) => {
        e.preventDefault();
        if (selectedOrder === null) {
            const payload = {
                ...formState,
                status: 'Created',
                price: Number(formState.count) * Number(coffee.price),
                coffeeId: Number(formState.coffeeId),
                count: Number(formState.count),
                tableNo: Number(formState.tableNo)
            };
            const dispatchAddOrder = addOrder(dispatch);
            dispatchAddOrder(payload);
        } else {
            const payload = {
                ...formState,
                id: selectedOrder,
                status: 'Created',
                price: Number(formState.count) * Number(coffee.price),
                coffeeId: Number(formState.coffeeId),
                count: Number(formState.count),
                tableNo: Number(formState.tableNo)
            }
            const dispatchUpdateOrder = updateOrder(dispatch);
            dispatchUpdateOrder(payload);
            showPopup();
        }
        setOpenDidalog(false);
        setformState({
            ...formState,
            coffeeId: '',
            count: '',
            tableNo: '',
            note: ''
        })
    }, [formState, dispatch, coffees.data, selectedOrder]);

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
                                            orders.data.map((order, idx) => {
                                                const coffee = coffeeService.getCoffeeById(coffees.data, order.coffeeId);
                                                return (<div key={idx} className='col-3'>
                                                    <Order handleStatusChange={handleStatusChange} handleClickOpenDialog={handleClickOpenDialog} handleRemoveOrder={handleRemoveOrder} order={order} coffee={coffee} />
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

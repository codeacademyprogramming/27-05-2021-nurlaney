import { orderService } from "../orderService";
import { ORDER_ACTIONS } from "../../../redux/consts";

export function getOrder(dispatch) {
    dispatch({ type: ORDER_ACTIONS.GET_ORDER })
    orderService.getOrder().then(({ data }) => {
        dispatch({
            type: `${ORDER_ACTIONS.GET_ORDER}_SUCCESS`,
            payload: data
        })
    }).catch((err) => {
        dispatch({
            type: `${ORDER_ACTIONS.GET_ORDER}_ERROR`,
            error: err,
        })
    })
}

export function addOrder(dispatch) {
    dispatch({
        type: ORDER_ACTIONS.ADD_ORDER
    })
    return function (data) {
        orderService.addOrder(data)
            .then(resp => {
                dispatch({
                    type: `${ORDER_ACTIONS.ADD_ORDER}_SUCCESS`,
                    payload: data,
                })
            })
            .catch(err => dispatch({
                type: `${ORDER_ACTIONS.ADD_ORDER}_ERROR`,
                error: err
            }))
    }
}

export function removeOrder(dispatch) {
    return function (data) {
        orderService.removeOrder(data)
            .then(resp => {
                dispatch({
                    type: `${ORDER_ACTIONS.REMOVE_ORDER}_SUCCESS`,
                    payload: Number(data),
                })
            })
            .catch(err => dispatch({
                type: `${ORDER_ACTIONS.REMOVE_ORDER}_ERROR`,
                error: err
            }))
    }
}

export function updateOrder(dispatch) {
    return function (data) {
        orderService.updateOrder(data)
            .then(resp => {
                dispatch({
                    type: `${ORDER_ACTIONS.UPDATE_ORDER}_SUCCESS`,
                    payload: data,
                })
            })
            .catch(err => dispatch({
                type: `${ORDER_ACTIONS.UPDATE_ORDER}_ERROR`,
                error: err
            }))
    }
}
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
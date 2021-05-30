import { coffeeService } from "../coffeeService";
import { COFFEE_ACTIONS } from "../../../redux/consts";

export function getCoffe(dispatch) {
    dispatch({ type: COFFEE_ACTIONS.GET_COFFEE })
    coffeeService.getCoffee().then(({ data }) => {
        dispatch({
            type: `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`,
            payload: data
        })
    }).catch((err) => {
        dispatch({
            type: `${COFFEE_ACTIONS.GET_COFFEE}_ERROR`,
            error: err,
        })
    })
}
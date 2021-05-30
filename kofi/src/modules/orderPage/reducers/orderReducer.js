import { ORDER_ACTIONS, ASYNC_STATUS } from '../../../redux/consts';

const initialState = {
    data: [],
    error: null,
    status: ASYNC_STATUS.IDLE
}

export function orderReducer(state = initialState, { type, payload, error }) {
    switch (type) {
        case ORDER_ACTIONS.GET_ORDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null
            };
        case `${ORDER_ACTIONS.GET_ORDER}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: payload,
                error: null
            };
        case `${ORDER_ACTIONS.GET_ORDER}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: error
            }
        default:
            return state
    }
}
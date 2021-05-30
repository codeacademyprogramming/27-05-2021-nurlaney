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
            };
        case ORDER_ACTIONS.ADD_ORDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                error: null
            };
        case `${ORDER_ACTIONS.ADD_ORDER}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: [
                    ...state.data,
                    payload
                ],
                error: null
            };
        case `${ORDER_ACTIONS.ADD_ORDER}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                data: [],
                error: error
            }
        case ORDER_ACTIONS.REMOVE_ORDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                error: null
            };
        case `${ORDER_ACTIONS.REMOVE_ORDER}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: state.data.filter(item => item.id !== payload),
                error: null
            };
        case `${ORDER_ACTIONS.REMOVE_ORDER}_ERROR`:
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
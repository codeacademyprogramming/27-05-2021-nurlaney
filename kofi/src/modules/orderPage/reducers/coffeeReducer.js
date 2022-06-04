import { COFFEE_ACTIONS, ASYNC_STATUS } from '../../../redux/consts';

const initialState = {
    data: [],
    error: null,
    status: ASYNC_STATUS.IDLE
}

export function coffeReducer(state = initialState, { type, payload, error }) {
    switch (type) {
        case COFFEE_ACTIONS.GET_COFFEE:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null
            };
        case `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: payload,
                error: null
            };
        case `${COFFEE_ACTIONS.GET_COFFEE}_ERROR`:
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
import { createStore, combineReducers } from 'redux';
import { coffeReducer } from '../modules/orderPage/reducers/coffeeReducer';
import { orderReducer } from '../modules/orderPage/reducers/orderReducer';



const reducers = combineReducers({
    orders: orderReducer,
    coffees: coffeReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
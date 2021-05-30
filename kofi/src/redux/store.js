import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { coffeReducer } from '../modules/orderPage/reducers/coffeeReducer';
import { orderReducer } from '../modules/orderPage/reducers/orderReducer';
import thunk from 'redux-thunk';



const reducers = combineReducers({
    orders: orderReducer,
    coffees: coffeReducer
});

const middlewares = [
    thunk
];

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

export const store = createStore(reducers, enhancer);
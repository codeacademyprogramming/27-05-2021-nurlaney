import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { getCoffe } from './modules/orderPage/actions/coffeActions';
import { getOrder } from './modules/orderPage/actions/orderActions';
import { OrderPage } from './modules/orderPage/components';
import {
  BrowserRouter as
    Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCoffe(dispatch);
    getOrder(dispatch);
  }, [dispatch])
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <OrderPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

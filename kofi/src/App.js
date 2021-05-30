import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { getCoffe } from './modules/orderPage/actions/coffeActions';
import { OrderPage } from './modules/orderPage/components';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCoffe(dispatch);
  }, [dispatch])
  return (
    <OrderPage />
  );
}

export default App;

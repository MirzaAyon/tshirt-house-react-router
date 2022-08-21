
import './App.css';
import Home from './comonents/Home/Home';
import Header from './comonents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './comonents/OrderReview/OrderReview';
import Grandpa from './comonents/GrandPa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;

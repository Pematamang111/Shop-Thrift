import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/cart/Cart';
import { ProductItem } from './components/productItem/ProductItem';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
          <Cart/>
         <ProductItem />
          </>
        }/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;

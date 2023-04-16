import logo from './logo.svg';
import './App.css';

//containers
import Products from "./containers/Products";
import Cart from './containers/Cart';
import Login from './containers/Login';
import LoginForm from './containers/LoginForm';
import Checkout from "./containers/Checkout";

//router
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/Products' element={<Products />} />
        <Route exact path='/Cart' element={<Cart />} />
        <Route exact path='/Checkout' element={<Checkout />} />
         
        
      </Routes>
    </Router>
  );
}

export default App;


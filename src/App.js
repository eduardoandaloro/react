
import './App.css';
import CheckoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import SignIn from './components/Signin';
import SignUp from './components/Signup';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/signin">
         <SignIn/>
       </Route>
      <Route path="/signup">
         <SignUp/>
       </Route>
      <Route path="/checkout-page">
         <CheckoutPage/>
       </Route>
       <Route path="/">
         <Products/>
       </Route>
      </Switch>
    </div>
    </Router>
   
  );
}

export default App;

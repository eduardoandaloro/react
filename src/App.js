import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header/Header"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';


    function App() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route path="/detail/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        );
    }
     
   
   
 

export default App;


import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/home/Home';
import { Phones } from './components/ProductsMobiles/Phones';
import { Laptop } from './components/Laptopsdata/Laptop';
import { Television } from './components/television/Tvdatas';
import { Fridges } from './components/fridgedata/Fridge';
import { Productdetails } from './components/Productdetails/Productdetails';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Routes> 
       
          <Route index element={<Home/>}/>
          <Route path='phones' element={<Phones/>}/>
          <Route path='laptops' element={<Laptop/>}/>
          <Route path='tvs' element={<Television/>}/>
          <Route path='fridge' element={<Fridges/>}/>
          <Route path="/productdetails/:productId" Component={Productdetails}/>



       
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;

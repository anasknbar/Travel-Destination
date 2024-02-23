
import './App.css';
import Home from './Components/Home/Home'
import {  Routes, Route  } from 'react-router-dom';
import TourDetail from './Components/TourDetails/TourDetail';
import Header from './Components/Header/Header';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path="/city/:id" element={<TourDetail/>} />
      <Route path="/TourDetail/:id" element={<TourDetail/>} />

    </Routes>
  );
};



export default App;

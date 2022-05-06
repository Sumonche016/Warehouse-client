import React from 'react';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CreateUser from './Components/CreateUser/CreateUser';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<CreateUser></CreateUser>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
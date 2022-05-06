import React from 'react';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CreateUser from './Components/CreateUser/CreateUser';
import LogIn from './Components/LogIn/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetail from './Components/ServiceDetails/ServiceDetail';
import RequireAuth from './Components/LogIn/RequireAuth/RequireAuth';




const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<CreateUser></CreateUser>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>





        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
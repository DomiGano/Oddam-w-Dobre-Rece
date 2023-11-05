import { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { Logout } from './components/Logout';


export const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='registration' element={<Registration/>}/>
          <Route path='/logout' element={<Logout/>}/>          
        </Routes>
      </BrowserRouter>
  )
}
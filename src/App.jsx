import { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Registration } from './components/Registration';


export const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='registration' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
  )
}
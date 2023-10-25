import { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { Home } from './components/Home';


export const App = () => {

  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </HashRouter>
  )
}

export default App

import React from 'react'
import Logo from './Components/Logo'
import {Route, Routes} from 'react-router-dom'
import Users from './Routes/User'
import Userinfor from './Routes/Userinfor'


const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="text-gray-200 py-3">
        <Logo/>
        <Routes>
        <Route path='' element={<Users/>} />
        <Route path='/:name' element={<Userinfor/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App

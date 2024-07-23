import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/Navbar/Navbar.jsx'
import Api from './Api/Api'
import Profile from './Component/Profile/Profile.jsx';

function App() {
  return (
    <div className='bg-dark vh-min-100 container-fluid'>
      <div className='mb-5 '>
        <NavBar />
      </div>

      <div className="">
        <Profile />
      </div>

      <Api />
    </div>
  )
}

export default App
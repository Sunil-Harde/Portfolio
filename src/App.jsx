import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/Navbar/Navbar.jsx'
import Api from './Api/Api'
import Profile from './Component/Profile/Profile.jsx';

function App() {
  return (
    <div className='bg-dark vh-min-100 main '>

      <div className=' ' style={{marginTop:"3rem",paddingTop:"5rem"}}>
        <NavBar />
      </div>

      <div className='container-fluid'>

        <div className="">
          <Profile />
        </div>

      </div>
    </div>
  )
}

export default App
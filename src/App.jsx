import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/Navbar/Navbar.jsx'
import Api from './Api/Api'
import Profile from './Component/Profile/Profile.jsx';
import Skill from './Component/Skills/Skill.jsx';


function App() {
  return (
    <div className='bg-dark vh-min-100'>

      <div className=' ' style={{marginTop:"3rem",paddingTop:"5rem"}}>
        <NavBar />
      </div>

      <div className='container-fluid'>

        <div className="" style={{marginBottom:"3rem"}}>
          <Profile />
        </div> 
        <div className="" >
          <Skill />
        </div> 

      </div>
    </div>
  )
}

export default App
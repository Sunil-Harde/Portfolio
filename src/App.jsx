import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/Navbar/Navbar.jsx'
import Profile from './Component/Profile/Profile.jsx';
import Skill from './Component/Skills/Skill.jsx';
import Projects from './Component/Projects/Projects.jsx';
import Contacts from './Component/Contacts/Contacts.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Component/Footer/Footer.jsx';


function App() {


    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
      });
    }, []);
  

  return (
    <div className='bg-dark vh-min-100 ' >

      <div className=' '  style={{ marginTop: "3rem", paddingTop: "5rem" }}>
        <NavBar />
      </div>

      <div className='container-fluid'>

        <div className="" style={{ marginBottom: "3rem" }}>
          <Profile />
        </div>

        <div className="" >
          <Skill />
        </div>

        <div className="" >
          <Projects />
        </div>

        <div className="" >
          <Contacts />
        </div>

        <div className="" >
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default App
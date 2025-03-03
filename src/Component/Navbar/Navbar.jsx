import React, { useState } from 'react'
import './Navbar.css'
import DarkMode from '../Dark_Mode/light_dark'
function NavBar() {

    const [navClick, setNavClick] = useState(true)


    return (
        <div>

            <div className={navClick ? "nav shadow-sm d-flex fixed-top px-5 align-items-center justify-content-between fixed-top text-light" : " nav-click shadow-sm d-flex fixed-top px-5 bg-dark align-items-center justify-content-between fixed-top text-light"}>

                <div className="logo d-flex" data-aos="fade-down" data-aos-duration="1000">
                    <h4>Web <span className=''>Dev</span></h4>
                </div>

                <div className="nav-items d-flex flex-column flex-md-row  align-items-md-center gap-4 ">
                    <p onClick={() => window.scrollTo(0, 0)} data-aos="fade-down" data-aos-duration="1200">Home</p>
                    <p onClick={() => window.scrollTo(0, 550)} data-aos="fade-down" data-aos-duration="1400">Skill</p>
                    <p onClick={() => window.scrollTo(0, 1220)} data-aos="fade-down" data-aos-duration="1600">Projects</p>
                    <p data-aos="fade-down" data-aos-duration="1800">Contact</p>

                </div>
                <div className={'darkMode-button position-fixed'} data-aos="fade-down" data-aos-duration="1700">
                    <DarkMode />
                </div>


                <div className="lines d-flex d-md-none flex-column" onClick={() => setNavClick(!navClick)} data-aos="fade-down" data-aos-duration="1700">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

            </div>
        </div>
    )
}

export default NavBar
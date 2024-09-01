import React, { useState } from 'react'
import { Switch, FilledInput } from '@mui/material'
import './Navbar.css'
function NavBar() {

    const [navClick, setNavClick] = useState(true)


    return (
        <div>
            <div className=''>

                <div className={navClick ? "nav shadow-sm d-flex fixed-top px-5 bg-dark align-items-center justify-content-between fixed-top text-light" : " nav-click shadow-sm d-flex fixed-top px-5 bg-dark align-items-center justify-content-between fixed-top text-light"}>

                    <div className="logo d-flex">
                        <h4>Web <span className='text-info'>Dev</span></h4>
                    </div>

                    <div className="nav-items text-bg-dark d-flex flex-column flex-md-row  align-items-md-center  justify-content-center gap-4 ">
                        <p onClick={()=>window.scrollTo(0, 0)}>Home</p>
                        <p onClick={()=>window.scrollTo(0, 550)}>Skill</p>
                        <p onClick={()=>window.scrollTo(0, 1220)}>Projects</p>
                        <p>Contact</p>
                    </div>

                    <div className="lines d-flex d-md-none flex-column" onClick={() => setNavClick(!navClick)} >
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default NavBar
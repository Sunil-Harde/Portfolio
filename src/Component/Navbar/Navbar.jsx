import React, { useState } from 'react'
import { Switch, FilledInput } from '@mui/material'
import './Navbar.css'
function NavBar() {

    const [navClick,setNavClick]=useState(true)


    return (
        <div>
            <div className='container-fluid '>

                <div className=  {navClick ?"nav d-flex  align-items-center justify-content-between text-light" : " nav-click d-flex  align-items-center justify-content-between text-light"}>
                    <div className="logo d-flex">
                        <h4>Web <span className='text-info'>Dev</span></h4>

                    </div>

                    <div className="nav-items text-bg-dark d-flex flex-column flex-md-row  align-items-md-center  justify-content-center gap-4 ">
                        <p>Home</p>
                        <p>Skill</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>

                        <div className="lines d-flex d-md-none flex-column" onClick={()=>setNavClick(!navClick)} >
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>




                </div>
            </div>
        </div>
    )
}

export default NavBar
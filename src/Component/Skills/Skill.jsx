import React from 'react'
import Border from '../../Sub_Component/Line/Border'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faCss3, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons' // Import the faJs icon
import Skillsdata from './Skillsdata'

import './Skill.css'

function Skill() {
    return (
        <div className='container-fluid min-vh-100 skills-main' style={{ marginTop: "-10rem" }}>
            <div className="skills-heading d-flex flex-column align-items-center justify-content-center text-light mb-5">
                <h1 className='mb-3'>Skills</h1>
                <h4>My <span>Skills</span></h4>
            </div>

            <div className="skills row">
                <div className="skill-icon col-2 d-flex flex-column ">
                    <FontAwesomeIcon icon={faHtml5} className='m-4' size="3x" color="#f06529" />
                    <FontAwesomeIcon icon={faCss3} className='m-4' size="3x" color="#2965f1" />
                    <FontAwesomeIcon icon={faJs} className='m-4' size="3x" color="#f0db4f" />
                    <FontAwesomeIcon icon={faReact} className='m-4' size="3x" color="#61dbfb" />
                    <FontAwesomeIcon icon={faBootstrap} className='m-4' size="3x" color="#563d7c" />
                </div>

                <div className="col-9  skills-data text-light  ">
                    <div className="row">
                        {Skillsdata.map((data) => (
                            <div key={data.key} className='card col-4 border-0 my-2  bg-dark text-light '>
                                <div className='card-header d-flex justify-content-between align-items-center'>
                                    <h4>{data.skillName}</h4>
                                    <h4>{data.skillProgress}</h4>
                                </div>

                                <div className='card-body'>
                                    <p>{data.skillDeatils}</p>
                                </div>

                                <div className="line" style={{}}>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-1">
                    <div className='border1'>
                        <Border />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill

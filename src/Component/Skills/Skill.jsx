import React from 'react'
import Border from '../../Sub_Component/Line/Border'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faCss3, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons' // Import the faJs icon
import Skillsdata from './Skillsdata'

import './Skill.css'

function Skill() {
    return (
        <div className='container-fluid skills-main '>
            <div className="main-heading d-flex flex-column align-items-center justify-content-center mb-4" data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                <h1 className='my-3' >Skills</h1>
                <h4 > My <span >Skills</span></h4>
            </div>

            <div className="skills row d-flex align-items-center justify-content-center">
                <div className="skill-icon col-md-2 d-flex flex-md-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faHtml5} className='m-4 ' size="3x" color="#f06529" data-aos="fade-right" data-aos-duration="1600" data-aos-delay="600"/>
                    <FontAwesomeIcon icon={faCss3} className='m-4' size="3x" color="#2965f1" data-aos="fade-right" data-aos-duration="1600" data-aos-delay="700"/>
                    <FontAwesomeIcon icon={faJs} className='m-4' size="3x" color="#f0db4f" data-aos="fade-right" data-aos-duration="1600" data-aos-delay="800"/>
                    <FontAwesomeIcon icon={faReact} className='m-4' size="3x" color="#61dbfb" data-aos="fade-right" data-aos-duration="1600" data-aos-delay="900" />
                    <FontAwesomeIcon icon={faBootstrap} className='m-4' size="3x" color="#563d7c" data-aos="fade-right" data-aos-duration="1600" data-aos-delay="1000" />
                </div>

                <div className="col-md-10 col-lg-9 col-sm-12 col-12  skills-data text-light d-flex align-items-center justify-content-center ">
                    <div className="row">
                        {Skillsdata.map((data) => (
                            <div key={data.key} className='card col-6 col-md-4 col-lg-4  col-xxl-2 border-0 my-4 '>
                                <div className='card-header d-flex justify-content-between align-items-center'>
                                    <h4 className='me-1' data-aos="fade-down" data-aos-duration="1400" data-aos-delay="300">{data.skillName}</h4>
                                    <h4 data-aos="fade-down" data-aos-duration="1400" data-aos-delay="300">{data.skillcardwidth}%</h4>
                                </div>

                                <div className='card-body'>
                                    <p data-aos="fade-down" data-aos-duration="1600" data-aos-delay="400">{data.skillDeatils}</p>
                                </div>

                                <div className="line" style={{}} data-aos="fade-down" data-aos-duration="1600" data-aos-delay="500">
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-1" data-aos="fade-down" data-aos-duration="1600" data-aos-delay="800">
                    <div className='right-border1'>
                        <Border />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill

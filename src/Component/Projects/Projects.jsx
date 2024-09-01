import React, { useState } from 'react';
import Border from '../../Sub_Component/Line/Border';
import ProjectsData from './ProjectsData';

import './projects.css';

function Projects() {


    return (
        <div className=' skills-main'>
            <div className="main-heading d-flex flex-column align-items-center justify-content-center text-light mb-4">
                <h1 className='my-3'>Projects</h1>
                <h4>My <span>Projects</span></h4>
            </div>
            <div className="projects row">
                <div className="col-1">
                    <div className='left-border1 mt-4'>
                        <Border />
                    </div>
                </div>

                <div className="cards col-12 col-md-11 col-lg-10">
                    <div className="row">
                        {ProjectsData.map((data) => (
                            <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                                <div className="card rounded-4 bg-dark">
                                    <div className='card-header d-flex justify-content-between align-items-center'>
                                        <h4 className='mt-1 '>{data.projectName}</h4>
                                        <p className={`border p-1 rounded-5 mt-3 text-center ${data.projectStatus == "Completed" ? "text-primary ": "text-danger"}   `} style={{ fontSize: "12px", width: "5rem" }}>{data.projectStatus}</p>

                                    </div>

                                    <div className='card-body py-0'>
                                        <img className='my-2 rounded-3' src={data.projectIMG} alt={data.projectName} />

                                        
                            


                                        <p>{data.projectDetails}</p>
                                        <div className="d-flex justify-content-between mb-2" >
                                            <a href={data.projectLink} className='' style={{ fontSize: "17px" }}>Visit Website</a>
                                            <a href={data.projectCode} className='' style={{ fontSize: "17px" }}>View Code</a>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <div className="lag row">
                                            {data.usedLanguage.map((language, index) => (
                                                <div key={index} className='col-3 col-xs-3 col-sm-4 col-md-4 col-xl-3'>
                                                    <p className=' px-1 border border-info rounded-3'>{language}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;

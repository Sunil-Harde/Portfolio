import React from 'react';
import ProjectsData from './ProjectsData';

import './projects.css';

function Projects() {


    return (
        <div className='  skills-main mt-5 '>
            <div className="main-heading d-flex flex-column align-items-center justify-content-center mb-4" data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                <h1 className='my-3' >Projects</h1>
                <h4>My <span>Projects</span></h4>
            </div>
            <div className="projects row">


                <div className="cards col-12 col-md-12 col-lg-12">
                    <div className="row">
                        {ProjectsData.map((data) => (
                            <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3 mb-4">
                                <div className="card rounded-4 bg-dark ">
                                    <div className='card-header py-0 d-flex justify-content-between align-items-center' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="100">
                                        <h4 className='mt-1 '>{data.projectName}</h4>
                                        <p className={`border p-1 rounded-5 mt-3 text-center ${data.projectStatus == "Completed" ? "text-info" : "text-danger"}   `} style={{ fontSize: "12px", width: "5rem" }}>{data.projectStatus}</p>
                                    </div>

                                    <div className='card-body py-0' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                                        <img className='my-2 rounded-3 w-100' src={data.projectIMG} alt={data.projectName} style={{height:"11rem"}} data-aos="fade-down" data-aos-duration="1600" data-aos-delay="400"/>
                                        <p data-aos="fade-down" data-aos-duration="1600" data-aos-delay="500">{data.projectDetails}</p>
                                        <div className="d-flex justify-content-between mb-2" data-aos="fade-down" data-aos-duration="1600" data-aos-delay="600" >
                                            <a href={data.projectLink} className='' style={{ fontSize: "17px" }} onClick={window.open}>Visit Website</a>
                                            <a href={data.projectCode} className='' style={{ fontSize: "17px" }} onClick={window.open}>View Code</a>
                                        </div>
                                    </div>

                                    <div className="card-footer" >
                                        <div className="lag row">
                                            {data.usedLanguage.map((language, index) => (
                                                <div key={index} className='col-4 col-xs-3 col-sm-4 col-md-4 col-xl-3' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="700">
                                                    <p className=' px-1 border rounded-3 '>{language}</p>
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

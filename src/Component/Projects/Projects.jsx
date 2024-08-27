import React from 'react';
import Border from '../../Sub_Component/Line/Border';
import ProjectsData from './ProjectsData';
import './projects.css';

function Projects() {
    return (
        <div className='container-fluid skills-main'>
            <div className="main-heading d-flex flex-column align-items-center justify-content-center text-light mb-4">
                <h1 className='my-3'>Projects</h1>
                <h4>My <span>Projects</span></h4>
            </div>
            <div className="projects row">
                <div className="col-1">
                    <div className='left-border1'>
                        <Border />
                    </div>
                </div>

                <div className="cards col-12 col-md-11 col-lg-10">
                    <div className="row">
                        {ProjectsData.map((data) => (
                            <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                                <div className="card">
                                    <div className='card-header'>
                                        <h3 className='mt-1'>{data.projectName}</h3>
                                    </div>

                                    <div className='card-body py-0'>
                                        <img src={data.projectIMG} alt={data.projectName} />
                                        <p>{data.projectDetails}</p>
                                        <div className="lag row">
                                            {data.usedLanguage.map((language, index) => (
                                                <div key={index} className='col-4 col-xs-3 col-md-4 col-lg-3'>
                                                    <p  className=' px-1 border border-info rounded-3'>{language}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <a href={data.projectLink} >Visit Website</a>
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

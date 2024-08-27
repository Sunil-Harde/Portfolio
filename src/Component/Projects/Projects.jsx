import React from 'react'
import Border from '../../Sub_Component/Line/Border'
import ProjectsData from './ProjectsData'
import "./projects.css"



function Projects() {
    return (
        <div className='container-fluid  skills-main '>
            <div className="main-heading d-flex flex-column align-items-center justify-content-center text-light mb-4">
                <h1 className=' my-3'>Projects</h1>
                <h4>My <span>Projects</span></h4>
            </div>
            <div className="projects row ">


                <div className="col-1">
                    <div className='left-border1 '>
                        <Border />
                    </div>
                </div>

                <div className="cards col-12 col-md-10 ">
                    <div className="row ">
                        {
                            ProjectsData.map((data) => (
                                <div key={data.id} className=" col-12 col-sm-6 col-md-4 col-lg-3  ">
                                    <div key={data.id} className="card mb-4 ">
                                        <div className='card-header '>
                                            <h3 className='mt-1'>{data.projectName}</h3>
                                        </div>

                                        <div className='card-body'>
                                            <img src={data.projectIMG} alt="" />
                                            <p>{data.projectDeatils}</p>
                                        </div>

                                        <div className="card-footer">
                                            <p>Visit Website :-<a href={data.projectLink}>{data.projectLink}</a></p>
                                        </div>


                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </div >


    )
}

export default Projects
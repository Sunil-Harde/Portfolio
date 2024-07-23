import React from 'react'
import { Button } from '@mui/material'
import Img_1 from './Image/img-1.jpg'
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material';
import Line from '../../Sub_Component/Line/Border'
import './Profile.css'

function Profile() {
    return (
        <div className='container-flued min-vh-100'>
            <div className="profile row">

                <div className="col-2 ">
                    <div className='border1'>
                        <Line />
                    </div>
                </div>

                <div className="Profile-details col-6 text-light mt-4">

                    <div className="name-title mb-4">
                        <h4>Hello, <span>My Name Is</span></h4>
                    </div>

                    <div className="name mb-4">
                        <h1>SUNIL <span>HARDE</span></h1>
                    </div>

                    <div className="info mb-4">
                        <h4>I Am <span>WEB DEVELOPER </span></h4>
                    </div>

                    <div className="about mb-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae natus animi. Iure error est ducimus labore, hic, molestias alias nostrum quaerat assumenda suscipit fugit quidem accusamus quis nihil maiores?</p>
                    </div>

                    <div className="cv">
                        {/* <Button variant='outlined'Group variant='outlined' className='Button variant='outlined'Group'> */}
                        <Button variant='outlined' className='me-4'>Cv Download</Button>
                        <Button variant='outlined' className='me-2'><Facebook /></Button>
                        <Button variant='outlined' className='me-2'><LinkedIn /></Button>
                        <Button variant='outlined' className='me-2'><Instagram /></Button>
                        {/* </Button'Group> */}
                    </div>

                </div>

                <div className="profile-img ms-5 mt-5 col-3">
                    <div className='circle' >
                        <img src={Img_1} alt="" />
                    </div>

                    <div className="img-info text-light">
                        <h4>FRESHAR</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
import React, { useState } from 'react'
import { Button } from '@mui/material'
import Img_1 from './Image/img-1.webp'
import { Instagram, LinkedIn, GitHub, Download } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import Line from '../../Sub_Component/Line/Border'
import './Profile.css'


function Profile() {

    const [load, setLoad] = useState(false)

    return (
        <div className='container-flued min-vh-100'>
            <div className="profile  row">

                <div className="col-1">
                    <div className='border1'>
                        <Line />
                    </div>
                </div>

                <div className="Profile-details shadow p-4 col-6 text-light mt-2">

                    <div className="name-title mb-4">
                        <h4>Hello, <span>My Name Is</span></h4>
                    </div>

                    <div className="name mb-4 ">
                        <h1 className=''>SUNIL <span>HARDE</span></h1>
                    </div>

                    <div className="info mb-4">
                        <h4>I Am <span className=''>WEB DEVELOPER </span></h4>
                    </div>

                    <div className="about mb-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae natus animi. Iure error est ducimus labore, hic, molestias alias nostrum quaerat assumenda suscipit fugit quidem accusamus quis nihil maiores?</p>
                    </div>

                    <div className="cv d-flex">
                        <LoadingButton loading={load} loadingPosition="end" onClick={() => setLoad(true)} endIcon={<Download />} className='me-5 px-3 resume ' >Resume</LoadingButton>
                        <div className='cv-button'>
                            <Button variant='outlined' className='me-2'><Instagram /></Button>
                            <Button variant='outlined' className='me-2'><LinkedIn /></Button>
                            <Button variant='outlined' className='me-2'><GitHub /></Button>
                        </div>

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
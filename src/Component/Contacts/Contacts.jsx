import React from 'react'
import { PersonPinCircle, MailOutline, LocalPhoneOutlined, WorkOutline } from '@mui/icons-material';
import { TextField } from '@mui/material'
import './Contacts.css'



function Contacts() {
    return (
        <div className='container-fluid skills-main '>

            <div className="main-heading d-flex flex-column align-items-center justify-content-center text-light mb-4">
                <h1 className=' my-3'>Contacts</h1>
                <h4>Contact <span>Me</span></h4>
            </div>

            <div className="contacts d-flex justify-content-between container-lg">

                <div className="details text-light ">

                    <div className='d-flex justify-content-between me '>
                        <div className="contacts-icons row">
                            <div className="icon">
                                <PersonPinCircle style={{ color: 'white', fontSize: 30 }} /><br />
                            </div>
                        </div>
                        <div>
                            <h4>Address</h4>
                            <p>Pune, Mharastra, India</p>
                        </div>
                    </div>


                    <div className=' d-flex justify-content-between'>

                        <div className="contacts-icons  ">
                            <div className="icon">
                                <MailOutline style={{ color: 'white', fontSize: 30 }} /><br />
                            </div>

                        </div>
                        <div className=''>
                            <h4>Address</h4>
                            <p>Pune, Mharastra, India</p>
                        </div>
                    </div>


                    <div className='d-flex justify-content-between'>
                        <div className="contacts-icons  ">
                            <div className="icon">

                                <LocalPhoneOutlined style={{ color: 'white', fontSize: 30 }} /><br />
                            </div>

                        </div>
                        <div>
                            <h4>Address</h4>
                            <p>Pune, Mharastra, India</p>
                        </div>
                    </div>


                    <div className='d-flex justify-content-between'>
                        <div className="contacts-icons  ">
                            <div className="icon">

                                <WorkOutline style={{ color: 'white', fontSize: 30 }} /><br />
                            </div>

                        </div>
                        <div>
                            <h4>Address</h4>
                            <p>Pune, Mharastra, India</p>
                        </div>
                    </div>

                </div>

                <div className="inputs col-6 ">
                    <TextField label="Name" color='primary' />
                    <TextField label="Email" color='primary' /><br />
                    <TextField label="Subject" color='primary' />
                    <TextField label="Massege" color='primary' />
                </div>
            </div>
        </div>
    )
}

export default Contacts
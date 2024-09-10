import React from 'react'
import { PersonPinCircle, MailOutline, LocalPhoneOutlined, WorkOutline, Send } from '@mui/icons-material';
import { TextField, Button } from '@mui/material'
import './Contacts.css'



function Contacts() {
    return (
        <div className='container-fluid skills-main '>

            <div className="main-heading d-flex flex-column align-items-center justify-content-center text-light mb-4">
                <h1 className=' my-3'>Contacts</h1>
                <h4>Contact <span>Me</span></h4>
            </div>

            <div className="contacts d-flex justify-content-between gap-3">

                <div className="details text-light ms-5   ">

                    <div className=' d-flex mb-3'>
                        <div className="contacts-icons d-flex align-items-center justify-content-center ">
                            <PersonPinCircle className="icon" />
                        </div>
                        <div className=''>
                            <h4>Address</h4>
                            <p>Pune, Mharastra, India</p>
                        </div>
                    </div>


                    <div className=' d-flex mb-3'>

                        <div className="contacts-icons d-flex align-items-center justify-content-center ">
                            <MailOutline className="icon" />
                        </div>
                        <div className=''>
                            <h4>Email</h4>
                            <p>sunilharde10@gmail.com</p>
                        </div>
                    </div>


                    <div className='d-flex mb-3'>
                        <div className="contacts-icons d-flex align-items-center justify-content-center  ">
                            <LocalPhoneOutlined className="icon" /><br />
                        </div>
                        <div>
                            <h4>Contact</h4>
                            <p>8308951286</p>
                        </div>
                    </div>


                    <div className='d-flex mb-3'>
                        <div className="contacts-icons d-flex align-items-center justify-content-center ">
                            <WorkOutline className="icon" /><br />
                        </div>
                        <div>
                            <h4>Experience</h4>
                            <p>Freshar</p>
                        </div>
                    </div>

                </div>

                <div className="inputs d-flex flex-column gap-3 align-items-center   ">
                    <TextField label="Name" className='textfield' variant="outlined" />
                    <TextField label="Email" className='textfield' />
                    <TextField label="Subject" className='textfield' />
                    <TextField label="Massege" className='textfield' />

                    <div className='contact-inputs-button'>
                        <Button className='px-3' >send<Send className='contact-inputs-button-send-icon' /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
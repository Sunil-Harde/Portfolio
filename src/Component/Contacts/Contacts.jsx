import React from 'react'
import { PersonPinCircle, MailOutline, LocalPhoneOutlined, WorkOutline, Send } from '@mui/icons-material';
import { TextField, Button } from '@mui/material'
import './Contacts.css'



function Contacts() {
    return (
        <div className='container-fluid skills-main '>

            <div className="main-heading d-flex flex-column align-items-center justify-content-center mb-4" data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                <h1 className=' my-3'>Contact</h1>
                <h4>Contact <span>Me</span></h4>
            </div>

            <div className="contacts d-flex justify-content-between gap-3">

                <div className="details text-light ms-5   ">

                    <div className=' d-flex mb-3' >
                        <div className="contacts-icons d-flex align-items-center justify-content-center " data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                            <PersonPinCircle className="icon" />
                        </div>
                        <div className=' detail ' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="500">
                            <h4>Address</h4>
                            <p>Pune, Maharashtra, India</p>
                        </div>
                    </div>


                    <div className=' d-flex mb-3'>

                        <div className="contacts-icons d-flex align-items-center justify-content-center " data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                            <MailOutline className="icon" />
                        </div>
                        <div className=' detail ' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="500">
                            <h4>Email</h4>
                            <p>sunilharde10@gmail.com</p>
                        </div>
                    </div>


                    <div className='d-flex mb-3'>
                        <div className="contacts-icons d-flex align-items-center justify-content-center  " data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                            <LocalPhoneOutlined className="icon" /><br />
                        </div>
                        <div className=' detail ' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="500">
                            <h4>Contact</h4>
                            <p>8308951286</p>
                        </div>
                    </div>


                    <div className='d-flex mb-3'>
                        <div className="contacts-icons d-flex align-items-center justify-content-center " data-aos="fade-down" data-aos-duration="1600" data-aos-delay="300">
                            <WorkOutline className="icon" /><br />
                        </div>
                        <div className=' detail ' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="500">
                            <h4>Experience</h4>
                            <p>Fresher</p>
                        </div>
                    </div>

                </div>

                <div className="inputs d-flex flex-column gap-3 align-items-center   ">
                    <TextField label="Name" className='textfield' variant="outlined" data-aos="fade-right" data-aos-duration="1600" data-aos-delay="700" />
                    <TextField label="Email" className='textfield' data-aos="fade-right" data-aos-duration="1600" data-aos-delay="700" />
                    <TextField label="Subject" className='textfield' data-aos="fade-right" data-aos-duration="1600" data-aos-delay="700" />
                    <TextField label="Massage" className='textfield' data-aos="fade-right" data-aos-duration="1600" data-aos-delay="700" />

                    <div className='contact-inputs-button' data-aos="fade-right" data-aos-duration="1600" data-aos-delay="800">
                        <Button className='px-3' >send<Send className='contact-inputs-button-send-icon' /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
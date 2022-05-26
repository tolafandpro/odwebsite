import React, {useRef} from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


const Container = styled.div`
    width: 100%;
    .form-group{
        width: 100%
        margin-bottom: 2rem;
    }
    label {
        font-size: 1rem;
    }   
    input, textarea{
        width: 90%;
        font-size: 1rem;
        font-weight: bold;
        padding: 0.8rem;
        border-radius: 8px;
    }
    textarea {
        min-height: 80px;
        resize: vertical;
    }
    button[type="submit"]{
        background-color: ${props => props.theme.purple};
        font-size: 0.8rem;
        display: inline-block;
        padding: 1rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        width: 98%;
        &:hover{
            background-color: ${props => props.theme.purple};
            box-shadow: 0 0 8px 6px rgba(306,0,306,0.3);
            transform: scale(1);
        }

        @media (max-width: 50em) {
            width: 100%;
        }
    }
`

function FormInput() {
    const form = useRef();
   
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6bu8gdz', 'template_7muqkjb', form.current, 'jPcOcCuHKZAXQyi5J')
                    .then((result) => {
                        console.log(result.text);
                        toast.success("Your message has been sent successfully.")
                    }, (error) => {
                        console.log(error.text);
                        toast.error("Error message was not sent.")
                    });
                    e.target.reset()
                    // showResult(true)
        };

    return ( 
        <div> 
            <ToastContainer/>
            <Container> 
               <form className="container" ref={form} onSubmit={sendEmail}>
                <div className='form-group'>
                    <label htmlFor="name">Your Name</label>
                    <input 
                        id="name"
                        name="name"
                        type='text' 
                        required />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Your Email</label>
                    <input 
                        id="email"
                        name="email"
                        type='text' 
                        required />
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Write a Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        type="textarea" 
                        required />
                </div>
                <button type="submit">Send</button>
              </form>
            </Container>
        </div>
      );
};
 
export default FormInput;
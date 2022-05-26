import React from 'react';
import styled from 'styled-components';
import { FiPhoneCall } from 'react-icons/fi';


const InfoContainer = styled.div`
    padding: 0.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    boder-radius: 5px;
      .icon{
          border-radius: 50%;
          padding: 0.5rem;
          align-items: center;
          justify-items: center;
          background-color:${props => props.theme.purple}
      }
      svg {
        width: 2rem;
        height: 2rem;
      }
`


function ContactInfo({
     icon = <FiPhoneCall/>,
     text = `Email: tolafandpro@gmail.com`
}) {
    return ( 
        <InfoContainer>
            <div className='icon'>{icon}</div>
                <div className='info'>
                    <p>{text}</p>
            </div><br></br>
        </InfoContainer>
     );
}

export default ContactInfo;
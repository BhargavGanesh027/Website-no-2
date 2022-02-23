import React from 'react'
import './Footer.css'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='app-footer'>
      <h1 className='app-footer-header'>2022 All Rights Reserved </h1>
     <button type='button' onClick={Event => window.location.href='https://www.linkedin.com/in/ganesh-chowdary-910b71195/'}>
       <AiFillLinkedin className='linkedin-logo'/>
      </button>
      <button type='button' onClick={Event => window.location.href='https://www.linkedin.com/in/ganesh-chowdary-910b71195/'}>
      <AiOutlineGithub className='github-logo'/>
      </button>
    </div>
  )
}

export default Footer
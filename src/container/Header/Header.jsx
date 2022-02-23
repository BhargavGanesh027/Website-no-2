import React from 'react';
import './Header.css';

const Header = () => {
  return (
  <section className='app-header-section'>
    <div className='app-header' id='greetings'>
      <h1><span>Hi Iam Bhargav Ganesh</span><span className='heading-2'>I'm a Web Developer.</span></h1>
    </div>
      <div className='floating-icon'>
        <a href='https://www.dropbox.com/scl/fi/sy2okcmt3qhvgyo5pmayg/UPDATED_Ganesh_RESUME.docx?dl=0&rlkey=xiymy7fgot3mda34ninhblrly' title="Resume" class="material-icon floating-icon-a"><span className="floating-icon-span" role="img" aria-label="resume">💾</span></a>
      </div>
  </section>
    
  )
};

export default Header;
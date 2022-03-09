import React ,{ useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
    <nav className='app-navbar'>
      <div className='app-navbar-logo'>
          <a href="/" className='app-logo' title='B G logo'>B G</a>
      </div>
      <ul className='app-navbar-links' id='navigator'>
          <li className='p-open'><a href='#home'>Home</a></li>
          <li className='p-open'><a href='#about'>About</a></li>
          <li className='p-open'><a href='#projects'>Projects</a></li>
          <li className='p-open'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app-navbar-smallscreen'>
      <MenuIcon className='menu-icon' onClick={() => setToggleMenu(true)}/>
      {toggleMenu && (
      <div className='app-navbar-smallscreen-overlay flex-center slide-bottom'>
        <CloseIcon className='overlay-close' onClick={() => setToggleMenu(false)}/>
         <ul className="app-navbar-smallscreen-links" id='navigator'>
            <li className="p-opensan"><a href='#home'>Home</a></li>
            <li className="p-opensan"><a href='#about'>About</a></li>
            <li className="p-opensan"><a href='#projects'>Projects</a></li>
            <li className="p-opensan"><a href='#contact'>Contact</a></li>
         </ul>
      </div>
      )}
    </div>
    </nav>
)};
export default Navbar;
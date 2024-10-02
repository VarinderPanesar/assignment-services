
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {


    const [isToggled, setIsToggled] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setIsToggled(!isToggled);
  };


  return (
<>
    <section className="pre-navbar">
        <div className="pre-navbar-container">
            <div className="menu-info-content">
            Need help? Talk to an expert: <a href="mail to:devgun.info@info.com">devgun.info@info.com</a>
            </div>

        </div>
    </section>

   <section class="navbar" id="navbar">
    <div className="navbar-container">
    <h2 className="logo"><a href="#navbar">Eduman</a></h2>
    <nav>
        <ul   className={isToggled ? 'show-menu' : ''} >
         <li><a href="#navbar">Home</a></li>
         <li><a href="#aboutus">About</a></li>
         <li><a href="#ourservices">Services</a></li>
         <li><a href="#contact-us">Contact</a></li>
        </ul>
    </nav>
    <MenuIcon className="menu-icon"  onClick={handleClick}/>
    </div>
   </section>
   </>
  )
}

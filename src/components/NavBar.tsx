import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillMediumCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const NavBar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);

  return (
    <nav>
        <GiHamburgerMenu className={`hamburger ${navBarVisible ? "hide-ham" : "show-ham"}`} onClick={() => setNavBarVisible(true)}/>
        <section className={`nav-content ${navBarVisible ? 'nav-visible' : 'nav-invisible'}`}>
            <div className="nav-links">
                <div>
                    <h1 className="nav-title">ACIBO GALLERY</h1>
                    <ul>
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">About me</a></li>
                        <li><a href="#" className="nav-link">services</a></li>
                        <li><a href="#" className="nav-link">Contact me</a></li>
                    </ul>
                    <div className="interactive-icon">
                        <FaPhoneAlt className="react-icons"/>
                        <p className="icon-info">+256 779855740</p>
                    </div>
                    <div  className="interactive-icon">
                        <IoMailOpenOutline className="react-icons"/>
                        <p className="icon-info">wayncis@gmail.com</p>
                    </div>
                    <div  className="interactive-icon social-icons">
                        <BiLogoFacebookCircle className="social-icon" />
                        <AiFillTwitterCircle  className="social-icon" />
                        <AiFillMediumCircle  className="social-icon" />
                        <FaInstagramSquare   className="social-icon" />
                        <IoLogoYoutube  className="social-icon" />
                    </div>
                </div>
            </div>
            <GrClose className="close-icon" onClick={() => setNavBarVisible(false)}/>
        </section>
    </nav>
  )
}

export default NavBar
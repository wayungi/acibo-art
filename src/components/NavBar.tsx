import { GrClose } from "react-icons/gr";
// import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillMediumCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav>
        {/* <GiHamburgerMenu /> */}
        <section className="nav-content">
            <div className="nav-links">
                <div>
                    <h1 className="nav-title">ACIBO GALLERY</h1>
                    <ul>
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">About me</a></li>
                        <li><a href="#" className="nav-link">services</a></li>
                        <li><a href="#" className="nav-link">Contact me</a></li>
                    </ul>
                    <div>
                        <FaPhoneAlt />
                        <p>+256 779855740</p>
                    </div>
                    <div>
                        <IoMailOpenOutline />
                        <p>wayncis@gmail.com</p>
                    </div>
                    <div>
                        <BiLogoFacebookCircle />
                        <AiFillTwitterCircle />
                        <AiFillMediumCircle />
                        <FaInstagramSquare />
                        <IoLogoYoutube />
                    </div>
                </div>
            </div>
            <GrClose />
        </section>
    </nav>
  )
}

export default NavBar
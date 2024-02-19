import React, {useState} from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io"
import medplan from "../../Assets/medplan1.png";
import "./bar.css"


const Navbar = () => {
     const[showMobileMenuOpen, setMobileMenuOpen] = useState(false);
     const[showAboutDropdown,  setShowAboutDropdown] =useState(false);

     const toggleMobileMenu = () => {
      setMobileMenuOpen(!showMobileMenuOpen);
     }

    const toggleSolutionDropdown = () => {
        setShowAboutDropdown(!showAboutDropdown);
    }


   return(
         <nav className="navbar">
           
       <div> 
        <img  className="logo"   src={medplan} alt="medplan"  height="45px" /> 
       </div>  

      <ul className='navlinks'>

     <div className={`menu ${showMobileMenuOpen ? 'open':  ''}`} >
       <li className='home'>Home</li>
       <li className={`hovereffect ${showAboutDropdown ? 'active':  ''}`}  onClick={toggleSolutionDropdown}>
            
       <div className='solutionlabel'>Solutions  &nbsp; <   RiArrowDropDownLine   className='dp' /></div>
         {  showAboutDropdown ? <>

          <li className='solution'> 
            <ul className='selectbox'>
                <li>Medplan</li>
                <li>NaijaPharms</li>
                <li>Tellapharm</li>
                <li className="oc">Octavia</li>
            </ul>
          </li>

            </> :null}
       </li>
        
        <li>News & Events</li>
        <li>Research</li>
        <li>About us</li>
       </div> 
        </ul>
   
       <div className="mobilemenuicon"  onClick={toggleMobileMenu} >
       
       {showMobileMenuOpen ? <IoIosClose className='close'/>  : <GiHamburgerMenu />  }
       
       </div>

         </nav>
   )

        
      
};


export default Navbar;
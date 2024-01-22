import React, {useState} from "react"
import medplan from "../../Assets/medplan1.png";
import "./bar.css"


const Navbar = () => {
     const[isMenuOpen, setMenuOpen] = useState(false);
     const[showAboutDropdown,  setShowAboutDropdown] =useState(false);

   

    const toggleSolutionDropdown = () => {
        setShowAboutDropdown(!showAboutDropdown);
    }



   return(
         <nav className="navbar">
           
        <div> <img  className="logo"   src={medplan} alt="medplan"  height="45px" /> </div>  

      <ul className='navlinks'>
        <input type="checkbox"  id="checkboxtoggle" />
        <label for="checkboxtoggle" class="hamburger">&#9776;</label>

     <div className='menu'>
       <li className='home'>Home</li>
       <li className={`hovereffect ${showAboutDropdown ? 'active':  ''}`}  onClick={toggleSolutionDropdown}>
            
       <div className='solutionlabel'>Solutions</div>
         {  showAboutDropdown ? <>

          <li className='solution'>
            <ul className='selectbox'>
                <li>Medplan</li>
                <li>NaijaPharms</li>
                <li>Tellapharm</li>
                <li>Octavia</li>
            </ul>
          </li>

            </> :null}
       </li>
        
        <li className='hovereffect'><a href='#news&events'>News & Events</a></li>
        <li className='hovereffect'><a href='#research'>Research</a></li>
        <li className='hovereffect'><a href='#about us'>About us</a></li>
       </div> 
        </ul>
   



            
         </nav>
   )

        
      
};


export default Navbar;
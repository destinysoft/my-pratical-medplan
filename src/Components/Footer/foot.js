import React from 'react';
import { IoCall } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import medplan2 from "../../Assets/medPlan.png";
import './foot.css'


function Footer () {

      return(
          <div className='footermain'>

             <div className='main'>
                <table>
                    <tr>
                     <th>SOLUTIONS</th>
                     <th>QUICK LINKS</th>
                     <th>SUPPORT</th>
                     <th>CONTACT US</th>
                    </tr>
                  

                    <tr>
                   <td> 
                   <div className='nal'>
                    <td> Medplan</td> 
                    <td>NaijaPharms</td>  
                    <td>Tellapharm</td>  
                    <td> Octavia</td> 
                   </div>
                   </td>

                   <td> 
                     <div  class='cal'> 
                      <td>Home</td> 
                      <td>Solutions</td> 
                      <td>News & Events</td> 
                      <td> Research </td>
                      <td>About us</td>
                     </div>
                   </td>

                  <td> 
                    <div className='tal'>
                    <td>FAQs</td>
                    <td>Contact Us</td> 
                    </div>
                 </td>

                  <td >
                      <div  className='bal'>
                       <td> <IoCall /> +2348169375919</td> 
                       <td> <MdMarkEmailUnread /> medPlan.help@gmail.com</td> 
                       <td>  <FaLocationDot />13 Akpakpava road opposite Wema bank, <br/> Benin city Edo state</td>                 
                      </div>
                 </td>
                    
                    </tr>
                </table>

               <div className='phodiv'>
                  <img  className="pho"   src={medplan2} alt="medplan"  /> 
               <div  className='mindiv'> 
                  <span className='mede'>MEDPLAN</span> <br/>
                    <span className="ss">SOLUTIONS</span>
                </div>
                  <span className='pan'>Privacy Statement  &nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;&nbsp;  Administrator </span>
                </div> 
                       <br/>
                  <div className='lastfoot'>
                  <span className='last'>Last Updated April 2023 &nbsp;&nbsp;&nbsp;    <span classNamro='med2023'>  &copy;  2023 MedPlan Solutions</span>  </span>
                  </div>
           </div>



          </div>
      )
 





    
}



export default Footer;
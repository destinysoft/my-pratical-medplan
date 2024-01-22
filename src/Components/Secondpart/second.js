import React from 'react';
import home1 from '../../Assets/home1.png'
import "./second.css"



function Medplan() {
    return(
      <div className="philodiv">
          <p className="philosophytext">MedPlan Philosophy</p>

     
      <div> <img  className='homeimg'  src={home1} alt="home1"   />  </div>
      
      <div>
      <p className="philosophymaintext">
          At MedPlan, we are dedicated to improving 
          healthcare delivery for both individuals and  
           healthcare providers. We believe that by leveraging 
          the power of technology, we can help healthcare
          providers deliver better care and improve patient
          outcomes. Our innovative and user-friendly
          technologies are designed to streamline healthcare
          workflows, reduce administrative   burden, and 
          enhance communication between healthcare 
          providers and their patients. 
            
             <br/>   <br/>
             
           We offer a range of digital health solutions that are tailored to meet the
           unique needs of healthcare providers. In addition, our solutions are designed to 
           help individuals take control of their health by 
           providing them with the tools and information they 
           need to manage their wellbeing in a convenient and 
           efficient way.
       </p>
      </div>
  </div>
    )
}

export default Medplan;
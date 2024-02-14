import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri"
import './third.css'



function Founder () {
    return(
    
        <div className='founderdiv'>
        
    <div  className="quoteleft">
     <RiDoubleQuotesL />
   </div> <br/>  
       <p className="foundertext">
       <RiDoubleQuotesL className='qiconl'  /> &nbsp;
              With our digital health solutions, we are commited to transforming the way healthcare is delivered 
             and experienced by both individuals and healthcare providers.    <RiDoubleQuotesR className="qiconr" />   <br/>  <br/>  
           <div className='quoteright'>
           <RiDoubleQuotesR/>
           </div>  
       </p>  

          <br/>
      <div className="name">
          <p className="foundername">Dr.Lisa Mote (BPharm, PharmD, MPSN)</p>
          <span className="founder">Founder MedPlan Solutions</span>
      </div>

  
       {/* <p className="solutiontext">Our Solutions</p> */}
     </div>

       
        

    )
}



export default Founder;


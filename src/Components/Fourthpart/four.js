import React from 'react';
import medplan from '../../Assets/medPlan.png'
import naijapharm from '../../Assets/naijaPharm.png'
import octavia from '../../Assets/octavia.png'
import tellaPharm from '../../Assets/tellaPharm.png'
import './four.css'




function Solution () {
    return (
     <div className='solutiondiv'>

          <div className='div'>
             <img class="solutionimg"  src={medplan}  alt="img"  />

             <p class="medplantext2">MedPlan app</p>
             
             <span class="Empoweringtext">
                 Empowering chronic <br/>
                 Disease patients with tools <br/> 
                 and resources to help <br/>
                 them better manage their health
              </span>
  
              <br/><br/>
          
               <span class="learntext3">Learn More </span>
         </div>
   

     <div className='div'>
         <img class="naijapharmimg"  src={naijapharm}  alt="img"  />

         <p class="naijapharmstext">NaijaPharms</p>

         <span class="platformtext">
            A Platform for Nigerian <br/>
            Pharmacist to connect, learn, <br/>
            find jobs, and stay up-to-date <br/>
            with the latest development in  <br/>
            the Nigerian Pharmacy Space.
         </span>

         <br/><br/>
          
         <span class="learntext">Learn More </span>
    </div>
 

     <div className='div'>
     <img class="tellaimg"  src={tellaPharm}  alt="img"  />

       <p className="tellapharmtext">Tellapharm</p>

       <span className="connectingtext">
                 Connecting Patients with  their <br/>
                 Pharmacists for Personalized <br/>
                 care anytime,anywhere.
             </span>

             <br/><br/>
          
             <span class="learntext1">Learn More  </span>
     </div>

     <div className='div'> 
     <img class="octaviaimg"  src={octavia}  alt="img"  />
      
     <p class="octaviatext">Octavia</p>

     <span class="digitaltext">
                 Digitizing hospital operations <br/>
                 for seamless efficiency.<br/>
                 streamlining processes,<br/>
                 enhancing patient care, and <br/>
                 optimizing healthcare <br/>
                 management.
            </span>


            <br/>  <br/> 
          
            <span class="learntext2">Learn More </span>
     </div>

     </div>
    )

}



export default Solution;
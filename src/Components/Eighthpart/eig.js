import React from 'react'
import image8 from '../../Assets/home5.png'
import './eig.css'


function Annual () {
     return(
   <div className='ana'>
      <img   className='anaimg1'  src={image8}    alt='image8'  />

       <div className='anadiv'>
           <p className='annualtext'>ANNUAL EVENT</p>

           <p className='annualtext1'>Accelerating Digital Innovation in Health in Africa  (ADIHA)  </p> <br/>

           <p class='annualtext2'>Join us in accerlerating digital innovation in Africa healthcare at our annual events 
            where healthcare professionals,
            tech experts,and entrepreneurs connect,collaborate and showcase 
            their latest innovations</p> <br/> <br/>

            <button className='btn'>Learn more</button>
       </div>
     <img   className='anaimg'  src={image8}    alt='image8'  />
   </div>

     )
}


export default Annual;
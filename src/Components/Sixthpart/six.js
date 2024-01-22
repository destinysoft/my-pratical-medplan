import React from 'react'
import  image5 from '../../Assets/home3.png'
import './six.css'




function Patient () {
    return (

     <div>
       <img  className='imgtext'    src={image5}  alt=''  />

      <div className='patienttext'>
      <p className='ptext'>PATIENTS</p>


      <p className="ptext2">Delivering Patient-centered care at pivotal <br/>
      moments in their health journey</p> <br/>


      <p className='ptext3'>At Medplan Solutions our impact is driven by a commitment to improving healthcare outcomes and making health more accessible,affordable and patient=centered we believe that everyone deserves access to high-quality healthcare ,regardless of their location,socialeconomic status,or health condition</p>
      </div>   
  </div>
    )
}



export default Patient;
import React from 'react'
import  image7 from '../../Assets/home4.png'
import './sev.css'



function Research () {
   
    return(
      <div className='all'>
            <img className='labimg' src={image7}    alt='image6'   />
         
         
         <div className='researchdiv'>
          
           <p className='researchtext'>RESEARCH</p>

           <p className='researchtext1'>Discover Insights from our Research in Digital health</p> 

           <p className='researchtext2'> our research arm is dedicated to advancing digital 
           health through  cutting edge innovation and scientific exploration with the ultimate
           goal of improving healthcare outcomes and transforming the way we approach patient care
           </p> <br/> <br/>

           <button className='btn'>Learn more</button>

           </div>
        </div>





    )


}

export default Research;
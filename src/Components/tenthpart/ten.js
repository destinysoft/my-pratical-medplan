import React from 'react'
import Image15 from '../../Assets/img1.png'
import Image16 from '../../Assets/img2.png'
import Image17 from '../../Assets/img3.png'
import './ten.css'


function Future  () {
          return (
            <div>
          
            <p className='keep'>Keep Yourself Informed</p>  <br/>
       
         <div className='informeddiv'>
                    
                 <div classNameo='riv'>           
                      <img class="peoplemg"  src={Image15}  alt="img"  />
               
                     <p className='futuret'> The Future of Digital Surgery</p> 
                      
                      <span className='techtext'>
                        How Technology is helping the <br/>
                        Medplan Medical Devices <br/>
                        Companies Reimage the Care Continuum
                      </span>
                        <br/> <br/>

                     <span className='readtext'>Read More </span>
               </div>


                


             <div  classNameo='riv'> 
                <img class="peoplemg"  src={Image16}  alt="img"  />
  
               <p className='futuret'> The Future of Digital Surgery</p> 
                
                <span className='techtext'>
                  How Technology is helping the <br/>
                  Medplan Medical Devices <br/>
                  Companies Reimage the Care Continuum
                </span>
                  <br/> <br/>

               <span className='readtext'>Read More </span>
           </div>
              


             <div  classNameo='riv'>
                    <img class="peoplemg"  src={Image17}  alt="img"  />
               
               <p className='futuret'> The Future of Digital Surgery</p> 
                
                <span className='techtext'>
                  How Technology is helping the <br/>
                  Medplan Medical Devices <br/>
                  Companies Reimage the Care Continuum
                </span>
                  <br/> <br/>

               <span className='readtext'>Read More </span>
            </div>
   
        </div>   
   </div>
          )
}




export default Future;
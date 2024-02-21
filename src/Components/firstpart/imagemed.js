import React,  {useState, useEffect} from  "react";
import image1 from "../../Assets/hHeader.png"
import image2 from "../../Assets/hHeader2.png"
import image3 from "../../Assets/hHeader3.png"
import "./imagemed.css"


const Imagemed = ( { isOpen }) => {
   
    const Images = [image1, image2, image3];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentIndex((preveIndex) =>  (preveIndex + 1) %Images.length)
    }, 5000);
  
    return() => clearInterval(Interval);
  }, [currentIndex, Images.length]);
  
  return(
    <div  className='timemed'>
     <img className="timeimg" src={Images[currentIndex]} alt={`image ${currentIndex + 1}`} />

        <div className='timecaption'>  
        <div className='bbb'>
      {
         currentIndex === 0 ?  <div> <span className='a'>MEDPLAN SOLUTIONS</span> <br/>  <br/> <div className='b'> Improving Healthcare In <span className='c'>Africa</span><br/>Using <span  className='d'>Digital Health</span> Solution </div> </div>
         : currentIndex === 1 ? <div> <span  className='e'>From</span>  <span className='f'>Telemedicine</span> <span className='g'>to</span> <div className='h'> Personalized Care <span className='i'>Apps,</span><br/> <span className='j'> Explore the Ways of our Solutions <br/>are Revolutionizing Healthcare <br/> in Africa</span> </div></div>
         :  <div> <span className='k'>Delivering</span> <span className='l'>Patient centered</span> <div className='m'> Care <span className='n'>at pivotal moment in their <br/></span> <span  className='o'>treatment journey</span> </div> </div>
  
        }
       </div>
     </div> 
   
     </div>
  
  )
  
  }
    
    
  
  
  export default Imagemed;


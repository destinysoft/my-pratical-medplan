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

     <div className='bbb'>
        <img className='backimg'  src={image1} alt='img'  />

        <div className='timecaption'>  
      {
         currentIndex === 0 ?  <div> <span className='a' style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>MEDPLAN SOLUTIONS</span> <br/>  <div style={{ color: 'white', fontSize: '17px' }}> Improving Healthcare In <span style={{ color: '#219c90', fontSize: '14px' }}>Africa</span><br/>Using <span style={{ color: '#219c90', fontSize: '15px' }}>Digital Health</span> Solution </div> </div>
         : currentIndex === 1 ? <div> <span style={{ color: 'white', fontSize: '18px' }}>From</span>  <span style={{ color: '#219c90', fontSize: '18px' }}>Telemedicine</span> <span style={{ color: 'white', fontSize: '18px' }}>to</span> <div style={{ color: '#219c90', fontSize: '18px' }}> Personalized Care <span style={{ color: 'white', fontSize: '14px' }}>Apps,</span><br/> <span style={{ color: 'white', fontSize: '14px' }}> Explore the Ways of our Solutions <br/>are Revolutionizing Healthcare <br/> in Africa</span> </div></div>
         :  <div> <span style={{ color: 'white', fontSize: '17px' }}>Delivering</span> <span style={{ color: '#219c90', fontSize: '18px' }}>Patient centered</span> <div style={{ color: '#219c90', fontSize: '17px' }}> Care <span style={{ color: 'white', fontSize: '18px' }}>at pivotal moment in their <br/></span> <span style={{ color: 'white', fontSize: '13px' }}>treatment journey</span> </div> </div>
  
        }
      
     </div> 
    
    

     </div>
    
   
  </div>
  
  )
  
  }
    
    
  
  
  export default Imagemed;


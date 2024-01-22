import React,  {useState, useEffect} from  "react";
import image1 from "../../Assets/hHeader.png"
import image2 from "../../Assets/hHeader2.png"
import image3 from "../../Assets/hHeader3.png"
import "./imagemed.css"


const Imagemed = () => {
   
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
     
     <div>
        <img className='backimg'  style={{width:'590px'}}  src={image1} alt='img'  />
     </div>
    
     
     <div className='timecaption'>
      
      {
         currentIndex === 0 ?  <div> <span style={{ color: 'white', fontWeight: 'bold', fontSize: '26px' }}>MEDPLAN SOLUTIONS</span> <br/>  <div style={{ color: 'white', fontSize: '20px' }}> Improving Healthcare In <span style={{ color: '#219c90', fontSize: '20px' }}>Africa</span><br/>Using <span style={{ color: '#219c90', fontSize: '20px' }}>Digital Health</span> Solution </div> </div>
         : currentIndex === 1 ? <div> <span style={{ color: 'white', fontSize: '30px' }}>From</span>  <span style={{ color: '#219c90', fontSize: '23px' }}>Telemedicine</span> <span style={{ color: 'white', fontSize: '25px' }}>to</span> <div style={{ color: '#219c90', fontSize: '25px' }}> Personalized Care <span style={{ color: 'white', fontSize: '22px' }}>Apps,</span><br/> <span style={{ color: 'white', fontSize: '22px' }}> Explore the Ways of our Solutions <br/>are Revolutionizing Healthcare <br/> in Africa</span> </div></div>
         :  <div> <span style={{ color: 'white', fontSize: '27px' }}>Delivering</span> <span style={{ color: '#219c90', fontSize: '26px' }}>Patient centered</span> <div style={{ color: '#219c90', fontSize: '30px' }}> Care <span style={{ color: 'white', fontSize: '30px' }}>at pivotal moment in their <br/></span> <span style={{ color: 'white', fontSize: '25px' }}>treatment journey</span> </div> </div>
  
        }
      
      
     </div>
  </div>
  
  )
  
  }
    
    
  
  
  export default Imagemed;


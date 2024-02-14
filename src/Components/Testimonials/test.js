import React, {useState,  useEffect} from 'react'
import image9 from '../../Assets/story1.png'
import image10 from '../../Assets/story2.png'
import image11 from '../../Assets/story3.png'
import image12 from '../../Assets/story4.png'
import image13 from '../../Assets/story5.png'
import image14 from '../../Assets/story6.png'
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import './test.css'


const Testimonials = () => {;

    const testimonialsdata = [
        { id: 1, name: '-Pharm Esther Onabanjo', text: 'As someone living with a chronic disease, the MedPlan app has been a game-changer for me this app is five star it has empowered me to take my health seriously by allowing me to self-monitor my conditiona nd track my symptoms over time.the app has a wealth of information on my illness, which has helped improve my health literacy and allowed me to better  understand my condition. I would highly recommend the app to everyone that wants to improve their health. ',  imageUrl: image9 },
        { id: 2, name: '-Mr. Ken Williams', text: 'I have been a practicing pharmacist in Nigeria for 5 years, and I can tell you that the  NaijaPharms app has made my job much easier.  The app is well designed. its user-friendly.it has  helped me provide better care to my patients  Additionally, the app allows me to easily communicate with my patients, which has been invaluable for sharing  knowledge and understanding symptoms I highly  recommend the app to any Nigerian pharmacist looking to enhance their career',  imageUrl: image10 },
        { id: 3, name: '-Mrs. Amanda Soyoye', text: 'I have been using the MedPlan app for a few months now, and I am already seeing improvements in my health. The app has helped me stay on top of my medications and track my symptoms, which has allowed me to better manage my chronic disease. I also appreciate the  resources the app provides, such as tips for healthy living and information on managing stress. I feel more in power and control of my health thanks to medplan',  imageUrl: image11 },
        { id: 4, name: '-Pharm Sarah Idumwonyi', text: 'I have been a practicing pharmacist in Nigeria for 12 years, and I can tell you that the NaijaPharms app has made my job much easier. The app is well designed. its user-friendly.it has helped me provide better care to my patients Additionally, the app allows me to easily communicate with my patients, which has been invaluable for sharing knowledge and understanding symptoms I highly recommend the app to any Nigerian pharmacist looking to enhance their career',  imageUrl: image12 },
        { id: 5, name: '-Pharm Micheal Nwonye', text: 'I have been a practicing pharmacist in Nigeria for about a decade, and I can honestly say that the  NaijaPharms app has made my job much easier.The app has a wealth of information on drug  interactions, dosages, and side effects, which hashelped me provide better care to my patients Additionally, the app allows me to easily communicate with other pharmacists in my network, which has been invaluable for sharing knowledge and best practices, I highly recommend the app to any Nigerian pharmacist looking to enhance their practice',  imageUrl: image13 },
        { id: 6, name: '-Mrs Judith Bickersteth', text: 'As someone living with a chronic disease, the MedPlan app has been a game-changer for me  The app has empowered me to take control of my health by allowing me to self-monitor my condition-and track my symptoms over time Additionally, the app has a wealth of information  on my disease, which has helped improve my health literacy and allowed me to better understand my condition. I would highly recommend the app to anyone living with a chronic disease.',  imageUrl: image14 }
    ];

    const [activeIndex, setactiveIndex] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            setactiveIndex((prevIndex) => (prevIndex + 1) % testimonialsdata.length);
        },  9000);
        return () => clearInterval(intervalid);
    },  [testimonialsdata.length]);

    const handleNextTestimonial = () => {
		let newactiveIndex = activeIndex + 1;
		setactiveIndex((prev) => prev + 1);
		if (newactiveIndex > testimonialsdata.length - 1) {
			setactiveIndex(0);
		}
	};

    const handlePrevTestimonial = () => {
		let newactiveIndex = activeIndex - 1;
		setactiveIndex((prev) => prev - 1);
		if (newactiveIndex < 0) setactiveIndex(testimonialsdata.length - 1);
	};

    return (
   <div className='container'>
             <button className="testimonials__btn" onClick={handlePrevTestimonial}>
             <RiArrowDropLeftLine />{" "}
			</button>
      <div className='testimonial'>
    
        <img className='imgdiv'
        src={testimonialsdata[activeIndex].imageUrl}
        alt={`Image of ${testimonialsdata[activeIndex].name}`}
        />

          <div>
            <p className='bio'>{testimonialsdata[activeIndex].text} </p> <br/><br/>
            <p className='namediv'>{testimonialsdata[activeIndex].name} </p>
          </div>
      </div>
      <button className="testimonials__btn" onClick={handleNextTestimonial}>
      <RiArrowDropRightLine />{" "}
	  </button>
   </div>



    )

}


export default Testimonials;
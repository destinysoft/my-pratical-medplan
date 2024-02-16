import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/bar';
import Imagemed from './Components/firstpart/imagemed'
import Medplan from './Components/Secondpart/second'
import Founder from './Components/Thirdpart/third'
import Solution from './Components/Fourthpart/four'
import Health  from './Components/Fifthpart/fifth'
import Patient from './Components/Sixthpart/six'
import Research from './Components/seventhpart/sev'
import Annual from './Components/Eighthpart/eig';
import Test from './Components/Ninthpart/nin';
import Testimonials from './Components/Testimonials/test';
import Future from './Components/tenthpart/ten';
import Footer from './Components/Footer/foot';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Imagemed/>
    <Medplan/>
    <Founder/>
    <Solution/>
    <Health/>
    <Patient/>
    <Research/>
    <Annual/>
    <Test/>
    <Testimonials/>
    <Future/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

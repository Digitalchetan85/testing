import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Enquiry from './Components/Enquiry';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Footer from './Components/Includes/Footer';
import Menubar from './Components/Includes/Menubar';
import Services from './Components/Services';

function App() {
  return (

   <>
     <div>
      <Router>        
      <Menubar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>          
          <Route path="/enquiry" element={<Enquiry />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>  
   </>
  );
}

export default App;

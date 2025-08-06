import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

//Imports from components 
import Navbar from './components/navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/chatbot';
import ContactSection from './components/ContactSection';
import FeaturesLMS from './components/FeaturesLMS';

//Imports from Page
import LandingPage from './page/LandingPage';
import MasterClass from './page/MasterClass';
import { WebsiteCreation } from './page/WebsiteCreation';
import LiveClass from './page/LiveClass';
import MerchantProcessing from './page/MerchantProcessing';
import PrivacyPolicy from './page/PrivacyPolicy';
import TermCondition from './page/TermCondition';
import ReturnRefund from './page/ReturnRefund';
import MembershipTnC from './page/MembershipTnC';
import RemedyTC from './page/RemedyTC';
import MasterTnc from './page/MasterTnc';
import Athena from './page/Athena';

//Imports from Courses
import Sov from './courses/sov';
import Sophomore from './courses/Sophomore';
import Operate from './courses/Operate';
import Senior from './courses/Senior';
import Remedy from './courses/Remedy';
import PrivateMerchant from './courses/PrivateMerchant';
import Private from './courses/PrivateBusiness';
import PrivateBusiness from './courses/PrivateBusiness';
import DemoSOV from './courses/become_sov';



function App() {
  
  return (
    <Router>
     
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privatemerchant" element={<PrivateMerchant />} />
        <Route path="/masterclass" element={<MasterClass />} />
        <Route path="/sov" element={<Sov />} />
        <Route path="/website" element={<WebsiteCreation />} />
        <Route path="/operate" element={<Operate />} />
        <Route path="/sophomore" element={<Sophomore />} />
        <Route path="/liveclass" element={<LiveClass />} />
        <Route path="/remedy" element={<Remedy/>} />
        <Route path="/unlimitedcredit" element={<Senior/>} />
        <Route path="/pmp" element={<MerchantProcessing/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termcondition"  element={<TermCondition/>}/>
        <Route path="/returnrefund" element={<ReturnRefund/>} />
        <Route path="/mtc" element={<MembershipTnC/>} />
        <Route path="/ContactSection" element={<ContactSection/>} />
        <Route path="/remedytnc" element={<RemedyTC />} />
        <Route path="/mastertnc" element={<MasterTnc />} />
        <Route path="/athena" element={<Athena />} />
        <Route path="/private" element={<PrivateBusiness />} />
        <Route path="/newsov" element={<DemoSOV />} />

      </Routes>
      <Footer />
      <Chatbot /> {/* Add Chatbot here to render on all pages */}
    </Router>
  );
}

export default App;
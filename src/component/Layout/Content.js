import {Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CompanyProfile from "../AboutUs/CompanyProfile";
import DirectorsMessage from "../AboutUs/DirectorsMessage";
import MissionAndVision from "../AboutUs/MissionAndVision";
import RND from "../AboutUs/R&D";
import Applications from "../Applications/Applications";
import BallClay from "../Products/BallClay";
import SilicaSand from "../Products/SilicaSand";
import Downloads from "../Downloads/Downloads";
import Enquiry from "../ContactUs/Enquiry";
import Feedback from "../ContactUs/Feedback";
import Bentonite from './../Products/Bentonite';

const ContentPage = () => {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="director-message" element={<DirectorsMessage />} />
          <Route path="mission-vision" element={<MissionAndVision />} />
          <Route path="applications" element={<Applications />} />
          <Route path="ballClay" element={<BallClay />} />
          <Route path="silica-sand" element={<SilicaSand />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="bentonite" element={<Bentonite />} />
          <Route path="r-d" element={<RND />} />
      </Routes> 
    )
}

export default ContentPage
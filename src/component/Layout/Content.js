import {Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CompanyProfile from "../AboutUs/CompanyProfile";
import DirectorsMessage from "../AboutUs/DirectorsMessage";
import MissionAndVision from "../AboutUs/MissionAndVision";
import RND from "../AboutUs/R&D";

const ContentPage = () => {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="director-message" element={<DirectorsMessage />} />
          <Route path="mission-vision" element={<MissionAndVision />} />
          <Route path="r-d" element={<RND />} />
        
      </Routes> 
    )
}

export default ContentPage
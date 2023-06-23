import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./component/Home/Home";
import CompanyProfile from "./component/AboutUs/CompanyProfile";
import DirectorsMessage from "./component/AboutUs/DirectorsMessage";
import MissionAndVision from "./component/AboutUs/MissionAndVision";
import RND from "./component/AboutUs/R&D";
import Footer from './Footer';
import Header from './component/Layout/Header';
// import Layout from "./component/Layout/Layout";
import PageLayout from "./component/Layout/Layout";

const App = () => {

  return (
  <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  );
}

export default App;

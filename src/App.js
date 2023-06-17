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

  function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((path) => path);
  
    return (
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="ok" to="/">Home</Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
  
            return (
              <li key={path} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                {isLast ? (
                  <span>{path}</span>
                ) : (
                  <Link to={routeTo}>{path}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  return (
  <BrowserRouter>
    {/* <Header/> */}
    {/* <Breadcrumb />
      <Routes>
          <Route index element={<Home />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="director-message" element={<DirectorsMessage />} />
          <Route path="mission-vision" element={<MissionAndVision />} />
          <Route path="r-d" element={<RND />} />
        
      </Routes> */}
      {/* <Footer/> */}
      <PageLayout />
    </BrowserRouter>
  );
}

export default App;

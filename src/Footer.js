import React, { Component } from 'react';
import certify from './assets/certi.png';
import qrCode from './assets/qr-code.png';
import flogo from './assets/flogo.png';
import './style/Footers.css'
// import Footers from './Footers.css';
export default class Footer extends Component {
  render() {
    return (
     <>
       <div className="footer">
    <div className="container-fluid">
        <div className="row">
    <div className="col">
        <div className="logo">
            <img src={flogo} alt=""/>
            <p className="address">
                Address : Old Ghuntu Road , Morbi -363642, Gujrat, INDIA
            </p>
            <p>
                toll free Number : 1800 233 2223 | +91 7228922222 |  +91 7228922222
            </p>
            <p>
                Email Id : customercare@simpolo.net
            </p>
            <div className="qr">
            <img src={qrCode} alt=""/>
            </div>
          </div>
        </div>
                    <div className="col">
                        <div className="quickLink">
                            <h3>
                                QUICK LINKS
                            </h3>
                        </div>
                        <div className="link">
                            <a className="alink" href="#">DOWNLOADS |</a>
                            <a className="alink" href="#">WHERE TO BUY |</a>
                            <a className="alink" href="#">ENQUIRY |</a>
                            <a className="alink" href="#">EXPORT ENQUIRY |</a>
                            <a className="alink" href="#">BLOG</a>
                        </div>
                        <div className="product">
                            <h3>
                                PRODUCTS
                            </h3>
                            <a className="alink" href="#">VITRIFIED TILE |</a>
                            <a className="alink" href="#">BATHROOM TILE |</a>
                            <a className="alink" href="#">KITCHEN TILE |</a>
                            <a className="alink" href="#">FULLBODY TILE |</a>
                            <a className="alink" href="#">OUTDOOR TILE |</a>
                            <a className="alink" href="#">WALL TILES |</a>
                            <a className="alink" href="#">SANITARYWARE </a>
                        </div>
                        <div className="career">
                            <a href="#">
                <span>Careers At Simpolo</span>
            </a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
              <div className="icon">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col">
                            facebook
                            intsagram
                            tweeter
                            linkedin
                            youtube
                            P
                        </div>
                        <div className="col">
                        <div className="certificates">
                            <img src={certify} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

     </>
    )
  }
}

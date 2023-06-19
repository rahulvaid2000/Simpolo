import flogo from './../../assets/flogo.png';
import qrcode from './../../assets/qr-code.png';
import certi from './../../assets/certi.png';
const FooterPage = () => {
    return(
        <>
<div className="container-fluid">
      <div className="item">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="logo">
              <img src={flogo} alt="" />
              {/* assets/flogo.png */}
            </div>
            <div className="address">
              <h4>
                Address: Old Ghuntu Road, Morbi - 363642, Gujarat, INDIA Toll free Number: 1800 233 2223 | +91 7228922222 | +91 7228922222 Email Id: customercare@simpolo.net
              </h4>
            </div>
            <div className="qr-code">
              <img src={qrcode} alt=""/>
              {/* "assets/qr-code.png" */}
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
          <div className="simpolo">
           <div className="quicklink">
            <h4>quicklink</h4>
           </div>
           <div className="enquiry">
            <a className="link" href="">downolads </a> | 
            <a className="link" href="">where to buy </a> | 
            <a className="link" href="">enquiry </a> | 
            <a className="link" href="">export enquiry </a> | 
            <a className="link" href="">blog </a>
           </div>
           <div className="products">
            <h4>
              products
            </h4>
            <div className="tile">
            <a className="link" href="">vitrified tile </a> | 
            <a className="link" href="">bathroom tile </a> | 
            <a className="link" href="">kitchen tile </a> | 
            <a className="link" href="">fullbody tile </a> | 
            <a className="link" href="">outdoor tile </a> | 
            <a className="link" href="">wall tiles </a> | 
            <a className="link" href="">sanitaryware </a>

          </div>
           </div>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="icons">
              
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="certificate">
              <img src={certi} alt=""/>
              {/* src="assets/certi.png" */}
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default FooterPage;
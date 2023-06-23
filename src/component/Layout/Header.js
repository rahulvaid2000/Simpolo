import React from "react";
import {Link} from "react-router-dom";
import {Layout, Menu, Row, Col, Dropdown, } from "antd";
import {DownOutlined, CaretDownOutlined} from "@ant-design/icons";

import Simpolo from "../../assets/Logo.png";
import MissionAndVision from './../AboutUs/MissionAndVision';
import Feedback from './../ContactUs/Feedback';

const {Header} = Layout;
const {SubMenu} = Menu;

const HeaderMenu = () => {
    const aboutUs = (
        <Menu>
            <Menu.Item key="1" className="header-submenu">
            <Link to= "director-message">Director's Message</Link>   
            </Menu.Item>
            <Menu.Item key="2" className="header-submenu">
                Company Profile
            </Menu.Item>
            <Menu.Item key="3" className="header-submenu">
            <Link to="mission-vision">MissionAndVision</Link>
            </Menu.Item>
            <Menu.Item key="4" className="header-submenu">
                R & D
            </Menu.Item>
        </Menu>
    );

    const products = (
        <Menu>
            <Menu.Item key="5" className="header-submenu">
            <Link to="silica-sand">Silica Sand</Link>
            </Menu.Item>
            <Menu.Item key="6" className="header-submenu">
            <Link to="ballClay">  Ball Clay</Link>
            </Menu.Item>
            <Menu.Item key="7" className="header-submenu">
			<Link to="/bentonite">Bentonite</Link>
                
            </Menu.Item>
            <Menu.Item key="8" className="header-submenu">
                Kaolin
            </Menu.Item>
        </Menu>
    )
 
    const contactUs = (
        <Menu>
            <Menu.Item key="9" className="header-submenu">
            <Link to="/enquiry">Enquiry</Link>
            </Menu.Item>
            <Menu.Item key="10" className="header-submenu">
            <Link to="/feedback">Feedback</Link>
            </Menu.Item>
            <Menu.Item key="11" className="header-submenu">
                Contact Details
            </Menu.Item>
        </Menu>
    )

    return (
        <Row gutter={[16,16]} className="headerlayout">
            <Col span={24}>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                    // style={{
                    //     // lineHeight: "50px",
                    //     // display:"inline-block",
                    //     lineSpacing: "35px",
                    // }}
                    
                >
                    <Menu.Item>
                        <Link to="/">
                            <img className="header-logo" src={Simpolo} alt="Logo" />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="aboutUs" style={{float: "right"}}>
                        <Dropdown overlay={aboutUs}>
                            <a className="ant-dropdown-link">
                                About Us <CaretDownOutlined />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="products" style={{float: "right"}}>
                        <Dropdown overlay={products}>
                            <a className="ant-dropdown-link">
                                Products <DownOutlined />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="applications">
                        <Link to="/applications">Applications</Link>
                    </Menu.Item>
                    <Menu.Item key="downloads">
                        <Link to="/downloads">Downloads</Link>
                    </Menu.Item>
                    <Menu.Item key="contactUs" style={{float: "right"}}>
                        <Dropdown overlay={contactUs}>
                            <a className="ant-dropdown-link">
                                Contact Us <DownOutlined />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
        // <>
        //     <div className="collapse navbar-collapse" id="main_nav">
		// 					<ul className="navbar-nav">
		// 						<li className="nav-item dropdown has-megamenu">
		// 							<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> COLLECTIONS </a>
		// 							<div className="dropdown-menu megamenu">
									    
		// 								<div className="row">
		// 							      <div className="col-xl-6 col-lg-6 col-sm-4 col-4" style={{textAlign:"center"}}>
		// 								     <a href="vitrified"><h6 className="title">VITRIFIED TILES</h6></a>
		// 									 <hr style={{borderRight:"1px solid #f5f5f578"}}/>
		// 							      </div>
		// 								  <div className="col-xl-2 col-lg-2 col-sm-4 col-4" style={{textAlign:"center"}}>
		// 								     <a href="bathware"><h6 className="title">SANITARY WARE</h6></a>
		// 									 <hr style={{borderRight:"1px solid #f5f5f578"}}/>
		// 							      </div>
										  
		// 								   <div className="col-xl-2 col-lg-2 col-sm-4 col-4" style={{textAlign:"center"}}>
		// 								     <a href="wall-tiles"><h6 className="title">WALL TILES</h6></a>
		// 									 <hr style={{borderRight:"1px solid #f5f5f578"}}/>
		// 							      </div>
		// 							   </div>
									   
		// 								<div className="row">
		// 									<div className="col-xl-2 col-lg-2 col-sm-4 col-6"  style={{borderRight:"1px solid #f5f5f578"}}>
		// 										<div className="col-megamenu">
		// 											<h6 className="title">LOCATION</h6>
		// 											<ul className="list-unstyled">
		// 												<li><a href="location/livingroom">Livingroom</a></li>
		// 												<li><a href="location/bathroom">Bathroom</a></li>
		// 												<li><a href="location/kitchen">Kitchen</a></li>
		// 												<li><a href="location/outdoor">Outdoor</a></li>
		// 												<li><a href="location/balcony">Balcony</a></li>
		// 												<li><a href="location/staircase">Staircase</a></li>
		// 												<li><a href="location/elevation">Elevation</a></li>
		// 												<li><a href="location/commercial">Commercial</a></li>
		// 											</ul>
		// 										</div>
		// 										{/* <!-- col-megamenu.// -->  */}
		// 									</div>
		// 									{/* <!-- end col-3 --> */}
		// 									<div className="col-xl-2 col-lg-2 col-sm-4 col-6" style={{borderRight:"1px solid #f5f5f578"}}>
		// 										<div className="col-megamenu">
		// 											<h6 className="title">LOOK &amp; FEEL</h6>
		// 											<ul className="list-unstyled">
		// 												<li><a href="look&amp;feel/marble">Marble</a></li>
		// 												<li><a href="look&amp;feel/stone">Stone</a></li>
		// 												<li><a href="look&amp;feel/concrete">Concrete</a></li>
		// 												<li><a href="look&amp;feel/wood">Wood</a></li>
		// 												<li><a href="look&amp;feel/metal">Metal</a></li>
		// 												<li><a href="look&amp;feel/rustic">Rustic</a></li>
		// 												<li><a href="look&amp;feel/fullbody">Fullbody</a></li>
		// 																										<li><a href="look&amp;feel/double-charge">Double Charge</a></li>
		// 																										<li><a href="look&amp;feel/decor">Decor</a></li>
		// 												<li><a href="look&amp;feel/bookmatch">Bookmatch</a></li>
		// 											</ul>
		// 										</div>
		// 										{/* <!-- col-megamenu.// -->  */}
		// 									</div>
		// 									{/* <!-- end col-3 --> */}
		// 									<div className="col-xl-2 col-lg-2 col-sm-4 col-6" style={{borderRight:"1px solid #f5f5f578"}}>
		// 										<div className="col-megamenu">
		// 											<h6 className="title">COLOUR</h6>
		// 											<ul className="list-unstyled">
		// 												<li><a href="colour/white">White</a></li>
		// 												<li><a href="colour/black">Black</a></li>
		// 												<li><a href="colour/grey">Grey</a></li>
		// 												<li><a href="colour/cream">Cream | Beige</a></li>
		// 												<li><a href="colour/special">Special</a></li>
		// 											</ul>
		// 										</div>
		// 										{/* <!-- col-megamenu.// -->  */}
		// 									</div>
									    
		// 									<div className="col-xl-2 col-lg-2 col-sm-4 col-6"style={{borderRight:"1px solid #f5f5f578"}}>
		// 										<div className="col-megamenu">
		// 											{/* <!--<a href="bathware"><h6 className="title">SANITARYWARE</h6></a>--> */}
													
		// 											<ul className="list-unstyled">
		// 											   <li><a href="sanitaryware-list/ewcs">Ewcs &amp; Pan</a></li>
		// 											   <li><a href="sanitaryware/urinal/urinal">Urinal</a></li>
		// 							                   <li><a href="sanitaryware-list/basin">Basin</a></li> 
		// 											   <li><a href="sanitaryware-list/kitchen-sinks">Kitchen Sinks</a></li>
		// 											   <li><a href="sanitaryware-list/cisterns">Cisterns</a></li>
		// 							                   <li><a href="sanitaryware/accessories/accessories">Accessories</a></li>
		// 											</ul>
		// 										</div>
		// 									</div>
		// 									<div className="col-xl-2 col-lg-2 col-sm-4 col-6"style={{borderRight:"1px solid #f5f5f578"}}>
		// 										<div className="col-megamenu">
		// 											{/* <!--<a href="wall-tiles"><h6 className="title">WALL TILES</h6></a>--> */}
													
		// 											<ul className="list-unstyled">
		// 												{/* <!--<li><a href="size.php?size24=300x600mm">300x600mm</a></li> */}
		// 												{/* <li><a href="size.php?size25=300x450mm">300x450mm</a></li>--> */}
														
		// 												<li><a href="wall_tiles/wall-tiles-300x600mm">Wall Tiles 300x600mm</a></li>
		// 												<li><a href="wall_tiles/porcelain-elevation-tiles">Porcelain Elevation Tiles</a></li>
		// 												<li><a href="wall_tiles/wall-tiles-collection-300x450mm">Wall Tiles 300x450mm</a></li>
		// 												<li><a href="wall_tiles/prozzo-wall-tiles-collection">Prozzo Wall Tiles</a></li>
		// 												<li><a href="wall_tiles/wall-tiles-3rd-fire-collection">Wall Tiles 3rd Fire</a></li>
		// 											</ul>
		// 										</div>
		// 									</div>
		// 									<div className="col-xl-2 col-lg-2 col-sm-4 col-6">
		// 										<div className="col-megamenu">
		// 											<h6 className="title">QUICK SEARCH</h6>
		// 											<form className="main-form">
		// 												<div className="row">
		// 													<div className="col-12">
		// 														<div className="form-group">
		// 															<select className="form-control" onchange="location = this.value;">
        //                                                                 <option selected="" value="">Product Size</option>
        //                                                                 <option value="product_size/1200x2400mm">1200x2400mm</option>
        //                                                                 <option value="product_size/1600x3200mm">1600x3200mm</option>
        //                                                                 <option value="product_size/1200x1800mm">1200x1800mm</option>
		// 																<option value="product_size/1200x1200mm">1200x1200mm</option>
		// 																<option value="product_size/1450x3200mm">1450x3200mm</option>
		// 																<option value="product_size/598x1198mm">598x1198mm</option>
		// 																<option value="product_size/598x598mm">598x598mm</option>
		// 																<option value="product_size/800x1600mm">800x1600mm</option>
		// 																<option value="product_size/800x800mm">800x800mm</option>
		// 																<option value="product_size/800x2400mm">800x2400mm</option>
		// 																<option value="product_size/600x1200mm">600x1200mm</option>
		// 																<option value="product_size/600x900mm">600x900mm</option>
		// 																<option value="product_size/600x600mm">600x600mm</option>
		// 																<option value="product_size/400x400mm">400x400mm</option>
		// 																<option value="product_size/200x1200mm">200x1200mm</option>
		// 																<option value="product_size/790x3000mm">790x3000mm</option>
		// 																<option value="product_size/790x2600mm">790x2600mm</option>
		// 																<option value="product_size/300x1200mm">300x1200mm</option>
		// 																<option value="product_size/400x800mm">400x800mm</option>
		// 																<option value="product_size/300x300mm">300x300mm</option>
		// 																<option value="product_size/198x198mm">198x198mm</option>
		// 																<option value="product_size/200x1600mm">200x1600mm</option>
        //                                                             </select>
		// 														</div>
		// 													</div>
		// 													<div className="col-md-12">
		// 														<div className="form-group">
		// 															<select className="form-control" onchange="location = this.value;">
		// 																<option selected="" value="">Product Series</option>
		// 																																		<option value="series-list/courtyard-collection">Courtyard Collection</option>
		// 																<option value="series-list/neotra-collection">Neotra Collection</option>
		// 																<option value="series-list/forza-collection">Forza Collection</option>
		// 																<option value="product_series/supra_intra-collection">Supra &amp; Intra Collection</option>
		// 																<option value="product_series/terrazzo-collection">Terrazzo Collection</option>
		// 																<option value="product_series/altagloss-collection">Altagloss Collection</option>
		// 																<option value="product_series/prozzo-matt-carving-collection">Prozzo Matt Carving Collection</option>
																		
		// 																<option value="series-list/prozzo-select-endless-collection">Prozzo Select Endless Collection</option>
		// 																<option value="product_series/prozzo-1200x1800-collection">Prozzo 1200x1800 Collection</option>
																		
		// 																<option value="series-list/prozzo-collection-800x1600mm"> Prozzo Collection 800x1600mm</option>
		// 																<option value="product_series/kitchdeck-collection">Kitchdeck Collection</option>
                                                                        
		// 																<option value="series-list/ricco-collection">Ricco Collection</option>
		// 																<option value="product_series/saga_epocale-collection">Saga-Epocale Collection</option>
		// 																<option value="product_series/primo-collection">Primo Collection</option>
		// 																<option value="product_series/grande-collection">Grande Collection</option>
		// 																<option value="product_series/empressa-collection">Empressa Collection</option>
		// 																<option value="product_series/inicio-collection">Inicio Collection</option>
		// 																<option value="product_series/polar-collection">Polar Collection</option>
		// 																<option value="product_series/cordial-collection">Cordial Collection</option>
		// 																<option value="product_series/pozzolano-collection">Pozzolano Collection</option>
																		
		// 																<option value="series-list/integrity-collection">Integrity Collection</option>
		// 																<option value="product_series/armonia-collection">Armonia Collection</option>
		// 																<option value="product_series/soul-collection">Soul Collection</option>
		// 																<option value="product_series/lustrous-collection">Lustrous Collection</option>
		// 																<option value="product_series/mellow-collection">Mellow Collection</option>
		// 																<option value="product_series/variance-collection">Variance Collection</option>
		// 																<option value="product_series/grunge-collection">Grunge Collection</option>
		// 																<option value="series2/Copos">Copos Collection</option>
		// 																<option value="series2/Desert">Desert Collection</option>
																		
		// 																<option value="product_series/scs-marble-collection">SCS Marble Collection</option>
		// 																<option value="product_series/scs-wood-collection">SCS Wood Collection</option>
		// 																<option value="series-list/scs-neo-collection"> SCS NEO Collection</option>
		// 																<option value="series-list/rockdeck-collection">Rockdeck Collection</option>
		// 																<option value="series-list/rd-collection">RD Collection</option>
		// 																<option value="series-list/prozzo-collection">Prozzo Collection</option>
		// 																<option value="series-list/double-charge-collection">Double Charge Collection</option>
		// 																<option value="series2/Soluble-Salt">Soluble Salt Collection</option>
		// 																<option value="series2/Snow-Salt">Snow Salt Collection</option>
		// 																<option value="series-list/terra-duro-collection">Terra Duro Collection</option>
		// 																<option value="series-list/step-riser-collection">Step Riser Collection</option>
																		
		// 															</select>
		// 														</div>
		// 													</div>
															
													
		// 											        <div className="col-md-12">
													        
		// 											        	<form method="post" action="search/VITRIFIED-TILES">
		// 											        	<div className="form-group">
		// 											        		<input type="text" className="form-control" name="valueToSearch" placeholder="Search Product.." required=""/>
													        	
		// 											        	<div className="newsletter">
		// 											        		<button type="submit" name="search" className="form-btn1"><i className="fa fa-search"></i></button>
		// 											        	</div>
		// 														</div>
		// 											        	</form>	
													       
		// 											        </div>
															
		// 												</div></form>
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</li>
		// 						<li className="nav-item dropdown">
		// 							<a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">INTERACTIVE </a>
		// 							<ul className="dropdown-menu dropdown-menu-right">
		// 								<li><a href="tiles-calculator" className="dropdown-item">Tiles Calculator</a></li>
		// 								{/* <!--<li><a href="#" className="dropdown-item">Find your space</a></li>--> */}
		// 							</ul>
		// 						</li>
		// 						<li className="nav-item dropdown">
		// 							<a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">WHERE TO BUY </a>
		// 							<ul className="dropdown-menu dropdown-menu-right">
		// 								<li><a href="dealer" className="dropdown-item">Dealer</a></li>
		// 								<li><a href="simpolo-exclusive" className="dropdown-item">Simpolo Exclusive</a></li>
		// 							</ul>
		// 						</li>
		// 						<li className="nav-item"><a className="nav-link" href="download"> DOWNLOADS </a></li>
		// 						<li className="nav-item"><a className="nav-link" href="visualizer"> VISUALIZER </a></li>
		// 						<li className="nav-item dropdown">
		// 							<a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">ABOUT US </a>
		// 							<ul className="dropdown-menu dropdown-menu-right">
		// 								<li><a href="chairman-message" className="dropdown-item">Chairman Message</a></li>
		// 								<li><a href="company-profile" className="dropdown-item">Company Profile</a></li>
		// 								<li><a href="mission-vision" className="dropdown-item">Mission &amp; Vision</a></li>
		// 								<li><a href="achievement" className="dropdown-item">Achievements</a></li>
		// 								<li><a href="awards-recognition" className="dropdown-item">Awards &amp; Recognition</a></li>
		// 								<li><a href="plant" className="dropdown-item">Plant</a></li>
		// 								<li><a href="continua-technology" className="dropdown-item">Continua + Technology</a></li>
		// 								<li><a href="r-d" className="dropdown-item">R &amp; D</a></li>
		// 								<li><a href="certifications" className="dropdown-item">Certifications</a></li>
		// 							</ul>
		// 						</li>
		// 						<li className="nav-item dropdown">
		// 							<a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">CONTACT US </a>
		// 							<ul className="dropdown-menu dropdown-menu-right">
		// 								<li><a href="enquiry" className="dropdown-item">Enquiry</a></li>
		// 								<li><a href="export-enquiry" className="dropdown-item">Export Enquiry</a></li>
		// 								<li><a href="feedback" className="dropdown-item">Feedback</a></li>
		// 								<li><a href="contact-details" className="dropdown-item">Contact Details</a></li>
		// 								<li><a href="career" className="dropdown-item">Careers/Apply Online</a></li>
		// 							</ul>
		// 						</li>
		// 						<li className="nav-item dropdown">
		// 							<a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">MEDIA </a>
		// 							<ul className="dropdown-menu dropdown-menu-right">
		// 								<li><a href="blog" className="dropdown-item">Blog</a></li>
		// 								<li><a href="csr" className="dropdown-item">CSR</a></li>
		// 								<li><a href="tv-commercial" className="dropdown-item">TV Commercials</a></li>
		// 								<li><a href="corporate-video" className="dropdown-item">Corporate Videos</a></li>
		// 								{/* <!--<li><a href="social" className="dropdown-item">Social Handles</a></li>--> */}
		// 								<li><a href="pulse-newsletter" className="dropdown-item">Pulse Newsletter</a></li>
		// 							</ul>
		// 						</li>
								
		// 						<li className="nav-item dropdown">
		// 							<a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown"><i className="fa fa-search"></i> </a>
		// 							<ul className="dropdown-menu dropdown-menu-right">
		// 								<li>
										  
		// 								    <form method="post" action="search/vitrified-tiles">
		// 								       <input type="text" className="form-control" name="valueToSearch" placeholder="Search Product.."  style={{fontSize:"12px", height:"35px"}} required=""/>
		// 								       <button type="submit" name="search" className="form-btn1"  style={{right:"0px",height:"60px"}}><i className="fa fa-search"></i></button>
		// 								    </form>
											
		// 								</li>
		// 							</ul>
		// 						</li>
								
		// 						<li className="nav-item dropdown">
		// 							<a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown"><i className="fa fa-language"  style={{fontSize:"18px"}}></i> </a>
		// 							<ul className="dropdown-menu dropdown-menu-right"  style={{minWidth:"162px"}}>
		// 								<li>
		// 								  <div id="google_translate_element"><div className="skiptranslate goog-te-gadget" dir="ltr" ><div id=":0.targetLanguage" style={{display: "inline"}}><select className="goog-te-combo" aria-label="Language Translate Widget"><option value="">Select Language</option><option value="fr">French</option><option value="it">Italian</option><option value="pt">Portuguese</option><option value="ru">Russian</option><option value="es">Spanish</option></select></div>&nbsp;&nbsp;Powered by <span style={{whiteSpace:"nowrap"}}><a className="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com" target="_blank"><img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px"  style={{paddingRight:"3px"}} alt="Google Translate"/>Translate</a></span></div></div>
		// 								</li>
		// 							</ul>
		// 						</li>
							
		// 					</ul>
		// 				</div>
        // </>
    );
};

export default HeaderMenu;

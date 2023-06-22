import React from "react";
import {Image, Row, Col, Tooltip} from "antd";
import './../../style/SilicaSand.css'
import silica from './../../assets/Very-High-Melting-Boiling-Points-1.webp'
import silica1 from './../../assets/Insoluble-1.webp'
// import cili from './../../assets/Extremely-Hard-2.webp'
// import sili from './../../assets/Chemically-Inert-2.webp'
// import silica3 from './../../assets/Chemically-Inert-2.webp'
// import silica4 from './../../assets/Thermally-Stable-1.webp'


const SilicaSand = () => {
    return (
        <>
        {/* <div className="container">
            <div className="post-content">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <div className="image-container">
                              <img
                                src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Silica-sand-1.png?fit=524%2C452&ssl=1"
                                style={{marginTop: "0px"}}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <div className="product-content">
                             <h2>
                                 <b>Silica Sand</b>
                             </h2>
                             <p>
                                 Silica sand is the most common sand variety found in the world. Sand is a <br />
                                 general term for a collection of broken-down granular forms of minerals or rocks.
                                 <br /> Silica sand is made up mostly of quartz particles that, over the years, have been
                                 <br /> broken down due to water or wind into tiny particles. Silica sand deposits are
                                 <br /> usually surface-mined, and the extracted ore undergoes rounds of processing to
                                 <br /> increase its purity levels. As a result, silica sand is a rich contributor to
                                 silica and is
                                 <br /> therefore widely used in the ceramic industry, glass making, paints and many
                                 <br /> other such industries.
                             </p>
                                <div className="product-formula">
                                 <div className="inner">
                                     <p style={{textAlign: "center"}}>
                                         Silica Sand’s chemical composition is
                                         <br />
                                         <strong>SiO2</strong>
                                     </p>
                                 </div>
                             </div>
                    </div>
                </div>
            </div>
        </div>
        </div> */}

        <div class="container-fluid">
        <div class="row bg">
            <div class="col-sm silica">
            <img
            src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Silica-sand-1.png?fit=524%2C452&ssl=1"
                                // style={{marginTop: "0px"}}
                                />
            </div>
            <div className="col-sm sili">
                <h1>Silica Sand</h1>
                <p>Silica sand is the most common sand variety found in the world. Sand is a general term for a
                    collection of broken-down granular forms of minerals or rocks. Silica sand is made up mostly of
                    quartz particles that, over the years, have been broken down due to water or wind into tiny
                    particles. Silica sand deposits are usually surface-mined, and the extracted ore undergoes rounds of
                    processing to increase its purity levels. As a result, silica sand is a rich contributor to silica
                    and is therefore widely used in the ceramic industry, glass making, paints and many other such
                    industries.</p>
                <h6 class="dibba">Silica Sand’s chemical composition is <br/>
                    <center><strong>SiO2</strong></center>
                </h6>

            </div>

        </div>
    </div>



    
            {/* <div className="container-fluid">
                <div className="porto-wrap-container">
                    <Row>
                        <Col md={24}>
                            <h2>Physical Properties</h2>
                            <p>
                                Feldspars exhibit several remarkable physical properties, which drive their applications
                                <br /> in a variety of sectors:
                            </p>
                        </Col>
                    </Row>
                </div>
            </div> */}

            {/* <div className="container">
                <div className="porto-wrap-container ">
                    <Row>
                        <Col lg={4}>
                        
                            <img
                                src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Very-High-Melting-Boiling-Points-1.png?fit=200%2C200&ssl=1"
                                style={{marginTop: "0px"}}
                            />
                            <h3>
                                Very High Melting & <br /> Boiling Points
                            </h3>
                        </Col>
                        <Col lg={4}>
                            <img
                                src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Insoluble-1.png?fit=200%2C200&ssl=1"
                                style={{marginTop: "0px"}}
                            />
                            <h3>Insoluble</h3>
                        </Col>
                        <Col lg={4}>
                            <img
                                src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Extremely-Hard-2.png?fit=200%2C200&ssl=1"
                                style={{marginTop: "0px"}}
                            />
                            <h3>Extremely Hard</h3>
                        </Col>
                        <Col lg={4}>
                            <img
                                src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Chemically-Inert-2.png?fit=200%2C200&ssl=1"
                                style={{marginTop: "0px"}}
                            />
                            <h3>Chemically Inert</h3>
                        </Col>
                        <Col lg={4}>
                            <img
                                src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Thermally-Stable-1.png?fit=200%2C200&ssl=1"
                                style={{marginTop: "0px"}}
                            />
                            <h3>Thermally Stable</h3>
                        </Col>
                    </Row>
                </div>
            </div> */}



{/* my content */}
            <div className="container-fluid">
        <div className="middle">
            <div className="row">
                <div className="col-md-12">
                    <h1>Physical Properties</h1>
                    <p>Feldspars exhibit several remarkable physical properties, which drive their applications <br/> in
                        a variety of sectors:</p>
                </div>
            </div>
        </div>
    </div>


    <div className="container">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 props">
            <div className="col">
                <img src={silica} alt="" />
                <p>Very High Melting & <br/> Boiling Points</p>
                
            </div>

            <div className="col">
                <img src={silica1} alt="" />
                <p>Insoluble</p>
                
            </div>

            <div className="col">
                {/* <img src={cili} alt="" /> */}
                <p>Extremely Hard</p>
                
            </div>

            <div className="col">
                {/* <img src={silica3} alt="" /> */}
                <p>Chemically Inert</p>
               
            </div>
            <div className="col">
                {/* <img src={silica4} alt="" /> */}
                <p>Thermally Stable</p>
                
            </div>
        </div>
    </div>










            {/* <div className="container-fluid">
                <div className="porto-wrap-container">
                    <Row>
                        <Col md={24}>
                            <h2>Applications</h2>
                            <p>
                                The rich silica content of Silica sand makes it highly useful in a lot of applications,
                                given
                                <br /> its remarkable physical and chemical properties:
                            </p>
                        </Col>
                    </Row>
                </div>
            </div> */}

            <div class="container-fluid">
        <div class="apps">
            <div class="row">
                <div class="col-md-12">
                    <h1>Applications</h1>
                    <p>The rich silica content of Silica sand makes it highly useful in a lot of applications, given
                        <br/> its remarkable physical and chemical properties:
                    </p>
                </div>
            </div>
        </div>
    </div>

            <div className="container-fluid">
                <div className="porto-wrap-container">
                    <Row>
                        <Col md={6}>
                            <div className="image-container">
                                <div className="image-wrapper">
                                    <Image src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Industrial-Abrasives-1.jpg?fit=270%2C240&ssl=1" preview={false}/>
                                    <div className="image-overlay">
                                        <div className="image-text">
                                            <b>Industrial Abrasives</b>
                                            <br />
                                            Silica sand is widely used as a mineral abrasive used for industrial
                                            blasting, wherein it is pushed under pressure to smoothen a rough surface.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className="image-container">
                                <div className="image-wrapper">
                                    <Image src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Glassmaking-1.jpg?fit=270%2C240&ssl=1" preview={false}/>
                                    <div className="image-overlay">
                                        <div className="image-text">
                                            <b>Industrial Abrasives</b>
                                            <br />
                                            Silica sand is widely used as a mineral abrasive used for industrial
                                            blasting, wherein it is pushed under pressure to smoothen a rough surface.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className="image-container">
                                <div className="image-wrapper">
                                    <Image src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Industrial-Abrasives-1.jpg?fit=270%2C240&ssl=1" preview={false}/>
                                    <div className="image-overlay">
                                        <div className="image-text">
                                            <b>Industrial Abrasives</b>
                                            <br />
                                            Silica sand is widely used as a mineral abrasive used for industrial
                                            blasting, wherein it is pushed under pressure to smoothen a rough surface.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className="image-container">
                                <div className="image-wrapper">
                                    <Image src="https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Industrial-Abrasives-1.jpg?fit=270%2C240&ssl=1" preview={false}/>
                                    <div className="image-overlay">
                                        <div className="image-text">
                                            <b>Industrial Abrasives</b>
                                            <br />
                                            Silica sand is widely used as a mineral abrasive used for industrial
                                            blasting, wherein it is pushed under pressure to smoothen a rough surface.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </>
    
    );
};

export default SilicaSand;

import { Image, Row, Col } from 'antd';
import React from 'react'

const BallClay = () => {
return(
    <Row className='d-flex'>
    <Col sm={12}>
        <Image src='https://i0.wp.com/jldminerals.com/wp-content/uploads/2022/06/Silica-sand-1.png?fit=524%2C452&ssl=1'></Image>
    </Col>
    <Col sm={12} className='d-flex'>
        <h1></h1>
        <p>Silica sand is the most common sand variety found in the world. Sand is a <br />
        general term for a collection of broken-down granular forms of minerals or rocks.<br /> Silica sand is made up mostly of quartz particles that, over the years, have been<br /> broken down due to water or wind into tiny particles. Silica sand deposits are<br /> usually surface-mined, and the extracted ore undergoes rounds of processing to<br /> increase its purity levels. As a result, silica sand is a rich contributor to silica and is<br /> therefore widely used in the ceramic industry, glass making, paints and many<br /> other such industries.</p>
    </Col>
        
    </Row>
)
}


export default BallClay;
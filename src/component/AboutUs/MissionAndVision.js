import React from 'react'
import './../../style/MissionAndVision.css'
import mission from '../../assets/mission.png'
import vision from '../../assets/vision.png'
import a from '../../assets/core-1.png'
import b from '../../assets/core-2.png'
import c from '../../assets/core-3.png'
import d from '../../assets/core-4.png'
import e from '../../assets/core-5.png'
const MissionAndVision = () => {
    return(
        <>

        {/* content */}

<div class="row g-0 mission">
    <div class="col-sm-6 col-md-1">
        <img src={mission} alt="" /></div>
    <div class="col-6 col-md-3"><h3>MISSION</h3> <br/>
        <p>Committed to delight customers with world class ceramic products and services.Make Simpolo
            synonymous to best quality and set new benchmarks of excellence for all stakeholders. Pursue
            best business practices with utmost integrity to make Simpolo an exciting organization to work
            with, for vendors, channel partners, investors and employees alike.</p></div>

            <div class="col-sm-6 col-md-1 vision">
                <img src={vision} alt="" /></div>
    <div class="col-6 col-md-3"><h3>Vision</h3> <br/>
        <p>Gain world wide recognition in the field of ceramic building products through Research and Innovation
             and bring an enhanced lifestyle within reach for every household.</p></div>
  </div>



 {/* grid */}

<div class="container-fluid">
    <div class="row">
        <div class="values">
        <div class="col-md-12">
            <h3>CORE VALUES</h3>
        </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row many">
        <div class="col">
            <img src={a} alt=""/> <br/>
            <h5>Innovation <br/> is a state of mind.</h5>
            <div class="line"></div>
        </div>

        <div class="col">
            <img src={b} alt=""/> <br/>
            <h5>Quality <br/> begets excellence.</h5>
            <div class="line"></div>
        </div>

        <div class="col">
            <img src={c} alt=""/> <br/>
            <h5>Innovation <br/> is a state of mind.</h5>
            <div class="line"></div>
        </div>

        <div class="col">
            <img src={d} alt="" /> <br/>
            <h5>Innovation <br/> is a state of mind.</h5>
            <div class="line"></div>
        </div>

        <div class="col">
            <img src={e} alt="" /> <br/>
            <h5>Innovation <br/> is a state of mind.</h5>
        </div>
    </div>
</div>

  </>

    )
}

export default MissionAndVision;
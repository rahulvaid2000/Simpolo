import React from 'react'
import { Link } from "react-router-dom";
import research from '../../assets/research.jpg';
import '../../style/AboutUs.css'

const RND = () => {
  return (
    <>   
     <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">Home /</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">About Us /</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">R & D</Link>
                </li>
                </ul>
        </div>
    </div>
</nav>


<div className="container">
    <div className="row">
        <div className="col-md-4 col-sm-12 data">
            <img src={research} alt=""/>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 col-sm-12 research">
            <h3>RESEARCH & DEVELOPMENT</h3>
            <br />
            <p>The artistry of simplicity is such that while it is timeless yet it is always new. Achieving this
                level of maturity requires years of questioning the purpose of our existence and truly understanding
                who we are creating for.<br/><br/>
                Simpolo’s research and development laboratory is the biggest in India in terms of the sheer
                complexity and size. <br> </br>
                Changing the face of the ceramic industry, one innovation at a time. Every product of Simpolo is a
                result of a flawless R&D set-up. 
                Discovering opportunities that can simplify lives by means of breakthrough technology and
                innovations.
       </p>

        </div>
    </div>
</div>


<div className="container">
    <div className="row">
        <div className="strength">
        <div className="col-md-12">
            <h2>THE STRENGTH OF TESTING FACILITIES</h2>
        </div>
        </div>  
    </div>
</div>

<div className="container">
    <div className="row">
        <div className="table">
            <div className="col-md-12">

                <table>
                    <tr>
                        <th><b>SR.NO.</b></th>
                        <th><b>CHARACTERISTIC</b></th>
                        <th><b>TEST METHOD</b></th>
                        <th><b>INSTRUMENT MAKE</b></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Water of Plasticity</td>
                        <td>Available</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Residue(100#, 200#, 240#, 300#, 325#)</td>
                        <td>Available</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Slaking of clay</td>
                        <td>Available</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Green modulus of rapture</td>
                        <td>ISO-10545-4</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Dry Modulus of rupture</td>
                        <td>ISO-10545-4</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Fired Modulus of rupture</td>
                        <td>ISO-10545-4</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Dry shrinkage</td>
                        <td>ISO-10545-2</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Fired shrinkage</td>
                        <td>ISO-10545-2</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Color spectrometry ( L* a b )</td>
                        <td>SPECTROMETER</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Water absorption</td>
                        <td>ISO-10545-3</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Bulk density ( green / fired )</td>
                        <td>MERCURIMETER</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Porosity</td>
                        <td>ISO-10545-3</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Viscosity</td>
                        <td>FORD CUP/ BROOKEFIELD</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Workable electrolyte</td>
                        <td>Available</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>PH</td>
                        <td>PH METER</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>T.D.S.</td>
                        <td>T.D.S. METER</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>Particle size analysis</td>
                        <td>Laser diffraction</td>
                        <td>England</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Thermal expansion</td>
                        <td>ISO-10545-8</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>Dimension (length, width, thickness)</td>
                        <td>ISO-10545-2</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Surface flatness</td>
                        <td>SO-10545-2</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>21</td>
                        <td>Glossiness ( 60° )</td>
                        <td>GLOSSOMETER</td>
                        <td>Japan</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>MOHW’S hardness</td>
                        <td>EN-101</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>Deep abrasion resistance</td>
                        <td>ISO-10545-6</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td>Crazing</td>
                        <td>ISO-10545-11</td>
                        <td>India</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>Surface abrasion</td>
                        <td>ISO-10545-7</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>Impact resistance</td>
                        <td>ISO-10545-5</td>
                        <td>China</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Breaking strength</td>
                        <td>ISO-10545-4</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Skid resistance</td>
                        <td>ISO-10545-17</td>
                        <td>China</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>Stain resistance</td>
                        <td>ISO-10545-14</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>Chemical resistance31</td>
                        <td>ISO-10545-13</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Gross Calorific value ( solid fuel)</td>
                        <td>BOMB CALORIMETER</td>
                        <td>India</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Paper bursting test</td>
                        <td>BRUSTIING M/C</td>
                        <td>India</td>
                    </tr>
                    <tr>
                        <td>33</td>
                        <td>Penetration</td>
                        <td>PENETROMETER</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>34</td>
                        <td>Chemical analysis</td>
                        <td>ED XRF</td>
                        <td>Netherland</td>
                    </tr>

                </table>

            </div>
        </div>
    </div>
</div>
</>
  )
}

export default RND;

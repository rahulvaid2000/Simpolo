import React from 'react'
import videos  from '../../assets/simpolo video.mp4';
import sign from '../../assets/sign.png'
import welcome from '../../assets/welcome.png'
import ipl from '../../assets/ipl.jpg'
import crousel1 from '../../assets/kitchdeck.jpg'
import crousel2 from '../../assets/kitchdeck (1).jpg'
import crousel3 from '../../assets/vitrified.jpg'
import crousel4 from '../../assets/vitrified (1).jpg'
import crousel5 from '../../assets/wall.jpg'
import crousel6 from '../../assets/wall (1).jpg'
import crousel7 from '../../assets/sanitaryware.jpg'
import crousel8 from '../../assets/bathware(1).jpg'
import crousel9 from '../../assets/outdoor.jpg'
import crousel10 from '../../assets/rockdeck(1).jpg'
import fullbody from '../../assets/fullbody.jpg'
import concrete from '../../assets/concrete.jpg'
import wood from '../../assets/wood.jpg'
import stone from '../../assets/stone.jpg'
import marble from '../../assets/marble.jpg'
import virture from '../../assets/virture.png'
import sparklogo from '../../assets/spark-logo.png'
import digital from '../../assets/digital.png'
import calculator from '../../assets/calculator.png'
import TVcommercial from '../../assets/TV Commercial.png'
import buy from '../../assets/buy.png'
import catalogues from '../../assets/catalogues.png'
import madeinindia from '../../assets/madeinindia.png'
import compny from '../../assets/compny.jpg'
import '../../style/Home.css'
import VideoPlayer from '../Common/VideoPlayer';
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <>
 <div className="container-fluid">
    {/* <div className="row">
      <div className="col-lg-12"> */}
        {/* <div className="v_design">
          <video width="100%" height="100%" controls >
      <source src={videos} type="video/mp4"/>
     </video>
        </div> */}
        <VideoPlayer />
      {/* </div>
    </div> */}
  </div>

  {/*  Main content */}

<div className="container">
  <div className="row">
    <div className="col-md-3 col-sm-12">
      <div className="welcome">
        <img src={welcome} alt="welcome"/>
      </div>
    </div>
    <div className="col-md-8 col-sm-12">
      <div className="para">
        <p>Just one look at Simpolo’s exclusive and spellbinding range of ceramics will leave you craving for more.
          You’ll cherish the vibrant yet minimalistic designs and take pride in the remarkable and unmatchable
          superior qualities. With innovations like the cutting-edge anti-bacterial iM+ Technology and scratch-free
          POSH surfaces, Simpolo is frequently setting benchmarks of excellence in the world of tiles and
          sanitaryware. Each home adorned with Simpolo is unique and ultra-attractive in its own way. Reason why we
          say, ‘Dekhte reh jaoge’!</p>
        <img src={sign} alt="sign loaded" className="sign" />
    </div>
  </div>
  </div>
  </div>  

  {/* <!-- ipl image --> */}
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="ipl">
          <img src={ipl} alt=""/>
        </div>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="creation">
          <h3>Discover our creations</h3>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- carousel --> */}

  {/* <div class="container">
    <div className="row">
      <div className="carousel">
        <div className="col-md-12">
          <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={crousel1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={crousel2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={crousel3}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={crousel4}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={crousel5}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src={crousel6}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src={crousel7}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={8}
        src={crousel8}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={9}
        src={crousel9}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        itemId={10}
        src={crousel10}
        alt='...'
      />
    </MDBCarousel>

          <div className="col-md-6">
            <div className="words">
              <h3>ELEGANCE,LUXURY, <br/>GLAMOUR AND <br/>SENSUALITY</h3>
            </div>
          </div>

          <div className="col-md-12">
            <div class="paragraph">
              <p>Explore the designs for your spaces with a new outlook <br/> with Simpolo’s wide variety of tiles
                collection that <br/> provides an alluring and extravagant look to space.</p>
              <p>We have a large selection of tiles to choose from and to <br/> build a space with a unique touch that
                speaks volumes <br/> about your awe-inspiring lifestyle. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  
  {/* <!-- Next content --> */}

<div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <div className="creation">
        <h3>PERCEIVE THE REMARKABLE</h3>
      </div>
    </div>

    <div className="col-lg-4">
      <img src={fullbody} alt=""/>
      <img src={concrete} alt=""/>
    </div>
    <div className="col-md-4 room2">
      <img src={wood} alt="" />
    </div>
    <div className="col-md-4 room3">
      <img src={stone} alt=""/>
      <img src={marble} alt=""/>
    </div>
  </div>
</div>

{/* <!-- 3rd content box --> */}


  
<div className="container cont">
  <div className="row">
    <div className="spark">
      <div className="col-md-12 text-center divide">
        <img src={sparklogo} alt=""/>
        <h3>SIMPOLO DIGITAL PLATFORMS</h3>
        <p>With Simpolo, you can create the spaces that you have always dreamt of within 10 minutes! <br/>
          You are going to enjoy the process of tile selection with our breakthrough and easy-to-use Tile Visualizer.
        </p>




        <div className="square">
          <div className="col-md-6">
            <div className="col-md-6">
              <img src={digital} alt="" width="20%"/>
            </div>
            <div className="col-md-6">
              <h3>Digital Showroom</h3>
              <p>Now you can visualize our entire Product range digitally to select the best Tile for your spaces.</p>
            </div>
          </div>
        </div>


        <div className="square2">
          <div className="col-md-6">
            <div className="col-md-6">
              <img src={virture} alt="" />
              </div>
              <div className="col-md-6">
              <h3>Virtual Space Creator</h3>
              <p>Create your own space virtually before you build it physically.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>  
  </div>


  <div className="container">
    <div className="heading">
      <h3>WE REMIND YOU OF OUR AVAILABLE TOOLS</h3>
    </div>
    <div className="box" id="box1">
      <img src={calculator} alt=""/>
      <h5>Tile Calculator</h5>
      <p>Calculate your tile requirements <br/> with the tile calculator</p>
    </div>

    <div className="box" id="box2">
      <img src={TVcommercial} alt=""/>
      <h5>TV Commercials</h5>
      <p>Enjoy our absolutely fascinating commercials</p>
    </div>

    <div className="box" id="box3">
      <img src={buy}alt=""/>
      <h5>WHERE TO BUY</h5>
      <p>Find out details to make a purchase from us</p>

    </div>

    <div className="box" id="box4">
      <img src={catalogues} alt=""/>
      <h5>CATALOGUES</h5>
      <p>Discover our wide variety of ceramic products</p>
    </div>
  </div>




  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="life">
          <h3>SIMPOLO WAY OF LIFE</h3>
        </div>
      </div>
    </div>
  </div>


  <div className="container">
    <div className="row">
      <div className="half">
        <div className="col-md-6">
          <img src={madeinindia} alt=""/>
          <p>Since the first steps were taken in the year 1977, Simpolo Ceramics has carved its niche as a consistently
            growing organisation with sheer innovation and passion rooted in simplicity. </p>
          <p>We endure gratification for every experience that we offer, created to share something truly meaningful. It
            may not resonate with the majority, but that is what takes us a class apart. If only a handful were to
            understand the purpose of our existence, we would be proud to have found our believers. Rather, people with
            whom we can share our beliefs.</p>
          <button>EXPLORE</button>
        </div>
        <div className="col-md-6">
          <div className="better">
            <img src={compny} alt=""/>
          </div>
        </div>
        </div>
        </div>
        </div>
     </>
  )
}

export default Home
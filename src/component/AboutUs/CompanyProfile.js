import React from 'react'
import '../../style/CompanyProfile.css'
import company from '../../assets/compny.jpg'

const CompanyProfile = () => {
      return (
      <div className="container">
        <div className="row">
           <div className="col-md-6">
             <img src={company} alt=""  />
           </div>
           <div className="col-md-5 ">
            <h3>THE World <br />
             PHILOSOPHY</h3>
             <p>Since the first steps were taken in the year 1977, Simpolo Ceramics has carved its niche as a consistently growing organisation with unparalleled innovation and passion rooted in simplicity.
            </p>
            <p>We endure gratification for every experience that we offer, created to share something truly meaningful.It may not resonate with the majority, but that is what takes us a className apart.If only a handful were to understand the purpose of our existence, we would be proud to have found our believers. Rather, people with whom we can share our beliefs.</p>
         </div>
        </div>
    </div>
    )
  
}

export default CompanyProfile;
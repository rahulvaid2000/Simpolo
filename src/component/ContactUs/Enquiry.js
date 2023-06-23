import React from 'react'
import './../../style/Enquiry.css'
const Enquiry = () => {
       return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-2">
                <div className="dropdownF">
                <select className="form-control" name="application" id="application" required=""> 
												<option value="">Select Application </option>
												<option value="Tiles">Tiles</option>
												<option value="Sanitaryware">Sanitaryware</option>
											</select>
                                            </div>
                                            </div>
                                            <div className="col-md-12">
                                            <div className="dropdownF">
                                             <select className="form-control" name="application" id="application" required=""> 
												<option value="">Enquiry</option>
												<option value="Tiles">Tiles</option>
												<option value="Sanitaryware">Sanitaryware</option>
											</select>
                                            </div>
                                            </div>
                                        </div> 
                                            <div className="row"> 
                                            <div className="col-lg-6 col-sm-12">
                                            <div className="form-group mt-4">
											<input type="text" name="name" className="form-control mt-4" placeholder="Name *" required=""/>
											<input type="text" name="name" className="form-control mt-4" placeholder="Firm Name*" required=""/>
											<input type="text" name="name" className="form-control mt-4" placeholder="Contact Number" required=""/>
											<input type="text" name="name" className="form-control mt-4" placeholder="Email ID*" required=""/>

										</div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                            <div className="form-group mt-4">
                                            <textarea class="form-control mt-4" rows="10" name="address" placeholder="Detailed Address" required=""></textarea>
                                            <select className="form-control mt-4" name="application" id="application" required=""> 
												<option value="">India</option>
												<option value="Tiles">Tiles</option>
												<option value="Sanitaryware">Sanitaryware</option>
											</select>
                                            <select className="form-control mt-4" name="application" id="application" required=""> 
												<option value="">Select City</option>
												<option value="Tiles">Tiles</option>
												<option value="Sanitaryware">Sanitaryware</option>
											</select>
                                            <select className="form-control mt-4" name="application" id="application" required=""> 
												<option value="">Selected State</option>
												<option value="Tiles">Tiles</option>
												<option value="Sanitaryware">Sanitaryware</option>
											</select>
                                            
										</div>
                                        
                                            </div>
                </div>
                <textarea className="form-control time mt-4" rows="10" name="address" placeholder="Comments" required=""></textarea>
                <div className="d-grid gap-2 col-2 mx-auto submit">
  <button className="btn btn-dark mt-4 mb-4 onSubmit" type="button">submit</button>
</div>
            </div>
          
        </>
       )
}

export default Enquiry;
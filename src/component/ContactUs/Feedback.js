import React from 'react'

const Feedback = () => {
return(
    <>
        <div className="container">
            <div className="row">
         <div className="col-lg-4 md:col-6 sm:col-12">
			<input type="text" name="name" className="form-control mt-4" placeholder="Your Name *" required=""/>
             </div>
             <div className="col-lg-4 md:col-6 sm:col-12">
			<input type="text" name="name" className="form-control mt-4" placeholder="Your Email *" required=""/>
             </div>
             <div className="col-lg-4 md:col-6 sm:col-12">
			<input type="text" name="name" className="form-control mt-4" placeholder="Your Phone No. *" required=""/>
             </div>
             <div className="col-lg-6">
             <textarea className="form-control time mt-4" rows="10" name="address" placeholder="Profession" required=""></textarea>

             </div>
             <div className="col-lg-6">
             <textarea className="form-control time mt-4" rows="10" name="address" placeholder="Your feedback" required=""></textarea>

             </div>
             <div className="d-grid gap-2 col-2 mx-auto submit">
  <button className="btn btn-dark mt-4 mb-4 onSubmit" type="button">submit</button>
</div>
            </div>


        </div>
    </>
)
}

export default Feedback;
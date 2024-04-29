import React from 'react'
import { FaStar } from "react-icons/fa";
import '../Components/Testimonails.css'

function Testimonials() {
  return (
 <>
{/* testimonials starts here */}

<div className="tm_main container">
       <div className="container p-5 ">
            <h6 className="test-head fw-semibold text-center">TESTIMONIALS</h6>
            <h2 className="fw-semibold text-center my-3">
              Students testimonials
            </h2>
            <p className="text-center ">
          
"Discover what our Students are saying about DevRootz: Transforming Visions into Reality."
            </p>
          </div>
      <div className="row d-flex mx-auto tm-bg w-100">
        <div className="col-lg-4 ">
        <div className="card border-0  p-3" >
            <img src={require("../Components/images/testimonal-Nitish.jpg")} className=" rounded-circle card-img-top w-50  d-block mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-center">Nitish Sanjeev</h5>
              <p className="card-title text-center">Software Developer</p>

              <p className="card-text text-center tm-para">"DevRootz has been instrumental in transforming our digital presence. Their expertise in web development and design has elevated our brand and improved user experience significantly."</p>
              <p className="text-center ">
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
        <div className="card  shadow border-0  p-3" >
            <img src={require('../Components/images/testimonal-vamshi.jpeg')} className=" rounded-circle card-img-top w-50  d-block mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-center">Vamshi</h5>
              <p className="card-title text-center">Software Developer</p>

              <p className="card-text text-center">"DevRootz exceeded our expectations with their innovative approach to our website. our vision and executed it flawlessly, resulting in a modern and user-friendly website."</p>
              <p className="text-center">
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar/>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="card border-0  p-3 d-block" >
            <img src={require('../Components/images/anil.jpeg')} className=" tm-img rounded-circle card-img-top w-50  d-block mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-center">Sandeep Kumar</h5>
              <p className="card-title text-center">Software Developer</p>

              <p className="card-text text-center">"Choosing DevRootz for our development needs was one of the best decisions we made. Their dedication to quality and client satisfaction is evident in every aspect of their work".</p>
              <p className="text-center ratings ">
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
              </p>
              
            </div>
          </div>
        </div>
      </div>
       </div>

        {/* testimonials ends here */}
 
 </>
  )
}

export default Testimonials

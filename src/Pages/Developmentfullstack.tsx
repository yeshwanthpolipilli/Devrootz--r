import React from 'react'
import '../Components/style.css'
import Footer from '../Components/Footer';
import '../Pages/corporate.css'
import Animationsquare from '../Components/Animationsquare';
import Contactbanner from '../Components/Contactbanner';

function Developmentfullstack() {
  return (
    <>

 
    <div className="container-fluid bg-white   text-dark">
   <div className="container ">
    <div className="row">
      <div className="col-md-5" data-aos="fade-left" data-aos-duration="1000">
      <img className='w-100 ' src={require('../Components/images/fulstack.png')} alt="" />
      </div>

      <div className="col-md-7  d-flex  flex-column justify-content-center">
        <div className="container mx-sm-5">
        <h2 className='mt-5 text-center text-dark'>
       Full Stack Development
        </h2>
        <p>
        Become a Full-Stack Developer: Build, Deploy, & Land Your Dream Job</p>
                <p className="pt-3">
                  Master the In-Demand Skills to Craft Interactive Web
                  Applications (with Placement Assistance!) In today's digital
                  age, full-stack developers are the rockstars of the tech
                  world. They possess the expertise to build both the front-end
                  (user interface) and back-end (server-side) of web
                  applications, making them incredibly valuable assets for
                  businesses. Our comprehensive full-stack development course,
                  complete with placement assistance, equips you with the skills
                  and knowledge to launch a thriving career in this exciting
                  field.
                </p>
        
        </div>
  </div>
    </div>
 
   </div>
   </div>











 {/* python course banner3 starts here */}
 <div className="container-fluid p-5">

<h1 className='fs-4 my-3 mx-5 text-dark fw-semibold text-center text-decoration-underline'>Why Choose Our Full Stack Development Course?</h1>

<div className="container d-flex flex-wrap justify-content-center">
    <div className="flex-item ">
        <div>
        <div className="card card-run">
           
        <img className='w-100 ' src={require('../Components/images/stack1.webp')} alt="" />
      <p className="card-title1 my-1"> Become Job-Ready Fast</p>
      <p className="small-desc">
      Gain the practical skills and industry insights needed to excel in today's job market. (We even offer pay after placement options for select students!) </p>
    
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>

    <div className="flex-item ">
        <div>
        <div className="card card-run">
        <img className='w-100 PYTHON4' src={require('../Components/images/stack2.webp')} alt="" />
     
      <p className="card-title1 mt-2">	Master Both Fronts</p>
      <p className="small-desc">
      Learn front-end technologies like HTML, CSS, and JavaScript frameworks (React, Angular, Vue.js) to create stunning user interfaces.
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>

    <div className="flex-item ">
        <div>
        <div className="card card-run">
        <img className='w-100 ' src={require('../Components/images/stack3.webp')} alt="" />
      <p className="card-title1 my-2">	Conquer the Back-End</p>
      <p className="small-desc">
      Dive into back-end development using languages like Python, Java, or Node.js, and master databases (MySQL, PostgreSQL) for data storage and retrieval.      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>

    <div className="flex-item ">
        <div>
        <div className="card card-run">
        <img className='w-100 ' src={require('../Components/images/stack4.webp')} alt="" />
      <p className="card-title1">	Project-Based Learning</p>
      <p className="small-desc">
      Solidify your knowledge by building real-world web applications throughout the course.      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>
</div>
</div>


 {/* cards starts here */}


 {/* cards ends here  */}



{/* faq */}

<Contactbanner/>
{/* faq */}






{/*  */}


  <Animationsquare/>



{/*  */}










<Footer/>



  
 
 
 
  
 </>
  )
}

export default Developmentfullstack

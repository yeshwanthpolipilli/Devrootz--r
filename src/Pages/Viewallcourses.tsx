import { Link } from "react-router-dom";
import "../Pages/viewall.css";
import Tilt from "react-parallax-tilt";

function Viewallcourses() {
  return (
    <>
      {/* python page starts here */}
      <div className="container-fluid bg-light   text-dark p-5">
        <div className="container ">
          <div className="row">
            <div
              className="col-md-5"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {" "}
              <Tilt>
                <img
                  className="w-100 mt-3"
                  src={require("../Components/images/RECREATE PYTHON.webp")}
                  alt=""
                />
              </Tilt>
            </div>

            <div className="col-md-7">
              <div className="container mx-sm-5">
                <h2 className="mt-5 text-center text-dark">Python Mastery</h2>

                <p>
                  Unleash Your Python Potential: Master the Language, Land Your
                  Dream Job Master Python Programming & Launch Your Tech Career
                </p>
                <p className="python-para my-5 mx-auto">
                  Are you ready to unlock the power of Python and become a
                  highly sought-after programmer? Our comprehensive Python
                  mastery course with training and placement is designed to
                  equip you with skils and knowledge to excel in today's dynamic
                  tech landscape
                </p>
                <p className=" w-25 text-center more-know1 text-white ">
                  <Link className="nav-link" to={"/PythonCourse"}>
                  
                    Know More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* python page endsc here */}

      {/* full stack page starts here */}

      <div className="container-fluid bg-white  text-dark">
        <div className="container p-5 justify-content-center ">
          <div className="row">
            <div className="col-md-7  d-flex  flex-column justify-content-center">
              <div className="container  ">
                <h2 className=" text-dark ">Full Stack Development</h2>
<p>
Become a Full-Stack Developer: Build, Deploy, & Land Your Dream Job
</p>
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
                <p className=" w-25 text-center more-know1 text-white my-4">
                  <Link className="nav-link" to={"/Fullstackdevelopment"}>
                    {" "}
                    Know More
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <Tilt>
                <img
                  className="w-100 "
                  src={require("../Components/images/fulstack.png")}
                  alt=""
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      {/* full stack page ends here */}

      {/* Qa testing page starts here  */}

      <div className="container-fluid bg-light   text-dark p-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <Tilt>
                <img
                  className="w-100 mt-3"
                  src={require("../Components/images/RECREATE PYTHON.webp")}
                  alt=""
                />
              </Tilt>
            </div>

            <div className="col-md-7">
              <div className="container mx-sm-5">
                <h2 className="mt-5 text-center text-dark">Qa Testing</h2>
                <p>
                  Become a Software Detective: Unleash Your Inner QA Tester
                  (Training & Placement Support!)
                </p>
                <p className="python-para my-3 mx-auto">
                  Have you ever meticulously combed through an application,
                  determined to find every hidden bug and glitch? Do you possess
                  a keen eye for detail and a passion for ensuring quality? If
                  so, then a career in QA (Quality Assurance) testing might be
                  your perfect fit. Our comprehensive QA testing course equips
                  you with the skills and knowledge to become a software
                  detective, safeguarding the user experience and propelling
                  your career forward. We also offer dedicated training and
                  placement support to help you land that dream QA testing job.
                </p>
                <p className=" w-25 text-center more-know1 text-white my-4">
                  <Link className="nav-link" to={"/Qatesting"}>
                    Know More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qa testing page ends here  */}

      {/* sql starts  */}
      <div className="container-fluid bg-white  text-dark p-4">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <div className="container mx-sm-5">
                <h2 className="mt-5 text-center text-dark">Sql Expertise</h2>
                <p className="mt-3">
                  Unleash the Power of Data: Master SQL & Become a Database Guru
                  (Certification Included!)
                </p>
                <p className="python-para my-3 mx-auto">
                  Tired of Drowning in Data? Learn SQL & Command Your Databases
                  Like a Pro! Data is the lifeblood of modern businesses, but
                  what good is it if you can't access and manipulate it
                  effectively? Enter SQL (Structured Query Language) – the
                  essential tool for unlocking the secrets hidden within your
                  databases. Our comprehensive SQL course, complete with
                  certification, equips you with the skills to query, analyze,
                  and manage data with confidence.
                </p>
                <p className=" w-25 text-center more-know1 text-white my-4">
                  <Link className="nav-link" to={"/Sqlexpertise"}>
                 
                    Know More
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-5 mx-auto">
              <Tilt>
                <img
                  className="w-100 mt-3"
                  src={require("../Components/images/sql bannerimg.webp")}
                  alt=""
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      {/* sql ends  */}
    </>
  );
}

export default Viewallcourses;

import React from "react";
import Footer from "../Components/Footer";
import "../Components/Animationsquare";
import Animationsquare from "../Components/Animationsquare";
import Contactbanner from "../Components/Contactbanner";

function Sqlexpertise() {
  return (
    <>
      <div className="container-fluid bg-white  text-dark p-5">
        <div className="container ">
          <div className="row">
            <div
              className="col-md-5"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                className="w-100 mt-3"
                src={require("../Components/images/sql bannerimg.webp")}
                alt=""
              />
            </div>

            <div className="col-md-6">
              <div className="container mx-sm-5">
                <h2 className="mt-5 text-center text-dark">Sql Expertise</h2>
                <p>
                  Unleash the Power of Data: Master SQL & Become a Database Guru
                  (Certification Included!)
                </p>
                <p className="python-para my-5 mx-auto">
                  Tired of Drowning in Data? Learn SQL & Command Your Databases
                  Like a Pro! Data is the lifeblood of modern businesses, but
                  what good is it if you can't access and manipulate it
                  effectively? Enter SQL (Structured Query Language) – the
                  essential tool for unlocking the secrets hidden within your
                  databases. Our comprehensive SQL course, complete with
                  certification, equips you with the skills to query, analyze,
                  and manage data with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards python starts */}

      <div className="container-fluid p-5">
        <h1 className="fs-4 my-3 mx-5 text-dark fw-semibold text-center text-decoration-underline">
          Why Choose Our Sql Course
        </h1>

        <div className="container d-flex flex-wrap justify-content-center">
          <div className="flex-item ">
            <div>
              <div className="card card-run">
                <img
                  className="w-100 PYTHON4"
                  src={require("../Components/images/PYTHON1.webp")}
                  alt=""
                />
                <p className="card-title1"> From Beginner to Boss</p>
                <p className="small-desc">
                  Whether you're a complete novice or looking to refine your
                  skills, our course caters to all levels, taking you from the
                  fundamentals to advanced functionalities.{" "}
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
                <img
                  className="w-100 PYTHON4"
                  src={require("../Components/images/PYTHON2.webp")}
                  alt=""
                />

                <p className="card-title1 mt-2"> Master the Core</p>
                <p className="small-desc">
                  Grasp essential concepts like data retrieval (SELECT),
                  manipulation (INSERT, UPDATE, DELETE), and filtering (WHERE,
                  JOIN) with ease.
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
                <img
                  className="w-75  mx-auto"
                  src={require("../Components/images/PYTHON3.webp")}
                  alt=""
                />
                <p className="card-title1 mt-4"> Advanced SQL Power</p>
                <p className="small-desc">
                  Delve into complex queries, subqueries, functions (aggregate,
                  window), and data manipulation techniques.{" "}
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
                <img
                  className="w-100 PYTHON4"
                  src={require("../Components/images/PYTHON4.webp")}
                  alt=""
                />
                <p className="card-title1"> Real-World Applications</p>
                <p className="small-desc">
                  Solidify your learning by working on practical exercises and
                  analyzing real-world datasets.{" "}
                </p>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards python ends  */}

      {/* python corse banner4 ends here  */}

      <Animationsquare />

      {/*  */}

      {/* faq */}

      <Contactbanner />
      {/* faq */}

      {/* footert starts here  */}

      <Footer />

      {/* footer ends here  */}
    </>
  );
}

export default Sqlexpertise;

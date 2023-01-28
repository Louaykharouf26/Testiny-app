import Navbar from "./Navbar";

function Training()
{
  return(
   <div className="Training">
    <Navbar/>
    <p class="typewriter">We propose for you a list of courses that can be a good training for your education path </p>
    
    <div class="container" data-aos="fade-up">

        <div class="row" data-aos="zoom-in" data-aos-delay="100" >

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="course-item">
              <img src={require("./course-1.jpg")} class="img-fluid" alt="..."></img>
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Python For Datascience</h4>
                  <p class="price">$19</p>
                </div>

                <h3><a href="https://www.udemy.com/course/python-datascience/">Learn Python</a></h3>
                <p>Here you can take a python course for some training</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    
                    <span>Udemy</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div> 

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="course-item">
              <img src={require("./course-3.jpg")} class="img-fluid" alt="..."></img>
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Amazon Web Services</h4>
                  <p class="price">$15</p>
                </div>

                <h3><a href="https://www.udemy.com/course/aws-certified-associate-architect-developer-sysops-admin/">AWS</a></h3>
                <p>Here you can take a course about AWS for some training</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt=""></img>
                    <span>Udemy</span>
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="course-item">
              <img src={require("./events-1.jpg") }class="img-fluid" alt="..."></img>
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Web Development </h4>
                  <p class="price">$13</p>
                </div>

                <h3><a href="https://www.udemy.com/course/cours-intensif-wordpress-debutants-creez-un-site-en-quelques-minutes/">WordPress</a></h3>
                <p>Here you can take a wordpress course for some training.</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt=""></img>
                    <span>Udemy</span>
                  </div>
                </div>
              </div>
            </div>
          </div> 

        </div>

      </div>
   </div>
  );
}
export default Training;
import Navbar from './Navbar';
import Afterlogin from './Afterlogin';
import courses from './Courses.png';
import './App.css';
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


function Home(){
    return(
        <div className="Home">
        
            <Navbar/>
      
            <section id="intro">
      <div class="welcome1" data-aos="fade-right">
              
            
                <h1 class="typewriter">
                Welcome to TESTINY plateform </h1>
                <h2 className='TS'>
                Test your skills and become a master
                </h2>  
            </div>
            <a href="#services" class="btn-get-started">Get Started</a>
            </section>
          <section id="services" data-aos="fade-up">
            <h1 class="About">About Us</h1>
       <p class="aboutdesc">
         Our Plateform gives a space to developper to practice their skill , prepare for certifications 
        also it gives a secure space to recruiter to propose technical tests 
         </p>  
         <h1 class="About">Our Services</h1>
         <div class="box1" data-aos="fade-up">
          <img class="courses" src={require('./Courses.png')}></img>
          <p class="TC" >Training Courses</p>
          <p class="TT">Training Tests</p>
         </div>
         <div class="box2" data-aos="fade-up">
         <img class="courses" src={require('./OnlineTest.png')}></img>
          
          <p class="TC">Technical Tests</p>
          <p class="TT">Skill Tests</p>
</div>
<div class="box3" data-aos="fade-up">
<img class="courses" src={require('./Fraud.png')}></img>
          
          <p class="TC">Fraud Detection</p>
          
</div>
          </section>
          <h1 class="About">FAQ</h1>

<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-item-header">
    How does it work?
    </div>

    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      You create an account as developer or a recruiter.A developer can take test and the recruiter can upload technical IT test 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
    How can i pass a test?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      Once your recruiter upload a test,it will be showed in your dashboard you
can then take the test
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
    How does the anti-cheat work?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      your camera & mic must be opened, you have to be alone in the room and you 
must verify all the conditions to be redirected to the test page.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
    What are the tips to pass the test safely?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      You should look at the test, Quit environment, don't change the tabs and
clear background behind you.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-item-header">
    How do I get the result of my test?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
      Once you complete the test (generaly a quiz) you get your score
      
            </div>
    </div>
  </div>
</div>
      </div>
    );
}
export default Home;
import React from "react";
import './developer_list_exams.css';
import logo from './student.png';
import { useState,useEffect } from "react";
import Quiz from "./Quiz";
import './quizimage.png'
function Listdeveloper(){
  const [user, setUser] = useState({});
  const id = localStorage.getItem("id");
  
  const requestOptions = {
    method: "GET",
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
   // body: JSON.stringify({
      //id: id,
   // }),
  }
  useEffect(()=>{
    const fetchdata = async () => {
      const result = await fetch(`http://localhost:3000/user/showById/${id}`,requestOptions);
      const jsonResult = await result.json();
      setUser(jsonResult);
    }
    fetchdata();
  },[])
  const logout =()=>{
    localStorage.removeItem("id");
    
   }
  return(
  <div>
  <header>
<div class="left_area">
      <h3>TESTINY</h3>
    </div>
    <div class="right_area">
      <a href="/" class="logout_btn" onClick={logout}>Logout</a>
    </div>
    </header>
  <div class="sidebar">

        <center>

<img class="profile_image" src={require('./student.png')}></img>
      <h4>{user.username} {user.lastname}</h4>
      <h6 >{user.role==="1" ? 'Recruiter' : 'Developer'}</h6>

    </center>
<a href="/profile/developer"><i class="fas fa-tachometer-alt"></i><span className="Dash">Dashboard</span></a>
    <a href="/student/examslist"><i class="fas fa-book"></i><span className="Dash">Exams List</span></a>
  </div>

 <br/><br/><br/><br/>

<br/><br/>
<div class="container2">
  <div className="exam1">
    <div className="bx1">
      <img class="quizimage" src={require('./quizimage.png')}></img>
    <p class="Q1">Quiz n°1 </p>
  <div class="rating">
    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
</div>
    </div>
    <div className="description">
  This quiz is made to test your basic skills on javascript
    </div>
    <div className="buttons">
    <a href="http://127.0.0.1:5000/js "target="_blank"><button type="button" class="btn take-btn" >Take the exam</button></a>
    </div>
  </div>
  <div className="exam2">
    <div className="bx1">
      <img class="quizimage" src={require('./quizimage.png')}></img>
    <p class="Q1">Quiz n°2 </p>
  <div class="rating">
    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>

</div>
    </div>
    <div className="description">
  This quiz is made to test your basic skills on CSS
    </div>
    <div className="buttons">
    <a href='http://127.0.0.1:5000/css'target="_blank"><button type="button" class="btn take-btn2" >Take the exam</button></a>
    </div>
  </div>
  <div className="exam3">
    <div className="bx1">
      <img class="quizimage" src={require('./quizimage.png')}></img>
    <p class="Q1">Quiz n°3 </p>
  <div class="rating">
    <span class="fa fa-star checked"></span>


</div>
    </div>
    <div className="description">
  This quiz is made to test your basic skills on HTML
    </div>
    <div className="buttons">
    <a href='http://127.0.0.1:5000/html 'target="_blank"><button type="button" class="btn take-btn2" >Take the exam</button></a>
    </div>
  </div>

</div>


    </div>

  );
}

export default Listdeveloper;
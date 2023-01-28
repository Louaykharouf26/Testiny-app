import React from "react";
import './developer_profile.css';
import logo from './student.png';
import { useEffect ,useState } from "react";
function Developer(){
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
<a href="/profile/developer"><i class="fas fa-tachometer-alt"></i><span class="Dash">Dashboard</span></a>
    <a href="/student/examslist"><i class="fas fa-book"></i><span class="Dash">Exams List</span></a>
  </div>

 <br/><br/><br/><br/>

<br/><br/>
  <div class="container">
    <div class="row">
      
  
      <div class="col-md-2 col-xl-4">
        <div class="card bg-c-blue order-card">
          <div class="card-block">
              <h6 class="m-b-20">Total Exams Available</h6>

            <h2 class="text-right"><i class="fas fa-book f-left"></i><span>3 </span></h2>

            
          </div>
        </div>
      </div>
  
      <div class="col-md-2 col-xl-4">
        <div class="card bg-c-blue order-card">
          <div class="card-block">
            <h6 class="m-b-20">Total Questions</h6>
            <h2 class="text-right"><i class="fas fa-question-circle f-left"></i><span>8</span></h2>
            
          </div>
        </div>
      </div>
    </div>
  </div>
 <br/><br/><br/><br/>




    </div>

  );
}

export default Developer;
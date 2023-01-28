import React from "react";
import logo from './teacher.png';
import { useState } from "react";
import './profile_recruiter.css';
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

function Recruiter(){
  const [user, setUser] = useState({});
  const [data,setData] = useState({})
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
      const result = await fetch(`http://localhost:3000/recruiter/showById/${id}`,requestOptions);
      const counter=await fetch(`http://localhost:3000/user/count/${id}`,requestOptions);
      const jsonResult = await result.json();
      const jsoncounter = await counter.json();
       //console.log(jsoncounter);
      setUser(jsonResult);
      setData(jsoncounter);
      console.log(user);
    }
    fetchdata();
  },[])
  const logout =()=>{
    localStorage.removeItem("id");
    
   }
  
  return(
  <div>
  <header>
<div className="left_area">
      <h3>TESTINY</h3>
    </div>
    <div className="right_area">
      <a href="/" className="logout_btn" onClick={logout}>Logout</a>
    </div>
    </header>
  <div className="sidebar">

        <center>

<img className="profile_image" src={require('./teacher.png')}></img>
      <h4>{user.username} {user.lastname}</h4>
      <h6 >{data.role==="1" ? 'developer' : 'recruiter'}</h6>

    </center>
<a href="/profile/recruiter"><i className="fas fa-tachometer-alt"></i><span className="Dash">Dashboard</span></a>
    <a href="/recruiter/addexam"><i className="fas fa-book"></i><span className="Dash">Add Exam</span></a>
  </div>

 <br/><br/><br/><br/>

<br/><br/>
  <div className="container">
    <div className="row">
       <div className="col-md-4 col-xl-4">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h6 className="m-b-20">Total Student </h6>
                <h2 className="text-right"><i className="fas fa-user-graduate f-left"></i><span>{data[1]}</span></h2>
                
              </div>
            </div>
          </div>
  
      <div className="col-md-2 col-xl-4">
        <div className="card bg-c-blue order-card">
          <div className="card-block">
              <h6 className="m-b-20">Total Exams Available</h6>

            <h2 className="text-right"><i className="fas fa-book f-left"></i><span>0 </span></h2>

            
          </div>
        </div>
      </div>
  
      <div className="col-md-2 col-xl-4">
        <div className="card bg-c-blue order-card">
          <div className="card-block">
            <h6 className="m-b-20">Total Questions</h6>
            <h2 className="text-right"><i className="fas fa-question-circle f-left"></i><span>0</span></h2>
            
          </div>
        </div>
      </div>
    </div>
  </div>
 <br/><br/><br/><br/>




    </div>

  );
}

export default Recruiter;
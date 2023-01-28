import React from "react";
import './exam_page.css';
import { useEffect ,useState} from "react";
function Recruiterlist(){
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
      const result = await fetch(`http://localhost:3000/recruiter/showById/${id}`,requestOptions);
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

<img class="profile_image" src={require('./teacher.png')}></img>
      <h4>{user.username} {user.lastname}</h4>
      <h6 >{user.role==="1" ? 'developer' : 'recruiter'}</h6>

    </center>
<a href="/profile/recruiter"><i class="fas fa-tachometer-alt"></i><span className="Dash">Dashboard</span></a>
    <a href="/recruiter/addexam"><i class="fas fa-book"></i><span className="Dash">Add Exam</span></a>
  </div>

 <br/><br/><br/><br/>

<br/><br/>
 <div class="container2">
  <h2> EXAMS </h2>
  <br/><br/>
    <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Exam N°1
    <a class="badge badge-primary badge-pill">Get the Submitted files</a>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Exam N°2
    <a  class="badge badge-primary badge-pill">Get the Submitted files </a>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Exam N°3
    <a class="badge badge-primary badge-pill">Get the Submitted files</a>
  </li>
</ul>
  </div>
 <br/><br/><br/><br/>
        </div>


  );
}

export default Recruiterlist;
import React from "react";
import './developer_list_exams.css';
import logo from './student.png';
import { useState , useEffect } from "react";
function Addresponse(){
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
  return(
  <div>
  <header>
<div class="left_area">
      <h3>TESTINY</h3>
    </div>
    <div class="right_area">
      <a href="/" class="logout_btn">Logout</a>
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
 <div class="container1">


                  <h2 class="m-b-20">Submit Your Response </h2>
                  <br/>

                  <h6 class="m-b-20">Only the code file, once we evaluate your response,we will contact you </h6>


<br/>
<form action="/student/thanks">

                  <div class="form-group">


            <label for="usr">Name+Ref : ( e.g TEST017)</label>
            <input type="text" class="form-control" id="usr"/>
<br/>

            <label for="myfile">Ajouter le fichier de code:</label>
            <br/>

            <input type="file" id="myfile" name="myfile"/>
            <br/>
<br/>
<br/>

<input type="submit" class="btn btn-success"  value="Ajouter"/>

            </div>
</form>

  
      
    

    </div>



    </div>

  );
}

export default Addresponse;
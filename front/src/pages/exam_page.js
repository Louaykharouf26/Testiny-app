import React from "react";
import './exam_page.css';
import { useEffect ,useState ,ChangeEvent} from "react";


    
function Exam(){
  function onFileChange(fileChangeEvent){this.file = fileChangeEvent.target.files[0];}
  const [file, setFile] = useState();
  async function uploadfile(){
   
    let formData = new FormData();
    const requestOptions = {
      method: "POST",
      
     // withCredentials: true,
      //headers: { "Content-Type": "application/json" },
     data: formData,
    }
    const response = await fetch('http://localhost:3000/user/upload',requestOptions)
    
    formData.append('file',file);
    console.log(response);

  }
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
 <div class="container1">


                  <h2 class="m-b-20">Add New Exam</h2>
<br/>
<form >

                  <div class="form-group">


            <label for="usr">Name:</label>
            <input type="text" class="form-control" id="usr"/>
<br/>

            <label for="myfile">Ajouter le fichier de l Examen:</label>
            <br/>

            <input type="file" id="myfile" name="myfile" onChange={ev =>this.onFileChange(ev)} />
            <br/>
<br/>
<br/>

<input type="submit" class="btn btn-success"  value="Ajouter" onClick={uploadfile()}/>

            </div>
</form>

  
      
    

    </div>
        </div>


  );
}

export default Exam;
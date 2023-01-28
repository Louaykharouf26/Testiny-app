import './App.css';
import Home from './Home';
import Login from './Login';
import Developer from './pages/developer_dashboard'
import Exam from './pages/exam_page'
import Addresponse from './pages/developer_add_response'
import Recruiterlist from './pages/recruiter_list'
import Thank from './pages/thanks'
import Listdeveloper from './pages/developer_list_exams';
import Recruiter from './pages/recruiter'
import {BrowserRouter as Router , Route , Routes ,Navigate} from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Signup from './Signup';
import Quiz from './pages/Quiz';
import Training from './Training';


function App() {

  
  return (
    <Router>
      <Routes>
      <Route path='/' element={ <Home />}> </Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/SignUp' element={<Signup />}></Route>
        <Route path='/profile/developer' element={ localStorage.getItem("id") ? <Developer /> : <Navigate to ="/SignIn"></Navigate>}> </Route>
        <Route path='/profile/recruiter' element={ localStorage.getItem("id") ?<Recruiter /> : <Navigate to ="/SignIn"></Navigate>}> </Route>
        <Route path='/recruiter/addexam' element={ <Exam />}> </Route>
        <Route path='/student/submit' element={ <Addresponse />}> </Route>
        <Route path='/recruiter/examslist' element={ <Recruiterlist />}> </Route>
        <Route path='/student/examslist' element={ <Listdeveloper />}> </Route>
        <Route path='/student/thanks' element={ <Thank />}> </Route>
        <Route path='/training' element={ <Training />}> </Route>
        <Route path='/quiz' element={localStorage.getItem("id") ? <Quiz /> : <Navigate to ="/SignIn"></Navigate> }> </Route>
        

      </Routes>
      
    </Router>
   
  );
}

export default App;

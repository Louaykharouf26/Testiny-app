import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import SignIn from './SignIn';
import Signup from './Signup';
import Developer from './pages/developer_dashboard';
import Recruiter from './pages/recruiter';
import Exam from './pages/exam_page';
import Listdeveloper from './pages/developer_list_exams';
import Addresponse from './pages/developer_add_response';
import Recruiterlist from './pages/recruiter_list';
import Thank from './pages/thanks';
import Training from './Training';
import Quiz from './pages/Quiz';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';
import { Navigate } from 'react-router-dom';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },

  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: 
     <Signup />,
  }, 

  {
    path: "/profile/developer",
    element: 
    localStorage.getItem("id") ? <Developer /> : <Navigate to ="/SignIn"></Navigate>,
  },
  {
    path: "/profile/recruiter",
    element: localStorage.getItem("id") ?<Recruiter /> : <Navigate to ="/SignIn"></Navigate>,
  },
  {
    path: "/recruiter/addexam",
    element: localStorage.getItem("id") ?<Exam />: <Navigate to ="/SignIn"></Navigate>,
  },
  {
    path: "/student/examslist",
    element:localStorage.getItem("id") ? <Listdeveloper />: <Navigate to ="/SignIn"></Navigate>,
  },
  
  {
    path: "/recruiter/examslist",
    element: localStorage.getItem("id") ? <Recruiterlist />: <Navigate to ="/SignIn"></Navigate>,
  },
  {
    path: "/student/thanks",
    element: <Thank />,
  },
  {
    path: "training",
    element: <Training />,
  },
  { 
    path: "js_quizz",
    element: localStorage.getItem("id") ? <Quiz /> : <Navigate to ="/SignIn"></Navigate> ,
  },
  { 
    path: "css_quiz",
    element: localStorage.getItem("id") ? <Quiz2 /> : <Navigate to ="/SignIn"></Navigate> ,
  },
  { 
    path: "html_quiz",
    element: localStorage.getItem("id") ? <Quiz3 /> : <Navigate to ="/SignIn"></Navigate> ,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      
    <RouterProvider router={router} />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

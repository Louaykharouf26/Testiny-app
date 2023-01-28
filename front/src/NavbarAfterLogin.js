import './Navbar.css';
import Aos from 'aos';
import { useEffect } from "react";
import { useRef } from "react";
import { Navigate, NavLink, redirect } from 'react-router-dom';
function NavbarAfterLogin(){
    Aos.init();
   const logout =()=>{
    localStorage.removeItem("id");
    
   }
    return(
    <div className="Navbar">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="logo" href="#">TESTINY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink to={'/'} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }> 
        <a class="nav-link" aria-current="page" href="#">Home</a></NavLink>
        <NavLink to={'/training'} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
        <a class="nav-link" href="#">Training </a></NavLink>
        <NavLink to={'/quiz'} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }> <a class="nav-link" href="#">Technical Test</a></NavLink>
        
        <div class="left">
    <a href='/'>  <button onClick={logout} type="button" class="btn signin-btn" >Logout</button></a>  
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
    );
}
export default NavbarAfterLogin; 
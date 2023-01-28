import Navbar from './Navbar';
import './afterlogin.css';
function Afterlogin(){
return(

   <div className='Afterlogin'>
        <div class="jumbotron" style="margin-top: 0px;margin-bottom: 0px;text-align: center;">
            <h1 class="display-4">Hello </h1>
            <p class="lead">Your Account is not approved until now <br />
                <br />Our Team is checking your profile <br />
                <br /> Soon Your Account Will Be Approved
            </p>
        </div>
        <hr class="my-4" />
        <p>Check Later</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="/logout" role="button">Logout For Now</a>
        </p>
    </div>

)
}
export default Afterlogin ;
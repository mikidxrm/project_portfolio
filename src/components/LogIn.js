import React, { useContext  } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/Home" />;
    }

    return (
        <>
            <div class="container" >
            
         <div class="row">
           <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
             <div class="card border-0 shadow rounded-3 my-5">
               <div class="card-body p-4 p-sm-5">
                 <h5 class="card-title text-center mb-5 fw-light fs-5">เข้าสู่ระบบ</h5>
                 <form  onSubmit={handleSubmit}>
                   <div class="form-floating mb-3">
                   <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     <label for="floatingInput">Email address</label>
                   </div>
                   <div class="form-floating mb-3">
                   <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                     <label for="floatingPassword">Password</label>
                   </div>
     
                   <div class="d-grid">
                   <button type="submit" className="btn btn-primary">Login</button>
                   </div>
                   <hr class="my-4"/>
                   <p>
            สำหรับที่ยังไม่ได้เป็นสมาชิก สมัครได้ที่ <Link to="/signup" >Sign Up</Link>
            </p>
                 
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
        </>
   
    )
}

export default LogIn;
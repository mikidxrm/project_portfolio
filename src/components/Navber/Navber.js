import React, { useContext } from 'react';
import { Redirect , Link} from 'react-router-dom'
// import { AuthContext } from '../Auth'
// import firebaseConfig from '../../config';
import '../../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';






const Navber = () => {
// const { currentUser } = useContext(AuthContext);

// if (!currentUser) {
//     return <Redirect to="/" />;
// }

return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#">MIkiDxrm</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a class="nav-link" href="#signup">Contact</a></li> */}
                        <li className="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link class="nav-link" to="/Portfolio">Portfolio</Link></li>
                        <li className="nav-item"><Link class="nav-link" to="/performmance">Performmance</Link></li>
                       
                    </ul>
                    {/* <li className="nav-item" >
          
          <button  onClick={() => firebaseConfig.auth().signOut()} className="btn btn-danger">Sign Out</button>
        </li> */}
                </div>
            </div>
        </nav>
</div>
  )
}

export default Navber;
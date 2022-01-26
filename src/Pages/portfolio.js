import React from "react";
import Navber from "../components/Navber/Navber";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import ipad from "../assets/img/ipad3.png";

function portfolio() {
  return (
    <div>
      <Navber></Navber>
      <header class="masthead">
        <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <h1 class="mx-auto my-0 text-uppercase">Portfolio</h1>
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                RESUME SOFTWARE DEVELOPER
              </h2>
              <a class="btn btn-primary" href="#about">
                Get start
              </a>
            </div>
          </div>
        </div>
      </header>
      <section class="about-section text-center" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-white mb-4">THANAWAT KHANKET </h2>
              <h2 class="text-white mb-4"> SOFTWARE DEVELOPER</h2>
              <p class="text-white-50">
                Programming Language JAVA Framework , Python , node js , opencv
                , Django , html , react , javascript , Web Design CSS ,
                Bootstrap
              </p>
            </div>
          </div>
          <img class="img-fluid" src={ipad} />
        </div>
      </section>
      <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">
          {/* <!-- Featured Project Row-->/ */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7">
              <img class="img-fluid mb-3 mb-lg-0" src={img1} />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>PERSONAL INFOMATION EDUCATION</h4>
                <p class="text-black-50 mb-0">
                  Name : Thanawat khanket <br />
                  Born : January 03 , 1999 <br />
                  Religion : Buddhism <br />
                  E-mail : dtk.21901@gmail.com <br />
                  Sex : male <br />
                  Nationality : Thai <br />
                  Mobile : +66941722982 <br />
                  2018 - present : Rajabhat Maha Sarakham University <br />
                  Major : Information Technology <br />
                  GPA : 3.50
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Project One Row--> */}
          <div class="row gx-0 justify-content-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src={img2}
              />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">
                      Certificate & Training Work Experience Computer Abilities
                    </h4>
                    <p class="mb-0 text-white-50">
                      Python Programming For Data Science - March 10-12, 2021
                      <br />
                      Python Basic With Google Colab - March 8-9, 2021
                      <br />
                      Application development with nodejs and mysql(CRUD) -
                      March 6-7 2021 <br />
                      JAVA Spring boot REST API + JDBC + MySQL - September 26-27
                      2020 <br />
                      C# and Postgres SQL Basic - November 23-24 2019 <br />
                      Technical analysis and design of computer systems -
                      September 12-13 2019 <br />
                      Spring boot Framework + MySQL - October 26-27 2019 <br />
                      Java Struts2 FrameWork - October 9-10 2019 <br />
                    </p>
                    <hr class="d-none d-lg-block mb-0 me-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          {/* <!-- Project Two Row--> */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={img3}/></div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>Pre-Internship</h4>
                <p class="text-black-50 mb-0">
                  Site : Rajabhat <br />
                  MahaSarakham University December 2020 - February 2021 <br />
                  Position : IT Support <br />
                  Programming Language - JAVA Framework , Python , node js ,
                  opencv , Django , html <br />
                  Analysis & Design Methodology - OOAD , UML <br />
                  DBMS - MySQL , SQLServer <br />
                  Editor - Postman,VSCode <br />
                  API - Restful API <br />
                  Design Patterns - MVC <br />
                  Component - JWT <br />
                  Data Exchang Technology - JSON , XML <br />
                  Web Design - CSS , Bootstrap <br />
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      {/* <!-- Signup--> */}
      <section class="signup-section" id="signup">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
              <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h1 class="text-white mb-5">รายละเอียดการติดต่อ</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Address</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    3 หมู่ 9 ตำบล เขวาใหญ่ อำเภอ กันทรวิชัย จังหวัด มหาสารคาม
                    44150
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    <div class="small text-black-50">dtk.21901@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">+66 0941722982</div>
                </div>
              </div>
            </div>
          </div>
          <div class="social d-flex justify-content-center">
            <a
              class="mx-2"
              href="https://www.youtube.com/channel/UCVzQ_VJZmePEbkocdSC_2Gw"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              class="mx-2"
              href="https://www.facebook.com/thanawutn.karlket.1/"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="mx-2" href="https://github.com/mikidxrm">
              <i class="fab fa-github"></i>
            </a>
            <a
              class="mx-2"
              href="https://www.tiktok.com/@mikidxrmzx10r?lang=th-TH"
            >
              <i class="fab fa-tiktok"></i>
            </a>
            <a class="mx-2" href="https://www.instagram.com/miki_dxrm/">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="mx-2" href="https://www.facebook.com/ThanawatkanketDTK">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
      <footer class="footer bg-black small text-center text-white-50">
        <div class="container px-4 px-lg-5">MIkiDxrm &copy; Website 2022</div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </div>
  );
}

export default portfolio;

import React from "react";
import Navber from "../components/Navber/Navber";
import imgp1 from "../assets/img/p1.jpg";
import imgp2 from "../assets/img/p2.jpg";
import imgp3 from "../assets/img/p3.jpg";
import imgp4 from "../assets/img/p4.jpg";
import ipad from "../assets/img/ipad5.png";

function preformmance() {
  return (
    <div>
      <Navber></Navber>
      <header class="masthead">
        <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <h1 class="mx-auto my-0 text-uppercase">DI A FRAME</h1>
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                WEB PAGE PERFORMANCE
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
              <h2 class="text-white mb-4">DI A FRAME </h2>
              <h2 class="text-white mb-4"> WEB PAGE PERFORMANCE THANAWATK. </h2>
              <p class="text-white-50">
                เป็นเว็บที่เก็บสะสมผลงานการถ่ายภาพ สร้างขึ้นเพื่อไห้คนที่สนใจจะจ้างการถ่ายภาพหรือ อยากจะชมผลงานการถ่ายภาพ การทำโทน การแต่งภาพ การจัดคอมโพสภาพ
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
              <img class="img-fluid mb-3 mb-lg-0" src={imgp1} />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>ผลงานการถ่ายรูป โปรไฟล์ คริสต์มาส</h4>
                <p class="text-black-50 mb-0">
                ผลงานการถ่ายรูป โปรไฟล์ คริสต์มาส ถ่ายในสตู การจัดไฟ จัดสถานที่ จัดห้องไห้สว่าง
                </p>
              </div>
            </div>
          </div>
          <div class="container px-4 px-lg-5">
          {/* <!-- Featured Project Row-->/ */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7">
              <img class="img-fluid mb-3 mb-lg-0" src={imgp2} />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>ผลงานถ่ายรูป โปรไฟล์</h4>
                <p class="text-black-50 mb-0">
                ผลงานถ่ายรูป โปรไฟล์ การถ่าย พอร์ตเทรต การถ่ายโปรโมทร้าน
               
                </p>
              </div>
            </div>
          </div>
          </div>
          <div class="container px-4 px-lg-5">
          {/* <!-- Featured Project Row-->/ */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7">
              <img class="img-fluid mb-3 mb-lg-0" src={imgp3} />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>ผลงานถ่ายรถ bigbike</h4>
                <p class="text-black-50 mb-0">
                ผลงานถ่ายรถ bigbike Yamaha R1M
                </p>
              </div>
            </div>
          </div>
          </div>
          <div class="container px-4 px-lg-5">
          {/* <!-- Featured Project Row-->/ */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7">
              <img class="img-fluid mb-3 mb-lg-0" src={imgp4} />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>ผลงานถ่ายรถ bigbike</h4>
                <p class="text-black-50 mb-0">
                  ผลงานถ่ายรถ bigbike ducati panigale 1199
                </p>
              </div>
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

export default preformmance;

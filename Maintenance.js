import React from "react";

const Maintenance = () => {
  return (
    <>
      <section className="wraper">
        <header className="header">
          <h1>Adak Developers</h1>
          {/* <h2>دفترچه تلفن قشم ، همیشه همراه شما</h2> */}
          <h2>توسعه دهندگان نرم افزار ، قشم</h2>
        </header>
        {/* .header */}

        <footer className="footer">
          <section className="social-links">
            <ul>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-phone"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </section>
          {/* /.social-links */}
          <ul className="copyright">
            <li dir="ltr">&copy; AdakDevelopers. All rights reserved.</li>
            <li>
              Design By: <a href="https://tahayazdani.ir">YazdaniiT</a>
            </li>
          </ul>
        </footer>
      </section>
      <div className="fullscreen-bg">
        <video
          loop
          muted
          autoplay
          poster="img/videoframe.jpg"
          className="fullscreen-bg__video"
        >
          <source src="img/video-bg.mp4" type="video/mp4" />
        </video>
      </div>
      {/* fullscreen-bg */}
    </>
  );
};

export default Maintenance;

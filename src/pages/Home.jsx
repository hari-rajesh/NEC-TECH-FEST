import React, { useEffect } from "react";
import "../assets/fonts/font.css";
import "../assets/fonts/nusar.css";

import CountDown from "../components/CountDown";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">

      <div className="hero" style={{ zIndex: 180, position: "relative" }}>
        <div className="container logo">
          

          <div className="logo-txt glow" style={{ fontFamily: "Netron" }}>
            NEC TECH FEST
          </div>
          <div className="glitch-wrapper">
            <div
              className="glitch"
              style={{ margin: "16px 0" }}
              data-glitch="A National Level Technical Symposium"
            >
              A National Level Technical Symposium
            </div>
          </div>
          {/* <Button className='reg-btn' /> */}
          <p style={{ fontSize: 34 }}>21 & 22th Feburary A'25</p>
        </div>
      </div>

      {/* CountDown */}
      <h1 className="count-h">COUNTDOWN</h1>
      <CountDown />
    </div>
  );
}

export default Home;
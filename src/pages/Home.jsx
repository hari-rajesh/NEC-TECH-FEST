import React, { useEffect } from "react";
import "../assets/fonts/font.css";
import "../assets/fonts/nusar.css";
import "../components/Footer";
import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home">
        <div className="hero" style={{ zIndex: 180, position: "relative" }}>
          <div className="container logo">
            <motion.div
              className="logo-txt glow"
              style={{ fontFamily: "Netron" }}
              initial={{ scale: 3.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 700,
                damping: 15, 
                mass: 0.1,
              }}
            >
              NEC TECH FEST
            </motion.div>

            <motion.div
              className="glitch-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 1,
                ease: "easeOut",
              }}
            >
              <div
                className="glitch"
                style={{ margin: "16px 0" }}
                data-glitch="A National Level Technical Symposium"
              >
                A National Level Technical Symposium
              </div>
            </motion.div>

            <motion.p
              className="event-date"
              style={{
                fontSize: 25,
                fontFamily: "Orbitron, sans-serif",
                background: "linear-gradient(to right, #C0C0C0, #E8E8E8, #A8A8A8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(192, 192, 192, 0.3)",
                letterSpacing: "2px",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1, 
                duration: 0.8, 
                ease: "easeOut",
              }}
            >
              21st & 22nd February 2k'25
            </motion.p>
          </div>
        </div>
        <h1 className="count-h">COUNTDOWN</h1>
        <div className="countdown-box">
          <CountDown />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

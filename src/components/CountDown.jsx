import React, { useEffect, useRef, useState } from 'react';
import "../styles/countdown.css";

const Countdown = () => {
  const clockRef = useRef(null);
  useEffect(() => {
    const els = {
      s: initElements("s"),
      m: initElements("m"),
      h: initElements("h"),
      d: initElements("d")
    };

    function initElements(type) {
      const els = [{}, {}];
      if (!["s", "m", "h", "d"].includes(type)) return els;
      
      const target = document.querySelector(`.flip-clock-${type}`);
      if (!target) return els;

      let el;
      el = els[0];
      el.digit = target.querySelector(".digit-left");
      el.card = el.digit.querySelector(".card");
      el.cardFaces = el.card.querySelectorAll(".card-face");
      el.cardFaceA = el.cardFaces[0];
      el.cardFaceB = el.cardFaces[1];

      el = els[1];
      el.digit = target.querySelector(".digit-right");
      el.card = el.digit.querySelector(".card");
      el.cardFaces = el.card.querySelectorAll(".card-face");
      el.cardFaceA = el.cardFaces[0];
      el.cardFaceB = el.cardFaces[1];

      return els;
    }

    function runClock() {
      const endDate = new Date('2025-02-01T00:00:00');
      const now = new Date();
      const diff = endDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const timeObj = {
        d: days < 10 ? `0${days}` : `${days}`,
        h: hours < 10 ? `0${hours}` : `${hours}`,
        m: minutes < 10 ? `0${minutes}` : `${minutes}`,
        s: seconds < 10 ? `0${seconds}` : `${seconds}`
      };

      for (const t of Object.keys(els)) {
        for (const i of ["0", "1"]) {
          const curr = timeObj[t][i];
          let next = +curr - 1;
          
          if (t === "d") {
            if (i === "0") next = next >= 0 ? `${next}` : "9";
            if (i === "1") next = next >= 0 ? `${next}` : "9";
          }
          if (t === "h") {
            if (i === "0") next = next >= 0 ? `${next}` : "2";
            if (i === "1") next = next >= 0 ? `${next}` : "3";
          }
          if (t === "m" || t === "s") {
            if (i === "0") next = next >= 0 ? `${next}` : "5";
            if (i === "1") next = next >= 0 ? `${next}` : "9";
          }

          const el = els[t][i];
          if (el && el.digit) {
            if (!el.digit.dataset.digitBefore) {
              el.digit.dataset.digitBefore = curr;
              el.cardFaceA.textContent = el.digit.dataset.digitBefore;
              el.digit.dataset.digitAfter = next;
              el.cardFaceB.textContent = el.digit.dataset.digitAfter;
            } else if (el.digit.dataset.digitBefore !== curr) {
              el.card.addEventListener("transitionend", function () {
                el.digit.dataset.digitBefore = curr;
                el.cardFaceA.textContent = el.digit.dataset.digitBefore;

                const cardClone = el.card.cloneNode(true);
                cardClone.classList.remove("flipped");
                el.digit.replaceChild(cardClone, el.card);
                el.card = cardClone;
                el.cardFaces = el.card.querySelectorAll(".card-face");
                el.cardFaceA = el.cardFaces[0];
                el.cardFaceB = el.cardFaces[1];

                el.digit.dataset.digitAfter = next;
                el.cardFaceB.textContent = el.digit.dataset.digitAfter;
              }, { once: true });

              if (!el.card.classList.contains("flipped")) {
                el.card.classList.add("flipped");
              }
            }
          }
        }
      }

      if (diff > 0) {
        setTimeout(runClock, 1000);
      }
    }

    runClock();

    return () => {
      const highestId = window.setTimeout(() => {}, 0);
      for (let i = 0; i < highestId; i++) {
        window.clearTimeout(i);
      }
    };
  }, []);


  return (
    <div id="app">
  <div className="flip-clock-container">
    <div className="time-section">
      <div className="flip-clock flip-clock-d">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>
      <div className="label count-label">DAYS</div>
    </div>

    <div className="colon">:</div>

    <div className="time-section">
      <div className="flip-clock flip-clock-h">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>
      <div className="label count-label">HOURS</div>
    </div>

    <div className="colon">:</div>

    <div className="time-section">
      <div className="flip-clock flip-clock-m">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>
      <div className="label count-label">MINUTES</div>
    </div>

    <div className="colon">:</div>

    <div className="time-section">
      <div className="flip-clock flip-clock-s">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>
      <div className="label count-label">SECONDS</div>
    </div>
  </div>
</div>

  );
};

export default Countdown;
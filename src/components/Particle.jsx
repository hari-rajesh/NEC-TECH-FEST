import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("%c 👋 Hey there, inspector! 🕵️‍♂️ Hope you're enjoying our website! 🌐  ️", "color: #4CAF50; font-size: 18px;");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // Optional: Add any logic when particles are loaded
  };

  const fireParticleConfig = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 600
        }
      },
      color: {
        value: ["#ff4500", "#ff6a00", "#ff8c00", "#ffa500", "#ffcc00"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.8,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false
        }
      },
      links: {
        enable: false
      },
      move: {
        enable: true,
        speed: 6,
        direction: "top",
        random: true,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: false
        }
      },
      life: {
        duration: {
          sync: false,
          value: 1
        },
        count: 0,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.2
          }
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          quantity: 4
        }
      }
    },
    background: {
      color: "#000000"
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    detectRetina: true,
    emitters: {
      direction: "top",
      rate: {
        quantity: 1,
        delay: 0.25
      },
      size: {
        width: 80,
        height: 10
      },
      position: {
        x: 50,
        y: 100
      },
      life:{
        duration: 0.1,
        count: 1
      }
    }
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={fireParticleConfig}
        />
      )}
    </>
  );
}

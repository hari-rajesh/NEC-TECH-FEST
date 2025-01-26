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
  };

  const fireParticleConfig = {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true,
          value_area: 600
        }
      },
      color: {
        value: [
          "#6602F2",
          "#7B24F3",
          "#8F45F4",
          "#A367F5",
          "#B789F6"
        ]
      },
      
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true,
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.5,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#4A0080",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      life: {
        duration: {
          sync: false,
          value: 10
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
      life: {
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

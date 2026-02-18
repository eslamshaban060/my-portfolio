"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },

      background: {
        color: { value: "transparent" },
      },

      fpsLimit: 120,

      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: false },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },

      particles: {
        color: { value: "#daa520" },
        links: {
          color: "#daa520",
          distance: 200,
          enable: true,
          opacity: 0.05,
          width: 0.15,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.bounce },
          random: true,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: { enable: true, area: 9000 },
          value: 250,
        },
        opacity: { value: 0.9 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },

      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <div
      style={{
        width: "100%",
        height: "130%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default ParticlesBackground;

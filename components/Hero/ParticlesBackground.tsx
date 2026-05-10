import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
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

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
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
        color: { value: ["#2dd4a8", "#73ffb8"] },
        links: {
          color: "#2dd4a8",
          distance: 160,
          enable: true,
          opacity: 0.18,
          width: 0.6,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.bounce },
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: { density: { enable: true, area: 900 }, value: 70 },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2.5 } },
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
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

export default ParticlesBackground;

import { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

export default function BackgroundBirds() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any = null;

    if (vantaRef.current) {
      effect = BIRDS.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        backgroundColor: "#000000",
        color1: "#8A1515",
        color2: "#BF1BBC",
        birdSize: 0.8,
        wingSpan: 40,
        speedLimit: 4.0,
        separation: 50,
        alignment: 50,
        cohesion: 50,
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

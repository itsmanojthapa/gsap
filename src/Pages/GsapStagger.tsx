import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const GsapTo = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".stagger-box", {
        y: 250,
        rotation: 360,
        borderRadius: "100%",
        ease: "power3.inOut",
        repeat: -1,
        yoyo: true,
        // stagger: 0.5,
        // OR
        stagger: {
          amount: 1.5, // the amount of time to stagger the animations between each element
          grid: [2, 1], // the number of columns and rows in the grid
          axis: "y", // the axis along which to stagger the animations
          ease: "circ.inOut",
          from: "center", // the starting position of the staggered animations
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="app">
      <div className="">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </div>
  );
};

export default GsapTo;

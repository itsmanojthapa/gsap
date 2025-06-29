import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const GsapTo = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".box", {
        x: 350,
        repeat: -1,
        yoyo: true,
        duration: 2,
        rotate: 360,
        scale: 1.5,
        backgroundColor: "red",
        borderRadius: "50%",
        ease: "bounce",
        delay: 0.5,
        opacity: 0.5,
        transformOrigin: "center",
        // stagger: 0.2,
        // skewX: 20,
        // skewY: 20,
        border: "2px solid black",
        borderColor: "blue",
        boxShadow: "10px 10px 20px rgba(0,0,0,0.5)",
        backgroundImage: "linear-gradient(to right, red, yellow)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        onComplete: () => console.log("Animation complete!"),
        onStart: () => console.log("Animation started!"),
        onUpdate: () => console.log("Animation updated!"),
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="app">
      <div className="box h-25 w-25 bg-teal-600">Hello</div>
    </div>
  );
};

export default GsapTo;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const GsapFrom = () => {
  const container = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);

  const timeline1 = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(
    () => {
      timeline1.to(box.current, {
        x: -250,
        rotate: 360,

        backgroundColor: "red",
        borderRadius: "100%",
        ease: "bounce.out",
      });
      timeline1.to(box.current, {
        x: 300,
        scale: 2,
        duration: 1,
        rotate: 360,
        backgroundColor: "yellow",
        borderRadius: "8px",
        ease: "elastic.inOut",
      });
      timeline1.to(box.current, {
        y: 300,
        duration: 1.5,
        rotate: 360,
        delay: 0.6,
        backgroundColor: "purple",
        borderRadius: "8px",
        ease: "elastic.inOut",
      });
      timeline1.to(box.current, {
        backgroundColor: "purple",
        yoyo: true,
        duration: 0.1,
        y: 250,
        ease: "bounce.out",
      });
      timeline1.to(box.current, {
        yoyo: true,
        y: 300,
        backgroundColor: "teal",
        ease: "bounce.out",
        squash: 4,
        strength: 1,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="app">
      <div ref={box} className="h-25 w-25">
        Hello
      </div>
      <button
        onClick={() => {
          if (timeline1.paused()) {
            timeline1.play();
          } else {
            timeline1.pause();
          }
        }}>
        Play/Pause
      </button>
    </div>
  );
};

export default GsapFrom;

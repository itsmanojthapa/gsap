import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const GsapFromTo = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        {
          x: 0,
          rotate: 0,
          backgroundColor: "red",
          borderRadius: "0%",
        },
        {
          x: 350,
          repeat: -1,
          yoyo: true,
          duration: 2,
          rotate: 360,

          backgroundColor: "red",
          borderRadius: "100%",
          ease: "bounce.out",
        }
      );
    },
    { scope: container }
  );
  return (
    <div ref={container} className="app">
      <div className="box h-25 w-25">Hello</div>
    </div>
  );
};

export default GsapFromTo;

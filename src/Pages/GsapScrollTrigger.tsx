import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scrollRef.current) return;
      // get all the boxes in the scrollRef
      const boxes: HTMLElement[] = gsap.utils.toArray(
        scrollRef.current.children
      );

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 100 * (boxes.indexOf(box) + 4.5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", // when the bottom of the box hits the bottom of the viewport
            end: "top 20%", // end when the top of the box hits 20% from the top of the viewport
            scrub: true, // scrubbing makes the animation smooth
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <main>
      <div className="w-full h-[100vh] flex justify-center items-center flex-col">
        <h1 className="text-center text-gray-500">
          Scroll down to see the animation
        </h1>
        <div className="animate-bounce scale-200">👇</div>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;

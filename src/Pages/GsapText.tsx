import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapImageReveal = () => {
  useGSAP(() => {
    gsap.to("#heading", {
      ease: "power2.out",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".info",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.15,
        ease: "power2.out",
      }
    );
  });

  return (
    <main className="px-8 py-12">
      <h2
        id="heading"
        className="text-3xl font-semibold opacity-0 translate-y-10">
        GSAP Text
      </h2>

      <div className="mt-6 space-y-5 text-gray-600">
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          quo sed veniam eos ducimus magni nemo, consequuntur vel officia?
        </p>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          maiores minima debitis voluptatibus nihil quaerat aliquid magni aut.
        </p>

        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          error.
        </p>
        <p className="info">
          Lorem ipsum dolor sit amet.
          <a
            href="https://greensock.com/docs/v3/Plugins/TextPlugin"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline text-blue-600">
            GSAP Guide{" "}
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default GsapImageReveal;

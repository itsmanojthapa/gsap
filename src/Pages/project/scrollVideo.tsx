import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (!videoRef.current || !heroRef.current) return;

    const startValue = "top top";
    const endValue = "bottom top";

    const video = videoRef.current;

    const onLoaded = () => {
      gsap.to(video, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
        currentTime: video.duration || 1,
        ease: "none",
      });
    };

    if (video.readyState >= 1) {
      onLoaded();
    } else {
      video.onloadedmetadata = onLoaded;
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div className="w-full font-sans bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md px-6 lg:px-16 py-4 flex justify-between items-center shadow-md">
        <div className="text-xl md:text-2xl font-bold tracking-widest">
          BrandName
        </div>
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#services" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden pt-20 lg:pt-24">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/shorts.mp4"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-10 text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold drop-shadow-xl max-w-5xl leading-tight">
            Crafting Experiences that Resonate
          </h1>
        </div>
      </section>

      <main className="flex flex-col items-center border-t-1 mx-auto px-4 sm:px-6 lg:px-16">
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="w-full max-w-5xl text-center py-20 lg:py-28">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-base lg:text-lg max-w-3xl mx-auto leading-relaxed text-gray-300">
            We blend design, technology, and emotion to craft immersive
            experiences. From digital storytelling to interactive motion, we go
            beyond boundaries to shape the future of engagement.
          </p>
        </section>

        {/* SERVICES SECTION */}
        <section
          id="services"
          className="w-full max-w-5xl bg-white text-black text-center py-20 lg:py-28 shadow-sm">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12">What We Do</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-lg font-semibold flex flex-col items-center">
              <span className="text-3xl mb-2">🎨</span>
              <span>Branding & Identity</span>
            </div>
            <div className="text-lg font-semibold flex flex-col items-center">
              <span className="text-3xl mb-2">💻</span>
              <span>Web Design & Development</span>
            </div>
            <div className="text-lg font-semibold flex flex-col items-center">
              <span className="text-3xl mb-2">🎥</span>
              <span>Motion Graphics & Film</span>
            </div>
            <div className="text-lg font-semibold flex flex-col items-center">
              <span className="text-3xl mb-2">🎧</span>
              <span>Music & Sound Design</span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="flex flex-col items-center p-20 w-full max-w-5xl bg-gray-900 text-white text-center lg:py-28 mt-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Connect With Us
          </h2>
          <p className="text-base lg:text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
            Let’s make something extraordinary together. Reach out and let’s
            build the next big thing.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-black font-semibold uppercase tracking-wide hover:bg-gray-200 transition rounded-lg shadow-md">
            Get in Touch
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 text-xs border-t border-gray-700 mt-12 px-4 sm:px-6 lg:px-16">
        © {new Date().getFullYear()} BrandName. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

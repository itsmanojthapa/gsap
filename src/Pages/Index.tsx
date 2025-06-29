const Index = () => {
  return (
    <ol className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <li>
        <a href="/gsapto">GSAP To</a>
      </li>
      <li>
        <a href="/gsapfrom">GSAP From</a>
      </li>
      <li>
        <a href="/gsapfromto">GSAP From To</a>
      </li>
      <li>
        <a href="/gsaptimeline">GSAP Timeline</a>
      </li>
      <li>
        <a href="/gsapstagger">GSAP Stagger</a>
      </li>
      <li>
        <a href="/gsapscrolltrigger">GSAP ScrollTrigger</a>
      </li>
      <li>
        <a href="/gsaptext">GSAP Text</a>
      </li>
      <hr className="my-4 border-t border-gray-200" />
      <li>
        <a href="/scrollvideo">Scroll Video</a>
      </li>
    </ol>
  );
};

export default Index;

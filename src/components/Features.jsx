import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full overflow-hidden rounded-3xl h-80 w-full">
      
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center rounded-3xl"
        />
      
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 rounded-3xl h-80 w-full">
        <div>
          <h1 className="bento-title text-accent">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-accent font-bold">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Open Now</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="">
    <div className="container mx-auto px-3 md:px-20 py-10 md:py-20">
      <div className="text-center mb-24">
        <h2 className="bento-title text-accent text-3xl md:text-6xl font-bold mb-8">
          Crafting Digital Excellence
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white">
          We're a collective of passionate designers, developers, and creative thinkers dedicated 
          to transforming ideas into exceptional digital experiences. With over a decade of 
          expertise, we've helped businesses across the globe achieve their digital ambitions.
        </p>
      </div>

      <div className="grid h-auto w-full grid-cols-1 md:grid-cols-2 gap-7">
        <BentoTilt className="bento-tilt_1 relative h-80 w-full overflow-hidden rounded-3xl">
          <BentoCard
            title={
              <>
                VR Training Solution<b></b>
              </>
            }
            description="AR/VR - Immersive VR training platform for industrial applications."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 relative h-80 w-full overflow-hidden rounded-3xl">
          <a
            href="https://catalog.perceive.space/"
            target="_blank"
            rel="noopener noreferrer"
            className="size-full"
          >
            <BentoCard
              title={
                <>
                  3D Catalog<b></b>
                </>
              }
              description="A 3D catalog of Web3 products, allowing you to explore and interact with them in a virtual space."
              isComingSoon
            />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 relative h-80 w-full overflow-hidden rounded-3xl">
          <BentoCard
            title={
              <>
                E-commerce Platform<b></b>
              </>
            }
            description="UI/UX - A modern e-commerce platform with an intuitive shopping experience"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 relative h-80 w-full overflow-hidden rounded-3xl">
          <BentoCard
            title={
              <>
                AR Shopping Experience<b></b>
              </>
            }
            description="AR/VR - Revolutionary AR app for virtual try-ons and product visualization in 3D."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 relative h-80 w-full overflow-hidden rounded-3xl">
          <BentoCard
            title={
              <>
                Finance Dashboard<b></b>
              </>
            }
            description="Comprehensive financial management platform for modern businesses."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="relative h-80 w-full overflow-hidden rounded-3xl">
          <video
            src="https://videos.pexels.com/video-files/28320042/12359943_1920_1080_24fps.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;

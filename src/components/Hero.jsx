
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

import { useState } from "react";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
      <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
      <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      </div>
      </div>
      )}

      <div
      id="video-frame"
      className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
      <video
      src="../videos/hero-1.mp4"
      autoPlay
      loop
      muted
      className="absolute left-0 top-0 size-full object-cover object-center"
      onLoadedData={handleVideoLoad}
      />

      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"></h1>

      <div className="absolute left-0 top-0 z-40 size-full">
      <div className="mt-24 px-5 sm:px-10">
      <h1 className="font-sora hero-heading "></h1>

      <p className="mb-4 max-w-64 font-bold text-accent text-5xl sm:text-6xl">
        WE CRAFT DIGITAL, EXPERIENCES THAT MATTER.
      </p>

      <p className="mb-5 max-w-64 font-bold text-blue-100">
        <br /> Transform your ideas into exceptional digital products. We
      specialize in UI/UX, product design, and immersive AR/VR
      experiences.
      </p>

      <Button
        id="watch-trailer"
        title="EXPLORE MORE"
        leftIcon={<TiLocationArrow />}
        containerClass="bg-yellow-300 flex-center gap-1"
      />
      </div>
      </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black"></h1>
    </div>
    );
};

export default Hero;

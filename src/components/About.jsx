import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    const fontSizeAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
      },
    });

    fontSizeAnimation.to(".text-clip", {
      fontSize: "2rem", // Adjust the final font size as needed
      ease: "none",
    }).to(".text-clip", {
      lineHeight: "1.5", // Adjust the final line height as needed
      ease: "none",
    }).to(".text-clip", {
      opacity: 1, // Ensure text is fully visible
      ease: "none",
    }).to(".text-clip + br", {
      marginBottom: "2rem", // Enhance the gap between text
      ease: "none",
    });

    // Adjust for mobile
   
  
  });


  return (
    <div id="about" className="min-h-screen w-screen ">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 px-4 md:px-0">
      <p className="font-bold text-sm uppercase md:text-[30px] text-center" style={{ color: 'white' }}>
          Welcome to our design studio
        </p>

        <AnimatedTitle
          title="Our Journey of Innovation"
          containerClass="mt-5 !text-accent text-center"
        />
      </div>
      
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Background"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
         
        </div>
      </div>
    </div>
  );
};

export default About;

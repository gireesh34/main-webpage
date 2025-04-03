import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-12 sm:my-28">
      <div className="relative py-24 sm:py-28 text-accent text-sm sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="https://images.pexels.com/photos/9822748/pexels-photo-9822748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            clipClass="contact-clip-path-2 lg:translate-y-10 translate-y-40"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-1 lg:w-80 hidden sm:block">
          <ImageClipBox
            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60 md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-bold text-[12px] sm:text-[20px] uppercase">
            Get in Touch
          </p>
          
          <AnimatedTitle
            title="Empowering Your Digital Transformation."
            className="relative z-10"
          />
          
          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

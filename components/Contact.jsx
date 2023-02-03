import Button from "./Button";

const Contact = () => {
  return (
    <section
      className="flex justify-center items-center sm:my-20 my-10 md:px-16 px-6 md:py-12 py-4 md:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow"
      id="contact"
    >
      <div className="flex-1 flex flex-col xxs:text-center md:text-left">
        <h2 className="text-headline font-poppins font-semibold md:text-[50px] sm:text-[40px] text-[35px] md:leading-[75px] sm:leading-[65px] leading-[50px] w-full">
          Let's work together!
        </h2>
        <p className="text-paragraph font-poppins font-normal sm:text-lg text-base sm:leading-[30px] leading-[25px] max-w-[640px] md:max-w-[470px] mt-5">
          If you need a frontend developer for your company, you are in the
          right place. Let's explore the planet together!
        </p>
      </div>

      <div className="flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10">
        <Button
          link="https://www.linkedin.com/in/tolgahant/"
          title="Contact me"
        />
      </div>
    </section>
  );
};

export default Contact;

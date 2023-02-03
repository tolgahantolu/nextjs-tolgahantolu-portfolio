import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Quote = () => {
  return (
    <section className="quote xs:py-20 py-10 w-full h-full flex justify-center items-center">
      <figure>
        <blockquote className="flex">
          <span className="self-start text-green text-[14px] font-poppins xs:text-[40px] sm:text-[50px] md:text-[60px] opacity-30">
            <ImQuotesLeft />
          </span>{" "}
          <p className="max-w-5xl text-headline text-lg xs:text-3xl sm:text-[40px] md:text-[50px] text-center xs:leading-[50px] sm:leading-[60px] md:leading-[80px] font-poppins">
            We’re here to put a dent in the universe. Otherwise why else even be
            here?
          </p>
          <span className="self-end text-green text-[14px] font-poppins xs:text-[40px] sm:text-[50px] md:text-[60px] opacity-30">
            <ImQuotesRight />
          </span>
        </blockquote>
        <figcaption className="text-center text-[14px] font-poppins text-paragraph xs:text-base sm:text-lg mt-4">
          <i>— Steve Jobs</i>
        </figcaption>
      </figure>
    </section>
  );
};

export default Quote;

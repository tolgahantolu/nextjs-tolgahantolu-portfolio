import React from "react";

const SectionTitle = ({ text1, text2, gradientText }) => {
  return (
    <h1 className="font-semibold text-headline sm:text-5xl text-[40px] text-center">
      {text1} <span className="text-gradient"> {gradientText} </span> {text2}
    </h1>
  );
};

export default SectionTitle;

import ProjectCard from "./ProjectCard";

const Portfolio = ({ projects }) => {
  return (
    <section className="quote sm:py-20 py-10 w-full h-full" id="works">
      <h1 className="font-poppins font-semibold text-headline sm:text-5xl text-[40px] leading-[50px]  text-center">
        My Creative <span className="text-gradient"> Portfolio </span> Section
      </h1>
      <div className="mt-10 grid gap-4 xxs:grid-cols-1 xs:max-w-[80%] xs:mx-auto sm:max-w-[60%] md:max-w-full md:mx-none md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} index={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

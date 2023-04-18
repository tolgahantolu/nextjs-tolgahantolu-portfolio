import { ProjectCard, SectionTitle, SectionButton } from "./index";

const Portfolio = ({ projects }) => {
  return (
    <section className="quote sm:py-20 py-10 w-full h-full" id="works">
      <div className="font-poppins leading-[50px] flex flex-col xs:flex-row justify-center items-center gap-3 capitalize">
        <SectionTitle
          text1="my creative"
          text2="section"
          gradientText="portfolio"
        />
        <SectionButton href="/projects" text="see all projects" />
      </div>
      <div className="mt-10 grid gap-4 xxs:grid-cols-1 xs:max-w-[80%] xs:mx-auto sm:max-w-[60%] md:max-w-full md:mx-none md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          return (
            project.featuredProject && (
              <ProjectCard key={i} index={i} {...project} />
            )
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

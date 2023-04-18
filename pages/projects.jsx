import Head from "next/head";
import Link from "next/link";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjectsData } from "../services";

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects | Tolgahan Tolu - Frontend Developer</title>
        <link rel="icon" type="image/png" href="/t.png" />
        <meta name="description" content="Created by Tolgahan Tolu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-full h-20 flex justify-start items-center">
        <Link href="/" className="text-[28px] font-bold font-poppins">
          Tolgahan<span className="text-gradient">.</span>
        </Link>
      </div>
      <section className="sm:py-20 py-10 w-full h-full">
        <h1 className="font-semibold text-headline sm:text-5xl text-[40px] text-center">
          My Creative <span className="text-gradient">Portfolio</span> Section
        </h1>
        <div className="mt-10 grid gap-4 xxs:grid-cols-1 xs:max-w-[80%] xs:mx-auto sm:max-w-[60%] md:max-w-full md:mx-none md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} index={i} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  const projects = await getProjectsData();

  return {
    props: {
      projects,
    },
  };
};

import Head from "next/head";
import {
  Navbar,
  Hero,
  Quote,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from "../components";
import { getExperiencesData, getProjectsData } from "../services";

export default function Home({ experiences, projects }) {
  return (
    <>
      <Head>
        <title>Tolgahan Tolu - Frontend Developer</title>
        <link rel="icon" type="image/png" href="/t.png" />
        <meta name="description" content="Created by Tolgahan Tolu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="px-10 bg-main overflow-hidden">
        <div className="lg:max-w-[1280px] mx-auto">
          <header>
            <Navbar />
            <Hero />
          </header>
          <main>
            <Quote />
            <Skills experiences={experiences} />
            <Portfolio projects={projects} />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const experiences = await getExperiencesData();
  const projects = await getProjectsData();

  return {
    props: {
      experiences,
      projects,
    },
  };
};

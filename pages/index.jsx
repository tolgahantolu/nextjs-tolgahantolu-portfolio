import Head from "next/head";
import {
  Navbar,
  Hero,
  Quote,
  Skills,
  Portfolio,
  Contact,
  Blog,
} from "../components";
import { getExperiencesData, getPostsData, getProjectsData } from "../services";

export default function Home({ experiences, projects, posts }) {
  return (
    <>
      <Head>
        <title>Tolgahan Tolu - Frontend Developer</title>
        <link rel="icon" type="image/png" href="/t.png" />
        <meta name="description" content="Created by Tolgahan Tolu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Quote />
        <Skills experiences={experiences} />
        <Portfolio projects={projects} />
        <Blog posts={posts} />
        <Contact />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const experiences = await getExperiencesData();
  const projects = await getProjectsData();
  const posts = await getPostsData();

  return {
    props: {
      experiences,
      projects,
      posts: posts.slice(0, 3),
    },
  };
};

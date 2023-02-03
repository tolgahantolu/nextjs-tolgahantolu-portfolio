import Head from "next/head";
import { Navbar, Hero } from "../components";

export default function Home() {
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
            <p>soon</p>
          </main>
        </div>
      </div>
    </>
  );
}

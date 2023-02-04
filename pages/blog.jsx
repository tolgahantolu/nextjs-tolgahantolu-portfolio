import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import blog from "/public/bg-blog.png";
import { PostCard } from "../components";
import { getPostsData } from "../services";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog - Tolgahan Tolu - Frontend Developer</title>
        <link rel="icon" type="image/png" href="/t.png" />
        <meta name="description" content="Created by Tolgahan Tolu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-full h-20 flex justify-start items-center">
        <Link href="/" className="text-[28px] font-bold font-poppins">
          Tolgahan<span className="text-gradient">.</span>
        </Link>
      </div>
      <div className="mt-2">
        <Image
          src={blog}
          alt="ryland_dean unsplash.com | https://unsplash.com/photos/6k6N8HTrXyE"
          width={1280}
          height={280}
          className="w-auto h-auto object-cover object-center hidden sm:block"
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const posts = await getPostsData();

  return {
    props: {
      posts,
    },
  };
};

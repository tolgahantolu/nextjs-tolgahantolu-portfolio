import React from "react";
import { PostCard, SectionTitle, SectionButton } from "./index";

const Blog = ({ posts }) => {
  return (
    <section className="sm:py-20 py-10 w-full h-full">
      <div className="font-poppins leading-[50px] flex justify-center items-center gap-3 capitalize">
        <SectionTitle text1="latest" text2="posts" gradientText="blog" />
        <SectionButton href="/blog" text="see all blog posts" />
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

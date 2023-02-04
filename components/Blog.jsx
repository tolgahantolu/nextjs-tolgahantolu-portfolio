import React from "react";
import PostCard from "./PostCard";

const Blog = ({ posts }) => {
  return (
    <section className="sm:py-20 py-10 w-full h-full" id="skills">
      <h1 className="font-poppins font-semibold text-headline sm:text-5xl text-[40px] leading-[50px]  text-center">
        Latest <span className="text-gradient"> Blog </span> Posts
      </h1>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

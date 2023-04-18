import React from "react";
import PostCard from "./PostCard";
import { AiOutlineCaretRight } from "react-icons/ai";
import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <section className="sm:py-20 py-10 w-full h-full">
      <div className="font-poppins leading-[50px] flex justify-center items-center gap-3 capitalize">
        <h1 className="font-semibold text-headline sm:text-5xl text-[40px]">
          Latest <span className="text-gradient"> Blog </span> Posts
        </h1>
        <Link
          href="/blog"
          className="px-4 py-2 rounded-full text-base sm:text-lg bg-gradient-to-r from-dimGreen to-green flex items-center gap-1"
        >
          see all blog posts <AiOutlineCaretRight />
        </Link>
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

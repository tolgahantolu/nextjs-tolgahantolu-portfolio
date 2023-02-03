import Head from "next/head";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";
import { getPostDetailData } from "../../services";

const BlogPostDetails = ({ post }) => {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" type="image/png" href="/t.png" />
        <meta name="description" content="Created by Tolgahan Tolu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-full h-20 flex justify-start items-center">
        <Link href="/" className="text-[28px] font-bold font-poppins">
          Tolgahan<span className="text-gradient">.</span>
        </Link>
      </div>
      <div className="py-20 px-6 md:px-24 lg:px-48 xl:px-72">
        <div>
          <Image
            src={post.featuredImage.url}
            width={300}
            height={200}
            layout="responsive"
            className="object-center object-cover"
            alt={post.title}
          />
        </div>

        <div className="mt-8">
          <h1 className="mt-1 text-3xl sm:text-5xl sm:leading-[65px] font-bold text-white">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              <Image
                src={post.author.photo.url}
                width={35}
                height={35}
                className="object-center object-cover rounded-full"
                alt={post.author.name}
              />
              <h3 className="text-sm md:text-base">{post.author.name}</h3>
            </div>
            <span>-</span>
            <p className="text-xs md:text-base">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>

        <div className="mt-8 mb-4">
          <p className="sm:text-lg">{post.content.text}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetails;

export const getServerSideProps = async ({ params: { slug } }) => {
  const post = await getPostDetailData(slug);

  return {
    props: {
      post,
    },
  };
};

import Head from "next/head";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";
import { getPostDetailData } from "../../services";

const BlogPostDetails = ({ post }) => {
  console.log(post.content.raw);
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-one":
        return (
          <h1 key={index} className="text-5xl font-bold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-4xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-3xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-2xl font-medium mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "heading-five":
        return (
          <h5 key={index} className="text-xl font-medium mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h5>
        );
      case "heading-six":
        return (
          <h6 key={index} className="text-lg font-medium mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h6>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );

      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

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
      <div className="py-10 xs:py-20 xs:px-6 md:px-24 lg:px-48 xl:px-72">
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
          <div className="sm:text-lg">
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) =>
                getContentFragment(itemIndex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
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

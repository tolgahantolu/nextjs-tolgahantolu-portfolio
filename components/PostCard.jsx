import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({
  author,
  createdAt,
  excerpt,
  slug,
  title,
  featuredImage,
}) => {
  return (
    <>
      <Link href={`/blog/${slug}`} className="w-full h-full">
        <div className="bg-black-gradient rounded-xl">
          <div className="px-3 py-5">
            <div className="px-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2">
                  <Image
                    src={author.photo.url}
                    width={35}
                    height={35}
                    className="object-center object-cover rounded-full"
                    alt={author.name}
                  />
                  <h3 className="text-[15px]">{author.name}</h3>
                </div>
              </div>
              <div className="mt-5 mb-6 flex flex-col gap-3">
                <h1 className="text-[28px] leading-9 font-bold tracking-wide text-white">
                  {title}
                </h1>
                <p className="text-[17px] text-badge">{excerpt}</p>
                <p className="text-xs text-headline">
                  {moment(createdAt).format("MMM DD, YYYY")}
                </p>
              </div>
            </div>

            <div>
              <Image
                src={featuredImage.url}
                width={254}
                height={160}
                layout="responsive"
                className="rounded-xl object-center object-cover"
                alt={title}
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;

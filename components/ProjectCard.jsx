import Image from "next/image";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";

const ProjectCard = ({ featuredImage, title, description, slug }) => {
  return (
    <div className="bg-headline text-lightB rounded-xl">
      <div className="flex flex-col items-center py-4 group">
        <div className="w-[90%] min-h-[210px]  relative">
          <Image
            src={featuredImage.url}
            alt={`${title} project`}
            fill
            objectFit="contain"
            objectPosition="center"
            className="rounded-lg transition duration-700 opacity-80 md:opacity-100 group-hover:opacity-80"
          />
          <Link
            href={slug}
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-100 md:opacity-0 transition duration-500 group-hover:opacity-100 bg-lightB p-2 text-2xl rounded-full text-headline"
          >
            <AiFillEye />
          </Link>
        </div>

        <div className="text-center max-w-[80%] mt-5">
          <h3 className="font-medium text-xl font-poppins">{title}</h3>
          <p className="font-poppins">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

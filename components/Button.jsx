import Link from "next/link";

const Button = ({ link, title, style }) => {
  return (
    <Link
      href={link}
      target="_self"
      referrerPolicy="no-referrer"
      className={`px-6 py-4 bg-green-gradient font-poppins font-medium sm:text-lg text-base text-lightB outline-none rounded-xl ${style}`}
    >
      {title}
    </Link>
  );
};

export default Button;

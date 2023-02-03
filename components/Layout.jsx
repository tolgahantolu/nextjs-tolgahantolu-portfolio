import { Footer } from "./index";

const Layout = ({ children }) => {
  return (
    <div className="px-10 bg-main overflow-hidden">
      <div className="lg:max-w-[1280px] mx-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

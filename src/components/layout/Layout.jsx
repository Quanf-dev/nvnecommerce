/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1260px] w-screen mx-auto  px-5 py-6 ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Template = () => {
  return (
    <div className=" h-screen">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Template;

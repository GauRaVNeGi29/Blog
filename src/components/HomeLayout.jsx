import React from "react";
import TopBanner from "./TopBanner";

const HomeLayout = ({ children }) => {
  return (
    <main className="">
      {/* Container with balanced spacing */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-7 2xl:px-0 overflow-y-auto">
        {/* Page sections go here */}
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;

import React from "react";
import { Link } from "react-router-dom";

const WriteForUsLink = () => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10"
      style={{
        fontFamily: "'DM Serif Display', serif",
        letterSpacing: "-1px",
        lineHeight: "1.1",
      }}>
        Want to share your ideas?
      </h2>
      <p className="text-gray-600 mb-6 font-inter">
        Join our community of writers and share your stories with the world.
      </p>
      <Link to='/write-for-us'>
                <button className="bg-teal-700 hover:bg-teal-500 text-white font-semibold text-lg px-8 py-4 cursor-pointer shadow-md transition-all rounded-md duration-300 ease-in-out">
                 ✍️ Write For Us
                </button>
              </Link>
    </div>
  );
};

export default WriteForUsLink;

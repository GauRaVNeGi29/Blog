import React from "react";

const BlogSignupBanner = () => {

  const goToSetuStoreSignUp = () => {
  window.open("https://setustore.com/profiles-add", "_blank");
}


  return (
    <section className="bg-teal-700 text-white py-16 px-6 md:px-12 rounded-lg shadow-lg mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-1px",
            lineHeight: "1.1",
          }}
          >
            Want endless inspiration and design tips?
          </h2>
          <p className="font-quick text-lg md:text-xl mb-6">
            Sign up for Setu Store’s trend reports, interviews with our favorite
            creatives, and tutorials on the latest techniques to keep you inspired.
          </p>
          <div onClick={goToSetuStoreSignUp} >
            <button className="font-quick bg-white text-teal-700 font-semibold px-6 py-3 cursor-pointer rounded-md hover:bg-gray-100 transition-colors duration-400">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <img
            src="/Signup_banner.webp" // replace with your banner image
            alt="Setu Store inspiration"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSignupBanner;

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";

const WriteForUsPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // replace with your EmailJS template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Your blog idea was sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        () => {
          toast.error("Oops! Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-2 py-12">
      <SEO
  title="Write for Us | Contribute to Setu Store Blog | Share Your Insights with Retailers"
  description="Have expertise in retail, eCommerce, or sustainable products? Write for Setu Store's blog and reach a global audience. Share your stories, guides, and thought leadership with our readers."
  keywords="write for us, guest post, contribute, blog submission, eCommerce insights, retail trends, sustainable brands, handmade products, setu store, australian retailers, marketplace blogs, global trade, indian sellers"
  url="https://www.setustore.com/write-for-us"
  image="/write-for-us-banner.jpg"
/>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl"
      >
        <Card className="shadow-xl backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle
              className="text-3xl font-bold bg-gradient-to-r from-teal-700 to-teal-600 py-1 bg-clip-text text-transparent"
              style={{
                fontFamily: "'DM Serif Display', serif",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
            >
              Write a Blog for Us ✍️
            </CardTitle>
            <p className="text-gray-900 font-quicksand font-medium mt-2">
              Share your insights, stories, or industry thoughts with our readers.
            </p>
          </CardHeader>

          <CardContent>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 mt-4">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <label className="font-quicksand text-gray-700 font-medium mb-1 block">
                    Your Name
                  </label>
                  <Input name="user_name" placeholder="Enter your full name" required />
                </div>
                <div className="flex-1">
                  <label className="font-quicksand text-gray-700 font-medium mb-1 block">
                    Email Address
                  </label>
                  <Input name="user_email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div>
                <label className="font-quicksand text-gray-700 font-medium mb-1 block">
                  Contact Number
                </label>
                <Input name="user_contact" type="tel" placeholder="+91 9876543210" required />
              </div>

              <div>
                <label className="font-quicksand text-gray-700 font-medium mb-1 block">
                  Blog Topic Idea
                </label>
                <Input
                  name="user_topic"
                  placeholder="E.g. How Local Sellers Can Go Global"
                  required
                />
              </div>

              <div>
                <label className="font-quicksand text-gray-700 font-medium mb-1 block">
                  Summary
                </label>
                <Textarea
                  name="user_message"
                  rows={5}
                  placeholder="Share your article idea, outline, or a short draft..."
                  required
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-center mt-6"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className={`font-quicksand bg-teal-700 hover:bg-teal-500 text-white font-semibold text-lg px-8 py-4 cursor-pointer shadow-md transition-all rounded-md duration-300 ease-in-out ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Submit Your Blog Idea"}
                </button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default WriteForUsPage;

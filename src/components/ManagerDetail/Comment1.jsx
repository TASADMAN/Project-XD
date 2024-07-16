import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import CommentContextProvider from "./CommentContext";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
export default function Comment1() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <CommentContextProvider>
      <div data-aos="zoom-in" data-aos-delay="20" className="container mx-auto p-4 bg-gray-950 rounded-xl ">
        <h1 className="text-3xl font-bold mb-4 text-white">Comments</h1>
        <div className="block rounded-xl border border-gray-800 p-4 font-medium text-md">
        
          <CommentForm />
          <CommentList />
        </div>
      </div>
    </CommentContextProvider>
  );
}

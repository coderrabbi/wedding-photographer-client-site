import React from "react";
import styles from "../../styles";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import useTitle from "../../hooks/useTitle";
const Blog = () => {
  useTitle("Blog");
  const faq = [
    {
      questions: "Difference between SQL and NoSQL?",
      ans: "SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.",
    },
    {
      questions: "What is JWT, and how does it work?",
      ans: " JSON Web Token, is an open standard used to share security information between two parties — a client and a server. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.",
    },
    {
      questions: "What is the difference between javascript and NodeJS?",
      ans: "JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.",
    },
    {
      questions: "How does NodeJS handle multiple requests at the same time?",
      ans: "NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. ",
    },
  ];

  return (
    <div className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className="my-8">
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center">
          Questions & Answers
        </h1>
        <p className={`${styles.paragraph} mt-2 text-center`}>
          Explore the common questions and answers about Celebration
        </p>
      </div>
      <div className=" grid sm:grid-cols-2 grid-cols-1 gap-5">
        {faq.map((f, index) => (
          <div className="flex gap-3" key={index}>
            <BsFillQuestionCircleFill className="text-white mt-3 w-[80px] text-xl" />
            <div>
              <h4 className="text-white text-[28px]">{f.questions}</h4>{" "}
              <p className="text-white">{f.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

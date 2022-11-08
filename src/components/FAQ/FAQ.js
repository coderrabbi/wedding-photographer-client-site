import React from "react";
import styles from "../../styles";
import { BsFillQuestionCircleFill } from "react-icons/bs";
const FAQ = () => {
  const faq = [
    {
      questions: "What differentiates you from other wedding photographers?",
      ans: "As a wedding photographer, I know that wedding photographs are very precious for couples. Couples love to see their happy moments in picture. And I know the camera angles to take all of the happy moments of couples as they want. I’ve identified the important wedding events for each of the ceremonies. Being a specialist in Wedding Photography, I will capture every important moment, making both the couple and their families happy with the Wedding Photos.",
    },
    {
      questions: "What types of equipment do you use?",
      ans: "I use a Sony mirrorless professional digital camera & all Sony G & G master lens.",
    },
    {
      questions: "Do you do destination weddings?",
      ans: "Yes.",
    },
    {
      questions: "Do you do pre and post wedding photography?",
      ans: "Yes.",
    },
    {
      questions: "Do we need to charge for additional coverage?",
      ans: "Yes.",
    },
    {
      questions: "Can we print our images?",
      ans: "Yes.",
    },
  ];

  return (
    <div>
      <div className="mb-8">
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
            <BsFillQuestionCircleFill className="text-white mt-3 text-xl" />
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

export default FAQ;

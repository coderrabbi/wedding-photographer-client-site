import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";

const Help = () => {
  return (
    <div className=" bg-[url('https://img.freepik.com/free-photo/close-up-view-male-hand-holding-professional-camera-street_8353-6510.jpg?w=740&t=st=1667896842~exp=1667897442~hmac=4765809cb914482b7b899a43991fd31e53becc2ecfcdfd99350714210bf873c4')] bg-no-repeat bg-cover rounded-xl px-3 py-5 bg-green-200 bg-opacity-25 ">
      <div className="mb-8">
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
          Need Help With Professional <br />
          <span className="text-gradient"> Photographer? </span>
        </h1>
        <p className={`${styles.paragraph} mt-2 max-w-[470px]`}>
          Feel free to contact me for any photography problem you may have. I
          will try my best to solve your problem.
        </p>
      </div>
      <button
        type="button"
        className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px]`}
      >
        <Link to="about"> Contact With Me</Link>
      </button>
    </div>
  );
};

export default Help;

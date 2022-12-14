import React from "react";
import { Link } from "react-router-dom";
import styles, { layout } from "../../styles";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About me-Wedding-photographer</title>
      </Helmet>
      <section className={`${layout.section} gap-12`}>
        <div className=" ">
          <img
            className="rounded-xl relative z-[3]"
            src="https://templates.hibootstrap.com/povi/default/assets/img/about/about-img-2.jpg"
            alt=""
          />
        </div>

        <div className={`${layout.sectionInfo} gap-4`}>
          <div>
            <h2 className={styles.heading2}>
              Read About <br /> My Journey
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              I have been engaged in the photography profession for 10 years.
              During this time I have been able to learn and teach many things.
              In my opinion everyone should give importance to everyone's love
            </p>
          </div>
          <button
            type="button"
            className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px]`}
          >
            <Link to="about"> Work With Me</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

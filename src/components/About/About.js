import React from "react";
import styles, { layout } from "../../styles";

const About = () => {
  return (
    <div>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            You do the business, <br /> we’ll handle the money.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

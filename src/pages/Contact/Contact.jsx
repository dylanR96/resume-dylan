import React from "react";
import Navbar from "../../components/navigation/Navbar";
import styles from "./Contact.module.css";
import { RavenSvg, ScrollSvg } from "./RavenSvg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={styles["contact-page__wrapper"]}>
        <div className={styles["contact-page__content"]}>
          <div className={styles["contact-page__my-info"]}>
            Here is all my info
          </div>
          <div className={styles["contact-page__form-wrapper"]}>
            <form className={styles["contact-page__form"]}>
              <input type="text" name="name" placeholder="Name" />

              <input type="text" name="number" placeholder="Contact number" />
              <input type="text" name="email" placeholder="Email address" />
              <select name="contact-reason">
                <option value="" placeholder="Reason for contact"></option>
                <option value="work">Work</option>
                <option value="colab">Collaboration</option>
                <option value="other">
                  Other (Please specify in message below)
                </option>
              </select>
              <textarea
                name="message"
                rows={4}
                cols={40}
                placeholder="Personal message"
              />
              <input type="submit" value="Send" />
              <RavenSvg />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

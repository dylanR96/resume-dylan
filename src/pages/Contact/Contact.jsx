import React from "react";
import Navbar from "../../components/navigation/Navbar";
import styles from "./Contact.module.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const successRoll = () => toast.success("Your info has been sent!");

  const formSubmission = (event) => {
    event.preventDefault();
    successRoll();
  };

  return (
    <>
      <Navbar />

      <div className={styles["contact-page__wrapper"]}>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
              },
            },
          }}
        />
        <div className={styles["contact-page__content"]}>
          <div className={styles["contact-page__form-wrapper"]}>
            <form
              onSubmit={formSubmission}
              className={styles["contact-page__form"]}
            >
              <h2>Send me your information and let's connect!</h2>
              <input
                className={styles["contact-page__inputs"]}
                type="text"
                name="name"
                placeholder="Name"
              />

              <input
                className={styles["contact-page__inputs"]}
                type="text"
                name="number"
                placeholder="Contact number"
              />
              <input
                className={styles["contact-page__inputs"]}
                type="text"
                name="email"
                placeholder="Email address"
              />
              <select
                className={styles["contact-page__inputs"]}
                name="contact-reason"
                defaultValue=""
              >
                <option value="" disabled>
                  Reason for contact
                </option>
                <option value="work">Work</option>
                <option value="colab">Collaboration</option>
                <option value="other">
                  Other (Please specify in message below)
                </option>
              </select>
              <textarea
                className={styles["contact-page__inputs"]}
                name="message"
                rows={4}
                cols={40}
                placeholder="Personal message"
              />
              <input
                className={styles["contact-page__submit"]}
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

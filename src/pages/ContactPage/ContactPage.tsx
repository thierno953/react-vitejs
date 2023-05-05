import React from "react";
import { useStyles } from "./ContactPage.styles";
import { useGlobalStyles } from "../../constants";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../../components/ContactForm/ContactForm";

interface Props {}

const ContactPage: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={clsx(globalClasses.container, classes.container)}>
      <div className={classes.contactLeftContainer}>
        <h1 className={globalClasses.h2}>
          Let’s have a chat,
          <br />
          Get in touch 👋
        </h1>
        <p className={classes.smallText}>
          Interested in working together or have any questions?
          <br />
          Contact me using the form or email me at
        </p>
        <Link to="/contact" className={classes.email}>
          <FaEnvelopeOpen /> thiernobarry554@gmail.com
        </Link>
        <br />
        <Link to="/contact" className={classes.email}>
          <FaPhoneAlt /> +32 466 240 103
        </Link>
      </div>
      <div className={classes.contactRightFormContainer}>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;

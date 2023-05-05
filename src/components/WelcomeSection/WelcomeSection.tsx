import React from "react";
import { useStyles } from "./WelcomeSection.styles";
import ThiernoImage from "../../assets/DevOps-scaled.jpeg";
import clsx from "clsx";
import { useGlobalStyles } from "../../constants";

interface Props {}

const WelcomeSection: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={classes.welcomeContainer}>
      <h1 className={clsx(globalClasses.h1, classes.welcomeText)}>
        Hi there!
        <br />
        <span>I’m Thierno - A website developer based in Belgium.</span>
        <br />
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum quae voluptas quasi.
        <br />
      </h1>
      <img src={ThiernoImage} alt="Thierno" className={classes.welcomeImage} />
    </div>
  );
};

export default WelcomeSection;

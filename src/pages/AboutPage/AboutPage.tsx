import React from "react";
import { useStyles } from "./AboutPage.styles";
import { useGlobalStyles } from "../../constants";
import SayHelloSection from "../../components/SayHelloSection";
import Myprofile from "../../assets/DevOps-scaled.jpeg";
import { Link } from "react-router-dom";

interface Props {}

const AboutPage: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutMeContainer}>
          <div className={classes.aboutMeTextWrapper}>
            <p>
              Hi! My name is Thierno Barry, I am a full stack website developer
              based in Belgium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates facere fuga labore repudiandae, cum necessitatibus
              quasi in temporibus dolore eius quaerat dignissimos tenetur beatae
              magni neque. Iste, molestiae earum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates facere fuga labore repudiandae, cum necessitatibus
              quasi in temporibus dolore eius quaerat dignissimos tenetur beatae
              magni neque. Iste, molestiae earum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates facere fuga labore repudiandae, cum necessitatibus
              quasi in temporibus dolore eius quaerat dignissimos tenetur beatae
              magni neque. Iste, molestiae earum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates facere fuga labore repudiandae, cum necessitatibus
              quasi in temporibus dolore eius quaerat dignissimos tenetur beatae
              magni neque. Iste, molestiae earum!
            </p>
          </div>
          <img src={Myprofile} alt="Thierno" className={classes.aboutMeImage} />
        </div>
        <Link to="/contact" className={classes.checkOutCV}>
          Check out my CV
        </Link>
      </div>
      <SayHelloSection />
    </main>
  );
};

export default AboutPage;

import React from "react";
import { useGlobalStyles } from "../../constants";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import SayHelloSection from "../../components/SayHelloSection/SayHelloSection";
import Section from "../../components/Section/Section";

interface Props {}

const HomePage: React.FC<Props> = () => {
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <WelcomeSection />
      <Section />
      <SayHelloSection />
    </main>
  );
};

export default HomePage;

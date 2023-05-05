import React from "react";
import { useStyles } from "./WorkPage.styles";
import { useGlobalStyles } from "../../constants";
import PageHeading from "../../components/PageHeading/PageHeading";
import SayHelloSection from "../../components/SayHelloSection/SayHelloSection";
import { tempWorkPosts } from "../../helpers/tempWorkPosts";
import WorkPost from "../../components/WorkPost/WorkPost";

interface Props {}

const WorkPage: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <PageHeading
        title="Portfolio"
        description={
          <>
            I work as a full stack web developer, mostly using React and NodeJS.
            <br />
            Check out some of the projects I worked on.
          </>
        }
      />
      <div className={classes.workWrapper}>
        {tempWorkPosts.map((post, i) => (
          <WorkPost key={i} post={post} reversed={i % 2 !== 0} />
        ))}
      </div>
      <SayHelloSection />
    </main>
  );
};

export default WorkPage;

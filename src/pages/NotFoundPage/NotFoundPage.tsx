import React from "react";
import clsx from "clsx";
import { useGlobalStyles } from "../../constants";
import { useStyles } from "./NotFoundPage.styles";

interface Props {}

const NotFoundPage: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={clsx(globalClasses.container, classes.container)}>
      <div className={classes.notFound}>
        <h1>Oops! Page not found</h1>
      </div>
    </main>
  );
};

export default NotFoundPage;

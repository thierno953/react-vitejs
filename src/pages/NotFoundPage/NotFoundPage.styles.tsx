import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {},
  notFound: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h1": {
      paddingTop: "30vh"
    }
  },
});

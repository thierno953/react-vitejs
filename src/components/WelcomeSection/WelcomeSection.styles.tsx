import { createUseStyles } from "react-jss";
import { DEFAULT_RADIUS } from "../../constants";

export const useStyles = createUseStyles({
  welcomeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "15vh",
    marginBottom: "15vh",
  },
  welcomeText: {
    paddingRight: 40,
    lineHeight: 1.5,
  },
  welcomeImage: {
    display: "none",
    width: 265,
    height: "auto",
    objectFit: "cover",
    borderRadius: DEFAULT_RADIUS,
    "@media all and (min-width: 960px)": {
      display: "block",
    },
  },
});

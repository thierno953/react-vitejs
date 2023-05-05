import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  navSocialLinks: {
    marginTop: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& li a": {
      paddingLeft: 20,
    },
    "@media all and (min-width: 696px)": {
      marginTop: 0,
      justifyContent: "flex-start",
    },
  },
  socialIcon: {
    height: 18,
    width: "auto",
    objectFit: "contain",
  },
});

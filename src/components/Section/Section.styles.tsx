import { createUseStyles } from "react-jss";
import { colorGray, colorBlue, defaultFontMedium } from "../../constants";

export const useStyles = createUseStyles({
  blogPostsContainer: {},
  blogPostsWrapper: {
    marginTop: 15,
    marginBottom: 15,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: 40,
    "@media all and (min-width: 696px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  pagination: {
    fontFamily: defaultFontMedium,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    paddingTop: "30px",
    color: colorGray,
    "& ul, li, a": {
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: 800,
      cursor: "pointer",
    },
    "& a.active": {
      color: colorBlue,
    },
  },
});

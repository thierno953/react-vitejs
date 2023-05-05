import { createUseStyles } from "react-jss";
import { colorDark, colorLight, DEFAULT_PADDING } from "../../constants";

export const useStyles = createUseStyles({
  navContainer: {
    paddingTop: DEFAULT_PADDING,
    paddingBottom: DEFAULT_PADDING,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: "auto",
    objectFit: "contain",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hideMobile: {
    display: "none",
    "@media all and (min-width: 696px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  navHamburger: {
    position: "relative",
    display: "block",
    cursor: "pointer",
    zIndex: 9999,
    "& span": {
      top: 0,
      left: 0,
      display: "block",
      content: "''",
      width: 25,
      height: 2,
      backgroundColor: colorDark,
      "-webkit-transition": "all 0.3s ease-in-out",
      "-o-transition": "all 0.3s ease-in-out",
      transition: "all 0.3s ease-in-out",
      margin: "8px auto",
    },
    "@media all and (min-width: 696px)": {
      display: "none",
    },
  },
  navHamburgerActive: {
    "& span:nth-child(2)": {
      opacity: 0,
    },
    "& span:nth-child(1)": {
      "-webkit-transform": "translateY(10px) rotate(45deg)",
      "-o-transform": "translateY(10px) rotate(45deg)",
      "-ms-transform": "translateY(10px) rotate(45deg)",
      transform: "translateY(10px) rotate(45deg)",
    },
    "& span:nth-child(3)": {
      "-webkit-transform": "translateY(-10px) rotate(-45deg)",
      "-o-transform": "translateY(-10px) rotate(-45deg)",
      "-ms-transform": "translateY(-10px) rotate(-45deg)",
      transform: "translateY(-10px) rotate(-45deg)",
    },
  },
  navMobileContainer: {
    display: "none",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: colorLight,
    zIndex: 9998,
    padding: `60px ${DEFAULT_PADDING}px 60px ${DEFAULT_PADDING}px`,
  },
  navMobileContainerActive: {
    display: "block",
    "@media all and (min-width: 696px)": {
      display: "none",
    },
  },
});

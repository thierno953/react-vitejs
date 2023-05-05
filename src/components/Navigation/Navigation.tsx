import React, { useEffect, useState } from "react";
import { useStyles } from "./Navigation.styles";
import logo from "../../assets/thierno.png";
import { Link, useLocation } from "react-router-dom";
import { useGlobalStyles } from "../../constants";
import clsx from "clsx";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import NavigationSocialLinks from "./NavigationSocialLinks/NavigationSocialLinks";

interface Props {}

const Navigation: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const { pathname } = useLocation();

  const [navigationToggled, setNavigationToggled] = useState<boolean>(false);

  useEffect(() => {
    // On navigation make sure to toggle the mobile navigation off and scroll to top
    setNavigationToggled(false);
    window.scrollTo(0, 0);
    document.body.style.overflowY = "auto";
  }, [pathname]);

  const handleHamburgerClicked = () => {
    setNavigationToggled((toggled) => {
      document.body.style.overflowY = toggled ? "auto" : "hidden";
      return !toggled;
    });
  };

  return (
    <div className={clsx(globalClasses.container, classes.navContainer)}>
      <Link to="/">
        <img src={logo} alt="Thierno logo" className={classes.logo} />
      </Link>
      <div className={classes.navRight}>
        <div className={classes.hideMobile}>
          <NavigationLinks />
          <NavigationSocialLinks />
        </div>
        <div
          className={clsx(classes.navHamburger, {
            [classes.navHamburgerActive]: navigationToggled,
          })}
          onClick={handleHamburgerClicked}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div
        className={clsx(classes.navMobileContainer, {
          [classes.navMobileContainerActive]: navigationToggled,
        })}
      >
        <NavigationLinks />
        <NavigationSocialLinks />
      </div>
    </div>
  );
};

export default Navigation;

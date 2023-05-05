import { useStyles } from "./NavigationSocialLinks.styles";
import { FiLinkedin, FiGithub } from "react-icons/fi";

interface Props {}

const NavigationSocialLinks: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <ul className={classes.navSocialLinks}>
      <ul className={classes.navSocialLinks}>
        <li>
          <a href="#">
            <FiLinkedin className={classes.socialIcon} />
          </a>
        </li>
        <li>
          <a href="#">
            <FiGithub className={classes.socialIcon} />
          </a>
        </li>
      </ul>
    </ul>
  );
};

export default NavigationSocialLinks;

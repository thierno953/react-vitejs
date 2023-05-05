import { useStyles } from "./Section.styles";
import { useGlobalStyles } from "../../constants";
import BlogPost from "../BlogPost";
import { templateSections } from "../../helpers/templateSections";

interface Props {}

const Section: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();


  return (
    <div className={classes.blogPostsContainer}>
      <h2 className={globalClasses.h4}>Latest blog posts</h2>
      <div className={classes.blogPostsWrapper}>
        {templateSections.map((post, i) => (
          <BlogPost key={i} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Section;

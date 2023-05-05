import { useStyles } from "./BlogPost.styles";
import { useGlobalStyles } from "../../constants";
import { FiArrowRight } from "react-icons/fi";
import IBlogPost from "../../models/IBlogPost";

interface Props {
  post: IBlogPost;
}

const BlogPost: React.FC<Props> = ({ post }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={classes.blogPostContainer}>
       <img src={post.imageUrl} className={classes.blogPostImage} /> 
      <h5 className={globalClasses.h5}>{post.title}</h5>
      <p className={classes.blogPostDescription}>{post.description}</p>
      <div className={classes.blogPostTitle}>
        <h5 className={globalClasses.h5}>ReadMore</h5>
        <FiArrowRight />
      </div>
    </div>
  );
};

export default BlogPost;

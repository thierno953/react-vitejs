import { useStyles } from "./BlogPostsSection.styles";
import { useGlobalStyles } from "../../constants";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import BlogPost from "../BlogPost";
import { tempBlogPosts } from "../../helpers/tempBlogPosts";
import { useState } from "react";

interface Props {}

const BlogPostsSection: React.FC<Props> = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = tempBlogPosts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(tempBlogPosts.length / recordsPerPage);
 // const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  
  // const changePage = () => { 
  //   setCurrentPage(npage);
  // };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={classes.blogPostsContainer}>
      <h2 className={globalClasses.h4}>Latest blog posts</h2>
      <div className={classes.blogPostsWrapper}>
        {records.map((post, i) => (
          <BlogPost key={i} post={post} />
        ))}
      </div>
      <ul className={classes.pagination}>
        <li>
          <a href="#" onClick={prePage}>
            <FiArrowLeft />
          </a>
        </li>
        {/* {numbers.map((n, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={() => changePage(n)}
              className={`${currentPage === n ? "active" : ""}`}
            >
              {n}
            </a>
          </li>
        ))} */}
        <li>
          <a href="#" onClick={nextPage}>
            <FiArrowRight />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogPostsSection;

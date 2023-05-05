import React from "react";
import { useGlobalStyles } from "../../constants";
import PageHeading from "../../components/PageHeading/PageHeading";
import BlogPostsSection from "../../components/BlogPostsSection/BlogPostsSection";
import SayHelloSection from "../../components/SayHelloSection/SayHelloSection";

interface Props {}

const BlogPage: React.FC<Props> = () => {
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <PageHeading
        title="Blog posts"
        description={
          <>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Quidem iste eligendi tempore, quia nam possimus, aperiam
          </>
        }
      />
      <BlogPostsSection />
      <SayHelloSection />
    </main>
  );
};

export default BlogPage;

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { List } from "src/atoms/List/List";
import Text from "src/atoms/Text/Text";
import Footer from "src/components/Layout/Footer/Footer";
import Header from "src/components/Layout/Header/Header";
import { backendPath } from "src/config";
import Comments from "src/pages/Comments/Comments";
import { CommentProps } from "src/types/pages/home/comments";
import classes from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [pages, setPages] = useState(0);
  const commentsPerPage = 4;

  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const homePagePath = "/";
  const experiencePagePath = "/experience";
  const servicesPagePath = "/services";
  const isPageFound =
    location.pathname === homePagePath ||
    location.pathname === experiencePagePath ||
    location.pathname === servicesPagePath;

  const scrollToBottom = () =>
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

  const fetchComments = (page: number, sort: number) => {
    const graphqlQuery = {
      query: `
        query FetchComments($page: Int, $sort: Int) 
          {
            comments(page: $page, sort: $sort) {
            comments {
              _id
             name
              message
              email
              createdAt
            }
            totalComments
          }
        }`,
      variables: {
        page,
        sort,
      },
    };

    return fetch(backendPath, {
      method: "POST",
      body: JSON.stringify(graphqlQuery),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        setPages(Math.ceil(data?.comments?.totalComments / commentsPerPage));
        setComments(data?.comments?.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchComments(1, -1);
  }, []);

  return (
    <div ref={ref}>
      <Header scrollToBottom={scrollToBottom} />
      <section className={classes.home}>
        <div className={classes["home-bg"]} />
        <div className={classes["home-intro"]}>
          <Text size="xxl" weight="semi" className={classes["hello"]}>
            Hello!
          </Text>
          <Text size="large" weight="bold">
            I am
            <span className={classes["text-blue"]}>HRS</span>
            Pathan
          </Text>
          <Text size="large" weight="bold">
            Creative UI/UX Designer
          </Text>
          <List
            size="xl"
            weight="regular"
            items={[
              "1. UI/UX Design",
              "2. Product Design",
              "3. Web Design",
              "4. Front-end Design!",
            ]}
            className={classes.list}
          />
        </div>
      </section>
      {children}
      {isPageFound && (
        <Comments
          fetchPage={(page: number, sort: number) => fetchComments(page, sort)}
          comments={comments}
          pages={pages}
          commentsPerPage={commentsPerPage}
        />
      )}
      <Footer />
    </div>
  );
};

export { Layout };

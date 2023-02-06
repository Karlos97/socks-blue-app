import { useState } from "react";
import Button from "src/atoms/Button/Button";
import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { CommentProps, CommentsPageProps } from "src/types/pages/home/comments";
import AddComment from "./AddComment/AddComment";
import Comment from "./Comment";
import classes from "./comments.module.scss";

const Comments = ({
  fetchPage,
  comments,
  pages,
  commentsPerPage,
}: CommentsPageProps) => {
  const sortMap = { asc: 1, desc: -1 };
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<keyof typeof sortMap>("asc");

  return (
    <>
      <section className={classes.comments}>
        <Wrapper justify="space">
          <Text size="xxl" weight="regular">
            Comments
          </Text>
          <div>
            <Wrapper align="center">
              <Button variant="text">
                <Text
                  size="s"
                  weight="medium"
                  onClick={() => {
                    fetchPage(currentPage, sortMap["asc"]);
                    setSort("asc");
                  }}
                >
                  oldest
                </Text>
              </Button>
              <Text size="m" weight="medium" className={classes.filter}>
                |
              </Text>
              <Button
                variant="text"
                onClick={() => {
                  fetchPage(currentPage, sortMap["desc"]);
                  setSort("desc");
                }}
              >
                <Text size="s" weight="medium">
                  newest
                </Text>
              </Button>
            </Wrapper>
          </div>
        </Wrapper>
        {comments?.map(
          ({ createdAt, name, email, message }: CommentProps, index: number) =>
            commentsPerPage > index ? (
              <Comment
                key={`comment-${index}`}
                createdAt={createdAt}
                name={name}
                email={email}
                message={message}
              />
            ) : null
        )}
        <Wrapper align="baseline" className={classes["pages"]}>
          {Array.from(Array(pages), (_, x) => x + 1).map((number: number) =>
            number <= 3 ? (
              <Button
                key={`comments-nav-button-${number}`}
                variant={number === currentPage ? "blue" : "dark"}
                size="small"
                onClick={() => {
                  fetchPage(number, sortMap[sort]);
                  setCurrentPage(number);
                }}
              >
                {number}
              </Button>
            ) : null
          )}
          {pages > 3 ? (
            <Text weight="bold" className={classes["pages-counter"]}>
              ... {pages}
            </Text>
          ) : null}
        </Wrapper>
      </section>
      <AddComment fetchPage={() => fetchPage(currentPage, sortMap[sort])} />
    </>
  );
};

export default Comments;

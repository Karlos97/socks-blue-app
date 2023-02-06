import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { CommentProps } from "src/types/pages/home/comments";
import classes from "./comments.module.scss";

const Comment = ({ createdAt, name, email, message }: CommentProps) => {
  return (
    <div className={classes.comment}>
      <Text size="s">{createdAt}</Text>
      <Wrapper className={classes["comment-name"]}>
        <Text weight="bold" className={classes["comment-name-paragraph"]}>
          {name}
        </Text>
        <Text weight="bold">{email}</Text>
      </Wrapper>
      <Text size="s">{message}</Text>
    </div>
  );
};

export default Comment;

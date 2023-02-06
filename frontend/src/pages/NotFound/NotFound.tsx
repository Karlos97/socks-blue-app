import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import classes from "./notFound.module.scss";

const NotFound = () => {
  return (
    <Wrapper align="center" justify="center" className={classes["not-found"]}>
      <Text size="xxl" weight="bold">
        Page not found!
      </Text>
    </Wrapper>
  );
};

export default NotFound;

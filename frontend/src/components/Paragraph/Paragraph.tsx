import React from "react";
import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import classes from "./paragraph.module.scss";

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Text className={classes.paragraph}>{children}</Text>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Paragraph;

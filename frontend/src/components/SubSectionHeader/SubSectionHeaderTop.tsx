import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { SubSectionHeaderTopProps } from "src/types/pages/home/home";
import classes from "./subSectionHeader.module.scss";

const SubSectionHeaderTop = ({
  headerTop,
  headerBottom,
}: SubSectionHeaderTopProps) => {
  return (
    <Wrapper direction="column" align="center" className={classes["header"]}>
      <Text size="small" type="blue" weight="bold">
        {headerTop}
      </Text>
      <Text size="medium" weight="semi">
        {headerBottom}
      </Text>
    </Wrapper>
  );
};

export default SubSectionHeaderTop;

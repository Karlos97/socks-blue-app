import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { SubSectionHeaderProps } from "src/types/pages/home/home";
import classes from "./subSectionHeader.module.scss";

const SubSectionHeader = ({
  headerTop,
  headerBottom,
  description,
}: SubSectionHeaderProps) => {
  return (
    <Wrapper direction="column" align="center">
      <Wrapper direction="column" align="center" className={classes["header"]}>
        <Text size="small" type="blue" weight="bold">
          {headerTop}
        </Text>
        <Text size="medium" weight="semi">
          {headerBottom}
        </Text>
      </Wrapper>
      <Wrapper justify="center" className={classes["description"]}>
        <Text weight="regular">{description}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default SubSectionHeader;

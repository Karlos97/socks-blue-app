import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { SubSectionHeaderProps } from "src/types/pages/home/home";
import SubSectionHeaderTop from "src/components/SubSectionHeader/SubSectionHeaderTop";
import classes from "./subSectionHeader.module.scss";

const SubSectionHeader = ({
  headerTop,
  headerBottom,
  description,
}: SubSectionHeaderProps) => {
  return (
    <Wrapper direction="column" align="center">
      <SubSectionHeaderTop headerTop={headerTop} headerBottom={headerBottom} />
      <Wrapper justify="center" className={classes["description"]}>
        <Text weight="regular">{description}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default SubSectionHeader;

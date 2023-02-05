import Icon from "src/atoms/Icons/Icon";
import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { AboutCardProps } from "src/types/pages/home/home";
import classes from "./about.module.scss";

const AboutCard = ({ icon, header, description }: AboutCardProps) => {
  return (
    <div className={classes["about-card"]}>
      <Wrapper direction="column" align="center">
        <Icon icon={icon} size="big" />
        <Text size="small" weight="bold">
          {header}
        </Text>
        <Text weight="regular">{description}</Text>
      </Wrapper>
    </div>
  );
};

export default AboutCard;

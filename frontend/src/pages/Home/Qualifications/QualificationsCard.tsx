import Icon from "src/atoms/Icons/Icon";
import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { QualificationsCardProps } from "src/types/pages/home/home";
import classes from "./qualifications.module.scss";

const QualificationsCard = ({
  icon,
  name,
  date,
  header,
  description,
}: QualificationsCardProps) => {
  return (
    <div className={classes["qualifications-card"]}>
      <Wrapper>
        <Icon
          icon={icon}
          size="medium"
          className={classes["qualifications-card-icon"]}
        />
        <Wrapper direction="column" align="start">
          <Text weight="medium" size="xl">
            {name}
          </Text>
          <Text weight="semi" type="gray" size="s">
            {date}
          </Text>
        </Wrapper>
      </Wrapper>
      <Wrapper direction="column" align="start">
        <Text
          weight="semi"
          size="xxl"
          className={classes["qualifications-card-header"]}
        >
          {header}
        </Text>
        <Text
          weight="regular"
          className={classes["qualifications-description"]}
        >
          {description}
        </Text>
      </Wrapper>
    </div>
  );
};

export default QualificationsCard;

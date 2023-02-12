import Wrapper from "src/atoms/Wrapper/Wrapper";
import SubSectionHeader from "src/components/SubSectionHeader/SubSectionHeader";
import classes from "./qualifications.module.scss";
import QualificationsCard from "./QualificationsCard";

const Qualifications = () => {
  return (
    <div className={classes.qualifications}>
      <SubSectionHeader
        headerTop="Qualification"
        headerBottom="My Experience"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has"
      />

      <Wrapper
        justify="center"
        align="center"
        className={classes["card-wrapper"]}
      >
        <QualificationsCard
          icon="be"
          name="Behancer"
          date="January 2015 - August 2018"
          header="Print & Web Designer"
          description="There are many variations of passages of Lorem Ipsum ailable, but the jority have sufferedThere are many variations of passages of Lorem"
        />
        <QualificationsCard
          icon="ball"
          name="Dribbble"
          date="January 2015 - August 2018"
          header="UI/UX Designer & Developer"
          description="There are many variations of passages of Lorem Ipsum ailable, but the jority have sufferedThere are many variations of passages of Lorem"
        />
      </Wrapper>
      <Wrapper
        justify="center"
        align="center"
        className={classes["card-wrapper"]}
      >
        <QualificationsCard
          icon="be"
          name="Themforest"
          date="January 2015 - August 2018"
          header="Web Designer & Developer"
          description="There are many variations of passages of Lorem Ipsum ailable, but the jority have sufferedThere are many variations of passages of Lorem"
        />
        <QualificationsCard
          icon="be"
          name="Behancer"
          date="January 2015 - August 2018"
          header="Web Designer & Developer"
          description="There are many variations of passages of Lorem Ipsum ailable, but the jority have sufferedThere are many variations of passages of Lorem"
        />
      </Wrapper>
    </div>
  );
};

export default Qualifications;

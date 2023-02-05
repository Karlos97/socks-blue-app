import Wrapper from "src/atoms/Wrapper/Wrapper";
import SubSectionHeader from "src/components/SubSectionHeader/SubSectionHeader";
import classes from "./about.module.scss";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className={classes.about}>
      <SubSectionHeader
        headerTop="What we do"
        headerBottom="Better Services For You"
        description="It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has"
      />

      <Wrapper justify="center">
        <AboutCard
          icon="computer"
          header="Fully Responsive"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
        <AboutCard
          icon="heart"
          header="UI/UX Designer"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
        <AboutCard
          icon="headphones"
          header="24/7 Support"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        />
      </Wrapper>
    </div>
  );
};

export default About;

import { List } from "src/atoms/List/List";
import Text from "src/atoms/Text/Text";
import About from "./About/About";
import classes from "./home.module.scss";
import Qualifications from "./Qualifications/Qualifications";

const Home = () => {
  return (
    <>
      <section id="home" className={classes.home}>
        <div className={classes["home-bg"]} />
        <div className={classes["home-intro"]}>
          <Text size="xxl" weight="semi" className={classes["hello"]}>
            Hello!
          </Text>
          <Text size="large" weight="bold">
            I am
            <span className={classes["text-blue"]}>HRS</span>
            Pathan
          </Text>
          <Text size="large" weight="bold">
            Creative UI/UX Designer
          </Text>
          <List
            size="xl"
            weight="regular"
            items={[
              "1. UI/UX Design",
              "2. Product Design",
              "3. Web Design",
              "4. Front-end Design!",
            ]}
            className={classes.list}
          />
        </div>
      </section>
      <About />
      <Qualifications />
    </>
  );
};

export default Home;

import "./App.scss";
import Icon from "../atoms/Icons/Icon";
import { Button } from "../atoms/Button/Button";
import { List } from "../atoms/List/List";
import { Text } from "../atoms/Text/Text";
import { Layout } from "./Layout/Layout";

const App = () => {
  return (
    <Layout>
      {/* mamy trzy strony
      //home ktore zawiera what we do i qualifications
      //services - sam tekst
      //experience - identyczna jak services
      */}
      <section id="home" className="home">
        <Icon icon="home" />
        <Button variant="outline">Read More</Button>
        <Button variant="blue">Contact Us</Button>
        <Text size="xxl" weight="semi">
          Hello!
        </Text>
        <Text size="large" weight="bold">
          I am
        </Text>
        <Text type="blue" size="large" weight="bold">
          HRS
        </Text>
        <Text size="large" weight="bold">
          Pathan Creative UI/UX Designer
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
        />
        HOME
      </section>
      <section id="experience" className="experience">
        EXPERIENCE
      </section>
      <section id="services" className="services">
        SERVICES
      </section>
      <section id="comments" className="comments">
        comments
      </section>
    </Layout>
  );
};

export default App;

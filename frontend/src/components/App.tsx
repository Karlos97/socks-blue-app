import "./App.scss";
import { Layout } from "./Layout/Layout";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <Layout>
      {/* mamy trzy strony
      //home ktore zawiera what we do i qualifications
      //services - sam tekst
      //experience - identyczna jak services
      */}
      <Home />
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

import "./App.scss";
import Icon from "../atoms/Icons/Icon";

const App = () => {
  return (
    <div className="App">
      {/* mamy trzy strony
      //home ktore zawiera what we do i qualifications
      //services - sam tekst
      //experience - identyczna jak services
      */}
      <section id="home" className="home">
        <Icon icon="home" />
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
    </div>
  );
};

export default App;

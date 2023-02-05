import "./App.scss";
import { Layout } from "./Layout/Layout";
import Experience from "../pages/Experience/Experience";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

const App = () => {
  return (
    <Layout>
      <Home />
      <Experience />
      <Services />
    </Layout>
  );
};

export default App;

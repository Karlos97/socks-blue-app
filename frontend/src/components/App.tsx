import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Experience from "src/pages/Experience/Experience";
import Home from "src/pages/Home/Home";
import Services from "src/pages/Services/Services";
import NotFound from "src/pages/NotFound/NotFound";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

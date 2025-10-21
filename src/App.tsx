import { Routes, Route } from "react-router-dom";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

import Kr from "../src/page/kr/page";
import En from "../src/page/en/page";
import SmoothScrolling from "./components/smooth-scroll";

import "./global.css";

function App() {
  return (
    <SmoothScrolling>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Intro />} /> */}
        <Route path="/" element={<Kr />} />
        <Route path="/en" element={<En />} />
      </Routes>
      <Footer />
    </SmoothScrolling>
  );
}

export default App;

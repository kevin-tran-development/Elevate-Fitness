import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Classes } from "./components/pages/Classes";
import { Cardio } from "./components/pages/Cardio";
import { Strength } from "./components/pages/Strength";
import { MindBody } from "./components/pages/MindBody";
import { Cycling } from "./components/pages/Cycling";
import { Boxing } from "./components/pages/Boxing";
import { MuayThai } from "./components/pages/MuayThai";
import { Schedule } from "./components/pages/Schedule";
import { Membership } from "./components/pages/Membership";
import { Training } from "./components/pages/Training";
import { Blog } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes">
            <Route index element={<Classes />} />
            <Route path="cardio" element={<Cardio />} />
            <Route path="strength" element={<Strength />} />
            <Route path="mind-body" element={<MindBody />} />
            <Route path="cycling" element={<Cycling />} />
            <Route path="boxing" element={<Boxing />} />
            <Route path="muay-thai" element={<MuayThai />} />
          </Route>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

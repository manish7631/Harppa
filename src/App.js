import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Componets/Navbar/Navbar";
import Footer from "./Componets/Footer/Footer";
import About from "./Pages/About/About";
import HowToUse from "./Pages/HowToUse/HowToUse";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { GawaliorTableHeader } from "./Pages/Home/Table/GawaliorTableHeader";
import { EranTableHeader } from "./Pages/Home/Table/EranTable/EranTableHeader";
import EranTableDetails from "./Pages/Home/Table/EranTable/EranTableDetails";
import { BnawaliTableHeader } from "./Pages/Home/Table/BnawaliTable/BnawaliTableHeader";
import { BhirranaTableHeader } from "./Pages/Home/Table/BhirranaTable/BhirranaTableHeader";
import AdvancedSearch from "./Pages/AdvancedSearch/AdvancedSearch";
import { ChanhujoDaroTableHeader } from "./Pages/Home/Table/ChanhujoDaroTable/ChanhujoDaroHeader";
import { BnglTableHeader } from "./Pages/Home/Table/BNGLTABLE/BnglTableHeader";
import ScrollToTop from "./Hoc/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/howtouse" element={<HowToUse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/gawaliortablepage" element={<GawaliorTableHeader />} />
        <Route path="/erantablepage" element={<EranTableHeader />} />
        <Route
          path="/erantabledetails/:EranId"
          element={<EranTableDetails />}
        />
        <Route path="/bnawalitablepage" element={<BnawaliTableHeader />} />
        <Route path="/bhirranatablepage" element={<BhirranaTableHeader />} />
        <Route
          path="/chanhujotablepage"
          element={<ChanhujoDaroTableHeader />}
        />
        <Route path="/bngltablepage" element={<BnglTableHeader />} />
        <Route path="/search" element={<AdvancedSearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

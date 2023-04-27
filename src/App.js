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
import AdvancedSearch from "./Pages/AdvancedSearch/AdvancedSearch";
import ScrollToTop from "./Hoc/ScrollToTop";
import { TableHeader } from "./Pages/Home/Table/TableHeader";
import { useSelector } from "react-redux";

function App() {
  //---------------------------Data Getting Here-------------------------------------------------

  const {
    isLoading,
    IMPLImageData,
    BNGLImageData,
    BnawalImageData,
    BhirranaImageData,
    ChanhujoDaroImageData,
    DholaviraImageData,
    FarmanaImageData,
    HarappaImageData,
    KalibanganImageData,
    KanmerImageData,
    KhirsaraImageData,
    LothalImageData,
    MohenjoDaroImageData,
    RakhigarhiImageData,
    MISCImageData,
    POTImageData,
    RODImageData,
    SEALImageData,
    TABImageData,
    TAGImageData,
  } = useSelector((state) => state.ApplicationReducer);

  //-----------------------------Banawali Obj Here----------------------------------
  const BnawaliObj = {
    title: "Bnawali Data",
    data: BnawalImageData,
    isLoading: isLoading,
  };

  //-----------------------------Bhirrana Obj Here----------------------------------
  const BhirranaObj = {
    title: "Bhirrana Data",
    data: BhirranaImageData,
    isLoading: isLoading,
  };

  //-----------------------------Chanhu Obj Here----------------------------------
  const ChanhuObj = {
    title: "Chanhujo-daro Data",
    data: ChanhujoDaroImageData,
    isLoading: isLoading,
  };

  //-----------------------------Dholavira Obj Here----------------------------------
  const DholaviraObj = {
    title: "Dholavira Data",
    data: DholaviraImageData,
    isLoading: isLoading,
  };
  //-----------------------------Farmana Obj Here----------------------------------
  const FarmanaObj = {
    title: "Farmana Data",
    data: FarmanaImageData,
    isLoading: isLoading,
  };
  //-----------------------------Harappa Obj Here----------------------------------
  const HarappaObj = {
    title: "Harappa Data",
    data: HarappaImageData,
    isLoading: isLoading,
  };
  //-----------------------------Kalibangan Obj Here----------------------------------
  const KalibanganObj = {
    title: "Kalibangan Data",
    data: KalibanganImageData,
    isLoading: isLoading,
  };
  //-----------------------------Kanmer Obj Here----------------------------------
  const KanmerObj = {
    title: "Kanmer Data",
    data: KanmerImageData,
    isLoading: isLoading,
  };
  //-----------------------------Khirsara Obj Here----------------------------------
  const KhirsaraObj = {
    title: "Khirsara Data",
    data: KhirsaraImageData,
    isLoading: isLoading,
  };
  //-----------------------------Lothal Obj Here----------------------------------
  const LothalObj = {
    title: "Lothal Data",
    data: LothalImageData,
    isLoading: isLoading,
  };
  //-----------------------------MohenjoDaro Obj Here----------------------------------
  const MohenjoDaroObj = {
    title: "Mohenjo-daro Data",
    data: MohenjoDaroImageData,
    isLoading: isLoading,
  };

  //-----------------------------Rakhigarhi Obj Here----------------------------------
  const RakhigarhiObj = {
    title: "Rakhigarhi Data",
    data: RakhigarhiImageData,
    isLoading: isLoading,
  };

  //-----------------------------Impl Obj Here----------------------------------

  const ImplObj = {
    title: "IMPL Data",
    data: IMPLImageData,
    isLoading: isLoading,
  };

  //-----------------------------Bngl Obj Here----------------------------------
  const BnglObj = {
    title: "BNGL Data",
    data: BNGLImageData,
    isLoading: isLoading,
  };
  //-----------------------------TAG Obj Here----------------------------------
  const TAGObj = {
    title: "TAG Data",
    data: TAGImageData,
    isLoading: isLoading,
  };
  //-----------------------------TAB Obj Here----------------------------------
  const TABObj = {
    title: "TAB Data",
    data: TABImageData,
    isLoading: isLoading,
  };
  //-----------------------------SEAL Obj Here----------------------------------
  const SEALObj = {
    title: "SEAL Data",
    data: SEALImageData,
    isLoading: isLoading,
  };
  //-----------------------------ROD Obj Here----------------------------------
  const RODObj = {
    title: "ROD Data",
    data: RODImageData,
    isLoading: isLoading,
  };
  //-----------------------------POT Obj Here----------------------------------
  const POTObj = {
    title: "POT Data",
    data: POTImageData,
    isLoading: isLoading,
  };
  //-----------------------------MISC Obj Here----------------------------------
  const MISCObj = {
    title: "MISC Data",
    data: MISCImageData,
    isLoading: isLoading,
  };
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

        <Route
          path="/bnawalitablepage"
          element={<TableHeader data={BnawaliObj} />}
        />
        <Route
          path="/bhirranatablepage"
          element={<TableHeader data={BhirranaObj} />}
        />
        <Route
          path="/chanhujotablepage"
          element={<TableHeader data={ChanhuObj} />}
        />
        <Route
          path="/dholaviratablepage"
          element={<TableHeader data={DholaviraObj} />}
        />
        <Route
          path="/farmanatablepage"
          element={<TableHeader data={FarmanaObj} />}
        />
        <Route
          path="/harappatablepage"
          element={<TableHeader data={HarappaObj} />}
        />
        <Route
          path="/kalibangantablepage"
          element={<TableHeader data={KalibanganObj} />}
        />
        <Route
          path="/kanmertablepage"
          element={<TableHeader data={KanmerObj} />}
        />
        <Route
          path="/khirsaratablepage"
          element={<TableHeader data={KhirsaraObj} />}
        />
        <Route
          path="/lothaltablepage"
          element={<TableHeader data={LothalObj} />}
        />
        <Route
          path="/mohenjodarotablepage"
          element={<TableHeader data={MohenjoDaroObj} />}
        />
        <Route
          path="/rakhigarhitablepage"
          element={<TableHeader data={RakhigarhiObj} />}
        />
        <Route path="/impltablepage" element={<TableHeader data={ImplObj} />} />
        <Route path="/bngltablepage" element={<TableHeader data={BnglObj} />} />
        <Route path="/misctablepage" element={<TableHeader data={MISCObj} />} />
        <Route
          path="/potterytablepage"
          element={<TableHeader data={POTObj} />}
        />
        <Route path="/rodtablepage" element={<TableHeader data={RODObj} />} />
        <Route path="/sealtablepage" element={<TableHeader data={SEALObj} />} />
        <Route
          path="/tablettablepage"
          element={<TableHeader data={TABObj} />}
        />
        <Route path="/tagtablepage" element={<TableHeader data={TAGObj} />} />

        <Route path="/search" element={<AdvancedSearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

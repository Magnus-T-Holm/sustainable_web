import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

// ------------------------- Univesal -------------------------
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"
import UpdateTitle from "./components/UpdateTitle";

// ------------------------- Pages -------------------------
import Frontpage from "./pages/Frontpage";
import Sustainability from "./pages/Sustainability";
import Accessibility from "./pages/Accessibility";


import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <UpdateTitle />
        <Header />
        <Routes>
          <Route path="/sustainable-web/" element={<Frontpage />} />
          <Route path="/sustainable-web/sustainability" element={<Sustainability />} />
          <Route path="/sustainable-web/accessibility" element={<Accessibility />} />
          <Route path="/sustainable-web/*" element={<Navigate to="/sustainable-web/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App

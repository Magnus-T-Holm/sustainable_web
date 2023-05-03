import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

// ------------------------- Univesal -------------------------
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop"
import UpdateTitle from "./components/UpdateTitle";

// ------------------------- Pages -------------------------
import Frontpage from "./pages/Frontpage";
import SustainabilityAccessibility from "./pages/SustainabilityAccessibility";
import Companies from "./pages/Companies";


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
          <Route path="/sustainable-web/sustainability-og-accessibility" element={<SustainabilityAccessibility />} />
          <Route path="/sustainable-web/companies" element={<Companies />} />
          <Route path="/sustainable-web/*" element={<Navigate to="/sustainable-web/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

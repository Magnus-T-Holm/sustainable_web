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
          <Route path="/sustainable-web/*" element={<Navigate to="/sustainable-web/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App

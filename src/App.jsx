import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Services from "./services";
import Jobs from "./jobs.jsx";
import Success from "./success.jsx";
import Pricing from "./pricing.jsx";

function App() {
  return (
    <Router basename="/growvy_react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/success" element={<Success />} />
         <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}
export default App;

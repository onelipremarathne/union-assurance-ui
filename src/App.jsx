import Landing1 from "./pages/Landing1/Landing1";
import Landing2 from "./pages/Landing2/Landing2";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details1 from "./pages/Details1/Details1";
import Details2 from "./pages/Details2/Details2";
import Details3 from "./pages/Details3/Details3";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Landing1 />} />
      <Route path="/landing2" element={<Landing2 />} />
      <Route path="/details1" element={<Details1 />} />
      <Route path="/details2" element={<Details2 />} />
      <Route path="/details3" element={<Details3 />} />
    </Routes>
  );
}

export default App;

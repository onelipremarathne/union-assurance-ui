import Landing1 from "./pages/Landing1/Landing1";
import Landing2 from "./pages/Landing2/Landing2";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Details1 from "./pages/Details1/Details1";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Landing1 />} />
      <Route path="/landing2" element={<Landing2 />} />
      <Route path="/details1" element={<Details1/>}/>
    </Routes>
  );
}

export default App;

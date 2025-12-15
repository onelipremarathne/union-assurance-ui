import Landing1 from "./pages/Landing1/Landing1";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="*" element={<Landing1 />} />
    </Routes>
  );
}

export default App;

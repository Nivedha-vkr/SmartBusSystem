import { Routes, Route } from "react-router-dom";
import SearchBusPage from "./SearchBusPage";
import ResultsPage from "./ResultsPages";
import BusTrackingPage from "./pages/BusTrackingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchBusPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/track-bus" element={<BusTrackingPage />} />
    </Routes>

  );
}

export default App;
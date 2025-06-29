import { BrowserRouter, Route, Routes } from "react-router";
import { AnalyticsPage, GeneratorPage, HistoryPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AnalyticsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

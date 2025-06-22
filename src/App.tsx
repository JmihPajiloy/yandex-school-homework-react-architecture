import { BrowserRouter, Route, Routes } from "react-router";
import { AnalyticsPage, GeneratorPage, HistoryPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AnalyticsPage/>} />
        <Route path="/generator" element={<GeneratorPage/>} />
        <Route path="/history" element={<HistoryPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

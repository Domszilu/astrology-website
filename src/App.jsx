import { Route, Router, Routes } from "react-router";
import GlobalStyles from "./components/styles/Global";
import Result from "./pages/Result";
import { BirthProvider } from "./context/BirthContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CreateChart from "./pages/CreateChart";

function App() {
  return (
    <BirthProvider>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-chart" element={<CreateChart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/result" element={<Result />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BirthProvider>
  );
}

export default App;

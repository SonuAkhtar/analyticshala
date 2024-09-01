import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage/Homepage";
import Courses from "./pages/Courses/Courses";
import Team from "./pages/Team/Team";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

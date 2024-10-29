// import CSS
import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import Homepage from "./pages/Homepage/Homepage";
import Courses from "./pages/Courses/Courses";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

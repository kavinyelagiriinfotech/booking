import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookingpage from "./components/Bookingpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/booking" element={<Bookingpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

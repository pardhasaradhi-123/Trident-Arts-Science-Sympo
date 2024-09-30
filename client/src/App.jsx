import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import Home from "./pages/Home";

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

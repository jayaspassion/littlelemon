import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Specials from "./components/Specials";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/littlelemon" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

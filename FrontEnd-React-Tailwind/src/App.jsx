import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/register-login/Login";
import Register from "./components/register-login/Register";
import Rentals from "./components/property/Rentals";
import Footer from "./components/footer/Footer";
import User from "./components/user/User";
import PropertyDetails from "./components/property/PropertyDetails";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/rentals/:id" element={<PropertyDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import { Hero } from "./pages/hero/Hero";
import { Navbar } from "./component/navbar/Navbar";
import { Login } from "./pages/login/login";
import { Footer } from "./component/footer/footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;

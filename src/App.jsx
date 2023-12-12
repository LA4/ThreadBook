import { Routes, Route } from "react-router-dom";
import { Hero } from "./pages/hero/Hero";
import { Navbar } from "./component/navbar/Navbar";
import { Login } from "./pages/login/login";
import { Footer } from "./component/footer/footer";
import { ErrorPage } from "./pages/errors/ErrorPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;

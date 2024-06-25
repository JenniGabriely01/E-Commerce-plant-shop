import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from './components/header';
import { Home } from './pages/home';
import Footer from "./components/footer";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About/About";

import Home from "./pages/Home"


const App = () => {
  return (
    <div className="flex-col min-h-screen"> 
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

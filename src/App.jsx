import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

import Home from "./pages/Home";
import About from "./pages/About";
import Board from "./pages/Board";
import Stories from "./pages/Stories";
import Support from "./pages/Support";

function App() {
  const header = {
    position: "absolute",
    backgroundColor: "bg-transparent shadow-none",
    style: {
      display: "flex",
      spacing: "justify-between",
      color: "text-white",
      padding: "py-4 px-4 md:px-12",
    },
  };

  const footer = {
    style: {
      backgroundColor: "bg-accent",
      padding: "py-10",
    },
    container: {
      display: "flex",
      flexDirection: "flex-col md:flex-row",
      center: "items-center",
      spacing: "justify-between space-y-6 md:space-y-0",
      padding: "px-4",
      margin: "mx-auto",
    },
  };

  return (
    <Router>
      <Header header={header} />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer footer={footer} />
      <MusicPlayer />
    </Router>
  );
}

export default App;

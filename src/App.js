import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
    </Routes>

  </Router>
  </>
  );
}

export default App;

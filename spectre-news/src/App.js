import "./App.css";
import { Route, Routes, Router} from "react-router-dom";
import News from "./pages/News"
import Contact from "./pages/Contact"
import Home from "./pages/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/news" element={<News></News>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
  );
}

export default App;

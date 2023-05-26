import "./App.css";
import { Route, Routes, Router} from "react-router-dom";
import Main from "./pages/Main"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
  );
}

export default App;

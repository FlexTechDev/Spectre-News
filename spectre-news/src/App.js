import "./App.css";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignIn from "./SignIn"; // import SignIn
import SignUp from "./SignUp"; // import SignUp
import Account from "./Account"; // import Account
import AuthProvider from './AuthProvider'; // import AuthProvider without braces

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<SignIn />}></Route> {/* add route for SignIn */}
        <Route path="/signup" element={<SignUp />}></Route> {/* add route for SignUp */}
        <Route path="/account" element={<Account />}></Route> {/* add route for Account */}
      </Routes>
    </AuthProvider>
  );
}

export default App;

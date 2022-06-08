import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Index";
import Intro from "./components/Intro/Index";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/page2" element={<Intro />}></Route>
        </Routes>
    );
}

export default App;

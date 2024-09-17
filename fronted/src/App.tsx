import { Route, Router, Routes } from "react-router";
import "./App.css";
import Header from "./componets/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <><Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import "./App.css";
import Section from "./components/Section";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Section />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
    );
}
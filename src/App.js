import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Red from "./Components/Red"
import Pink from "./Components/Pink"
import Purple from "./Components/Purple"
import Indigo from "./Components/Indigo"
import Blue from "./Components/Blue"
import Cyan from "./Components/Cyan"
import Teal from "./Components/Teal"
import Green from "./Components/Green"
import Lime from "./Components/Lime"
import Yellow from "./Components/Yellow"
import Amber from "./Components/Amber"
import Orange from "./Components/Orange"
import { Toaster } from 'react-hot-toast';
import "./Style/style.css"

function App() {
  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/red" element={<Red/>} />
            <Route path="/pink" element={<Pink/>} />
            <Route path="/purple" element={<Purple/>} />
            <Route path="/indigo" element={<Indigo/>} />
            <Route path="/blue" element={<Blue/>} />
            <Route path="/cyan" element={<Cyan/>} />
            <Route path="/teal" element={<Teal/>} />
            <Route path="/green" element={<Green/>} />
            <Route path="/lime" element={<Lime/>} />
            <Route path="/yellow" element={<Yellow/>} />
            <Route path="/amber" element={<Amber/>} />
            <Route path="/orange" element={<Orange/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

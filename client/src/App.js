import "./App.css";
import Footer from "./components/Footer";
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";
import ThnakYou from "./Pages/ThankYou";


function App() {
  return (
     <> 
      <NavBar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/thankyou" element={<ThnakYou/>}/>
      </Routes>
      <Footer/>
      </>
  );
}

export default App;

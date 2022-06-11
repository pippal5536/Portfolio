import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import ContactMe from './Pages/ContactMe/ContactMe';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact-me" element={<ContactMe/>}></Route>
        <Route path="/about-me" element={<About/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

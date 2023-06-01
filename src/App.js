import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

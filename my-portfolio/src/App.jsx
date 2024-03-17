import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';
import { ScrollProvider } from "./components/ScrollContext";
// import { Switch } from '@headlessui/react';
import Skills from './components/Skills';


{/* All the compontents are called here amd route to
different parts of the page are done here*/}

const App = () => {
  return (
    <Router>
      <ScrollProvider>
        <div className=' bg-purple font-sans'>
          <Navbar /> {/* Will include the navber in every page */}
          <Home sectionId='home' />
          <About sectionId='about' />
          <Portfolio sectionId='portfolio' />
          <Skills sectionId='skills' />
          <ContactMe />
        </div>
      </ScrollProvider>
    </Router>
  )
}

export default App;

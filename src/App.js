
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './reuseable/contact/Contact';
import Experience from './reuseable/experience/Experience';
import Stack from './reuseable/stack/Stack';
import Projects from './reuseable/projects/Projects';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element=<Home/>/>
          <Route path='/contact' element=<Contact/>/>
          <Route path='/experience' element=<Experience/>/>
          <Route path='/stacks' element=<Stack/>/>
          <Route path='/projects' element=<Projects/>/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

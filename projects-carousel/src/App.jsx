import { Routes, Route, Link } from 'react-router-dom';
import { projects } from './data/projects.js';

import Header from './components/Header.jsx';
// import Carousel from './components/Carousel.jsx';
// import ProjectCard from './components/ProjectCard.jsx';
// import ProjectDetail from './components/ProjectDetail.jsx';

function App() {
  return(
      <div className="bg-red-500 text-white">
      Tailwind is working!
      <Header/>
    </div>
  )
}

export default App;

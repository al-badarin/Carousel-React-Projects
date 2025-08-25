import { Routes, Route, Link } from 'react-router-dom';
import Carousel from './components/Carousel.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import { projects } from './data/projects.js';

function App() {
  return <Carousel />;
}

export default App;

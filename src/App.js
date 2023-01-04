import logo from './logo.svg';
import './App.css';
import Main from './components/landingPage'
import Menu from './components/menu'
import Book from './components/book'
import About from './components/about'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
  
      <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/book-a-table" element={<Book/>} />
                <Route path="/about" element={<About/>} />
                 </Routes>
        </Router>
   
  );
}

export default App;

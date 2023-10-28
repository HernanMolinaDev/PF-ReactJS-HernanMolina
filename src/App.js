import NavBar from './components/NavBar';
import Home from './components/Home';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/css/style.css';

function App() {
 const [selectedCategory, setSelectedCategory] = useState('Todos');
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <NavBar setSelectedCategory={setSelectedCategory} />
            <div className="container">
              <Home selectCategory={selectedCategory} />
            </div>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);
}
export default App;

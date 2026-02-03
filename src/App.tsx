import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import HotNewsPage from '@/pages/HotNews';
import Tools from '@/pages/Tools';
import CategoryPage from '@/pages/CategoryPage';
import ToolDetail from '@/pages/ToolDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tools />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotnews" element={<HotNewsPage />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/zaixiangongju" element={<Tools />} />
        <Route path="/favorites/:id" element={<CategoryPage />} />
        <Route path="/sites/:id" element={<ToolDetail />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

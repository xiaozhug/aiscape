import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import SearchSection from '@/sections/SearchSection';
import HotNews from '@/sections/HotNews';
import AIAssistant from '@/sections/AIAssistant';
import AITools from '@/sections/AITools';
import AICommunity from '@/sections/AICommunity';
import Resources from '@/sections/Resources';
import CreativeTools from '@/sections/CreativeTools';
import MediaOps from '@/sections/MediaOps';
import IndustryCircle from '@/sections/IndustryCircle';
import Login from '@/pages/Login';
import HotNewsPage from '@/pages/HotNews';
import Tools from '@/pages/Tools';
import CategoryPage from '@/pages/CategoryPage';
import ToolDetail from '@/pages/ToolDetail';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <SearchSection />
        <HotNews />
        <AIAssistant />
        <AITools />
        <AICommunity />
        <Resources />
        <CreativeTools />
        <MediaOps />
        <IndustryCircle />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import Videos from './pages/Videos';
import News from './pages/News';
import SchoolTeam from './pages/SchoolTeam';
import AdminDashboard from './pages/admin/AdminDashboard';
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdmin && <Navbar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/category" element={<Category />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/premium" element={<Videos />} />
          <Route path="/maktab-jamoasi" element={<SchoolTeam />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

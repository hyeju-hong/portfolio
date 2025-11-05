import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import './styles/variables.css';
import './styles/global.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Illust from './pages/Illust';
import IllustDetail from './components/illust/IllustDetail';
import Cartoon from './pages/Cartoon';
import CartoonDetail from './components/cartoon/CartoonDetail';
import Fiction from './pages/Fiction';
import FictionDetail from './components/fiction/FictionDetail';
import Ranking from './pages/Ranking';
import Contest from './pages/Contest';
import Heart from './pages/Heart';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="illust" element={<Illust />} />
          <Route path="illust/:id" element={<IllustDetail />} />
          <Route path="cartoon" element={<Cartoon />} />
          <Route path="cartoon/:id" element={<CartoonDetail />} />
          <Route path="fiction" element={<Fiction />} />
          <Route path="fiction/:id" element={<FictionDetail />} />
          <Route path="rank" element={<Ranking />} />
          <Route path="contest" element={<Contest />} />
          <Route path="heart" element={<Heart />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

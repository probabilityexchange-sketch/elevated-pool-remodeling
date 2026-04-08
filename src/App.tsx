import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ShowroomLayout from './components/showroom/ShowroomLayout';
import TileShowroom from './components/showroom/TileShowroom';
import PlasterShowroom from './components/showroom/PlasterShowroom';
import DeckingShowroom from './components/showroom/DeckingShowroom';
import EquipmentShowroom from './components/showroom/EquipmentShowroom';
import CopingShowroom from './components/showroom/CopingShowroom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-surface">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<ShowroomLayout />}>
            <Route path="tile" element={<TileShowroom />} />
            <Route path="plaster" element={<PlasterShowroom />} />
            <Route path="decking" element={<DeckingShowroom />} />
            <Route path="equipment" element={<EquipmentShowroom />} />
            <Route path="coping" element={<CopingShowroom />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

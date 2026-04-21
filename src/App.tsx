import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'
import LocationPage from './pages/LocationPage'
import ShowroomLayout from './components/showroom/ShowroomLayout'
import TileShowroom from './components/showroom/TileShowroom'
import PlasterShowroom from './components/showroom/PlasterShowroom'
import DeckingShowroom from './components/showroom/DeckingShowroom'
import EquipmentShowroom from './components/showroom/EquipmentShowroom'
import CopingShowroom from './components/showroom/CopingShowroom'
import StickyCallButton from './components/StickyCallButton'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-surface">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pool-remodeling/:suburb" element={<LocationPage />} />
            <Route path="/showroom" element={<ShowroomLayout />}>
              <Route index element={<Navigate to="tile" replace />} />
              <Route path="tile" element={<TileShowroom />} />
              <Route path="plaster" element={<PlasterShowroom />} />
              <Route path="decking" element={<DeckingShowroom />} />
              <Route path="equipment" element={<EquipmentShowroom />} />
              <Route path="coping" element={<CopingShowroom />} />
            </Route>
          </Routes>
          <StickyCallButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Promotions from './pages/Promotions'
import Merchandising from './pages/Merchandising'
import Events from './pages/Events'
import Logistics from './pages/Logistics'
import ContactUs from './pages/ContactUs'
import CardDetail from './components/CardDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/merchandising" element={<Merchandising />} />
            <Route path="/events" element={<Events />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/promotions/:cardName" element={<CardDetail category="promotions" />} />
            <Route path="/merchandising/:cardName" element={<CardDetail category="merchandising" />} />
            <Route path="/events/:cardName" element={<CardDetail category="events" />} />
            <Route path="/logistics/:cardName" element={<CardDetail category="logistics" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

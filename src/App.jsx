import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/modern-css-reset/dist/reset.min.css'
import './App.css'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function App() {
  //const greeting = 'Tjenare världen'
  return (
    <BrowserRouter>
      <Navbar />
      <main className='container section flow'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
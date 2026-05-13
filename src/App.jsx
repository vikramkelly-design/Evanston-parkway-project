import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Chemistry from './pages/Chemistry'
import Idea from './pages/Idea'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/idea" element={<Idea />} />
      </Routes>
    </BrowserRouter>
  )
}

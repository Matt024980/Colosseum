import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DiscoverView from './view/Discover'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DiscoverView />} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

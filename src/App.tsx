import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ModelPage from './pages/ModelPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/model/:modelId" element={<ModelPage />} />
          </Routes>
        </main>
        <footer className="hairline-x mt-32 py-6 px-8 flex items-center justify-between text-[11px] mono uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)]">
          <span>AI UI Arena · Vol. 01</span>
          <span>An exhibition of model-designed pages.</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

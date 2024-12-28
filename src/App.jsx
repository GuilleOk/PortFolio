import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import About from './pages/About'
import Projects from './pages/Projects'
import LearningPath from './pages/LearningPath'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Dashboard />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/my_learning_path' element={<LearningPath />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

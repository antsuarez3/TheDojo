import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// styles
import './App.css'

// pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/create' element={<Create />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/project' element={<Project />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App

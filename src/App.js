import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

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
  const { user, authIsReady } = useAuthContext()

  return (
    <>
      <div className='App'>
        {authIsReady && (
          <Router>
            <Sidebar />
            <div className='container'>
              <Navbar />
              <Routes>
                <Route
                  path='/'
                  element={user ? <Dashboard /> : <Navigate to='login' />}
                />
                <Route
                  path='/create'
                  element={!user ? <Login /> : <Create />}
                />
                <Route
                  path='/project/:id'
                  element={!user ? <Login /> : <Project />}
                />
                <Route
                  path='/login'
                  element={!user ? <Login /> : <Navigate to='/' />}
                />
                <Route
                  path='/signup'
                  element={!user ? <Signup /> : <Navigate to='/' />}
                />
              </Routes>
            </div>
          </Router>
        )}
      </div>
    </>
  )
}

export default App

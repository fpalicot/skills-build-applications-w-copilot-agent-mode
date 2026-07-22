import { Link, Routes, Route } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-6 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted">
                A modern multi-tier fitness tracking experience for teams, workouts,
                and progress insights.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link className="btn btn-primary" to="/users">
                  View users
                </Link>
                <Link className="btn btn-outline-secondary" to="/activities">
                  View activities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h2 className="h4 fw-semibold mb-3">Built for the full stack</h2>
              <p className="text-muted mb-0">
                This React 19 frontend now connects to a Node.js and Express backend
                with MongoDB support for users, teams, activities, leaderboard, and
                workout data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit
          </Link>
          <div className="d-flex gap-2">
            <Link className="nav-link text-white" to="/users">Users</Link>
            <Link className="nav-link text-white" to="/teams">Teams</Link>
            <Link className="nav-link text-white" to="/activities">Activities</Link>
            <Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link>
            <Link className="nav-link text-white" to="/workouts">Workouts</Link>
            <Link className="nav-link text-white" to="/about">About</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

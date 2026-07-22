import { Link, Routes, Route } from 'react-router-dom'

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
                <Link className="btn btn-primary" to="/">
                  Dashboard
                </Link>
                <Link className="btn btn-outline-secondary" to="/about">
                  About the app
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
                with MongoDB support for future user, team, and activity features.
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
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <p className="text-uppercase text-primary fw-semibold">OctoFit Tracker</p>
              <h1 className="display-5 fw-bold mb-3">Track workouts, teams, and progress in one place.</h1>
              <p className="lead text-muted mb-4">
                This modern multi-tier app now has a React 19 frontend and an Express + TypeScript backend ready for expansion.
              </p>
              <div className="d-flex gap-3">
                <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">
                  Check API health
                </a>
                <span className="badge text-bg-light text-muted align-self-center">Ports: 5173 / 8000 / 27017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

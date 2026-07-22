import { useEffect, useState } from 'react';
import { fetchCollection } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadWorkouts() {
      try {
        const data = await fetchCollection('workouts');
        if (isMounted) {
          setWorkouts(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load workouts.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadWorkouts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div className="container py-4">Loading workouts...</div>;
  if (error) return <div className="container py-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="h4 fw-semibold mb-3">Workouts</h2>
      <div className="row g-3">
        {workouts.map((workout) => (
          <div className="col-md-6" key={workout._id || workout.id || workout.title}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h3 className="h6 fw-bold mb-2">{workout.title}</h3>
                <p className="mb-1 text-muted">Difficulty: {workout.difficulty}</p>
                <p className="mb-0">Duration: {workout.duration} min</p>
                <p className="mb-0">Focus: {workout.focus}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

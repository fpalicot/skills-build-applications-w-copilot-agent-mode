import { useEffect, useState } from 'react';
import { fetchCollection } from '../utils/api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadActivities() {
      try {
        const data = await fetchCollection('activities');
        if (isMounted) {
          setActivities(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load activities.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadActivities();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div className="container py-4">Loading activities...</div>;
  if (error) return <div className="container py-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="h4 fw-semibold mb-3">Activities</h2>
      <div className="row g-3">
        {activities.map((activity) => (
          <div className="col-md-6" key={activity._id || activity.id || activity.type}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h3 className="h6 fw-bold mb-2">{activity.type}</h3>
                <p className="mb-1 text-muted">Duration: {activity.duration} min</p>
                <p className="mb-0">Calories: {activity.calories}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

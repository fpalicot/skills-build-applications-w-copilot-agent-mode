import { useEffect, useState } from 'react';
import { fetchCollection } from '../utils/api';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadLeaderboard() {
      try {
        const data = await fetchCollection('leaderboard');
        if (isMounted) {
          setEntries(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load leaderboard.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadLeaderboard();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div className="container py-4">Loading leaderboard...</div>;
  if (error) return <div className="container py-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="h4 fw-semibold mb-3">Leaderboard</h2>
      <div className="row g-3">
        {entries.map((entry) => (
          <div className="col-md-6" key={entry._id || entry.id || entry.name}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h3 className="h6 fw-bold mb-2">{entry.name}</h3>
                <p className="mb-1 text-muted">Points: {entry.points}</p>
                <p className="mb-0">Streak: {entry.streak}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

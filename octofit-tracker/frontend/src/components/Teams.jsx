import { useEffect, useState } from 'react';
import { fetchCollection } from '../utils/api';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadTeams() {
      try {
        const data = await fetchCollection('teams');
        if (isMounted) {
          setTeams(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load teams.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadTeams();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div className="container py-4">Loading teams...</div>;
  if (error) return <div className="container py-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="h4 fw-semibold mb-3">Teams</h2>
      <div className="row g-3">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id || team.id || team.name}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h3 className="h6 fw-bold mb-2">{team.name}</h3>
                <p className="mb-1 text-muted">Sport: {team.sport}</p>
                <p className="mb-0">Members: {team.members}</p>
                <p className="mb-0">Captain: {team.captain}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

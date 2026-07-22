import { useEffect, useState } from 'react';
import { fetchCollection } from '../utils/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadUsers() {
      try {
        const data = await fetchCollection('users');
        if (isMounted) {
          setUsers(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load users.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div className="container py-4">Loading users...</div>;
  if (error) return <div className="container py-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="h4 fw-semibold mb-3">Users</h2>
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-6" key={user._id || user.id || `${user.name}-${user.email}`}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h3 className="h6 fw-bold mb-2">{user.name}</h3>
                <p className="mb-1 text-muted">{user.email}</p>
                <p className="mb-0">Role: {user.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

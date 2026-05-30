import axios from "axios";

function ApplicationTable({ applications, fetchApplications }) {
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:3001/api/application/${id}`, {
        status: newStatus,
      });
      fetchApplications();
    } catch (error) {
      console.error("Error updating application:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/applications/${id}`);
      fetchApplications();
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  return (
    <section className="card">
      <h2>Applications List</h2>

      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td>{app.company}</td>
                <td>{app.role}</td>
                <td>
                  <select
                    value={app.status}
                    onChange={(e) =>
                      handleStatusChange(app._id, e.target.value)
                    }
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Offer">Offer</option>
                  </select>
                </td>
                <td>
                  {app.appliedDate
                    ? new Date(app.appliedDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(app._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default ApplicationTable;
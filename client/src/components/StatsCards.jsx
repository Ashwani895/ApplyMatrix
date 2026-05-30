import "./StatsCards.css";

function StatsCards({ applications = [] }) {
  const totalApplications = applications.length;

  const interviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const offers = applications.filter(
    (app) => app.status === "Offer"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
    <div className="stats-container">

      <div className="stat-card total">
        <h3>{totalApplications}</h3>
        <p>Total Applications</p>
      </div>

      <div className="stat-card interview">
        <h3>{interviews}</h3>
        <p>Interviews</p>
      </div>

      <div className="stat-card offer">
        <h3>{offers}</h3>
        <p>Offers</p>
      </div>

      <div className="stat-card rejected">
        <h3>{rejected}</h3>
        <p>Rejected</p>
      </div>

    </div>
  );
}

export default StatsCards;

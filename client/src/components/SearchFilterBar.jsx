import "./SearchFilterBar.css";

function SearchFilterBar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="filter-bar">
      <div className="filter-group search-box">
        <input
          type="text"
          placeholder="Search by company or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>
      </div>

      <div className="filter-group">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="latest">Sort: Latest</option>
          <option value="oldest">Sort: Oldest</option>
          <option value="company">Sort: Company A-Z</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilterBar;


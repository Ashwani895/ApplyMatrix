import MyLinks from "./components/MyLinks";

function Dashboard({
  applications,
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
  sortOrder,
  setSortOrder,
  filteredApplications,
  fetchApplications,
}) {
  return (
    <>
      <Header />
      <StatsCards applications={applications} />
      <MyLinks />
      <SearchFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <AddApplicationForm fetchApplications={fetchApplications} />
      <ApplicationTable
        applications={filteredApplications}
        fetchApplications={fetchApplications}
      />
    </>
  );
}

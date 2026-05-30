import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import SearchFilterBar from "./components/SearchFilterBar";
import AddApplicationForm from "./components/AddApplicationForm";
import ApplicationTable from "./components/ApplicationTable";

import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyLinks from "./components/MyLinks";
import EmailTemplate from "./components/EmailTemplate";



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
 <EmailTemplate />
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

function App() {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOrder, setSortOrder] = useState("latest");

  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/application");
      setApplications(res.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const filteredApplications = applications
    .filter((app) =>
      app.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((app) =>
      filterStatus === "All" ? true : app.status === filterStatus
    )
    .sort((a, b) => {
      if (sortOrder === "latest") {
        return new Date(b.date) - new Date(a.date);
      }
      if (sortOrder === "oldest") {
        return new Date(a.date) - new Date(b.date);
      }
      if (sortOrder === "company") {
        return a.company.localeCompare(b.company);
      }
      return 0;
    });

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              applications={applications}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              filteredApplications={filteredApplications}
              fetchApplications={fetchApplications}
            />
          }
        />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

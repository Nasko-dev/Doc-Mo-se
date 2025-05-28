import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AdminPanel from "./components/admin/AdminPanel";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setAdminOpen={setAdminOpen}
      />

      <div className="flex">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <MainContent
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <AdminPanel isOpen={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  );
}

export default App;

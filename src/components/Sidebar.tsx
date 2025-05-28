interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigation = [
  {
    title: "Vue d'ensemble",
    items: [
      { name: "Introduction", id: "overview" },
      { name: "Architecture", id: "architecture" },
      { name: "Technologies", id: "technologies" },
    ],
  },
  {
    title: "Applications",
    items: [
      { name: "Entrepôt", id: "entrepot" },
      { name: "Auto Pièces", id: "auto-pieces" },
      { name: "Livraison", id: "livraison" },
      { name: "Dashboard Livraison", id: "dashboard" },
    ],
  },
  {
    title: "Intégrations",
    items: [
      { name: "API Livraison", id: "api-livraison" },
      { name: "Firebase", id: "firebase" },
      { name: "Strapi Backend", id: "strapi" },
    ],
  },
  {
    title: "Changelog",
    items: [
      { name: "Dernières mises à jour", id: "changelog" },
      { name: "Nouvelles fonctionnalités", id: "features" },
      { name: "Corrections de bugs", id: "bugfixes" },
    ],
  },
];

export default function Sidebar({
  activeSection,
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <>
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSidebarOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 z-50 h-full w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header mobile */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 lg:hidden">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Navigation
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-label="Fermer la navigation"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-8">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setActiveSection(item.id);
                            setSidebarOpen(false);
                          }}
                          type="button"
                          aria-label={`Aller à la section ${item.name}`}
                          aria-current={
                            activeSection === item.id ? "page" : undefined
                          }
                          className={`
                            w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                            ${
                              activeSection === item.id
                                ? "bg-sky-50 text-sky-700 dark:bg-sky-900/50 dark:text-sky-400"
                                : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-800/50"
                            }
                          `}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              <p>Documentation v1.0</p>
              <p>
                Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

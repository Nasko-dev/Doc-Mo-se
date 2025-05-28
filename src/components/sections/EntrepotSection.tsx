import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function EntrepotSection() {
  const { apps, loading } = useAppData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  const entrepotApp = apps.find((app) => app.id === "entrepot");

  if (!entrepotApp) {
    return <div>Application Entrepôt non trouvée</div>;
  }

  const recentUpdates = [
    {
      version: "v2.1.0",
      date: "28 Jan 2025",
      type: "feature",
      title: "Intégration API Livraison Complète",
      description:
        "Création automatique de livraisons lors de la validation des commandes avec calcul intelligent des prix",
    },
    {
      version: "v2.0.5",
      date: "10 Jan 2025",
      type: "bugfix",
      title: "Stabilité et Performance",
      description:
        "Amélioration de la synchronisation Firebase et correction des crashs lors de la synchronisation",
    },
    {
      version: "v2.0.0",
      date: "15 Déc 2024",
      type: "feature",
      title: "Refonte UI/UX Complète",
      description:
        "Nouvelle interface utilisateur avec Cupertino Design et animations fluides",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Icon name={entrepotApp.icon} className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {entrepotApp.name}
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {entrepotApp.description}
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {entrepotApp.status}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {entrepotApp.version}
          </span>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Fonctionnalités Principales ({entrepotApp.features.length}{" "}
          fonctionnalités)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entrepotApp.features.map((feature) => (
            <div
              key={feature}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-blue-500 mr-4 mt-1">
                  <Icon name="check-circle" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Stack Technique ({entrepotApp.techStack.length} technologies)
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {entrepotApp.techStack.map((tech) => (
              <div
                key={tech}
                className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                    {tech}
                  </h3>
                </div>
                <div className="text-blue-500">
                  <Icon name="code" className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Mises à Jour Récentes
        </h2>
        <div className="space-y-4">
          {recentUpdates.map((update) => (
            <div
              key={update.version}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                      update.type === "feature"
                        ? "bg-green-100 dark:bg-green-900"
                        : "bg-red-100 dark:bg-red-900"
                    }`}
                  >
                    {update.type === "feature" ? (
                      <Icon
                        name="check-circle"
                        className="w-4 h-4 text-green-600"
                      />
                    ) : (
                      <Icon name="bug" className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                        {update.title}
                      </h3>
                      <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                        {update.version}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      {update.description}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {update.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Architecture & Intégration
        </h2>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  📱
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  App Entrepôt
                </p>
                <p className="text-xs text-slate-500">Flutter + Firebase</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  🔥
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Firebase
                </p>
                <p className="text-xs text-slate-500">Base de données</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  🚚
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  App Livraison
                </p>
                <p className="text-xs text-slate-500">
                  Intégration automatique
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Intégration automatique : Validation de commande → Création de
                livraison → Notification chauffeur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function AutoPiecesSection() {
  const { apps, loading } = useAppData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500" />
      </div>
    );
  }

  const autoPiecesApp = apps.find((app) => app.id === "auto-pieces");

  if (!autoPiecesApp) {
    return <div>Application Auto Pièces non trouvée</div>;
  }

  const recentUpdates = [
    {
      version: "v1.8.2",
      date: "15 Jan 2025",
      type: "bugfix",
      title: "Corrections et Optimisations",
      description:
        "Correction du bug de recherche avancée et optimisation du chargement des images",
    },
    {
      version: "v1.8.0",
      date: "05 Jan 2025",
      type: "feature",
      title: "Système de Messagerie Avancé",
      description:
        "Chat en temps réel entre particuliers et vendeurs avec 28KB de code optimisé",
    },
    {
      version: "v1.7.5",
      date: "20 Déc 2024",
      type: "feature",
      title: "Gestion des Demandes",
      description:
        "Système complet de gestion des demandes avec 15KB de code dédié",
    },
  ];

  const highlights = [
    {
      title: "67KB de Code",
      description: "Écran principal avec catalogue produits avancé",
      icon: "code",
      color: "bg-blue-500",
    },
    {
      title: "28KB de Code",
      description: "Système de messagerie en temps réel",
      icon: "chat",
      color: "bg-green-500",
    },
    {
      title: "15KB de Code",
      description: "Gestion complète des demandes",
      icon: "clipboard-list",
      color: "bg-purple-500",
    },
    {
      title: "Backend Strapi",
      description: "API REST complète avec PostgreSQL",
      icon: "server",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Icon name={autoPiecesApp.icon} className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {autoPiecesApp.name}
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {autoPiecesApp.description}
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {autoPiecesApp.status}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {autoPiecesApp.version}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Points Forts du Développement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center"
            >
              <div
                className={`w-12 h-12 ${highlight.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
              >
                <Icon name={highlight.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Fonctionnalités Complètes ({autoPiecesApp.features.length}{" "}
          fonctionnalités)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {autoPiecesApp.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-green-500 mr-4 mt-1">
                  <Icon name={feature.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Stack Technique Avancé ({autoPiecesApp.techStack.length} technologies)
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {autoPiecesApp.techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                    {tech.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {tech.description}
                  </p>
                </div>
                <span className="text-sm font-mono text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                  {tech.version}
                </span>
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
          Architecture Marketplace
        </h2>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  📱
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  App Flutter
                </p>
                <p className="text-xs text-slate-500">110KB+ de code</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  🚀
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  API Strapi
                </p>
                <p className="text-xs text-slate-500">Backend complet</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  🗄️
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  PostgreSQL
                </p>
                <p className="text-xs text-slate-500">Base de données</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Marketplace complète : Particuliers ↔ Chat en temps réel ↔
                Vendeurs professionnels
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

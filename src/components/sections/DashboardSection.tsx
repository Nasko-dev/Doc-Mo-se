import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function DashboardSection() {
  const { apps, loading } = useAppData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500" />
      </div>
    );
  }

  const dashboardApp = apps.find((app) => app.id === "dashboard");

  if (!dashboardApp) {
    return <div>Application Dashboard non trouvée</div>;
  }

  const recentUpdates = [
    {
      version: "v2.0.2",
      date: "20 Jan 2025",
      type: "feature",
      title: "Graphiques Temps Réel",
      description:
        "Visualisations interactives avec ApexCharts et React-ApexCharts pour analytics avancées",
    },
    {
      version: "v2.0.0",
      date: "10 Jan 2025",
      type: "feature",
      title: "Migration React 19",
      description:
        "Mise à jour vers React 19 avec Concurrent Features et TypeScript 5.7.2",
    },
    {
      version: "v1.9.5",
      date: "25 Déc 2024",
      type: "feature",
      title: "Interface Drag & Drop",
      description:
        "React DnD pour réorganisation intuitive des tâches et planification optimisée",
    },
  ];

  const highlights = [
    {
      title: "React 19",
      description: "Framework web moderne avec Concurrent Features",
      icon: "code",
      color: "bg-blue-500",
    },
    {
      title: "TypeScript 5.7.2",
      description: "Langage typé avec IntelliSense avancé",
      icon: "shield",
      color: "bg-purple-500",
    },
    {
      title: "Tailwind CSS 4.0.8",
      description: "Framework CSS utility-first moderne",
      icon: "paintbrush",
      color: "bg-green-500",
    },
    {
      title: "Vite 6.1.0",
      description: "Build tool ultra-rapide avec HMR",
      icon: "lightning",
      color: "bg-orange-500",
    },
  ];

  const keyFeatures = [
    {
      category: "Graphiques & Analytics",
      features: [
        "ApexCharts 4.6.0",
        "React-ApexCharts",
        "Graphiques temps réel",
        "KPIs avancés",
      ],
    },
    {
      category: "Interface Utilisateur",
      features: [
        "Ant Design 5.24.8",
        "Drag & Drop",
        "Calendrier FullCalendar",
        "Carrousel Swiper",
      ],
    },
    {
      category: "Cartes & Géolocalisation",
      features: [
        "JVectorMap",
        "Visualisation géographique",
        "Zones de couverture",
        "Cartes vectorielles",
      ],
    },
    {
      category: "Développement",
      features: [
        "Vite build tool",
        "ESLint configuration",
        "TypeScript strict",
        "Hot Module Replacement",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Icon name={dashboardApp.icon} className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {dashboardApp.name}
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {dashboardApp.description}
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {dashboardApp.status}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {dashboardApp.version}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Technologies Modernes
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

      {/* Key Features by Category */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Fonctionnalités par Catégorie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Icon
                      name="check-circle"
                      className="w-4 h-4 text-purple-500 mr-2"
                    />
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Features */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Toutes les Fonctionnalités ({dashboardApp.features.length}{" "}
          fonctionnalités)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardApp.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-purple-500 mr-4 mt-1">
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
          Stack Technique Web ({dashboardApp.techStack.length} technologies)
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {dashboardApp.techStack.map((tech) => (
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
                <span className="text-sm font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">
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
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <Icon
                      name="check-circle"
                      className="w-4 h-4 text-purple-600"
                    />
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
          Architecture Web Moderne
        </h2>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  ⚛️
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  React 19
                </p>
                <p className="text-xs text-slate-500">Frontend moderne</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  🎨
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Tailwind CSS
                </p>
                <p className="text-xs text-slate-500">Design system</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  ⚡
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Vite
                </p>
                <p className="text-xs text-slate-500">Build tool rapide</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Interface web professionnelle : Dashboard → Analytics → Gestion
                → Rapports
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Métriques de Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              &lt; 1s
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Temps de build avec Vite
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-slate-600 dark:text-slate-400">
              TypeScript coverage
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <p className="text-slate-600 dark:text-slate-400">
              Composants avancés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

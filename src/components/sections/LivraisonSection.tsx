import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function LivraisonSection() {
  const { apps, loading } = useAppData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  const livraisonApp = apps.find((app) => app.id === "livraison");

  if (!livraisonApp) {
    return <div>Application Livraison non trouvée</div>;
  }

  const recentUpdates = [
    {
      version: "v1.5.1",
      date: "25 Jan 2025",
      type: "feature",
      title: "Interface Missions Améliorée",
      description:
        "Nouvelle interface pour la gestion des missions avec 15KB de code principal et intégration temps réel",
    },
    {
      version: "v1.5.0",
      date: "15 Jan 2025",
      type: "feature",
      title: "Géolocalisation Avancée",
      description:
        "Système de géolocalisation haute précision avec Geolocator et gestion des permissions",
    },
    {
      version: "v1.4.8",
      date: "05 Jan 2025",
      type: "feature",
      title: "Cartes Interactives",
      description:
        "Flutter Map avec marqueurs personnalisés et visualisation temps réel",
    },
  ];

  const highlights = [
    {
      title: "15KB de Code",
      description: "Interface principale de gestion des missions",
      icon: "clipboard-list",
      color: "bg-orange-500",
    },
    {
      title: "Géolocalisation",
      description: "Haute précision avec Geolocator 10.1.0",
      icon: "location-dot",
      color: "bg-blue-500",
    },
    {
      title: "Google Maps",
      description: "Navigation intégrée avec calcul d'itinéraires",
      icon: "map",
      color: "bg-green-500",
    },
    {
      title: "Firebase",
      description: "Authentification et stockage cloud sécurisé",
      icon: "shield",
      color: "bg-purple-500",
    },
  ];

  const keyFeatures = [
    {
      category: "Navigation & Géolocalisation",
      features: [
        "Google Maps intégré",
        "Flutter Map avancé",
        "Géolocalisation précise",
        "Calcul d'itinéraires",
      ],
    },
    {
      category: "Gestion des Missions",
      features: [
        "Interface temps réel",
        "Acceptation de missions",
        "Suivi des livraisons",
        "Historique complet",
      ],
    },
    {
      category: "Sécurité & Authentification",
      features: [
        "Firebase Auth",
        "Secure Storage",
        "App Check",
        "Gestion des permissions",
      ],
    },
    {
      category: "Interface Utilisateur",
      features: [
        "Support multilingue",
        "Profil chauffeur",
        "Portefeuille intégré",
        "Support client",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Icon name={livraisonApp.icon} className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {livraisonApp.name}
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {livraisonApp.description}
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {livraisonApp.status}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {livraisonApp.version}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Technologies Clés
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
                      className="w-4 h-4 text-orange-500 mr-2"
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
          Toutes les Fonctionnalités ({livraisonApp.features.length}{" "}
          fonctionnalités)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {livraisonApp.features.map((feature) => (
            <div
              key={feature}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-orange-500 mr-4 mt-1">
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
          Stack Technique Complet ({livraisonApp.techStack.length} technologies)
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {livraisonApp.techStack.map((tech) => (
              <div
                key={tech}
                className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                    {tech}
                  </h3>
                </div>
                <div className="text-orange-500">
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
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                    <Icon
                      name="check-circle"
                      className="w-4 h-4 text-orange-600"
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
          Architecture Mobile Avancée
        </h2>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  📱
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  App Flutter
                </p>
                <p className="text-xs text-slate-500">Interface chauffeur</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  🗺️
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Google Maps
                </p>
                <p className="text-xs text-slate-500">Navigation GPS</p>
              </div>
              <div className="text-slate-400">
                <Icon name="arrow-right" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                  🔥
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Firebase
                </p>
                <p className="text-xs text-slate-500">Backend temps réel</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Application mobile complète : Géolocalisation → Navigation →
                Livraison → Confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function ArchitectureSection() {
  const { loading } = useAppData();
  const [activeLayer, setActiveLayer] = useState<string>("overview");
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500" />
      </div>
    );
  }

  const architectureLayers = [
    {
      id: "overview",
      name: "Vue d'ensemble",
      icon: "eye",
      description: "Architecture globale du système",
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: "mobile",
      description: "Applications mobiles et web",
    },
    {
      id: "backend",
      name: "Backend",
      icon: "server",
      description: "Services et APIs",
    },
    {
      id: "data",
      name: "Données",
      icon: "database",
      description: "Stockage et bases de données",
    },
    {
      id: "integration",
      name: "Intégrations",
      icon: "link",
      description: "Connexions entre services",
    },
  ];

  const systemComponents = [
    {
      id: "entrepot-app",
      name: "Mon Entrepôt",
      type: "mobile",
      tech: "Flutter 3.7.2",
      color: "bg-blue-500",
      position: { x: 15, y: 25 },
      connections: ["firebase-primary", "yannko-api"],
    },
    {
      id: "auto-pieces-app",
      name: "Auto Pièces JSP",
      type: "mobile",
      tech: "Flutter 3.7.2",
      color: "bg-green-500",
      position: { x: 15, y: 55 },
      connections: ["strapi-backend"],
    },
    {
      id: "livraison-app",
      name: "Livraison Pièces",
      type: "mobile",
      tech: "Flutter 3.7.2",
      color: "bg-orange-500",
      position: { x: 15, y: 85 },
      connections: ["firebase-livraison"],
    },
    {
      id: "dashboard-web",
      name: "Dashboard Livraison",
      type: "web",
      tech: "React 19 + TS",
      color: "bg-purple-500",
      position: { x: 50, y: 25 },
      connections: ["api-rest"],
    },
    {
      id: "firebase-primary",
      name: "Firebase Core",
      type: "backend",
      tech: "Google Cloud",
      color: "bg-yellow-500",
      position: { x: 70, y: 35 },
      connections: ["firebase-livraison"],
    },
    {
      id: "firebase-livraison",
      name: "Firebase Livraison",
      type: "backend",
      tech: "Firestore + Auth",
      color: "bg-amber-500",
      position: { x: 85, y: 60 },
      connections: [],
    },
    {
      id: "strapi-backend",
      name: "Strapi CMS",
      type: "backend",
      tech: "Node.js 18",
      color: "bg-indigo-500",
      position: { x: 70, y: 75 },
      connections: ["sqlite-db"],
    },
    {
      id: "sqlite-db",
      name: "SQLite DB",
      type: "database",
      tech: "Better SQLite3",
      color: "bg-cyan-500",
      position: { x: 85, y: 85 },
      connections: [],
    },
    {
      id: "yannko-api",
      name: "API Yannko",
      type: "api",
      tech: "REST API",
      color: "bg-red-500",
      position: { x: 50, y: 45 },
      connections: [],
    },
    {
      id: "api-rest",
      name: "API Services",
      type: "api",
      tech: "Axios HTTP",
      color: "bg-pink-500",
      position: { x: 50, y: 65 },
      connections: ["firebase-livraison"],
    },
  ];

  const architecturePatterns = [
    {
      title: "Microservices",
      description: "Architecture modulaire avec services indépendants",
      icon: "cube",
      benefits: [
        "Scalabilité horizontale",
        "Déploiement indépendant",
        "Technologie polyglotte",
        "Résilience améliorée",
      ],
    },
    {
      title: "Event-Driven",
      description: "Communication asynchrone par événements",
      icon: "lightning",
      benefits: [
        "Découplage des services",
        "Traitement temps réel",
        "Scalabilité élastique",
        "Réactivité système",
      ],
    },
    {
      title: "API-First",
      description: "Design centré sur les APIs",
      icon: "link",
      benefits: [
        "Intégration facilitée",
        "Réutilisabilité",
        "Documentation claire",
        "Tests automatisés",
      ],
    },
    {
      title: "Cloud-Native",
      description: "Optimisé pour le cloud",
      icon: "cloud",
      benefits: [
        "Auto-scaling",
        "Haute disponibilité",
        "Gestion automatisée",
        "Coûts optimisés",
      ],
    },
  ];

  const dataFlow = [
    {
      step: 1,
      title: "Saisie Utilisateur",
      description: "L'utilisateur interagit avec l'application mobile",
      component: "App Mobile",
      icon: "mobile",
    },
    {
      step: 2,
      title: "Validation & Traitement",
      description: "Les données sont validées et traitées",
      component: "Backend Service",
      icon: "cog",
    },
    {
      step: 3,
      title: "Stockage Sécurisé",
      description: "Persistance dans la base de données",
      component: "Database",
      icon: "database",
    },
    {
      step: 4,
      title: "Synchronisation",
      description: "Mise à jour temps réel des autres services",
      component: "Event Bus",
      icon: "refresh",
    },
    {
      step: 5,
      title: "Notification",
      description: "Notification push vers les utilisateurs concernés",
      component: "Push Service",
      icon: "bell",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="relative text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Icon name="cube" className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Architecture Système
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'architecture moderne et scalable qui alimente nos
            applications. Une infrastructure robuste conçue pour la performance
            et la fiabilité.
          </p>

          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-sky-600 mb-2">4</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Applications
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Backends
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Technologies
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Intégrations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation des couches */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Explorer l'Architecture
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {architectureLayers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActiveLayer(layer.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeLayer === layer.id
                  ? "bg-sky-500 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              <Icon name={layer.icon} className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">{layer.name}</div>
                <div className="text-xs opacity-75">{layer.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Diagramme d'architecture interactif */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Diagramme Interactif du Système
        </h3>
        <div className="relative h-96 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Grille de fond */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <title>Grille de fond pour le diagramme d'architecture</title>
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Composants du système */}
          {systemComponents.map((component) => (
            <div
              key={component.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                hoveredComponent === component.id ? "scale-110 z-10" : "z-5"
              }`}
              style={{
                left: `${component.position.x}%`,
                top: `${component.position.y}%`,
              }}
              onMouseEnter={() => setHoveredComponent(component.id)}
              onMouseLeave={() => setHoveredComponent(null)}
            >
              <div
                className={`${component.color} rounded-lg p-4 text-white shadow-lg min-w-32 text-center`}
              >
                <div className="font-semibold text-sm">{component.name}</div>
                <div className="text-xs opacity-75 mt-1">{component.tech}</div>
              </div>

              {/* Tooltip au hover */}
              {hoveredComponent === component.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                  Type: {component.type}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
              )}
            </div>
          ))}

          {/* Légende */}
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Légende
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded" />
                <span className="text-slate-600 dark:text-slate-400">
                  Mobile Apps
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded" />
                <span className="text-slate-600 dark:text-slate-400">
                  Web Apps
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded" />
                <span className="text-slate-600 dark:text-slate-400">
                  Backend Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patterns d'architecture */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Patterns d'Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architecturePatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:border-sky-300 dark:hover:border-sky-600"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={pattern.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {pattern.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {pattern.description}
                  </p>
                  <div className="space-y-2">
                    {pattern.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center space-x-2"
                      >
                        <Icon
                          name="check-circle"
                          className="w-4 h-4 text-green-500"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flux de données */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Flux de Données
        </h2>
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
            {dataFlow.map((step, index) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center max-w-48"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border-2 border-sky-500">
                    <Icon name={step.icon} className="w-4 h-4 text-sky-500" />
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {step.description}
                </p>
                <span className="text-xs bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-2 py-1 rounded-full">
                  {step.component}
                </span>

                {/* Flèche vers le suivant */}
                {index < dataFlow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8">
                    <Icon
                      name="arrow-right"
                      className="w-6 h-6 text-sky-400 mx-auto"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Métriques de performance */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Métriques de Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="lightning" className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              &lt; 3s
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Temps de démarrage app
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="shield" className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-slate-600 dark:text-slate-400">
              Disponibilité système
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="chart-bar" className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <p className="text-slate-600 dark:text-slate-400">
              Utilisateurs actifs
            </p>
          </div>
        </div>
      </div>

      {/* Sécurité et conformité */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
            <Icon name="shield" className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Sécurité & Conformité
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Architecture sécurisée par design
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Icon name="lock" className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Chiffrement End-to-End
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Toutes les communications sont chiffrées
            </p>
          </div>
          <div className="text-center">
            <Icon name="users" className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Authentification Multi-Facteurs
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Sécurité renforcée des accès
            </p>
          </div>
          <div className="text-center">
            <Icon name="eye" className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Monitoring 24/7
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Surveillance continue du système
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

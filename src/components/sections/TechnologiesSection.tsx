import { useState } from "react";
import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function TechnologiesSection() {
  const { apps, loading } = useAppData();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500" />
      </div>
    );
  }

  const techCategories = [
    { id: "all", name: "Toutes", icon: "grid", count: 0 },
    { id: "frontend", name: "Frontend", icon: "mobile", count: 0 },
    { id: "backend", name: "Backend", icon: "server", count: 0 },
    { id: "database", name: "Base de données", icon: "database", count: 0 },
    { id: "cloud", name: "Cloud", icon: "cloud", count: 0 },
    { id: "tools", name: "Outils", icon: "cog", count: 0 },
  ];

  const technologies = [
    {
      name: "Flutter",
      category: "frontend",
      version: "3.7.2",
      description:
        "Framework mobile cross-platform avec performance native utilisé dans toutes nos apps mobiles",
      icon: "mobile",
      color: "bg-blue-500",
      popularity: 95,
      usedIn: ["Mon Entrepôt", "Auto Pièces JSP", "Livraison Pièces"],
      features: [
        "Hot Reload",
        "Native Performance",
        "Single Codebase",
        "Cupertino Design",
      ],
      pros: ["Performance native", "Développement rapide", "UI riche"],
      cons: ["Taille d'app plus importante", "Courbe d'apprentissage"],
    },
    {
      name: "React",
      category: "frontend",
      version: "19.0.0",
      description:
        "Framework web moderne avec Concurrent Features pour le Dashboard Livraison",
      icon: "code",
      color: "bg-cyan-500",
      popularity: 98,
      usedIn: ["Dashboard Livraison"],
      features: [
        "Concurrent Features",
        "Component-Based",
        "Hooks",
        "Virtual DOM",
      ],
      pros: ["Écosystème riche", "Communauté active", "Performance"],
      cons: ["Complexité croissante", "Changements fréquents"],
    },
    {
      name: "TypeScript",
      category: "frontend",
      version: "5.7.2",
      description:
        "Langage typé avec IntelliSense avancé pour une meilleure robustesse",
      icon: "shield",
      color: "bg-blue-600",
      popularity: 92,
      usedIn: ["Dashboard Livraison", "Strapi Backend"],
      features: [
        "Static Typing",
        "IntelliSense",
        "Refactoring",
        "Error Detection",
      ],
      pros: ["Détection d'erreurs", "Meilleur IDE", "Maintenabilité"],
      cons: ["Temps de compilation", "Courbe d'apprentissage"],
    },
    {
      name: "Firebase",
      category: "backend",
      version: "2.25.4",
      description:
        "Backend-as-a-Service avec infrastructure Google pour auth et stockage",
      icon: "lightning",
      color: "bg-orange-500",
      popularity: 88,
      usedIn: ["Mon Entrepôt", "Livraison Pièces"],
      features: [
        "Real-time Database",
        "Authentication",
        "Cloud Storage",
        "Multi-project",
      ],
      pros: ["Setup rapide", "Temps réel", "Scalabilité"],
      cons: ["Vendor lock-in", "Coûts variables"],
    },
    {
      name: "Strapi",
      category: "backend",
      version: "5.12.6",
      description:
        "Headless CMS moderne avec API REST complète et interface d'administration",
      icon: "server",
      color: "bg-purple-500",
      popularity: 85,
      usedIn: ["Auto Pièces JSP"],
      features: [
        "REST API",
        "Admin Panel",
        "User Permissions",
        "Media Management",
      ],
      pros: ["Flexibilité", "Interface admin", "Open source"],
      cons: ["Configuration complexe", "Ressources"],
    },
    {
      name: "SQLite",
      category: "database",
      version: "11.3.0",
      description:
        "Base de données relationnelle légère avec Better SQLite3 pour Node.js",
      icon: "database",
      color: "bg-indigo-500",
      popularity: 90,
      usedIn: ["Auto Pièces JSP"],
      features: [
        "ACID Compliance",
        "Embedded DB",
        "High Performance",
        "Zero Config",
      ],
      pros: ["Légèreté", "Performance", "Simplicité"],
      cons: ["Pas de réseau", "Concurrence limitée"],
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      version: "4.0.8",
      description: "Framework CSS utility-first moderne avec JIT compiler",
      icon: "paintbrush",
      color: "bg-teal-500",
      popularity: 94,
      usedIn: ["Dashboard Livraison"],
      features: [
        "Utility Classes",
        "JIT Compiler",
        "Dark Mode",
        "Responsive Design",
      ],
      pros: ["Productivité", "Consistance", "Customisation"],
      cons: ["HTML verbeux", "Courbe d'apprentissage"],
    },
    {
      name: "Vite",
      category: "tools",
      version: "6.1.0",
      description:
        "Build tool ultra-rapide avec HMR pour développement moderne",
      icon: "lightning",
      color: "bg-yellow-500",
      popularity: 89,
      usedIn: ["Dashboard Livraison"],
      features: ["Fast HMR", "ES Modules", "Plugin System", "Optimized Build"],
      pros: ["Vitesse", "Simplicité", "Performance"],
      cons: ["Écosystème récent", "Compatibilité"],
    },
    {
      name: "Node.js",
      category: "backend",
      version: "18.x",
      description: "Runtime JavaScript côté serveur pour le backend Strapi",
      icon: "server",
      color: "bg-green-600",
      popularity: 87,
      usedIn: ["Auto Pièces JSP"],
      features: ["Event Loop", "NPM Ecosystem", "V8 Engine", "Cross Platform"],
      pros: ["Performance", "Écosystème", "JavaScript"],
      cons: ["Single Thread", "Callback Hell"],
    },
    {
      name: "Cupertino Design",
      category: "frontend",
      version: "1.0.8",
      description:
        "Design system iOS natif pour interfaces Flutter authentiques",
      icon: "mobile",
      color: "bg-gray-500",
      popularity: 82,
      usedIn: ["Mon Entrepôt", "Livraison Pièces"],
      features: [
        "iOS Native Look",
        "Adaptive Widgets",
        "Dark Mode",
        "Accessibility",
      ],
      pros: ["Authenticité iOS", "Cohérence", "Accessibilité"],
      cons: ["Limité à iOS style", "Moins de customisation"],
    },
  ];

  // Calculer les comptes par catégorie
  for (const category of techCategories) {
    if (category.id === "all") {
      category.count = technologies.length;
    } else {
      category.count = technologies.filter(
        (tech) => tech.category === category.id
      ).length;
    }
  }

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  const techStats = {
    totalTechnologies: technologies.length,
    averagePopularity: Math.round(
      technologies.reduce((acc, tech) => acc + tech.popularity, 0) /
        technologies.length
    ),
    mostUsedTech: technologies.reduce((prev, current) =>
      prev.usedIn.length > current.usedIn.length ? prev : current
    ),
    newestVersion: technologies.find((tech) => tech.name === "React"),
  };

  const comparisonData = [
    {
      category: "Performance",
      flutter: 95,
      react: 88,
      description: "Vitesse d'exécution et fluidité",
    },
    {
      category: "Développement",
      flutter: 90,
      react: 95,
      description: "Rapidité de développement",
    },
    {
      category: "Écosystème",
      flutter: 85,
      react: 98,
      description: "Bibliothèques et communauté",
    },
    {
      category: "Courbe d'apprentissage",
      flutter: 75,
      react: 80,
      description: "Facilité d'apprentissage",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="relative text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Icon name="code" className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Stack Technologique
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez les technologies modernes qui alimentent nos applications.
            Un écosystème soigneusement sélectionné pour la performance et
            l'innovation.
          </p>

          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {techStats.totalTechnologies}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Technologies
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {techStats.averagePopularity}%
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Popularité moyenne
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {apps.length}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Applications
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Catégories
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres par catégorie */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Explorer par Catégorie
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {techCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-indigo-500 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              <Icon name={category.icon} className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className="text-xs opacity-75">
                  {category.count} technologies
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Grille des technologies */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Technologies Utilisées
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-600 cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={tech.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {tech.name}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                      v{tech.version}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {tech.popularity}%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    popularité
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                {tech.description}
              </p>

              {/* Barre de popularité */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span>Adoption</span>
                  <span>{tech.popularity}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${tech.popularity}%` }}
                  />
                </div>
              </div>

              {/* Applications utilisant cette tech */}
              <div className="mb-4">
                <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Utilisé dans :
                </div>
                <div className="flex flex-wrap gap-1">
                  {tech.usedIn.map((app) => (
                    <span
                      key={app}
                      className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fonctionnalités clés */}
              {hoveredTech === tech.name && (
                <div className="animate-fadeIn">
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Fonctionnalités clés :
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {tech.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-1"
                      >
                        <Icon
                          name="check-circle"
                          className="w-3 h-3 text-green-500"
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Comparaison Flutter vs React */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Comparaison : Flutter vs React
        </h2>
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Flutter */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="mobile" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Flutter
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Mobile Cross-Platform
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Avantages
                  </span>
                </div>
                {technologies
                  .find((t) => t.name === "Flutter")
                  ?.pros.map((pro) => (
                    <div key={pro} className="flex items-center space-x-2">
                      <Icon
                        name="check-circle"
                        className="w-4 h-4 text-green-500"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {pro}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* React */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="code" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    React
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Web Development
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Avantages
                  </span>
                </div>
                {technologies
                  .find((t) => t.name === "React")
                  ?.pros.map((pro) => (
                    <div key={pro} className="flex items-center space-x-2">
                      <Icon
                        name="check-circle"
                        className="w-4 h-4 text-green-500"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {pro}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Graphiques de comparaison */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
              Comparaison Détaillée
            </h4>
            <div className="space-y-6">
              {comparisonData.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {item.description}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
                        <span>Flutter</span>
                        <span>{item.flutter}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.flutter}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
                        <span>React</span>
                        <span>{item.react}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-cyan-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.react}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap technologique */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Roadmap Technologique
        </h2>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="check-circle" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Actuel (2025)
              </h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• Flutter 3.24.0</li>
                <li>• React 19.1.0</li>
                <li>• TypeScript 5.8.3</li>
                <li>• Firebase 10.7.1</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="clock" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Q2 2025
              </h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• Flutter 3.25.0</li>
                <li>• Next.js 15</li>
                <li>• Supabase intégration</li>
                <li>• GraphQL APIs</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="star" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Q4 2025
              </h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• AI/ML intégration</li>
                <li>• Microservices</li>
                <li>• Kubernetes</li>
                <li>• Edge Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Métriques de performance */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Performance & Métriques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="lightning" className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              &lt; 5s
            </div>
            <p className="text-slate-600 dark:text-slate-400">Temps de build</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="mobile" className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">60fps</div>
            <p className="text-slate-600 dark:text-slate-400">
              Performance mobile
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="code" className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <p className="text-slate-600 dark:text-slate-400">Code coverage</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="shield" className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
            <p className="text-slate-600 dark:text-slate-400">
              Vulnérabilités critiques
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

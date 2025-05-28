import { useChangelog } from "../../hooks/useChangelog";
import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function FeaturesSection() {
  const { releases, roadmap, loading: changelogLoading } = useChangelog();
  const { apps, loading: appsLoading } = useAppData();

  if (changelogLoading || appsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500" />
      </div>
    );
  }

  // Filtrer uniquement les nouvelles fonctionnalités
  const features = releases.filter((release) => release.type === "feature");

  // Statistiques des fonctionnalités
  const stats = {
    totalFeatures: features.length,
    totalChanges: features.reduce(
      (acc, f) => acc + (f.changes?.length || 0),
      0
    ),
    appsUpdated: [...new Set(features.map((f) => f.app))].length,
    upcomingFeatures: roadmap.reduce(
      (acc, r) => acc + (r.features?.length || 0),
      0
    ),
  };

  const getAppColor = (appName: string) => {
    if (!appName) return "blue";
    const firstWord = appName.split(" ")[0] || "";
    const app = apps.find(
      (a) => a.name === appName || (firstWord && a.name.includes(firstWord))
    );
    return app?.color || "blue";
  };

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
      purple: "bg-purple-500",
    };
    return colorMap[color] || "bg-blue-500";
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Nouvelles Fonctionnalités
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Découvrez toutes les nouvelles fonctionnalités ajoutées récemment à
          nos applications et celles à venir dans notre roadmap.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {stats.totalFeatures}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Nouvelles fonctionnalités
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {stats.totalChanges}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Améliorations totales
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {stats.appsUpdated}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Applications mises à jour
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">
            {stats.upcomingFeatures}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Fonctionnalités à venir
          </p>
        </div>
      </div>

      {/* Recent Features */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Fonctionnalités Récentes
        </h2>
        <div className="space-y-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${getColorClass(
                      getAppColor(feature.app)
                    )} rounded-lg flex items-center justify-center`}
                  >
                    <Icon name="check-circle" className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {feature.app}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {feature.version}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {feature.description}
                    </p>

                    {feature.changes && feature.changes.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                          Détails de l'implémentation ({feature.changes.length}{" "}
                          améliorations) :
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {feature.changes.map((change, index) => (
                            <div
                              key={`${feature.id}-change-${index}`}
                              className="flex items-start"
                            >
                              <Icon
                                name="arrow-right"
                                className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                              />
                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                {change}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(feature.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Features */}
      {roadmap && roadmap.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Fonctionnalités à Venir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-6 border border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${getColorClass(
                        getAppColor(item.app)
                      )} rounded-lg flex items-center justify-center`}
                    >
                      <Icon name="clock" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.app} {item.version}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "in-progress"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }`}
                  >
                    {item.status === "in-progress" ? "En cours" : "Planifié"}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {item.description}
                </p>

                {item.features && item.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                      Fonctionnalités prévues :
                    </h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, index) => (
                        <li
                          key={`${item.id}-feature-${index}`}
                          className="flex items-center"
                        >
                          <Icon
                            name="plus"
                            className="w-3 h-3 text-blue-500 mr-2"
                          />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">
                    Livraison estimée :
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    {new Date(item.estimatedDate).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Development Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Innovation Continue
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              Mensuel
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Cycle de développement
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">Agile</div>
            <p className="text-slate-600 dark:text-slate-400">
              Méthodologie de développement
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              Feedback
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Amélioration continue
            </p>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mt-6 text-center">
          Nos équipes travaillent en continu pour apporter de nouvelles
          fonctionnalités et améliorer l'expérience utilisateur de toutes nos
          applications.
        </p>
      </div>
    </div>
  );
}

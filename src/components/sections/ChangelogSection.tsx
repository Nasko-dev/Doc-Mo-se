import { useChangelog } from "../../hooks/useChangelog";
import Icon from "../ui/Icon";

export default function ChangelogSection() {
  const { releases, loading } = useChangelog();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500" />
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "bugfix":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "improvement":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return "check-circle";
      case "bugfix":
        return "bug";
      default:
        return "refresh";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "feature":
        return "Nouvelle fonctionnalité";
      case "bugfix":
        return "Correction de bug";
      case "improvement":
        return "Amélioration";
      default:
        return "Mise à jour";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800";
      case "medium":
        return "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800";
      case "low":
        return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
      default:
        return "bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700";
    }
  };

  const stats = {
    totalReleases: releases.length,
    features: releases.filter((r) => r.type === "feature").length,
    bugfixes: releases.filter((r) => r.type === "bugfix").length,
    totalChanges: releases.reduce(
      (acc, r) => acc + (r.changes?.length || 0),
      0
    ),
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Changelog Complet
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Historique détaillé des mises à jour, nouvelles fonctionnalités et
          corrections de bugs de toutes nos applications.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {stats.totalReleases}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Versions publiées
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {stats.features}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Nouvelles fonctionnalités
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {stats.bugfixes}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Corrections de bugs
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {stats.totalChanges}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Changements totaux
          </p>
        </div>
      </div>

      {/* Releases */}
      <div className="space-y-8">
        {releases.map((release) => (
          <div
            key={release.id}
            className={`rounded-lg border overflow-hidden ${getPriorityColor(
              release.priority
            )}`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        release.type === "feature"
                          ? "bg-green-500"
                          : release.type === "bugfix"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      <Icon
                        name={getTypeIcon(release.type)}
                        className="w-4 h-4 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {release.app} {release.version}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                          release.type
                        )}`}
                      >
                        {getTypeLabel(release.type)}
                      </span>
                      {release.priority === "high" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          Priorité élevée
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-medium text-slate-900 dark:text-white mt-1">
                      {release.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                      {release.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(release.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {release.changes && release.changes.length > 0 && (
                <div className="mt-6">
                  <h5 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                    Changements détaillés ({release.changes.length}) :
                  </h5>
                  <ul className="space-y-2">
                    {release.changes.map((change, changeIndex) => (
                      <li
                        key={`${release.id}-change-${changeIndex}`}
                        className="flex items-start"
                      >
                        <Icon
                          name="check-circle"
                          className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {change}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Résumé du Développement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
            <p className="text-slate-600 dark:text-slate-400">
              Applications en production
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 mb-2">
              Continu
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Développement actif
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-2">99.9%</div>
            <p className="text-slate-600 dark:text-slate-400">Uptime moyen</p>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mt-6">
          Vous avez atteint la fin du changelog.
          <br />
          Les versions plus anciennes sont archivées pour maintenir les
          performances.
        </p>
      </div>
    </div>
  );
}

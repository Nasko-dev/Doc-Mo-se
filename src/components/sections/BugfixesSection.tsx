import { useChangelog } from "../../hooks/useChangelog";
import { useAppData } from "../../hooks/useAppData";
import Icon from "../ui/Icon";

export default function BugfixesSection() {
  const { releases, loading: changelogLoading } = useChangelog();
  const { apps, loading: appsLoading } = useAppData();

  if (changelogLoading || appsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500" />
      </div>
    );
  }

  // Filtrer uniquement les corrections de bugs
  const bugfixes = releases.filter((release) => release.type === "bugfix");

  // Statistiques des corrections
  const stats = {
    totalBugfixes: bugfixes.length,
    totalFixes: bugfixes.reduce((acc, b) => acc + (b.changes?.length || 0), 0),
    appsFixed: [...new Set(bugfixes.map((b) => b.app))].length,
    highPriorityFixes: bugfixes.filter((b) => b.priority === "high").length,
  };

  const getAppColor = (appName: string) => {
    const firstWord = appName.split(" ")[0];
    const app = apps.find(
      (a) => a.name === appName || (firstWord && a.name.includes(firstWord))
    );
    return app?.color || "red";
  };

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
      purple: "bg-purple-500",
      red: "bg-red-500",
    };
    return colorMap[color] || "bg-red-500";
  };

  const getPriorityInfo = (priority: string) => {
    switch (priority) {
      case "high":
        return {
          label: "Critique",
          color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
          icon: "exclamation-triangle",
        };
      case "medium":
        return {
          label: "Importante",
          color:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
          icon: "exclamation",
        };
      case "low":
        return {
          label: "Mineure",
          color:
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
          icon: "info",
        };
      default:
        return {
          label: "Standard",
          color:
            "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
          icon: "bug",
        };
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Corrections de Bugs
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Historique détaillé des corrections de bugs et améliorations de
          stabilité apportées à toutes nos applications.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {stats.totalBugfixes}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Versions correctives
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">
            {stats.totalFixes}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Corrections totales
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {stats.appsFixed}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Applications corrigées
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {stats.highPriorityFixes}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Corrections critiques
          </p>
        </div>
      </div>

      {/* Bug Categories */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Types de Corrections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
            <div className="flex items-center mb-4">
              <Icon name="bug" className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Bugs Critiques
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• Crashs d'application</li>
              <li>• Problèmes de synchronisation</li>
              <li>• Erreurs de données</li>
              <li>• Problèmes de sécurité</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center mb-4">
              <Icon name="cog" className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Optimisations
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• Performance améliorée</li>
              <li>• Gestion mémoire</li>
              <li>• Vitesse de chargement</li>
              <li>• Optimisation des requêtes</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center mb-4">
              <Icon name="shield" className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Stabilité
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• Correction d'affichage</li>
              <li>• Amélioration UX</li>
              <li>• Gestion d'erreurs</li>
              <li>• Compatibilité</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Bugfixes */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Corrections Récentes
        </h2>
        <div className="space-y-6">
          {bugfixes.map((bugfix) => {
            const priorityInfo = getPriorityInfo(bugfix.priority);
            return (
              <div
                key={bugfix.id}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${getColorClass(
                        getAppColor(bugfix.app)
                      )} rounded-lg flex items-center justify-center`}
                    >
                      <Icon name="bug" className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {bugfix.title}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          {bugfix.app}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                          {bugfix.version}
                        </span>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityInfo.color}`}
                        >
                          <Icon
                            name={priorityInfo.icon}
                            className="w-3 h-3 mr-1"
                          />
                          {priorityInfo.label}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {bugfix.description}
                      </p>

                      {bugfix.changes && bugfix.changes.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                            Corrections apportées ({bugfix.changes.length}{" "}
                            améliorations) :
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {bugfix.changes.map((change, index) => (
                              <div
                                key={`${bugfix.id}-change-${index}`}
                                className="flex items-start"
                              >
                                <Icon
                                  name="check-circle"
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
                      {new Date(bugfix.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quality Metrics */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Métriques de Qualité
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <p className="text-slate-600 dark:text-slate-400">Uptime moyen</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Toutes applications
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              &lt; 24h
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Temps de résolution
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Bugs critiques
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
            <p className="text-slate-600 dark:text-slate-400">
              Bugs en attente
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Priorité élevée
            </p>
          </div>
        </div>
      </div>

      {/* Process Summary */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Processus de Correction
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="bug" className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Détection
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Monitoring automatique et feedback utilisateur
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="search" className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Analyse
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Investigation et reproduction du problème
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="cog" className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Correction
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Développement et tests de la solution
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="check-circle" className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Déploiement
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Mise en production et vérification
            </p>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mt-6 text-center">
          Notre équipe suit un processus rigoureux pour garantir la qualité et
          la stabilité de toutes nos applications en production.
        </p>
      </div>
    </div>
  );
}

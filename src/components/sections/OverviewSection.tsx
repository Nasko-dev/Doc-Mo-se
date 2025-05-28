import { useAppData } from "../../hooks/useAppData";
import { useChangelog } from "../../hooks/useChangelog";
import { useConfig } from "../../hooks/useConfig";
import Icon from "../ui/Icon";

interface OverviewSectionProps {
  setActiveSection: (section: string) => void;
}

export default function OverviewSection({
  setActiveSection,
}: OverviewSectionProps) {
  const { apps, stats, loading: appsLoading } = useAppData();
  const { releases, loading: changelogLoading } = useChangelog();
  const { config } = useConfig();

  const recentReleases = releases
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  if (appsLoading || changelogLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500" />
      </div>
    );
  }

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
      purple: "bg-purple-500",
      red: "bg-red-500",
      yellow: "bg-yellow-500",
      emerald: "bg-emerald-500",
    };
    return colorMap[color] || "bg-gray-500";
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          {config?.content.heroTitle || "Documentation des Applications"}
        </h1>
        <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {config?.content.heroSubtitle ||
            "Suivez l'évolution de nos applications mobiles et web. Découvrez les nouvelles fonctionnalités, les améliorations et les corrections apportées à chaque mise à jour."}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => setActiveSection("changelog")}
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voir le Changelog
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("architecture")}
            className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Architecture
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={`stat-${stat.label.replace(/\s+/g, "-").toLowerCase()}`}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover-lift animate-fade-in-up"
          >
            <div className="flex items-center">
              <div className="text-sky-500 mr-3">
                <Icon name={stat.icon} className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Applications Grid */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Nos Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <button
              key={`app-${app.id}`}
              type="button"
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 card-hover cursor-pointer animate-fade-in-up text-left w-full"
              onClick={() => setActiveSection(app.id)}
              aria-label={`Voir les détails de ${app.name}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 ${getColorClass(
                      app.color
                    )} rounded-lg flex items-center justify-center text-white mr-4`}
                  >
                    <Icon name={app.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {app.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {app.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {app.status}
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {app.version}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Updates */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Dernières Mises à Jour
        </h2>
        <div className="space-y-4">
          {recentReleases.map((release) => (
            <div
              key={release.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div
                    className={`w-8 h-8 ${
                      release.type === "feature"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    } rounded-full flex items-center justify-center`}
                  >
                    <Icon
                      name={
                        release.type === "feature" ? "check-circle" : "star"
                      }
                      className="w-4 h-4 text-white"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                    {release.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    {release.description}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {release.app}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(release.date).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useAppData } from "../../hooks/useAppData";
import { useChangelog } from "../../hooks/useChangelog";
import { useConfig } from "../../hooks/useConfig";
import Icon from "../ui/Icon";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<"apps" | "changelog" | "config">(
    "apps"
  );
  const {
    apps,
    stats,
    updateAppVersion,
    updateStat,
    loading: appsLoading,
  } = useAppData();
  const { releases, addRelease, loading: changelogLoading } = useChangelog();
  const {
    config,
    updateSiteInfo,
    updateContent,
    loading: configLoading,
  } = useConfig();

  const [newRelease, setNewRelease] = useState<{
    version: string;
    app: string;
    type: "feature" | "bugfix" | "improvement";
    title: string;
    description: string;
    changes: string[];
    priority: "low" | "medium" | "high";
  }>({
    version: "",
    app: "",
    type: "feature",
    title: "",
    description: "",
    changes: [""],
    priority: "medium",
  });

  const [editingStats, setEditingStats] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  if (appsLoading || changelogLoading || configLoading) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-all duration-300"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onClose();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Fermer le panneau d'administration"
        />
        <div className="fixed top-0 right-0 h-full w-full max-w-5xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-l border-slate-200/50 dark:border-slate-700/50 z-50 overflow-hidden transform transition-all duration-500 ease-out">
          <div className="flex h-full items-center justify-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-sky-200 dark:border-sky-800" />
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-sky-500 absolute top-0 left-0" />
              <div className="mt-4 text-center">
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Chargement du panneau...
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const handleAddRelease = () => {
    if (newRelease.title && newRelease.app && newRelease.version) {
      addRelease({
        ...newRelease,
        date: new Date().toISOString().split("T")[0],
        changes: newRelease.changes.filter((change) => change.trim() !== ""),
      });
      setNewRelease({
        version: "",
        app: "",
        type: "feature",
        title: "",
        description: "",
        changes: [""],
        priority: "medium",
      });
    }
  };

  const handleUpdateStat = (label: string, value: string) => {
    updateStat(label, value);
    setEditingStats((prev) => ({ ...prev, [label]: value }));
  };

  const tabs = [
    {
      id: "apps",
      name: "Applications",
      icon: "cube",
      description: "Gérer les versions et statistiques",
    },
    {
      id: "changelog",
      name: "Changelog",
      icon: "clock",
      description: "Ajouter des releases et mises à jour",
    },
    {
      id: "config",
      name: "Configuration",
      icon: "code",
      description: "Paramètres généraux du site",
    },
  ];

  return (
    <>
      {/* Backdrop amélioré */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80 backdrop-blur-md z-40 transition-all duration-300"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClose();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Fermer le panneau d'administration"
      />

      {/* Panel modernisé */}
      <div className="fixed top-0 right-0 h-full w-full max-w-6xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-l border-slate-200/50 dark:border-slate-700/50 z-50 overflow-hidden transform transition-all duration-500 ease-out">
        <div className="flex h-full flex-col">
          {/* Header avec gradient */}
          <div className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 px-8 py-6">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  Panneau d'Administration
                </h2>
                <p className="text-sky-100 text-sm">
                  Gérez vos applications et contenus en temps réel
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-white/80 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
              >
                <Icon
                  name="close"
                  className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200"
                />
              </button>
            </div>
          </div>

          {/* Tabs modernisés */}
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50">
            <nav className="flex px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.id as "apps" | "changelog" | "config")
                  }
                  className={`group relative flex items-center space-x-3 py-6 px-6 text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-sky-100 dark:bg-sky-900/30"
                        : "bg-slate-100 dark:bg-slate-700 group-hover:bg-slate-200 dark:group-hover:bg-slate-600"
                    }`}
                  >
                    <Icon name={tab.icon} className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{tab.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {tab.description}
                    </div>
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-500" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Content avec scroll personnalisé */}
          <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 custom-scrollbar">
            <div className="p-8">
              {activeTab === "apps" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Icon name="cube" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Gestion des Applications
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Mettez à jour les versions et gérez les statistiques
                      </p>
                    </div>
                  </div>

                  {/* Apps Grid modernisé */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {apps && apps.length > 0 ? (
                      apps.map((app) => (
                        <div
                          key={app.id}
                          className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-300 dark:hover:border-sky-600"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br from-${app.color}-400 to-${app.color}-600 rounded-xl flex items-center justify-center shadow-lg`}
                              >
                                <Icon
                                  name={app.icon}
                                  className="w-6 h-6 text-white"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                                  {app.name}
                                </h4>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm text-slate-500 dark:text-slate-400">
                                    Version:
                                  </span>
                                  <span className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-lg text-sm font-medium">
                                    {app.version}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input
                              type="text"
                              placeholder="Nouvelle version (ex: v2.1.0)"
                              className="flex-1 px-4 py-3 text-sm border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  const target = e.target as HTMLInputElement;
                                  if (target.value) {
                                    updateAppVersion(app.id, target.value);
                                    target.value = "";
                                  }
                                }
                              }}
                            />
                            <button
                              type="button"
                              className="px-4 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                              onClick={(e) => {
                                const input = e.currentTarget
                                  .previousElementSibling as HTMLInputElement;
                                if (input.value) {
                                  updateAppVersion(app.id, input.value);
                                  input.value = "";
                                }
                              }}
                            >
                              <Icon name="check" className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200/50 dark:border-slate-700/50">
                        <Icon
                          name="cube"
                          className="w-12 h-12 text-slate-400 mx-auto mb-4"
                        />
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                          Aucune application trouvée
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Stats modernisées */}
                  <div className="mt-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon name="chart" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          Statistiques Globales
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Métriques et données importantes
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {stats && stats.length > 0 ? (
                        stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center">
                                  <Icon
                                    name={stat.icon}
                                    className="w-5 h-5 text-white"
                                  />
                                </div>
                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                  {stat.label}
                                </span>
                              </div>
                            </div>
                            <input
                              type="text"
                              value={editingStats[stat.label] ?? stat.value}
                              onChange={(e) =>
                                setEditingStats((prev) => ({
                                  ...prev,
                                  [stat.label]: e.target.value,
                                }))
                              }
                              onBlur={(e) =>
                                handleUpdateStat(stat.label, e.target.value)
                              }
                              className="w-full px-4 py-3 text-lg font-bold border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                            />
                          </div>
                        ))
                      ) : (
                        <div className="col-span-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-200/50 dark:border-slate-700/50">
                          <Icon
                            name="chart"
                            className="w-12 h-12 text-slate-400 mx-auto mb-4"
                          />
                          <p className="text-slate-500 dark:text-slate-400 text-lg">
                            Aucune statistique trouvée
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "changelog" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <Icon name="clock" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Nouvelle Release
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Ajoutez une nouvelle version ou mise à jour
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="release-app"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Application
                        </label>
                        <select
                          id="release-app"
                          value={newRelease.app}
                          onChange={(e) =>
                            setNewRelease((prev) => ({
                              ...prev,
                              app: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Sélectionner une application</option>
                          {apps.map((app) => (
                            <option key={app.id} value={app.name}>
                              {app.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="release-version"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Version
                        </label>
                        <input
                          id="release-version"
                          type="text"
                          value={newRelease.version}
                          onChange={(e) =>
                            setNewRelease((prev) => ({
                              ...prev,
                              version: e.target.value,
                            }))
                          }
                          placeholder="v1.0.0"
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="release-type"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Type de release
                        </label>
                        <select
                          id="release-type"
                          value={newRelease.type}
                          onChange={(e) =>
                            setNewRelease((prev) => ({
                              ...prev,
                              type: e.target.value as
                                | "feature"
                                | "bugfix"
                                | "improvement",
                            }))
                          }
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="feature">
                            🚀 Nouvelle fonctionnalité
                          </option>
                          <option value="bugfix">🐛 Correction de bug</option>
                          <option value="improvement">✨ Amélioration</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="release-priority"
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Priorité
                        </label>
                        <select
                          id="release-priority"
                          value={newRelease.priority}
                          onChange={(e) =>
                            setNewRelease((prev) => ({
                              ...prev,
                              priority: e.target.value as
                                | "low"
                                | "medium"
                                | "high",
                            }))
                          }
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="low">🟢 Basse</option>
                          <option value="medium">🟡 Moyenne</option>
                          <option value="high">🔴 Haute</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="release-title"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Titre de la release
                      </label>
                      <input
                        id="release-title"
                        type="text"
                        value={newRelease.title}
                        onChange={(e) =>
                          setNewRelease((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Titre accrocheur pour votre release"
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="release-description"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Description détaillée
                      </label>
                      <textarea
                        id="release-description"
                        value={newRelease.description}
                        onChange={(e) =>
                          setNewRelease((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        placeholder="Décrivez les changements et améliorations..."
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Liste des changements
                      </label>
                      {newRelease.changes.map((change, index) => (
                        <div
                          key={`change-${index}-${change.slice(0, 10)}`}
                          className="flex items-center space-x-3"
                        >
                          <input
                            type="text"
                            value={change}
                            onChange={(e) => {
                              const newChanges = [...newRelease.changes];
                              newChanges[index] = e.target.value;
                              setNewRelease((prev) => ({
                                ...prev,
                                changes: newChanges,
                              }));
                            }}
                            placeholder="Décrivez un changement spécifique"
                            className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                          />
                          {newRelease.changes.length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                const newChanges = newRelease.changes.filter(
                                  (_, i) => i !== index
                                );
                                setNewRelease((prev) => ({
                                  ...prev,
                                  changes: newChanges,
                                }));
                              }}
                              className="text-red-500 hover:text-red-700 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                            >
                              <Icon name="close" className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          setNewRelease((prev) => ({
                            ...prev,
                            changes: [...prev.changes, ""],
                          }))
                        }
                        className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium transition-colors duration-200"
                      >
                        <Icon name="plus" className="w-4 h-4" />
                        <span>Ajouter un changement</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddRelease}
                      className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="plus" className="w-5 h-5" />
                        <span>Publier la Release</span>
                      </div>
                    </button>
                  </div>

                  {/* Recent Releases modernisées */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                        <Icon name="clock" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          Releases Récentes
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Historique des dernières publications
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {releases.slice(0, 5).map((release) => (
                        <div
                          key={release.id}
                          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`px-3 py-1 rounded-lg text-xs font-medium ${
                                  release.type === "feature"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                    : release.type === "bugfix"
                                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                }`}
                              >
                                {release.type === "feature"
                                  ? "🚀 Feature"
                                  : release.type === "bugfix"
                                  ? "🐛 Bugfix"
                                  : "✨ Improvement"}
                              </div>
                              <div>
                                <span className="font-semibold text-slate-900 dark:text-white">
                                  {release.title}
                                </span>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-sm text-slate-500 dark:text-slate-400">
                                    {release.app}
                                  </span>
                                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium">
                                    {release.version}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                              {new Date(release.date).toLocaleDateString(
                                "fr-FR"
                              )}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "config" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Icon name="code" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Configuration du Site
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Personnalisez l'apparence et le contenu
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                    <div className="space-y-2">
                      <label
                        htmlFor="site-title"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Titre du Site
                      </label>
                      <input
                        id="site-title"
                        type="text"
                        value={config?.site.title || ""}
                        onChange={(e) =>
                          updateSiteInfo({ title: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="site-subtitle"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Sous-titre
                      </label>
                      <input
                        id="site-subtitle"
                        type="text"
                        value={config?.site.subtitle || ""}
                        onChange={(e) =>
                          updateSiteInfo({ subtitle: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="hero-title"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Titre Principal (Hero)
                      </label>
                      <input
                        id="hero-title"
                        type="text"
                        value={config?.content.heroTitle || ""}
                        onChange={(e) =>
                          updateContent({ heroTitle: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="hero-subtitle"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Description Hero
                      </label>
                      <textarea
                        id="hero-subtitle"
                        value={config?.content.heroSubtitle || ""}
                        onChange={(e) =>
                          updateContent({ heroSubtitle: e.target.value })
                        }
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

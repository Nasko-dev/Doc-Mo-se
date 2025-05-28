export default function ArchitectureSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Architecture
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Vue d'ensemble de l'architecture de nos applications.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Architecture Globale
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Nos applications suivent une architecture moderne avec Flutter pour le
          mobile, React pour le web, et Firebase/Strapi pour le backend.
        </p>
      </div>
    </div>
  );
}

export default function TechnologiesSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Technologies
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Stack technique utilisé dans nos applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Mobile
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Flutter, Firebase, Provider
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Web
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            React, TypeScript, Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

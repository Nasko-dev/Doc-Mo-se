import { useState, useEffect } from "react";
import appsData from "../data/apps.json";

export interface App {
  id: string;
  name: string;
  description: string;
  status: string;
  version: string;
  color: string;
  icon: string;
  features: string[];
  techStack: string[];
  architecture: string;
  database: string;
  authentication: string;
  codeSize: string;
  lastUpdate: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export interface Integration {
  name: string;
  description: string;
  status: string;
  type: string;
  dataFlow: string;
  features: string[];
}

export const useAppData = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setApps(appsData.apps);
      setStats(appsData.stats);
      setIntegrations(appsData.integrations);
      setLoading(false);
    } catch (err) {
      setError("Erreur lors du chargement des données des applications");
      setLoading(false);
    }
  }, []);

  const getAppById = (id: string): App | undefined => {
    return apps.find((app) => app.id === id);
  };

  const getAppsByStatus = (status: string): App[] => {
    return apps.filter((app) => app.status === status);
  };

  const updateAppVersion = (id: string, newVersion: string) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, version: newVersion } : app
      )
    );
  };

  const updateAppStatus = (id: string, newStatus: string) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const addFeatureToApp = (appId: string, feature: string) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === appId
          ? { ...app, features: [...app.features, feature] }
          : app
      )
    );
  };

  const updateStat = (label: string, newValue: string) => {
    setStats((prevStats) =>
      prevStats.map((stat) =>
        stat.label === label ? { ...stat, value: newValue } : stat
      )
    );
  };

  return {
    apps,
    stats,
    integrations,
    loading,
    error,
    getAppById,
    getAppsByStatus,
    updateAppVersion,
    updateAppStatus,
    addFeatureToApp,
    updateStat,
  };
};

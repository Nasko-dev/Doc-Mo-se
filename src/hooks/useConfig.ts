import { useState, useEffect } from "react";
import configData from "../data/config.json";

export interface SiteConfig {
  site: {
    title: string;
    subtitle: string;
    version: string;
    lastUpdate: string;
    author: string;
    contact: {
      email: string;
      phone: string;
    };
  };
  navigation: NavigationGroup[];
  theme: {
    primaryColor: string;
    accentColor: string;
    darkMode: boolean;
    animations: boolean;
    compactMode: boolean;
  };
  features: {
    search: boolean;
    notifications: boolean;
    analytics: boolean;
    feedback: boolean;
    export: boolean;
  };
  integrations: {
    firebase: {
      enabled: boolean;
      projectId: string;
    };
    strapi: {
      enabled: boolean;
      apiUrl: string;
    };
    analytics: {
      enabled: boolean;
      trackingId: string;
    };
  };
  content: {
    heroTitle: string;
    heroSubtitle: string;
    footerText: string;
    notFoundMessage: string;
  };
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

export interface NavigationItem {
  name: string;
  id: string;
  icon: string;
}

export const useConfig = () => {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setConfig(configData as SiteConfig);
      setLoading(false);
    } catch (err) {
      setError("Erreur lors du chargement de la configuration");
      setLoading(false);
    }
  }, []);

  const updateTheme = (updates: Partial<SiteConfig["theme"]>) => {
    if (!config) return;
    setConfig((prev) => ({
      ...prev!,
      theme: { ...prev!.theme, ...updates },
    }));
  };

  const updateFeatures = (updates: Partial<SiteConfig["features"]>) => {
    if (!config) return;
    setConfig((prev) => ({
      ...prev!,
      features: { ...prev!.features, ...updates },
    }));
  };

  const updateSiteInfo = (updates: Partial<SiteConfig["site"]>) => {
    if (!config) return;
    setConfig((prev) => ({
      ...prev!,
      site: { ...prev!.site, ...updates },
    }));
  };

  const updateContent = (updates: Partial<SiteConfig["content"]>) => {
    if (!config) return;
    setConfig((prev) => ({
      ...prev!,
      content: { ...prev!.content, ...updates },
    }));
  };

  const getNavigationByTitle = (title: string): NavigationGroup | undefined => {
    return config?.navigation.find((group) => group.title === title);
  };

  const getAllNavigationItems = (): NavigationItem[] => {
    if (!config) return [];
    return config.navigation.flatMap((group) => group.items);
  };

  const isFeatureEnabled = (feature: keyof SiteConfig["features"]): boolean => {
    return config?.features[feature] ?? false;
  };

  const isIntegrationEnabled = (
    integration: keyof SiteConfig["integrations"]
  ): boolean => {
    return config?.integrations[integration]?.enabled ?? false;
  };

  return {
    config,
    loading,
    error,
    updateTheme,
    updateFeatures,
    updateSiteInfo,
    updateContent,
    getNavigationByTitle,
    getAllNavigationItems,
    isFeatureEnabled,
    isIntegrationEnabled,
  };
};

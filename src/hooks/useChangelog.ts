import { useState, useEffect } from "react";

interface Release {
  id: string;
  version: string;
  date: string;
  app: string;
  type: "feature" | "bugfix" | "improvement";
  title: string;
  description: string;
  changes?: string[];
  priority: "high" | "medium" | "low";
}

interface RoadmapItem {
  id: string;
  version: string;
  app: string;
  title: string;
  description: string;
  status: "in-progress" | "planned";
  estimatedDate: string;
  features?: string[];
}

interface ChangelogData {
  releases: Release[];
  roadmap: RoadmapItem[];
}

export function useChangelog() {
  const [data, setData] = useState<ChangelogData>({
    releases: [],
    roadmap: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChangelog = async () => {
      try {
        setLoading(true);
        const response = await fetch("/src/data/changelog.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du changelog");
        }
        const changelogData: ChangelogData = await response.json();
        setData(changelogData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
        console.error("Erreur lors du chargement du changelog:", err);
      } finally {
        setLoading(false);
      }
    };

    loadChangelog();
  }, []);

  return {
    releases: data.releases,
    roadmap: data.roadmap,
    loading,
    error,
  };
}

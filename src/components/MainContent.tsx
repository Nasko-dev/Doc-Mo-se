import OverviewSection from "./sections/OverviewSection";
import ArchitectureSection from "./sections/ArchitectureSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import EntrepotSection from "./sections/EntrepotSection";
import AutoPiecesSection from "./sections/AutoPiecesSection";
import LivraisonSection from "./sections/LivraisonSection";
import DashboardSection from "./sections/DashboardSection";
import ApiLivraisonSection from "./sections/ApiLivraisonSection";
import FirebaseSection from "./sections/FirebaseSection";
import StrapiSection from "./sections/StrapiSection";
import ChangelogSection from "./sections/ChangelogSection";
import FeaturesSection from "./sections/FeaturesSection";
import BugfixesSection from "./sections/BugfixesSection";

interface MainContentProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function MainContent({
  activeSection,
  setActiveSection,
}: MainContentProps) {
  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection setActiveSection={setActiveSection} />;
      case "architecture":
        return <ArchitectureSection />;
      case "technologies":
        return <TechnologiesSection />;
      case "entrepot":
        return <EntrepotSection />;
      case "auto-pieces":
        return <AutoPiecesSection />;
      case "livraison":
        return <LivraisonSection />;
      case "dashboard":
        return <DashboardSection />;
      case "api-livraison":
        return <ApiLivraisonSection />;
      case "firebase":
        return <FirebaseSection />;
      case "strapi":
        return <StrapiSection />;
      case "changelog":
        return <ChangelogSection />;
      case "features":
        return <FeaturesSection />;
      case "bugfixes":
        return <BugfixesSection />;
      default:
        return <OverviewSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <main className="flex-1 min-w-0">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <div className="max-w-3xl mx-auto lg:max-w-none">{renderSection()}</div>
      </div>
    </main>
  );
}

import "../../style/Page.css"; // Importando o arquivo CSS
import IntroSection from "@/ui/components/IntroSection";
import AboutSection from "@/ui/components/AboutSection";
import ProjectsSection from "@/ui/components/ProjectsSection";
import ContactSection from "@/ui/components/ContactSection";

export default function Home() {
  return (
    <main className="container">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NowSection } from "@/components/NowSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { RevealSection } from "@/components/RevealSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="page-main">
      <Container>
        <div className="page-identity">
          <RevealSection index={0}>
            <Header />
          </RevealSection>
        </div>
        <div className="page-rule" aria-hidden="true" />
        <div className="page-content">
          <RevealSection index={1}>
            <NowSection />
          </RevealSection>
          <RevealSection index={2}>
            <WorkSection />
          </RevealSection>
          <RevealSection index={3}>
            <ProjectsSection />
          </RevealSection>
          <RevealSection index={4}>
            <Footer />
          </RevealSection>
        </div>
      </Container>
    </main>
  );
}

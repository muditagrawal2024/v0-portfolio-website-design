import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { CurrentFocus } from '@/components/CurrentFocus'
import { EngineeringPhilosophy } from '@/components/EngineeringPhilosophy'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ResearchDashboard } from '@/components/ResearchDashboard'
import { SystemsCompetencyGraph } from '@/components/SystemsCompetencyGraph'
import { LearningJourney } from '@/components/LearningJourney'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <CurrentFocus />
      <EngineeringPhilosophy />
      <ProjectsSection />
      <ResearchDashboard />

      {/* Systems Competency Section */}
      <section id="competency" className="py-20 px-6 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Systems Competency Graph</h2>
            <p className="text-muted-foreground text-lg">
              Interactive visualization of technical domains and their interconnections. Hover over nodes to explore relationships.
            </p>
          </div>
          <SystemsCompetencyGraph />
        </div>
      </section>

      {/* Learning Journey */}
      <LearningJourney />

      {/* Contact Footer */}
      <footer id="contact" className="py-20 px-6 border-t border-border-subtle bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Get in Touch</h2>
          <div className="flex justify-center gap-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <span className="text-sm font-semibold">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <span className="text-sm font-semibold">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <span className="text-sm font-semibold">Email</span>
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-12">
            © 2024 Intelligent Systems. Designed and built with precision.
          </p>
        </div>
      </footer>
    </div>
  )
}

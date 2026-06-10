import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { CurrentFocus } from '@/components/CurrentFocus'
import { EngineeringPhilosophy } from '@/components/EngineeringPhilosophy'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ResearchDashboard } from '@/components/ResearchDashboard'
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

      {/* Learning Journey */}
      <LearningJourney />

      {/* Contact Footer */}
      <footer id="contact" className="py-24 px-6 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-8">05</div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground text-sm mb-12">
              Interested in discussing intelligent systems, research collaborations, or engineering challenges? Connect through the channels below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16 pb-16 border-b border-border-subtle">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors duration-200 font-semibold">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors duration-200 font-semibold">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="group"
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors duration-200 font-semibold">Email</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              © 2024 Intelligent Systems Engineer. Designed and built with precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

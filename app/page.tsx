import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Autonomous Inspection Drone System',
      summary: 'Integrated aerial platform with computer vision, embedded AI, and autonomous navigation.',
      image: '/project-1-drone.png',
      link: '/projects',
    },
    {
      title: 'Edge AI Monitoring Platform',
      summary: 'Real-time system for distributed inference across heterogeneous hardware devices.',
      image: '/project-2-ai-platform.png',
      link: '/projects',
    },
  ]

  const featuredResearch = [
    { title: 'Efficient Embedded Learning on Resource-Constrained Devices', venue: 'IEEE Robotics & Automation Letters', year: '2024' },
    { title: 'Cyber-Physical Systems Integration for Autonomous Systems', venue: 'Springer Lecture Notes in Computer Science', year: '2023' },
    { title: 'Real-Time Computer Vision for Embedded Robotics', venue: 'ACM Transactions on Embedded Computing Systems', year: '2023' },
  ]

  const focusAreas = [
    { title: 'Embedded AI', description: 'Machine learning on edge devices' },
    { title: 'Robotics', description: 'Autonomous systems and control' },
    { title: 'Computer Vision', description: 'Real-time perception systems' },
    { title: 'Intelligent Systems', description: 'Integrated multi-domain design' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />

      {/* Areas of Focus */}
      <section className="py-16 px-6 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Areas of Focus</h2>
            <p className="text-muted-foreground text-sm">Primary engineering domains and research interests</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, i) => (
              <div key={i} className="p-4 border border-border-subtle rounded-lg hover:border-accent/50 transition-colors duration-200">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-foreground">{area.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Featured Projects</h2>
              <p className="text-muted-foreground text-sm">Engineering case studies and technical work</p>
            </div>
            <Link href="/projects" className="text-accent hover:text-accent-active transition-colors text-sm font-semibold">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <Link key={i} href={project.link} className="group">
                <div className="overflow-hidden rounded-lg mb-4 bg-card border border-border-subtle group-hover:border-accent/50 transition-colors duration-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-200"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 px-6 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Research Highlights</h2>
              <p className="text-muted-foreground text-sm">Selected publications and active investigations</p>
            </div>
            <Link href="/research" className="text-accent hover:text-accent-active transition-colors text-sm font-semibold">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {featuredResearch.map((item, i) => (
              <Link
                key={i}
                href="/research"
                className="block p-4 border border-border-subtle rounded-lg hover:border-accent/50 transition-colors duration-200 group"
              >
                <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {item.venue} • {item.year}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            © 2024 Intelligent Systems Engineer. Designed and built with precision.
          </p>
        </div>
      </footer>
    </div>
  )
}

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
      <section className="py-20 px-6 border-t border-border-subtle bg-gradient-to-br from-background via-background to-card/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Areas of Focus</h2>
            <p className="text-muted-foreground text-sm">Primary engineering domains and research interests</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((area, i) => (
              <div key={i} className="p-6 bg-card/40 border border-border-subtle/60 rounded-lg hover:bg-card/60 hover:border-border-subtle transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-foreground">{area.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed ml-5">{area.description}</p>
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
              <Link key={i} href={project.link} className="group flex flex-col">
                {/* Image - Primary visual element */}
                <div className="overflow-hidden rounded-lg mb-5 bg-card border border-border-subtle group-hover:border-accent/50 transition-colors duration-200 shadow-md group-hover:shadow-lg transition-shadow duration-200 flex-1">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={360}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text - Secondary element */}
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 px-6 border-t border-border-subtle">
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
          <div className="space-y-3">
            {featuredResearch.map((item, i) => (
              <Link
                key={i}
                href="/research"
                className="block p-5 bg-card/30 border border-border-subtle/60 rounded-lg hover:bg-card/50 hover:border-border-subtle transition-all duration-200 group"
              >
                <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">{item.title}</h4>
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

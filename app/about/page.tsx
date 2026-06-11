import { Navigation } from '@/components/Navigation'

const milestones = [
  {
    phase: 'Foundational Learning',
    period: '2018 - 2019',
    description: 'Building fundamentals across computer science and electrical engineering disciplines.',
    achievements: [
      'Core algorithms and data structures',
      'Embedded systems and microcontrollers',
      'Linear algebra and control theory',
      'Programming in C++ and Python',
    ],
    color: 'oklch(0.4 0.12 220)',
  },
  {
    phase: 'Hands-On Engineering',
    period: '2019 - 2020',
    description: 'First projects integrating hardware, software, and real-world constraints.',
    achievements: [
      'Robotics competition participation',
      'Embedded Linux systems',
      'Real-time system design',
      'Hardware-software integration',
    ],
    color: 'oklch(0.45 0.15 250)',
  },
  {
    phase: 'Research & Specialization',
    period: '2020 - 2022',
    description: 'Deep dive into machine learning and its integration with physical systems.',
    achievements: [
      'Neural networks and deep learning',
      'Computer vision applications',
      'Research publication',
      'IoT systems architecture',
    ],
    color: 'oklch(0.48 0.14 190)',
  },
  {
    phase: 'Systems Integration',
    period: '2022 - 2024',
    description: 'Bringing together learning, robotics, embedded systems, and software engineering.',
    achievements: [
      'End-to-end system design',
      'Edge AI deployment',
      'Multi-disciplinary team leadership',
      'Production systems engineering',
    ],
    color: 'oklch(0.5 0.08 180)',
  },
  {
    phase: 'Advanced Innovation',
    period: '2024 - Present',
    description: 'Pushing boundaries on complex intelligent systems and novel applications.',
    achievements: [
      'Novel system architectures',
      'Research leadership',
      'Industry collaboration',
      'Future-oriented R&D',
    ],
    color: 'oklch(0.45 0.12 200)',
  },
]

export const metadata = {
  title: 'About - Intelligent Systems Engineer',
  description: 'Engineering philosophy, technical journey, and background in machine learning, robotics, and embedded systems.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Philosophy Section */}
          <div className="py-24">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">Engineering Philosophy</h1>
            <p className="text-base text-muted-foreground mb-14">Perspective on building intelligent systems</p>

            <div className="max-w-3xl space-y-7 text-base leading-relaxed text-foreground/90">
              <p>
                Intelligent systems emerge when software, machine learning, hardware, and automation are designed as a{' '}
                <span className="text-accent font-semibold">single integrated system</span> rather than independent
                technologies bolted together.
              </p>

              <p>
                Too often, we treat these domains in isolation—training models separately from hardware constraints,
                designing software without understanding physical limitations, automating processes without considering
                system-wide interactions. This siloed approach leads to brittle systems that fail in unexpected ways.
              </p>

              <p>
                The systems I design start from a fundamental question:{' '}
                <span className="italic text-muted-foreground">
                  "What are the constraints, trade-offs, and emergent behaviors when these domains interact?"
                </span>
              </p>

              <p>This means:</p>

              <ul className="space-y-3 pl-4 bg-card/20 rounded-lg p-5 border border-border-subtle/40">
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0 font-semibold">→</span>
                  <span className="text-sm">
                    <strong>Hardware-aware AI:</strong> Understanding how model architecture, quantization, and inference methods interact with embedded systems capabilities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0 font-semibold">→</span>
                  <span className="text-sm">
                    <strong>Physics-informed software:</strong> Designing control algorithms that account for real-world dynamics, latency, and sensor noise
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0 font-semibold">→</span>
                  <span className="text-sm">
                    <strong>Systems thinking:</strong> Anticipating how changes in one subsystem propagate and affect overall behavior
                  </span>
                </li>
              </ul>

              <p className="text-sm">
                This integrated approach requires deep technical knowledge across multiple domains, but more importantly, it requires the discipline to understand where boundaries exist and why they matter.
              </p>

              <p className="text-muted-foreground italic border-l-4 border-accent pl-6 py-4 bg-card/20 rounded text-sm leading-relaxed">
                "The best engineering is often invisible—not because it's hidden, but because the system works so well that its complexity disappears."
              </p>
            </div>
          </div>

          {/* Engineering Evolution */}
          <div className="py-24 border-t border-border-subtle/50">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">Engineering Evolution</h2>
            <p className="text-base text-muted-foreground mb-14">Progression of technical capability and systems thinking</p>

            <div className="space-y-6 max-w-3xl">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border-subtle pl-6 pb-6 relative group"
                  style={{
                    borderLeftColor: milestone.color + 'cc',
                  }}
                >
                  <div
                    className="absolute left-0 top-2 w-4 h-4 rounded-full -translate-x-2.5 border-2 border-background group-hover:scale-125 transition-transform duration-200"
                    style={{
                      backgroundColor: milestone.color,
                      borderColor: 'oklch(0.08 0 0)',
                    }}
                  />

                  <div className="pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="text-base font-semibold text-foreground">{milestone.phase}</h3>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{milestone.period}</span>
                    </div>

                    <p className="text-xs text-foreground/75 mb-3 leading-relaxed">{milestone.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {milestone.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                          <span className="text-accent flex-shrink-0 font-semibold">→</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-14 border-t border-border-subtle/50 max-w-3xl">
              <p className="text-sm text-foreground/85 leading-relaxed">
                Deliberate progression from foundational learning through hands-on engineering, research, and systems integration. Each phase built comprehensive understanding of how embedded systems, machine learning, robotics, control theory, and software engineering interconnect to create intelligent systems that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </main>

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

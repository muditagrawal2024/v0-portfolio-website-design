'use client'

interface Milestone {
  phase: string
  period: string
  description: string
  achievements: string[]
  color: string
}

const milestones: Milestone[] = [
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

export function LearningJourney() {
  return (
    <section className="py-20 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Engineering Roadmap</h2>
          <p className="text-muted-foreground text-lg">
            Progression of technical growth and systems thinking development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent-secondary to-accent-active transform -translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 lg:w-1/2">
                  <div className="p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0 mt-1"
                        style={{ backgroundColor: milestone.color }}
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground">{milestone.phase}</h3>
                        <p className="text-sm text-accent mt-1">{milestone.period}</p>
                      </div>
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed">{milestone.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Key Achievements</p>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                            <span className="text-accent-secondary flex-shrink-0 mt-1">→</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden lg:flex w-1/2 items-start justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-border bg-card flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: milestone.color }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Statement */}
        <div className="mt-16 pt-12 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed">
              This journey reflects a deliberate progression from foundational learning to integrated systems thinking.
              Each phase built upon the previous, creating a comprehensive understanding of how machine learning, embedded
              systems, robotics, and software engineering interconnect to create intelligent systems solving real-world
              problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

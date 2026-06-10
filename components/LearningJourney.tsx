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
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">04</div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Engineering Evolution</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Progression of technical capability and systems thinking across embedded systems, machine learning, robotics, and software engineering.
          </p>
        </div>

        {/* Capability Evolution Timeline */}
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="border-l-2 border-border-subtle pl-6 pb-6 relative group"
              style={{
                borderLeftColor: milestone.color + 'cc',
              }}
            >
              {/* Timeline marker */}
              <div
                className="absolute left-0 top-2 w-4 h-4 rounded-full -translate-x-2.5 border-2 border-background group-hover:scale-125 transition-transform duration-200"
                style={{
                  backgroundColor: milestone.color,
                  borderColor: 'oklch(0.08 0 0)',
                }}
              />

              {/* Content */}
              <div className="pt-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{milestone.phase}</h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{milestone.period}</span>
                </div>

                <p className="text-sm text-foreground/80 mb-4">{milestone.description}</p>

                {/* Achievements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {milestone.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="text-accent flex-shrink-0 font-bold">→</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 pt-12 border-t border-border-subtle">
          <p className="text-base text-foreground/90 leading-relaxed max-w-3xl">
            Deliberate progression from foundational learning through hands-on engineering, research, and systems integration. Each phase built comprehensive understanding of how embedded systems, machine learning, robotics, control theory, and software engineering interconnect to create intelligent systems that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  )
}

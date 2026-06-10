'use client'

const focusAreas = [
  {
    title: 'Embedded AI Systems',
    objectives: 'Deploying machine learning models on resource-constrained hardware',
    activeWork: 'Optimizing inference pipelines for edge devices',
    directions: 'Real-time processing at the edge without cloud dependency',
  },
  {
    title: 'Robotics & Automation',
    objectives: 'Autonomous systems that perceive and act in dynamic environments',
    activeWork: 'Developing control frameworks for complex robotic tasks',
    directions: 'Multi-robot coordination and collaborative systems',
  },
  {
    title: 'Computer Vision',
    objectives: 'Extracting meaningful information from visual data',
    activeWork: 'Building perception pipelines for real-world applications',
    directions: 'Robust vision under challenging conditions (lighting, occlusion)',
  },
  {
    title: 'Cyber-Physical Systems',
    objectives: 'Bridging software, hardware, and physical processes',
    activeWork: 'Designing integrated IoT and control architectures',
    directions: 'Resilient systems with real-time feedback loops',
  },
]

export function CurrentFocus() {
  return (
    <section className="py-16 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">01</div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Active research and development directions in embedded AI, robotics, computer vision, and cyber-physical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="p-4 bg-card/50 border border-border-subtle rounded hover:border-accent/50 transition-colors duration-200 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                    {area.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {area.activeWork}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

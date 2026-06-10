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
    <section className="py-20 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Current Focus</h2>
          <p className="text-muted-foreground text-lg">
            Active areas of work and ongoing research directions shaping my engineering practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-200 group"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 group-hover:text-accent transition-colors duration-200">
                {area.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Current Objectives
                  </p>
                  <p className="text-sm text-foreground">{area.objectives}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Active Work
                  </p>
                  <p className="text-sm text-foreground">{area.activeWork}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Future Directions
                  </p>
                  <p className="text-sm text-foreground">{area.directions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

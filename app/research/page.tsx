import { Navigation } from '@/components/Navigation'

const publications = [
  {
    title: 'Efficient Edge AI Inference with Adaptive Model Quantization',
    authors: 'Author Name et al.',
    venue: 'IEEE IoT Conference 2024',
    date: 'June 2024',
    type: 'paper',
    abstract: 'Presents a framework for dynamic quantization of neural networks optimized for heterogeneous edge devices with varying computational capabilities.',
  },
  {
    title: 'Systems Integration for Autonomous Robotics in Complex Environments',
    authors: 'Author Name et al.',
    venue: 'Robotics Science and Systems 2024',
    date: 'July 2024',
    type: 'conference',
    abstract: 'Explores design patterns for integrating perception, planning, and control in autonomous systems operating in GPS-denied and dynamically changing environments.',
  },
  {
    title: 'Technical Report: Cyber-Physical Systems Design Principles',
    authors: 'Author Name',
    venue: 'Research Lab Technical Series',
    date: 'May 2024',
    type: 'technical-report',
    abstract: 'In-depth exploration of design methodologies for building resilient cyber-physical systems with emphasis on real-time constraints and fault tolerance.',
  },
]

const researchProjects = [
  {
    title: 'Adaptive Control for Resource-Constrained Autonomous Systems',
    description: 'Developing control algorithms that optimize performance under varying computational and power constraints.',
    status: 'active',
    focus: ['Control Theory', 'Robotics', 'Embedded Systems'],
  },
  {
    title: 'Interpretable Machine Learning for Critical Systems',
    description: 'Creating ML models with explainability properties suitable for safety-critical applications.',
    status: 'active',
    focus: ['Machine Learning', 'Interpretability', 'Safety'],
  },
  {
    title: 'Distributed Intelligence for IoT Networks',
    description: 'Designing architectures for collective intelligence emerging from distributed edge computing.',
    status: 'completed',
    focus: ['Distributed Systems', 'Edge Computing', 'AI'],
  },
]

export const metadata = {
  title: 'Research - Intelligent Systems Engineer',
  description: 'Publications, research projects, and technical investigations in machine learning, robotics, embedded systems, and intelligent systems.',
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="py-24">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Research & Innovation</h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              Publications, research projects, and technical investigations in intelligent systems design and engineering.
            </p>
          </div>

          {/* Publications */}
          <div className="mb-24">
            <div className="mb-12 pb-8 border-b border-border-subtle/50">
              <h2 className="text-2xl font-bold text-foreground">Publications</h2>
            </div>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <article key={index} className="bg-card/30 border border-border-subtle/50 rounded-lg p-6 hover:bg-card/50 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{pub.title}</h3>
                      <div className="space-y-0.5 text-xs text-muted-foreground">
                        <p className="font-medium">{pub.authors}</p>
                        <p>
                          <span className="text-accent">{pub.venue}</span>
                          <span className="mx-2 text-border-subtle">•</span>
                          <span>{pub.date}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground px-2.5 py-1 bg-accent/8 border border-accent/20 rounded flex-shrink-0 self-start sm:self-center font-semibold">
                      {pub.type === 'paper' ? 'Paper' : pub.type === 'conference' ? 'Conference' : 'Technical Report'}
                    </span>
                  </div>
                  {pub.abstract && (
                    <p className="text-xs text-foreground/75 leading-relaxed">{pub.abstract}</p>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div>
            <div className="mb-12 pb-8 border-b border-border-subtle/50">
              <h2 className="text-2xl font-bold text-foreground">Active Research</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchProjects.map((project, index) => (
                <div
                  key={index}
                  className={`p-6 border rounded-lg transition-all duration-200 ${
                    project.status === 'active'
                      ? 'bg-card/50 border-border-subtle/60 hover:bg-card/70 hover:border-border-subtle'
                      : 'bg-card/20 border-border-subtle/40'
                  }`}
                >
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{project.title}</h3>
                    <p className="text-xs uppercase tracking-wider font-semibold">
                      <span className={project.status === 'active' ? 'text-accent' : 'text-muted-foreground/50'}>
                        {project.status === 'active' ? '● Active' : '◯ Completed'}
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-foreground/75 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.focus.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-accent/8 text-accent rounded border border-accent/20 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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

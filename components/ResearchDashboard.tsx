'use client'

import Link from 'next/link'

interface Publication {
  title: string
  authors: string
  venue: string
  date: string
  type: 'paper' | 'conference' | 'technical-report'
  url?: string
  abstract?: string
}

interface ResearchProject {
  title: string
  description: string
  status: 'active' | 'completed'
  focus: string[]
}

const publications: Publication[] = [
  {
    title: 'Efficient Edge AI Inference with Adaptive Model Quantization',
    authors: 'Author Name et al.',
    venue: 'IEEE IoT Conference 2024',
    date: 'June 2024',
    type: 'paper',
    abstract:
      'Presents a framework for dynamic quantization of neural networks optimized for heterogeneous edge devices with varying computational capabilities.',
  },
  {
    title: 'Systems Integration for Autonomous Robotics in Complex Environments',
    authors: 'Author Name et al.',
    venue: 'Robotics Science and Systems 2024',
    date: 'July 2024',
    type: 'conference',
    abstract:
      'Explores design patterns for integrating perception, planning, and control in autonomous systems operating in GPS-denied and dynamically changing environments.',
  },
  {
    title: 'Technical Report: Cyber-Physical Systems Design Principles',
    authors: 'Author Name',
    venue: 'Research Lab Technical Series',
    date: 'May 2024',
    type: 'technical-report',
    abstract:
      'In-depth exploration of design methodologies for building resilient cyber-physical systems with emphasis on real-time constraints and fault tolerance.',
  },
]

const researchProjects: ResearchProject[] = [
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

export function ResearchDashboard() {
  return (
    <section id="research" className="py-20 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">03</div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Research & Innovation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Publications, research projects, and technical investigations in intelligent systems design and engineering.
          </p>
        </div>

        {/* Publications Section */}
        <div className="mb-20">
          <div className="mb-10 pb-8 border-b border-border-subtle">
            <h3 className="text-xl font-bold text-foreground">Publications</h3>
          </div>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <article key={index} className="border-b border-border-subtle pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h4>
                    <div className="space-y-0.5 text-sm text-muted-foreground">
                      <p>{pub.authors}</p>
                      <p>
                        <span className="text-accent">{pub.venue}</span>
                        <span className="mx-1">•</span>
                        <span>{pub.date}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground px-3 py-1 bg-card border border-border-subtle rounded flex-shrink-0 self-start sm:self-center">
                    {pub.type === 'paper' ? 'Paper' : pub.type === 'conference' ? 'Conference' : 'Technical Report'}
                  </span>
                </div>
                {pub.abstract && (
                  <p className="text-sm text-foreground/80 leading-relaxed mb-3">{pub.abstract}</p>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent hover:text-accent-active transition-colors duration-200"
                  >
                    View Publication →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Research Projects Section */}
        <div>
          <div className="mb-10 pb-8 border-b border-border-subtle">
            <h3 className="text-xl font-bold text-foreground">Active Research</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <div
                key={index}
                className={`p-6 border rounded-lg ${
                  project.status === 'active'
                    ? 'border-accent/30 bg-card hover:border-accent/50'
                    : 'border-border-subtle bg-card/30'
                } transition-colors duration-200`}
              >
                <div className="mb-3">
                  <h4 className="text-base font-semibold text-foreground mb-1">{project.title}</h4>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {project.status === 'active' ? '● Active' : '○ Completed'}
                  </p>
                </div>
                <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.focus.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

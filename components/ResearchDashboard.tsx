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

const openProblems = [
  'How to design learning systems that are robust to distribution shift and adversarial inputs',
  'Efficient methods for transferring learned models across heterogeneous hardware platforms',
  'Real-time optimization under hard deadlines for physical systems',
  'Principled integration of learning and classical control theory',
]

export function ResearchDashboard() {
  return (
    <section id="research" className="py-20 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Research & Innovation</h2>
          <p className="text-muted-foreground text-lg">
            Active research projects, publications, and technical exploration in intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Research Projects */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-8">Research Projects</h3>
            <div className="space-y-6">
              {researchProjects.map((project, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <h4 className="text-lg font-semibold text-foreground flex-1">{project.title}</h4>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
                        project.status === 'active'
                          ? 'bg-accent-secondary/20 text-accent-secondary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.focus.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-8">Publications</h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <article key={index} className="p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors duration-200">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{pub.authors}</p>
                      <p>
                        <span className="text-accent-secondary">{pub.venue}</span> • {pub.date}
                      </p>
                    </div>
                  </div>

                  {pub.abstract && <p className="text-sm text-foreground mb-4 leading-relaxed">{pub.abstract}</p>}

                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground px-3 py-1 bg-muted rounded-full">
                      {pub.type === 'paper' ? 'Research Paper' : pub.type === 'conference' ? 'Conference' : 'Technical Report'}
                    </span>
                    {pub.url && (
                      <Link
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-accent hover:text-accent-active transition-colors duration-200"
                      >
                        Read →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Open Problems */}
        <div className="mt-16 pt-16 border-t border-border-subtle">
          <h3 className="text-2xl font-bold text-foreground mb-8">Open Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openProblems.map((problem, index) => (
              <div
                key={index}
                className="p-6 bg-card/50 border border-border rounded-lg hover:border-accent-secondary transition-colors duration-200"
              >
                <p className="text-foreground leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

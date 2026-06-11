'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  overview: string
  problem: string
  architecture: string
  keyDecisions: string
  technologies: string[]
  image: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  overview,
  problem,
  architecture,
  keyDecisions,
  technologies,
  image,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors duration-200 group flex flex-col">
      {/* Project Image - Larger visual footprint */}
      <div className="relative h-72 bg-muted overflow-hidden flex-shrink-0 shadow-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-5 flex-1 flex flex-col">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">{title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">{overview}</p>
        </div>

        <div className="space-y-3 flex-1">
          <div className="bg-card/50 rounded p-3 border border-border-subtle/50">
            <p className="text-xs uppercase tracking-wider text-accent/70 mb-1 font-semibold">Problem</p>
            <p className="text-xs text-foreground leading-relaxed">{problem}</p>
          </div>

          <div className="bg-card/50 rounded p-3 border border-border-subtle/50">
            <p className="text-xs uppercase tracking-wider text-accent/70 mb-1 font-semibold">Architecture</p>
            <p className="text-xs text-foreground leading-relaxed">{architecture}</p>
          </div>

          <div className="bg-card/50 rounded p-3 border border-border-subtle/50">
            <p className="text-xs uppercase tracking-wider text-accent/70 mb-1 font-semibold">Key Decisions</p>
            <p className="text-xs text-foreground leading-relaxed">{keyDecisions}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-auto pt-4 border-t border-border-subtle/50">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Technologies</p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-accent/8 text-accent text-xs font-medium rounded border border-accent/20 hover:border-accent/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground text-xs font-semibold rounded transition-colors duration-200"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Link>
        )}
      </div>
    </article>
  )
}

import Link from 'next/link'
import Image from 'next/image'

interface FeaturedProjectProps {
  title: string
  overview: string
  problem: string
  architecture: string
  keyDecisions: string
  technologies: string[]
  image: string
  githubUrl: string
  imagePosition: 'left' | 'right'
}

export function FeaturedProject({
  title,
  overview,
  problem,
  architecture,
  keyDecisions,
  technologies,
  image,
  githubUrl,
  imagePosition,
}: FeaturedProjectProps) {
  const isImageLeft = imagePosition === 'left'

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start py-24 px-6 border-t border-border-subtle/50`}>
      {/* Image Container - Balanced prominence */}
      <div className={`${isImageLeft ? 'order-1' : 'order-2'}`}>
        <div className="relative aspect-video rounded-lg border border-border-subtle/60 overflow-hidden bg-card/40 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Overlay accent */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-background/15" />
        </div>
      </div>

      {/* Content Container */}
      <div className={`space-y-6 ${isImageLeft ? 'order-2' : 'order-1'}`}>
        <div className="bg-card/40 rounded-lg p-6 border border-border-subtle/50">
          <div className="text-accent text-xs font-semibold mb-3 uppercase tracking-widest">Case Study</div>
          <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">{title}</h3>
          <p className="text-sm text-foreground/80 leading-relaxed">{overview}</p>
        </div>

        {/* Problem */}
        <div className="bg-card/30 rounded-lg p-5 border border-border-subtle/40">
          <h4 className="text-xs font-semibold text-accent/80 uppercase tracking-widest mb-3">Problem</h4>
          <p className="text-foreground/75 text-sm leading-relaxed">{problem}</p>
        </div>

        {/* Architecture */}
        <div className="bg-card/30 rounded-lg p-5 border border-border-subtle/40">
          <h4 className="text-xs font-semibold text-accent/80 uppercase tracking-widest mb-3">Architecture</h4>
          <p className="text-foreground/75 text-sm leading-relaxed">{architecture}</p>
        </div>

        {/* Key Decisions */}
        <div className="bg-card/30 rounded-lg p-5 border border-border-subtle/40">
          <h4 className="text-xs font-semibold text-accent/80 uppercase tracking-widest mb-3">Engineering Decisions</h4>
          <p className="text-foreground/75 text-sm leading-relaxed">{keyDecisions}</p>
        </div>

        {/* Technologies */}
        <div className="pt-2">
          <h4 className="text-xs font-semibold text-accent/70 uppercase tracking-widest mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-card/50 border border-border-subtle/40 rounded text-xs font-semibold text-foreground/75 hover:bg-card/70 hover:text-foreground transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="pt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded hover:bg-accent-active hover:shadow-md transition-all duration-200"
          >
            View on GitHub
            <span className="text-sm">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

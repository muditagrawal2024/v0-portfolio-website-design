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
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start py-20 px-6 border-t border-border-subtle`}>
      {/* Image Container - 60% visual prominence */}
      <div className={`${isImageLeft ? 'order-1 lg:col-span-2' : 'order-2 lg:col-span-2'}`}>
        <div className="relative aspect-video rounded-lg border border-border-subtle overflow-hidden bg-card/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Overlay accent */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-background/20" />
        </div>
      </div>

      {/* Content Container */}
      <div className={`space-y-6 lg:col-span-1 ${isImageLeft ? 'order-2' : 'order-1'}`}>
        <div className="bg-card/50 rounded-lg p-6 border border-border-subtle/50">
          <div className="text-accent text-xs font-semibold mb-3 uppercase tracking-wider">Case Study</div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{overview}</p>
        </div>

        {/* Problem */}
        <div className="bg-card/30 rounded-lg p-4 border border-border-subtle/50">
          <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Problem</h4>
          <p className="text-foreground text-xs leading-relaxed">{problem}</p>
        </div>

        {/* Architecture */}
        <div className="bg-card/30 rounded-lg p-4 border border-border-subtle/50">
          <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Architecture</h4>
          <p className="text-foreground text-xs leading-relaxed">{architecture}</p>
        </div>

        {/* Key Decisions */}
        <div className="bg-card/30 rounded-lg p-4 border border-border-subtle/50">
          <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Engineering Decisions</h4>
          <p className="text-foreground text-xs leading-relaxed">{keyDecisions}</p>
        </div>

        {/* Technologies */}
        <div className="pt-4">
          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-card border border-border-subtle rounded text-xs font-semibold text-foreground hover:bg-card/80 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent-active transition-colors duration-200"
          >
            View on GitHub
            <span className="text-sm">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

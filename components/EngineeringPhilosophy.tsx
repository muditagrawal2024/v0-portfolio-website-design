'use client'

export function EngineeringPhilosophy() {
  return (
    <section className="py-20 px-6 border-t border-border-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">Perspective</div>
        <h2 className="text-4xl font-bold text-foreground mb-12">Engineering Philosophy</h2>

        <div className="space-y-8 text-lg leading-relaxed text-foreground">
          <p>
            Intelligent systems emerge when software, machine learning, hardware, and automation are designed as a{' '}
            <span className="text-accent font-semibold">single integrated system</span> rather than independent
            technologies bolted together.
          </p>

          <p>
            Too often, we treat these domains in isolation—training models separately from hardware constraints,
            designing software without understanding physical limitations, automating processes without considering
            system-wide interactions. This siloed approach leads to brittle systems that fail in unexpected ways.
          </p>

          <p>
            The systems I design start from a fundamental question:{' '}
            <span className="italic text-muted-foreground">
              &ldquo;What are the constraints, trade-offs, and emergent behaviors when these domains interact?&rdquo;
            </span>
          </p>

          <p>
            This means:
          </p>

          <ul className="space-y-4 pl-6">
            <li className="flex gap-4">
              <span className="text-accent-secondary flex-shrink-0 mt-1">→</span>
              <span>
                <strong>Hardware-aware AI:</strong> Understanding how model architecture, quantization, and inference
                methods interact with embedded systems capabilities
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent-secondary flex-shrink-0 mt-1">→</span>
              <span>
                <strong>Physics-informed software:</strong> Designing control algorithms that account for real-world
                dynamics, latency, and sensor noise
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent-secondary flex-shrink-0 mt-1">→</span>
              <span>
                <strong>Systems thinking:</strong> Anticipating how changes in one subsystem propagate and affect
                overall behavior
              </span>
            </li>
          </ul>

          <p>
            This integrated approach requires deep technical knowledge across multiple domains, but more importantly,
            it requires the discipline to understand where boundaries exist and why they matter.
          </p>

          <p className="text-muted-foreground italic border-l-4 border-accent pl-6 py-4">
            &ldquo;The best engineering is often invisible—not because it&apos;s hidden, but because the system works
            so well that its complexity disappears.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}

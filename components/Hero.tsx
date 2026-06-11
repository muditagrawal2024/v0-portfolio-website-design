'use client'

import { SystemsVisualization } from './SystemsVisualization'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Building Intelligent Systems
              </h1>
              <div className="mt-3 sm:mt-4 text-lg sm:text-xl text-accent font-semibold">
                Intelligent Systems Engineer
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 flex items-center gap-7">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-muted-foreground hover:text-accent transition-all duration-200 hover:opacity-80"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-muted-foreground hover:text-accent transition-all duration-200 hover:opacity-80"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-xs font-semibold text-muted-foreground hover:text-accent transition-all duration-200 hover:opacity-80"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Designing integrated systems where machine learning, embedded systems, robotics, and software engineering converge. Creating intelligent solutions for real-world problems.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link
                href="/projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent-active hover:shadow-md transition-all duration-200 text-center text-xs sm:text-sm active:scale-95"
              >
                Explore Work
              </Link>
              <Link
                href="/research"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 hover:border-accent/80 transition-all duration-200 text-center text-xs sm:text-sm active:scale-95"
              >
                View Research
              </Link>
            </div>
          </div>

          {/* Right Side - Systems Visualization */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="w-full max-w-md">
              <SystemsVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

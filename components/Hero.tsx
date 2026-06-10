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
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
                Integrating machine learning, embedded hardware, robotics, and software engineering to solve real-world engineering challenges.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I&apos;m passionate about designing integrated systems where hardware, software, machine learning, and automation work together as a unified whole. My approach centers on understanding constraints, trade-offs, and emergent behaviors across technical domains to create solutions that are both intelligent and practical.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent-active transition-colors duration-200 text-center text-sm sm:text-base"
              >
                Explore Projects
              </Link>
              <Link
                href="#research"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-200 text-center text-sm sm:text-base"
              >
                Research & Innovation
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border border-muted-foreground text-muted-foreground font-semibold rounded-lg hover:text-foreground hover:border-foreground transition-colors duration-200 text-center text-sm sm:text-base"
              >
                Download Resume
              </a>
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

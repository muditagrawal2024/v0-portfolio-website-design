'use client'

export function BlueprintAccent() {
  return (
    <svg
      className="absolute -top-10 -right-10 w-40 h-40 opacity-5 pointer-events-none"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)" />
      
      {/* Technical diagram lines */}
      <g strokeWidth="0.3" stroke="currentColor" fill="none" opacity="0.3">
        <circle cx="30" cy="30" r="5" />
        <circle cx="70" cy="30" r="5" />
        <circle cx="50" cy="70" r="5" />
        <line x1="30" y1="30" x2="70" y2="30" />
        <line x1="30" y1="30" x2="50" y2="70" />
        <line x1="70" y1="30" x2="50" y2="70" />
      </g>
    </svg>
  )
}

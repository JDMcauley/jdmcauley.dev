"use client"

const paragraph = `From the moment I debugged my first line of code, I knew I was hooked. I chase the thrill of transforming napkin sketches into living applications, and the web has become my canvas. My journey began with scrappy PHP experiments, evolved through the structured elegance of Java and C#, and ultimately found a home in the vibrant ecosystem of JavaScript and TypeScript. I live for the full stack: sculpting expressive UIs in React, choreographing state with Next.js, and guiding data through MongoDB and PostgreSQL. Express and Node keep the beats pulsing while I weave in authentication, caching, and the occasional quantum of whimsy. Away from the screen, I devour tech blogs, mentor budding coders, and sketch architecture diagrams on the back of coffee receipts. Each project is a playground where I learn, unlearn, and break things just to rebuild them better. If you need someone who embraces change, respects deadlines, and still gets excited by a clean git diff, I'm your developer. My toolbox includes tests, continuous integration, and a relentless curiosity that refuses to rest. I experiment with animation libraries, dabble in serverless functions, and keep a sketchbook of ideas for the next big thing that sparks my imagination.`

const techs = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#ffffff" },
  { label: "JS/TS", color: "#F7DF1E" },
  { label: "MongoDB", color: "#47A248" },
  { label: "Postgres", color: "#336791" },
  { label: "Express", color: "#ffffff" },
  { label: "Node.js", color: "#339933" },
]

function TechIcon({ label, color }: { label: string; color: string }) {
  return (
    <svg
      key={label}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-16 h-16 drop-shadow-lg"
    >
      <circle cx="50" cy="50" r="45" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="4" />
      <text x="50" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill={color}>
        {label}
      </text>
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-emerald-600 text-white">
      <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">JD McAuley</h1>
      <p className="max-w-3xl text-lg leading-relaxed">{paragraph}</p>
      <div className="flex gap-8">
        <a
          href="https://github.com/jdmcauley"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jdmcauley"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
        >
          LinkedIn
        </a>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
        {techs.map((tech) => (
          <TechIcon key={tech.label} label={tech.label} color={tech.color} />
        ))}
      </div>
    </main>
  )
}

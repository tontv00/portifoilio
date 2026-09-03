export default function TechCard() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Git",
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Stack Principal
      </h3>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-between"
          >
            <span className="text-slate-300">
              {skill}
            </span>

            <div className="h-2 w-2 rounded-full bg-blue-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
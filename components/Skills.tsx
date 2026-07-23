export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#111827] py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Technical Skills
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          Technologies and tools I use while learning and building database solutions.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Database */}

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="text-xl font-semibold">
              Database
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>✓ PostgreSQL</li>

              <li>✓ MySQL</li>

              <li>✓ SQL Server</li>

            </ul>

          </div>

          {/* Operating System */}

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="text-xl font-semibold">
              Operating System
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>✓ Linux (Ubuntu)</li>

              <li>✓ Windows Server</li>

            </ul>

          </div>

          {/* Tools */}

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="text-xl font-semibold">
              Tools
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>✓ Docker</li>

              <li>✓ Git & GitHub</li>

              <li>✓ VS Code</li>

            </ul>

          </div>

          {/* Programming */}

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="text-xl font-semibold">
              Programming
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>✓ SQL</li>

              <li>✓ JavaScript</li>

              <li>✓ TypeScript</li>

            </ul>

          </div>

          {/* Infrastructure */}

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="text-xl font-semibold">
              Infrastructure
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>✓ Basic Networking</li>

              <li>✓ Server Administration</li>

            </ul>

          </div>

          {/* Learning */}

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="text-xl font-semibold">
              Currently Learning
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">

              <li>📘 PostgreSQL Administration</li>

              <li>📘 Docker</li>

              <li>📘 Linux Server</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}
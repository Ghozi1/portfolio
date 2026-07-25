export default function Hero() {
  return (
    <section className="min-h-screen pt-5 bg-[#0F172A] text-white flex items-center justify-center px-6">

      <div className="max-w-4xl text-center">

        <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
          Portfolio
        </p>

        <div className="mt-6 inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
          ● Available for Opportunities
        </div>

        <h1 className="mt-8 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
          Muhammad Ghozi Al Ghifari
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-blue-400">
          Junior Database Administrator
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm border border-slate-700">
                PostgreSQL
            </span>

            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm border border-slate-700">
                MySQL
            </span>

            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm border border-slate-700">
                SQL Server
            </span>

            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm border border-slate-700">
                Linux
            </span>

            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm border border-slate-700">
                Docker
            </span>

            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm border border-slate-700">
                Git
            </span>
        </div>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
          Passionate about database management,
          SQL optimization, database design,
          and building reliable data solutions.
          Currently learning PostgreSQL, Linux,
          Docker, and server administration.
        </p>

        <div className="mt-12 flex justify-center gap-5">

          <button
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
          >
            Download CV
          </button>

          <a
            href="#projects"
            className="rounded-xl border border-slate-600 px-8 py-3 transition hover:border-blue-500 hover:text-blue-400"
          >
            View Projects
          </a>

        </div>

      </div>

    </section>
  );
}
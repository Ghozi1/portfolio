import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-6">
            Available for Opportunities
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            Muhammad Ghozi Al Ghifari
          </h1>

          <p className="mt-4 text-xl text-blue-400 font-medium">
            Junior Database Administrator
          </p>

          <p className="mt-3 text-slate-400">
            PostgreSQL • MySQL • SQL Server
          </p>

          <p className="mt-2 text-slate-400">
            Front End Developer
          </p>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8">
            Passionate about database management, SQL optimization,
            database design, and building reliable data solutions.
            Currently developing my skills in PostgreSQL, MySQL,
            Linux, and database administration.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
              Download CV
            </button>

            <button className="border border-slate-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-xl transition">
              GitHub
            </button>

          </div>
        </div>
      </main>
    </>
  );
}
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-5xl font-bold">
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

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-8">
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
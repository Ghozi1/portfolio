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

          <p className="mt-4 text-xl text-slate-400">
            Server Infrastructure Engineer
          </p>

          <p className="mt-2 text-slate-400">
            Database Administrator
          </p>

          <p className="mt-2 text-slate-400">
            Front End Developer
          </p>

          <p className="mt-6 text-slate-500 max-w-xl mx-auto">
            Building reliable infrastructure and modern web applications.
          </p>

        </div>
      </main>
    </>
  );
}
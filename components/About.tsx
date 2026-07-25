export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0F172A] py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          About Me
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          A brief introduction about my background and career goals.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h3 className="text-2xl font-semibold">
              Who am I?
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              I am an aspiring Database Administrator with experience in SQL,
              database design, and application development. I enjoy solving
              database problems, optimizing queries, and learning technologies
              related to PostgreSQL, Linux, Docker, and server infrastructure.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My goal is to build reliable database systems while continuously
              improving my skills in database administration and infrastructure.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-8">

            <h3 className="text-2xl font-semibold">
              Quick Information
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span className="text-slate-400">Name</span>
                <span>Muhammad Ghozi Al Ghifari</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Role</span>
                <span>Junior Database Administrator</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Location</span>
                <span>Bekasi, Indonesia</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Focus</span>
                <span>PostgreSQL & Linux</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
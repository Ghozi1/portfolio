export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            I'm currently looking for opportunities as a Junior Database
            Administrator. Feel free to reach out for job opportunities,
            collaborations, or professional networking.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-semibold">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:mghozihifar04@gmail.com"
                    className="text-lg hover:text-blue-400"
                  >
                    mghozihifar04@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/Ghozi1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400"
                  >
                    github.com/Ghozi1
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="text-lg">
                    Bekasi, West Java, Indonesia
                  </p>
                </div>

              </div>
            </div>

            <div className="flex flex-col justify-center">

              <h3 className="text-2xl font-semibold">
                Download My CV
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Download my latest resume to learn more about my education,
                technical skills, and projects.
              </p>

              <a
                href="/cv/Muhammad-Ghozi-Al-Ghifari-CV.pdf"
                className="mt-8 w-fit rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
              >
                Download CV
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
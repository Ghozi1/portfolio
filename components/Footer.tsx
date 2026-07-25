export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Muhammad Ghozi Al Ghifari. All rights
          reserved.
        </p>

        <p className="text-sm">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
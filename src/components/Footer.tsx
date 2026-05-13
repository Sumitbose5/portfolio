export default function Footer() {
  return (
    <footer className="px-4 md:px-8 pb-10">
      <div className="max-w-7xl mx-auto border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">
          © 2026 Sumit Kumar Bose
        </p>

        <p className="text-sm text-neutral-500">
          Crafted with React & TypeScript
        </p>
      </div>
    </footer>
  );
}
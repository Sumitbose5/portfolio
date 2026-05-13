import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full px-3 py-3 sm:px-4 md:px-8 md:py-4"
    >
      <div className="glass mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6 md:py-4">
        <h1 className="title-font min-w-0 truncate text-lg font-semibold sm:text-xl md:text-2xl">
          Sumit Kumar Bose
        </h1>

        <div className="flex shrink-0 items-center gap-3 text-sm sm:gap-6 md:text-base">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 pb-16 pt-28 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="glass w-full max-w-6xl rounded-[32px] p-6 sm:p-10 md:rounded-[40px] md:p-20"
      >
        <p className="mb-5 text-xs uppercase tracking-[0.24em] text-neutral-600 sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
          Full Stack Developer
        </p>

        <h1 className="title-font max-w-5xl text-4xl leading-tight sm:text-5xl md:text-7xl">
          Designing scalable systems with elegant user experiences.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-700 md:mt-8 md:text-lg">
          Full stack developer focused on real-world applications,
          AI-powered systems, scalable backend architecture,
          and polished frontend experiences.
        </p>
      </motion.div>
    </section>
  );
}

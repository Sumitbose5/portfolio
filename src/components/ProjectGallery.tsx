import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectGallery({
  images,
  title,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 sm:mt-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass overflow-hidden rounded-[28px] p-3 sm:p-4"
      >
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-950/5 sm:aspect-video">
          <img
            src={images[activeIndex]}
            alt={`${title} screenshot ${activeIndex + 1}`}
            className="h-full w-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-black shadow-lg backdrop-blur transition hover:bg-white"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-black shadow-lg backdrop-blur transition hover:bg-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>
      </motion.div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={activeIndex === index}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-9 bg-black"
                  : "w-2.5 bg-black/25 hover:bg-black/45"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

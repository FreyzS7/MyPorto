"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const SquareTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="fixed inset-0 z-50 pointer-events-none flex">
        {/* Left Square */}
        <motion.div
          className="h-full bg-slate-950"
          initial={{ width: "50vw", x: 0 }}
          animate={{ width: 0 }}
          exit={{ width: "50vw", x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,  // Slower open
            exit: { duration: 0.8 }, // Faster close
          }}
        />

        {/* Right Square */}
        <motion.div
          className="h-full bg-slate-950"
          initial={{ width: "50vw", x: 0 }}
          animate={{ width: 0 }}
          exit={{ width: "50vw", x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,  // Slower open
            exit: { duration: 0.8 }, // Faster close
          }}
          style={{ marginLeft: "auto" }} // Positions it on the right
        />
      </div>
    </AnimatePresence>
  );
};

export default SquareTransition;

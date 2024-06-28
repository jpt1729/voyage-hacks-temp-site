"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HoustonText({}) {
  const [hoverStatus, setHoverStatus] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => {
        setHoverStatus(true);
      }}
      onMouseLeave={() => {
        setHoverStatus(false);
      }}
      animate={hoverStatus ? "hover" : "no-hover"}
      className="relative underline underline-offset-4 text-purple-500"
    >
      Houston, Texas¹
      <AnimatePresence>
        {hoverStatus && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className="absolute text-black bg-white p-5 rounded top-7 shadow left-0 w-max z-50 flex"
          >
            <span className="text-purple-500">¹</span>
            <p className="underline decoration-purple-500">
              The best city in Texas.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.span>
  );
}

import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function SongCard({ img, title, transitionDelay }) {
  return (
    <motion.div
      className="m-card-wrapper"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: transitionDelay }}
    >
      <img src={img} alt={title} />
      <p className="m-card-song-title">{title}</p>
    </motion.div>
  );
}

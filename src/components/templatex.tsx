"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Templatex ({ children }: { children:React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

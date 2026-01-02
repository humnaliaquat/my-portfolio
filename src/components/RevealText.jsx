"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RevealText({ children, delay = 0, className = "" }) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Recursively wrap text inside children
  const wrapChildren = (child) => {
    if (typeof child === "string") {
      return child.split(" ").map((word, i) => (
        <motion.span key={i} variants={item} className="inline-block mr-1">
          {word}
        </motion.span>
      ));
    }

    if (React.isValidElement(child) && child.props.children) {
      // Clone element and wrap its children recursively
      return React.cloneElement(child, {
        ...child.props,
        children: React.Children.map(child.props.children, wrapChildren),
      });
    }

    return child; // fallback for anything else
  };

  const content = React.Children.map(children, wrapChildren);

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {content}
    </motion.p>
  );
}

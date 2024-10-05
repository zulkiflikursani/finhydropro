"use client";
import { inView, animate } from "framer-motion";
import { useEffect } from "react";

export default function InViewSection() {
  useEffect(() => {
    inView("section", (info) => {
      const animation = animate(info.target, { opacity: 1 });
      return (leaveInfo) => animation.stop();
    });
  }, []);

  return null;
}

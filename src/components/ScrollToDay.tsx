"use client";

import { useEffect } from "react";

export function ScrollToDay({ slug }: { slug: string }) {
  useEffect(() => {
    const node = document.getElementById(slug);
    if (!node) return;

    window.requestAnimationFrame(() => {
      node.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }, [slug]);

  return null;
}

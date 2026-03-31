"use client";

import { useEffect, useRef, useState } from "react";

export default function AutoIframe({ src, title }: { src: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1);

  useEffect(() => {
    // Method 1: postMessage from iframe
    function handleMessage(e: MessageEvent) {
      if (e.data && typeof e.data.diagramHeight === "number" && e.data.diagramHeight > 10) {
        setHeight(e.data.diagramHeight);
      }
    }
    window.addEventListener("message", handleMessage);

    // Method 2: direct DOM measurement (same-origin only)
    function measureDirect() {
      const iframe = iframeRef.current;
      if (!iframe) return;
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;
        // Force html/body small so they don't inflate
        const html = doc.documentElement;
        const body = doc.body;
        if (html) html.style.height = "1px";
        if (body) body.style.height = "1px";
        // Measure the .diagram element directly
        const diagram = doc.querySelector(".diagram") as HTMLElement;
        if (diagram) {
          const h = diagram.offsetHeight;
          if (h > 10) setHeight(h);
        }
      } catch (_) {
        // cross-origin: rely on postMessage only
      }
    }

    const iframe = iframeRef.current;
    const onLoad = () => {
      measureDirect();
      setTimeout(measureDirect, 100);
      setTimeout(measureDirect, 300);
      setTimeout(measureDirect, 800);
    };
    if (iframe) {
      iframe.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("message", handleMessage);
      if (iframe) iframe.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      className="w-full border-0"
      scrolling="no"
      style={{ height: `${height}px`, overflow: "hidden", display: "block" }}
    />
  );
}

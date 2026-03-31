"use client";

import { useEffect, useRef, useState } from "react";

export default function AutoIframe({ src, title }: { src: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data && typeof e.data.diagramHeight === "number") {
        setHeight(e.data.diagramHeight);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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

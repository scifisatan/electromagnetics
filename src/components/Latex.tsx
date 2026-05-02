import katex from "katex";
import "katex/dist/katex.min.css";
import { useMemo } from "react";

interface LatexProps {
  content: string;
  className?: string;
}

export function Latex({ content, className }: LatexProps) {
  const renderedContent = useMemo(() => {
    if (!content) return "";

    // Replace display math: $$...$$
    let html = content.replace(/\$\$(.*?)\$\$/gs, (_, math) => {
      try {
        return katex.renderToString(math, { displayMode: true, throwOnError: false });
      } catch {
        return `$$\${math}$\$`;
      }
    });

    // Replace inline math: $...$
    // Using a more careful regex to avoid matching $ in normal text (though unlikely in this context)
    html = html.replace(/\$(.*?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math, { displayMode: false, throwOnError: false });
      } catch {
        return `$\${math}\$`;
      }
    });

    return html;
  }, [content]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: renderedContent }} />;
}

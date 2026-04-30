import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import type { Question } from "../data/questions";
import { useQuestionData } from "../hooks/useQuestionData";
import { saveImage, loadImage } from "../lib/imageStorage";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  imagePlugin,
  linkPlugin,
  linkDialogPlugin,
  type MDXEditorMethods,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

interface QuestionDetailProps {
  question: Question;
  onBack: () => void;
}

export function QuestionDetail({ question, onBack }: QuestionDetailProps) {
  const questionId = `${question.year}-${question.qno}-${question.t}`;
  const {
    notes: storedNotes,
    isDone,
    setNotes: setStoredNotes,
    setIsDone,
  } = useQuestionData(questionId);
  const questionRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<MDXEditorMethods>(null);
  const [initialMarkdown, setInitialMarkdown] = useState<string | null>(null);

  // 1. Resolve stored idb:// URLs to data URLs ONCE on mount or when question changes
  useEffect(() => {
    let isMounted = true;
    const resolve = async () => {
      const idbRegex = /idb:\/\/(img_[a-z0-9_]+)/g;
      let md = storedNotes;
      const matches = [...storedNotes.matchAll(idbRegex)];

      for (const match of matches) {
        const fullMatch = match[0];
        const id = match[1];
        const data = await loadImage(id);
        if (data) {
          md = md.replaceAll(fullMatch, data);
        }
      }

      if (isMounted) {
        setInitialMarkdown(md);
      }
    };
    resolve();
  }, [questionId]);

  // 2. Render Math only for the question text area
  useEffect(() => {
    if (!questionRef.current || initialMarkdown === null) return;
    renderMathInElement(questionRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }, [question, initialMarkdown]);

  // 3. Handle saving: convert data URLs back to idb:// to keep storage clean
  const handleEditorChange = async (md: string) => {
    const dataUrlRegex = /!\[.*?\]\((data:image\/[a-z]+;base64,[^)]+)\)/g;
    let mdToStore = md;
    const matches = [...md.matchAll(dataUrlRegex)];

    for (const match of matches) {
      const dataUrl = match[1];
      const id = await saveImage(dataUrl);
      mdToStore = mdToStore.replace(dataUrl, `idb://${id}`);
    }

    setStoredNotes(mdToStore);
  };

  const imageUploadHandler = async (image: File) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        await saveImage(base64);
        resolve(base64);
      };
      reader.readAsDataURL(image);
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 min-[901px]:px-8 min-[901px]:py-12 flex flex-col min-h-screen">
      <button
        onClick={onBack}
        className="mb-8 flex w-fit items-center gap-2 text-[var(--text2)] hover:text-[var(--text)] transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to questions</span>
      </button>

      <div className="mb-8" ref={questionRef}>
        <div className="flex items-start gap-4">
          <div className="font-[family:var(--serif)] text-xl font-semibold min-w-[2rem] pt-0.5 text-[var(--text2)]">
            {question.qno}.
          </div>
          <div className="flex-1">
            <div className="q-text font-[family:var(--serif)] text-xl leading-[1.8] text-[var(--text)]">
              {question.text}
              {question.sub ? (
                <div className="mt-6 flex flex-col gap-4 ml-2">
                  {question.sub.map((subQuestion, index) => (
                    <div className="flex gap-4 text-lg" key={subQuestion}>
                      <span className="text-[var(--text3)] font-medium">
                        ({String.fromCharCode(97 + index)})
                      </span>
                      <div>{subQuestion}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-3 font-[family:var(--sans)] text-sm uppercase tracking-wider font-semibold">
                <span className="rounded bg-[var(--bg3)] border border-[var(--border)] px-2 py-1 text-[var(--text2)]">
                  {question.year}
                </span>
                <span
                  className={`rounded px-2 py-1 border ${
                    question.type === "Back"
                      ? "border-red-200 bg-red-50 text-red-600"
                      : "border-emerald-200 bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {question.type}
                </span>
              </div>

              <button
                onClick={() => setIsDone(!isDone)}
                className={`ml-auto flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isDone
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    : "bg-[var(--bg2)] text-[var(--text2)] hover:bg-[var(--bg3)]"
                }`}
              >
                {isDone ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                {isDone ? "Completed" : "Mark as Done"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 border-t border-[var(--border2)] pt-12">
        <div className="flex items-center justify-between">
          <label className="font-[family:var(--serif)] text-3xl font-bold text-[var(--text)] tracking-tight">
            Notes
          </label>
          <div className="px-3 py-1 bg-[var(--bg3)] rounded-full text-xs font-bold uppercase tracking-widest text-[var(--text3)]">
            Live Preview
          </div>
        </div>

        <div className="flex-1 w-full rounded-2xl border-2 border-[var(--border)] bg-[var(--bg2)] shadow-xl overflow-hidden min-h-[600px] flex flex-col max-w-none">
          {initialMarkdown === null ? (
            <div className="flex-1 flex items-center justify-center py-20 text-[var(--text3)] animate-pulse">
              Initializing editor...
            </div>
          ) : (
            <MDXEditor
              key={questionId}
              ref={editorRef}
              markdown={initialMarkdown}
              onChange={handleEditorChange}
              placeholder="Capture your insights and derivations here..."
              className="flex-1 mdxeditor-custom"
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                imagePlugin({
                  imageUploadHandler,
                }),
              ]}
            />
          )}
        </div>
        <style>{`
          .mdxeditor-custom {
            background: transparent;
            color: var(--text);
            font-family: var(--mono);
            font-size: 1.15rem;
          }
          .mdxeditor-custom h1 { font-size: 2.25rem; font-weight: 800; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; }
          .mdxeditor-custom h2 { font-size: 1.85rem; font-weight: 700; margin-top: 1.75rem; margin-bottom: 0.75rem; }
          .mdxeditor-custom h3 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; }
          .mdxeditor-custom h4 { font-size: 1.25rem; font-weight: 600; margin-top: 1.25rem; }
          
          .mdxeditor-custom ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem; }
          .mdxeditor-custom ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1rem; }
          .mdxeditor-custom li { margin-bottom: 0.5rem; }
          
          .mdxeditor-custom blockquote {
            border-left: 4px solid var(--border);
            padding-left: 1rem;
            font-style: italic;
            color: var(--text2);
            margin: 1.5rem 0;
          }
          .mdxeditor-custom img {
            max-width: 100%;
            border-radius: 1rem;
            box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
            margin: 1.5rem 0;
            display: block;
          }
        `}</style>
      </div>
    </div>
  );
}

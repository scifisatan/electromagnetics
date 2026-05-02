import { CheckCircle2, Circle, X } from "./Icons";
import { useEffect, useRef, useState } from "react";
import { Latex } from "./Latex";
import type { Question } from "../data/questions";
import { useQuestionData } from "../hooks/useQuestionData";
import { saveImage, loadImage, deleteImage } from "../lib/imageStorage";
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

interface QuestionDetailViewProps {
  question: Question;
  onClose: () => void;
}

export function QuestionDetailView({ question, onClose }: QuestionDetailViewProps) {
  const questionId = question.id;
  const {
    notes: storedNotes,
    isDone,
    setNotes: setStoredNotes,
    setIsDone,
  } = useQuestionData(questionId);

  const questionRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<MDXEditorMethods>(null);
  const [initialMarkdown, setInitialMarkdown] = useState<string | null>(null);

  useEffect(() => {
    const idbRegex = /idb:\/\/(img_[a-z0-9_]+)/g;
    const matches = [...storedNotes.matchAll(idbRegex)];

    // Initialize trackers
    lastStoredIds.current = new Set(matches.map((m) => m[1]));

    if (matches.length === 0) {
      setInitialMarkdown(storedNotes);
      return;
    }

    setInitialMarkdown(null);
    let isMounted = true;
    const resolve = async () => {
      let md = storedNotes;
      for (const match of matches) {
        const id = match[1];
        const data = await loadImage(id);
        if (data) {
          md = md.replaceAll(match[0], data);
          base64Cache.current[data] = id;
        }
      }
      if (isMounted) setInitialMarkdown(md);
    };
    void resolve();
    return () => {
      isMounted = false;
    };
  }, [questionId, storedNotes === ""]); // Only re-run when question changes or if we were waiting for first data



  const base64Cache = useRef<Record<string, string>>({});
  const lastStoredIds = useRef<Set<string>>(new Set());

  const handleEditorChange = async (md: string) => {
    const dataUrlRegex = /!\[.*?\]\((data:image\/[a-z]+;base64,[^)]+)\)/g;
    const idbRegex = /idb:\/\/(img_[a-z0-9_]+)/g;
    let mdToStore = md;

    // 1. Process new base64 images
    for (const match of md.matchAll(dataUrlRegex)) {
      const base64 = match[1];
      let id = base64Cache.current[base64];

      if (!id) {
        id = await saveImage(base64);
        base64Cache.current[base64] = id;
      }

      mdToStore = mdToStore.replace(base64, `idb://${id}`);
    }

    // 2. Cleanup removed images
    const currentIds = new Set([...mdToStore.matchAll(idbRegex)].map((m) => m[1]));

    for (const id of lastStoredIds.current) {
      if (!currentIds.has(id)) {
        await deleteImage(id);
        // Remove from cache if present
        for (const [base64, cachedId] of Object.entries(base64Cache.current)) {
          if (cachedId === id) {
            delete base64Cache.current[base64];
            break;
          }
        }
      }
    }

    lastStoredIds.current = currentIds;
    setStoredNotes(mdToStore);
  };

  const imageUploadHandler = async (image: File) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        // We don't save here because handleEditorChange will see the base64 and save it with an ID
        resolve(base64);
      };
      reader.readAsDataURL(image);
    });
  };

  return (
    <div className="flex flex-col h-full bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--border)] flex-shrink-0">
        <button
          onClick={onClose}
          className="p-2 hover:bg-[var(--bg2)] rounded-full transition-colors text-[var(--text2)] hover:text-[var(--text)]"
        >
          <X size={20} />
        </button>
        <div className="flex flex-wrap items-center gap-2 font-[family:var(--sans)] text-[0.65rem] uppercase tracking-wider font-semibold">
          {question.occurrences.map((occ) => (
            <div
              key={`${occ.year}-${occ.qno}`}
              className="flex items-center gap-1.5 bg-[var(--bg3)] border border-[var(--border)] rounded-md px-1.5 py-0.5"
            >
              <span className="text-[var(--text2)]">
                {occ.year} ({occ.qno})
              </span>
              <span
                className={`w-1 h-1 rounded-full ${
                  occ.type === "Back" ? "bg-red-400" : "bg-emerald-400"
                }`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsDone(!isDone)}
          className={`ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            isDone
              ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
              : "bg-[var(--bg2)] text-[var(--text2)] hover:bg-[var(--bg3)]"
          }`}
        >
          {isDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
          {isDone ? "Completed" : "Mark as Done"}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Question text section */}
        <div
          ref={questionRef}
          className="px-10 py-8 border-b border-[var(--border)] max-h-[40%] overflow-y-auto bg-[var(--bg2)]/10"
        >
          <div className="flex items-start gap-5">
            <div className="font-[family:var(--serif)] text-2xl font-semibold min-w-[2.5rem] pt-0.5 text-[var(--text2)]">
              {question.occurrences[0].qno}.
            </div>
            <div className="q-text font-[family:var(--serif)] text-2xl leading-[1.8] text-[var(--text)]">
              <Latex content={question.text} />
              {question.sub ? (
                <div className="mt-8 flex flex-col gap-5 ml-2">
                  {question.sub.map((subQuestion, index) => (
                    <div className="flex gap-5 text-xl" key={subQuestion}>
                      <span className="text-[var(--text3)] font-medium">
                        ({String.fromCharCode(97 + index)})
                      </span>
                      <div>
                        <Latex content={subQuestion} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Notes editor section */}
        <div className="flex-1 overflow-hidden flex flex-col relative">
          {initialMarkdown === null ? (
            <div className="flex-1 flex items-center justify-center text-[var(--text3)] animate-pulse">
              Initializing editor...
            </div>
          ) : (
            <MDXEditor
              key={questionId}
              ref={editorRef}
              markdown={initialMarkdown}
              onChange={handleEditorChange}
              placeholder="Capture your insights and derivations here..."
              className="flex-1 mdxeditor-custom px-4"
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                imagePlugin({ imageUploadHandler }),
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const styles = `
  .mdxeditor-custom {
    background: transparent;
    color: var(--text);
    font-family: var(--mono);
    font-size: 1.15rem;
    height: 100%;
    overflow-y: auto;
  }
  .mdxeditor-custom h1 { font-size: 2.25rem; font-weight: 800; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; }
  .mdxeditor-custom h2 { font-size: 1.85rem; font-weight: 700; margin-top: 1.75rem; margin-bottom: 0.75rem; }
  .mdxeditor-custom h3 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; }
  .mdxeditor-custom h4 { font-size: 1.25rem; font-weight: 600; margin-top: 1.25rem; }
  .mdxeditor-custom ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem; }
  .mdxeditor-custom ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1rem; }
  .mdxeditor-custom li { margin-bottom: 0.5rem; }
  .mdxeditor-custom blockquote { border-left: 4px solid var(--border); padding-left: 1rem; font-style: italic; color: var(--text2); margin: 1.5rem 0; }
  .mdxeditor-custom img { max-width: 100%; border-radius: 1rem; box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1); display: block; }
  
  .scrollbar-thin::-webkit-scrollbar { width: 4px; }
  .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
  .scrollbar-thin::-webkit-scrollbar-thumb { background: var(--border); border-radius: 20px; }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: var(--text3); }
`;

// Add the styles to the document head
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}

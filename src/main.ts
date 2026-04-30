import "katex/dist/katex.min.css";
import renderMathInElement from "katex/contrib/auto-render";
import Q, { type ExamType, type Question } from "./data/questions";
import TOPICS, { type TopicId } from "./data/topics";

type ActiveType = ExamType | "all";
type ActiveYear = string;
type ViewMode = "grid" | "list";

let activeTopic: TopicId | 0 = 0;
let activeYear: ActiveYear = "all";
let activeType: ActiveType = "all";
let viewMode: ViewMode = "grid";

const searchInput = getElement<HTMLInputElement>("searchInput");
const countNum = getElement("count-num");
const viewTitle = getElement("viewTitle");
const content = getElement("content");
const yearFilters = getElement("year-filters");
const topicSection = document.querySelector<HTMLElement>("aside .sidebar-section");

function getElement<T extends HTMLElement = HTMLElement>(id: string): T {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing required element: #${id}`);
  }

  return element as T;
}

function getYears(): string[] {
  return [...new Set(Q.map((question) => question.year))].sort((a, b) => {
    const yearA = Number.parseInt(a.split(" ")[0] ?? "", 10);
    const yearB = Number.parseInt(b.split(" ")[0] ?? "", 10);
    return yearB - yearA;
  });
}

function setTopic(topicId: TopicId | 0): void {
  activeTopic = topicId;
  document.querySelectorAll('[id^="tbtn-"]').forEach((button) => button.classList.remove("active"));
  document.getElementById(`tbtn-${topicId}`)?.classList.add("active");
  applyFilters();
}

function setYear(year: ActiveYear): void {
  activeYear = year;
  document.querySelectorAll<HTMLElement>(".year-pill").forEach((button) => {
    button.classList.toggle("active", button.dataset.year === year);
  });
  applyFilters();
}

function setType(type: ActiveType): void {
  activeType = type;
  ["all", "Regular", "Back"].forEach((value) => {
    document.getElementById(`typebtn-${value}`)?.classList.remove("active");
  });
  document.getElementById(`typebtn-${type}`)?.classList.add("active");
  applyFilters();
}

function setView(nextViewMode: ViewMode): void {
  viewMode = nextViewMode;
  getElement("gridBtn").classList.toggle("active", nextViewMode === "grid");
  getElement("listBtn").classList.toggle("active", nextViewMode === "list");
  applyFilters();
}

function filteredQuestions(): Question[] {
  const search = searchInput.value.toLowerCase();

  return Q.filter((question) => {
    if (activeTopic !== 0 && question.t !== activeTopic) return false;
    if (activeYear !== "all" && question.year !== activeYear) return false;
    if (activeType !== "all" && question.type !== activeType) return false;

    if (search) {
      const haystack =
        `${question.text} ${question.year} ${(question.sub ?? []).join(" ")}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }

    return true;
  });
}

function applyFilters(): void {
  const questions = filteredQuestions();
  countNum.textContent = String(questions.length);

  let title = "All Questions";
  if (activeTopic !== 0) {
    title = TOPICS.find((topic) => topic.id === activeTopic)?.name ?? "Questions";
  } else if (activeYear !== "all") {
    title = `${activeYear} — Questions`;
  }

  viewTitle.textContent = `${title} (${questions.length})`;

  if (questions.length === 0) {
    content.innerHTML = `<div class="no-results"><div class="nr-icon">Search</div><div>No questions found.<br>Try adjusting your filters.</div></div>`;
    renderMath();
    return;
  }

  if (activeTopic === 0 && activeYear === "all" && !searchInput.value) {
    content.innerHTML = TOPICS.map((topic) => {
      const topicQuestions = questions.filter((question) => question.t === topic.id);
      if (topicQuestions.length === 0) return "";

      return `<div class="topic-group">
        <div class="topic-header">
          <div class="topic-badge" style="background:${topic.bg};color:${topic.color}">
            <span style="width:8px;height:8px;background:${topic.color};border-radius:50%;display:inline-block"></span>
            ${topic.name}
          </div>
          <span class="topic-count-badge">${topicQuestions.length} questions</span>
        </div>
        <div class="questions-grid${viewMode === "list" ? " list-view" : ""}">
          ${topicQuestions.map(renderCard).join("")}
        </div>
      </div>`;
    }).join("");
  } else {
    const sorted = [...questions].sort((a, b) => {
      const yearA = Number.parseInt(a.year.split(" ")[0] ?? "", 10);
      const yearB = Number.parseInt(b.year.split(" ")[0] ?? "", 10);
      if (yearB !== yearA) return yearB - yearA;
      return a.qno.localeCompare(b.qno);
    });

    content.innerHTML = `<div class="questions-grid${viewMode === "list" ? " list-view" : ""}">
      ${sorted.map(renderCard).join("")}
    </div>`;
  }

  renderMath();
}

function renderCard(question: Question): string {
  const subHtml = question.sub
    ? `<div class="q-sub">${question.sub
        .map((sub) => `<div class="q-sub-item">${escapeHtml(sub)}</div>`)
        .join("")}</div>`
    : "";

  return `<div class="q-card" data-t="${question.t}">
    <div class="q-card-top">
      <span class="q-num">${escapeHtml(question.qno)}</span>
      <span class="q-year">${escapeHtml(question.year)}</span>
      <span class="q-type ${question.type.toLowerCase()}">${question.type}</span>
    </div>
    <div class="q-text">${escapeHtml(question.text)}${subHtml}</div>
  </div>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function init(): void {
  if (!topicSection) {
    throw new Error("Missing topic sidebar section.");
  }

  getElement("tc-0").textContent = String(Q.length);
  getElement("tbtn-0").addEventListener("click", () => setTopic(0));

  TOPICS.forEach((topic) => {
    const count = Q.filter((question) => question.t === topic.id).length;
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.id = `tbtn-${topic.id}`;
    button.innerHTML = `<span class="filter-dot" style="background:${topic.color}"></span> ${topic.name} <span class="filter-count" id="tc-${topic.id}">${count}</span>`;
    button.addEventListener("click", () => setTopic(topic.id));
    topicSection.appendChild(button);
  });

  const allYearsButton = document.createElement("button");
  allYearsButton.className = "year-pill active";
  allYearsButton.dataset.year = "all";
  allYearsButton.textContent = "All Years";
  allYearsButton.addEventListener("click", () => setYear("all"));
  yearFilters.appendChild(allYearsButton);

  getYears().forEach((year) => {
    const yearButton = document.createElement("button");
    yearButton.className = "year-pill";
    yearButton.dataset.year = year;
    yearButton.textContent = year;
    yearButton.addEventListener("click", () => setYear(year));
    yearFilters.appendChild(yearButton);
  });

  getElement("typebtn-all").addEventListener("click", () => setType("all"));
  getElement("typebtn-Regular").addEventListener("click", () => setType("Regular"));
  getElement("typebtn-Back").addEventListener("click", () => setType("Back"));
  getElement("gridBtn").addEventListener("click", () => setView("grid"));
  getElement("listBtn").addEventListener("click", () => setView("list"));
  searchInput.addEventListener("input", applyFilters);

  applyFilters();
}

function renderMath(): void {
  renderMathInElement(content, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
  });
}

window.addEventListener("DOMContentLoaded", init);

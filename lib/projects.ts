export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  github?: string;
  live?: string;
  date?: string;
  gradient: string;
  initials: string;
  featured?: boolean;
  screenshot?: string;
}

export const projects: Project[] = [
  {
    id: "pair-code",
    screenshot: "/screenshots/pair-code.webp",
    title: "Pair Code",
    date: "2026",
    description: "Collaborative coding platform for real-time pair programming with friends — video calls, AI problem generation, and instant code review.",
    bullets: [
      "Real-time synchronized code editor powered by WebSockets and CRDT (Y.js) — zero merge conflicts, seamless multi-cursor collaboration.",
      "Built-in video & audio calls via WebRTC and LiveKit Cloud — pair-program without leaving the editor.",
      "AI Question Generator (Groq / Llama-3) for infinite coding challenges, plus an AI Code Reviewer that returns instant analysis on submission.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Y.js", "WebRTC", "LiveKit", "Monaco Editor", "Docker", "Groq"],
    github: "https://github.com/apoorv-https/Pair-Code",
    gradient: "from-[#0f1a2e] via-[#1a2d4a] to-[#0a1525]",
    initials: "PC",
    featured: true,
  },
  {
    id: "sqlmate",
    screenshot: "/screenshots/sqlmate.webp",
    title: "SQLMate",
    date: "2026",
    description: "Chat with your SQL or MongoDB database in plain English. Zero query knowledge required — just ask.",
    bullets: [
      "Llama 3.3 70B via Groq generates SQL or PyMongo Aggregation Pipelines from natural language; FK-aware schema context ensures accurate JOINs and nested queries.",
      "Full ETL pipeline for CSV/Excel uploads — drops junk rows, standardises dates, coerces types, fills nulls — then auto-connects to the database.",
      "Destructive ops (DELETE, DROP, update) always gate behind human approval; all credentials encrypted at rest with Fernet AES before MongoDB Atlas storage.",
    ],
    tech: ["Python", "Streamlit", "LangChain", "Groq", "SQLAlchemy", "PyMongo", "Pandas", "Plotly", "MongoDB"],
    github: "https://github.com/apoorv-https/SQLMate",
    gradient: "from-[#1a1200] via-[#2d2000] to-[#0f0c00]",
    initials: "SM",
    featured: true,
  },
  {
    id: "pdf-summarizer",
    screenshot: "/screenshots/pdf-summarizer.webp",
    title: "PDF Summarizer",
    date: "2025",
    description: "Drop a PDF or paste a URL — get a clean summary and auto-generated questions in seconds, powered by LangChain.",
    bullets: [
      "Accepts PDF uploads or any public URL; LangChain scrapes and chunks content for context-aware summarization.",
      "Auto-generates comprehension questions from the source material — useful for studying, research, or quick briefings.",
    ],
    tech: ["Python", "LangChain", "Streamlit", "Groq"],
    github: "https://github.com/apoorv-https/Streamlit-Project",
    gradient: "from-[#1a0a2e] via-[#2a1245] to-[#0f0820]",
    initials: "PS",
  },
  {
    id: "mindvault",
    screenshot: "/screenshots/mindvault.webp",
    title: "MindVault",
    date: "2025",
    description: "Your second brain — save Twitter threads and YouTube videos as cards, then share your entire mind with anyone.",
    bullets: [
      "Save any Twitter or YouTube link as a rich card — auto-fetches title, thumbnail, and metadata for a clean visual library.",
      "Shareable mind links let you publish your entire vault to anyone with a URL — no account required to view.",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/apoorv-https/MindVault-Frontend",
    gradient: "from-[#0a1a1a] via-[#102a2a] to-[#061212]",
    initials: "MV",
  },
];
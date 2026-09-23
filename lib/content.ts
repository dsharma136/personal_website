export const profile = {
  name: "Dhruv Sharma",
  status: "Available January 2027",
  location: "Bay Area, California",
  email: "dvsharma@ucdavis.edu",
  links: {
    linkedin: "https://linkedin.com/in/dhruvvsharma1",
    github: "https://github.com/dsharma136",
    resume: "/Dhruv_Sharma_Resume.pdf",
  },
} as const;

export const labels = {
  now: "NOW",
  work: "WORK EXPERIENCE",
  publications: "PUBLICATIONS",
  projects: "PROJECTS",
  skipToContent: "Skip to content",
} as const;

export const mainSections = [
  { id: "work", index: "01", label: labels.work },
  { id: "projects", index: "02", label: labels.projects },
  { id: "publications", index: "03", label: labels.publications },
] as const;

export function mainSection(id: (typeof mainSections)[number]["id"]) {
  const section = mainSections.find((entry) => entry.id === id);
  if (!section) {
    throw new Error(`Unknown main section: ${id}`);
  }
  return section;
}

export const siteMeta = {
  description:
    "Starting a part-time M.S. in Computer Science at Georgia Tech in January 2027. Scopes and ships enterprise AI systems — agent delivery, evaluation, and customer roadmap ownership.",
  initials: "DS",
} as const;

export const headerLinks: { label: string; href: string }[] = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Resume", href: profile.links.resume },
];

export const now: string[] = [
  "Finishing a B.S. in Computer Science at UC Davis in December 2026.",
  "Starting a part-time M.S. in Computer Science at Georgia Tech in January 2027.",
  "Recently built and evaluated enterprise AI agents at IBM Expert Labs.",
];

export const work: Array<{
  org: string;
  title: string;
  period: string;
  summary: string;
  detail: string[];
  metrics: Array<{ value: string; label: string }>;
}> = [
  {
    org: "IBM Expert Labs",
    title: "AI Associate Consultant Intern",
    period: "May–Aug 2026",
    summary:
      "Built watsonx Orchestrate agents and an evaluation platform for 30+ IBM Expert Labs consultants.",
    metrics: [
      { value: "25%", label: "tokens saved" },
      { value: "4.4x", label: "faster" },
      { value: "30+", label: "consultants" },
    ],
    detail: [
      "Built a watsonx Orchestrate knowledge agent for an enterprise government client, using a 150-question benchmark to quantify a 25% token expenditure reduction from instruction-set optimization.",
      "Drove the roadmap for an internal agent evaluation platform used by 30+ consultants, shipping 5 features from stakeholder demo feedback.",
      "Built the platform grading pipeline – LLM-as-judge scoring, human annotation with judge-alignment feedback, and per-question tool-call and latency analytics – cutting runtime 4.4x via parallelized execution.",
    ],
  },
  {
    org: "SAP",
    title: "Business AI Adoption Intern",
    period: "2025 — 2026",
    summary:
      "Analyzed SAP BTP Business AI adoption across 10K+ records and presented findings to Americas executives.",
    metrics: [
      { value: "10K+", label: "rows analyzed" },
      { value: "6", label: "market units" },
    ],
    detail: [
      "Analyzed 10K+ rows of SAP BTP adoption data across Business AI products including Joule, identifying drop-off patterns and cross-market-unit gaps.",
      "Contributed analysis and slides to bi-weekly executive presentations covering 6 Americas market units.",
      "Supported discovery calls with 5+ enterprise accounts, synthesizing adoption friction into product feedback for the BTP team.",
    ],
  },
  {
    org: "Nutanix",
    title: "Product Management Intern",
    period: "May–Aug 2025",
    summary:
      "Defined semantic search requirements and roadmap for intelligent storage; built a PoC projecting 40% latency gains.",
    metrics: [
      { value: "60%", label: "discoverability" },
      { value: "40%", label: "latency ↓" },
    ],
    detail: [
      "Defined semantic-search and metadata-indexing requirements across PM, engineering, marketing, and sales, improving data discoverability 60%.",
      "Built a PoC prototype projecting a 40% reduction in query latency.",
      "Wrote a 6-month execution plan and multi-year roadmap for intelligent storage.",
    ],
  },
  {
    org: "Stanford, Gevaert Lab",
    title: "Data Science Intern",
    period: "2023 — 2024",
    summary:
      "Trained segmentation models on 45,000+ images and 1,622 microvascular scans on Stanford HPC.",
    metrics: [
      { value: "0.987", label: "dice score" },
      { value: "45K+", label: "images" },
    ],
    detail: [
      "Optimized a deep learning model for microvascular segmentation across 1,622 medical images on Stanford's HPC cluster, reaching a 0.77 dice score.",
      "Trained a skin segmentation model for 150 epochs on 45,000+ images, reaching a 0.987 dice score.",
    ],
  },
  {
    org: "Idaho National Laboratory",
    title: "Lead Machine Learning Intern",
    period: "Jul–Sept 2024",
    summary:
      "Built a LLaMA model over 88 qualification procedures and OCR pipeline for 933 CAD drawings.",
    metrics: [
      { value: "933", label: "drawings" },
      { value: "85%", label: "OCR accuracy" },
    ],
    detail: [
      "Developed a LLaMA-based model over ~88 equipment qualification procedures spanning 933 drawings.",
      "Implemented OCR to extract structured text from CAD drawings at ~85% accuracy.",
    ],
  },
];

export const publications: Array<{
  title: string;
  authors: string[];
  venue: string;
  year: string;
  href: string;
}> = [
  {
    title:
      "Synthesizing Longitudinal Cutaneous Neurofibroma Imaging for Digital-Twin Burden Quantification",
    authors: [
      "Christoph Sadée",
      "Alex Dils",
      "Krish Sangani",
      "Lillian Rubino",
      "Alexander J Ferenchick",
      "Varun Wadhwa",
      "Anushka Poddar",
      "Tobenna Onyemeh",
      "Zimuzo Onah",
      "Dhruv Sharma",
      "Jackson Bae",
      "Max Van Puyvelde",
      "Carlos Romo",
      "Melinda Jen",
      "Nkiru Onodugo",
      "Ayesha Akinkgube",
      "Qinmei Xu",
      "Qingtao Kong",
      "Rui Yang",
      "Aisha Ebehireime Sokunbi",
      "Shaoxiong Yao",
      "Haomiao Huang",
      "Ifeoma Okoye",
      "Olivier Gevaert",
      "Kavita Y. Sarin",
    ],
    venue: "MICCAI Workshop on Medical World Models",
    year: "2026",
    href: "https://openreview.net/pdf?id=JI0ZzOPW9x",
  },
];

export const projects: Array<{
  name: string;
  blurb: string;
  stack: string[];
  href?: string;
  period: string;
}> = [
  {
    name: "TechBytes",
    blurb:
      "Card-based micro-learning app serving ~50 daily AI-summarized tech blurbs across 6 categories.",
    stack: ["LangGraph", "HackerNews", "ArXiv", "Brave Search", "Llama 3.3 70B", "Groq", "React"],
    href: "https://techbytes-eight.vercel.app",
    period: "2026",
  },
  {
    name: "Connect4",
    blurb:
      "Minimax with alpha-beta pruning, benchmarked against a Monte Carlo Tree Search opponent.",
    stack: ["Python", "Minimax", "Alpha-beta pruning", "MCTS"],
    href: "https://github.com/dsharma136/Connect4",
    period: "2024",
  },
];

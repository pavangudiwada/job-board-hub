import { boards, Board, Category } from "./boards";

export type SeoCollection = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  targetCategory: Category;
  categories: Category[];
  tags: string[];
};

export const seoCollections: SeoCollection[] = [
  {
    slug: "open-source-jobs",
    title: "Best Open Source Jobs",
    description:
      "Curated job boards to find open source and FOSS opportunities.",
    intro:
      "Explore trusted boards for contributor-focused roles, OSS engineering teams, and mission-driven technical work.",
    targetCategory: "opensource",
    categories: ["opensource", "development"],
    tags: ["open-source", "foss", "developer"],
  },
  {
    slug: "security-jobs",
    title: "Best Security Jobs",
    description:
      "Find top boards for cybersecurity, InfoSec, and security engineering roles.",
    intro:
      "Use this page to discover security-focused job platforms, from cloud security to broader cybersecurity hiring.",
    targetCategory: "devops",
    categories: ["devops"],
    tags: ["security", "infosec", "cybersecurity"],
  },
  {
    slug: "remote-startup-jobs",
    title: "Best Remote Startup Jobs",
    description:
      "Find startup and early-stage remote opportunities across engineering and product.",
    intro:
      "Browse remote-first startup boards where teams move quickly, hire globally, and often share salary or equity details.",
    targetCategory: "startup",
    categories: ["remote", "startup", "popular"],
    tags: ["startup", "remote", "equity"],
  },
  {
    slug: "ai-ml-jobs",
    title: "Best AI/ML Jobs",
    description:
      "Discover AI and machine learning job boards for data, research, and engineering roles.",
    intro:
      "Find specialized AI hiring platforms for ML engineers, data scientists, and applied AI roles.",
    targetCategory: "aiml",
    categories: ["aiml"],
    tags: ["ai", "ml", "machine-learning", "data-science"],
  },
  {
    slug: "devrel-jobs",
    title: "Best DevRel Jobs",
    description:
      "Explore developer relations and developer advocacy hiring boards.",
    intro:
      "Find opportunities in developer advocacy, community, and technical evangelism across software and Web3 companies.",
    targetCategory: "devrel",
    categories: ["devrel"],
    tags: ["advocacy", "community", "relations"],
  },
  {
    slug: "technical-writing-jobs",
    title: "Best Technical Writing Jobs",
    description:
      "Find technical writing job boards for documentation and developer content roles.",
    intro:
      "Use this collection to discover writing-focused roles in docs, API content, and technical storytelling.",
    targetCategory: "techwriting",
    categories: ["techwriting"],
    tags: ["documentation", "writing", "docs"],
  },
  {
    slug: "web3-crypto-jobs",
    title: "Best Web3/Crypto Jobs",
    description:
      "Curated crypto and blockchain job boards for engineering and ecosystem roles.",
    intro:
      "Discover specialized hiring platforms for blockchain engineering, protocol teams, and crypto startups.",
    targetCategory: "crypto",
    categories: ["crypto"],
    tags: ["crypto", "web3", "blockchain"],
  },
  {
    slug: "design-jobs",
    title: "Best Design Jobs",
    description:
      "Explore design job boards for UX, UI, product design, and creative roles.",
    intro:
      "Browse design-specific resources for product design, UX research, and visual design opportunities.",
    targetCategory: "design",
    categories: ["design"],
    tags: ["design", "ui", "ux", "research"],
  },
];

export const seoFooterCollections = seoCollections.slice(0, 6);

function scoreBoard(board: Board, collection: SeoCollection) {
  let score = 0;

  const tagSet = new Set((board.tags ?? []).map((tag) => tag.toLowerCase()));

  for (const category of collection.categories) {
    if (board.category.includes(category)) {
      score += 2;
    }
  }

  for (const tag of collection.tags) {
    if (tagSet.has(tag.toLowerCase())) {
      score += 1;
    }
  }

  return score;
}

export function getSeoCollectionBySlug(slug: string) {
  return seoCollections.find((collection) => collection.slug === slug);
}

export function getBoardsForSeoCollection(collection: SeoCollection) {
  return boards
    .map((board) => ({ board, score: scoreBoard(board, collection) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.board);
}

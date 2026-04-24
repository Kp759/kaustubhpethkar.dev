import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaustubh Pethkar | LLM & RL Research",
  description:
    "Personal research website of Kaustubh Pethkar, Ph.D. researcher and University Lecturer at NJIT specializing in LLM fine-tuning, reward modeling, offline reinforcement learning, RAG, and sample-efficient knowledge expansion.",
  keywords: [
    "Kaustubh Pethkar",
    "LLM Research",
    "Reinforcement Learning",
    "Offline RL",
    "RAG",
    "NLI Evaluation",
    "NJIT",
    "PhD Data Science",
  ],
  openGraph: {
    title: "Kaustubh Pethkar | LLM & RL Research",
    description:
      "Building LLMs that learn efficiently, reason reliably, and forget less.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

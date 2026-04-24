"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BrainCircuit, Briefcase, Download, Github, GraduationCap, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  "RL-based LLM Research Infrastructure",
  "Reward Modeling and Signal Evaluation",
  "RAG and NLI-based Hallucination Evaluation",
  "Multi-GPU / HPC LLM Experimentation",
];

const skills = {
  Languages: ["Python", "Java", "JavaScript", "SQL"],
  "ML / Research": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Transformers",
    "Reinforcement Learning",
    "AWR",
    "Offline RL",
    "MDP",
    "Reward Modeling",
    "DAgger",
    "LoRA",
    "QLoRA",
    "PEFT",
    "RAG",
    "DeBERTa-v3",
    "Embedding Tuning",
  ],
  Infrastructure: [
    "MLflow",
    "W&B",
    "HPC/Slurm",
    "Multi-GPU Training",
    "Docker",
    "FastAPI",
    "REST APIs",
    "Linux/Bash",
    "Git",
    "Pandas",
    "NumPy",
  ],
};

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-slate-300">{subtitle}</p>
    </div>
  );
}

function NeuralBackdrop() {
  const particles = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="matrix-grid absolute inset-0 opacity-40" />
      {particles.map((particle) => (
        <motion.span
          key={particle}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
          initial={{ x: `${(particle * 13) % 100}%`, y: `${(particle * 29) % 100}%`, opacity: 0.15 }}
          animate={{
            x: [`${(particle * 13) % 100}%`, `${(particle * 19 + 17) % 100}%`, `${(particle * 27 + 8) % 100}%`],
            y: [`${(particle * 29) % 100}%`, `${(particle * 23 + 11) % 100}%`, `${(particle * 31 + 7) % 100}%`],
            opacity: [0.1, 0.8, 0.2],
          }}
          transition={{ duration: 14 + (particle % 5), repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="absolute -left-24 top-28 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, 50, 10], y: [0, -20, 30] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-1/3 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, -40, 10], y: [0, 40, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <NeuralBackdrop />

      <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">KP Research</span>
          <div className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.25fr_0.75fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
            <BrainCircuit className="h-4 w-4" /> Ph.D. Researcher & University Lecturer
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Kaustubh Pethkar
            <span className="mt-2 block text-xl font-normal text-slate-300 md:text-3xl">
              Ph.D. Researcher in LLMs, Reinforcement Learning, and Knowledge Expansion
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Building LLMs that learn efficiently, reason reliably, and forget less.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#research" className="gradient-border glass rounded-xl px-5 py-3 text-sm font-medium text-white">
              View Research
            </a>
            <Link href="/CV_KP.pdf" className="rounded-xl border border-slate-700 px-5 py-3 text-sm text-slate-200 hover:border-cyan-300/70">
              <span className="inline-flex items-center gap-2"><Download className="h-4 w-4" />Download CV</span>
            </Link>
            <Link href="https://github.com" className="rounded-xl border border-slate-700 px-4 py-3 text-slate-200 hover:border-slate-500">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" className="rounded-xl border border-slate-700 px-4 py-3 text-slate-200 hover:border-slate-500">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="gradient-border glass relative mx-auto w-full max-w-sm rounded-3xl p-6"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl" />
          <Image
            src="/profile.png"
            alt="Kaustubh Pethkar"
            width={440}
            height={540}
            className="h-auto w-full rounded-2xl border border-slate-700 object-cover"
            priority
          />
        </motion.div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-18 px-5 pb-28">
        <section id="about">
          <SectionHeading
            title="About"
            subtitle="Academic and applied AI research focused on dependable language models and sample-efficient learning."
          />
          <div className="glass rounded-2xl p-7 text-slate-200">
            <p className="leading-relaxed text-slate-300">
              Kaustubh Pethkar is a Ph.D. researcher and University Lecturer at NJIT. His work bridges cutting-edge LLM research with practical model reliability, emphasizing LLM fine-tuning, reward modeling, offline reinforcement learning, retrieval-augmented generation, NLI-based evaluation, and embedding tuning for controlled knowledge expansion.
            </p>
          </div>
        </section>

        <section id="research">
          <SectionHeading
            title="Featured Research"
            subtitle="Current paper and core technical contributions at the intersection of memory, optimization, and language modeling."
          />
          <motion.article whileHover={{ y: -4 }} className="gradient-border glass rounded-2xl p-8">
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-cyan-300">
              <BookOpen className="h-4 w-4" /> ICML 2026 Submission
            </p>
            <h3 className="text-2xl font-medium text-white">
              Memory as a Markov Matrix: Sample Efficient Knowledge Expansion via Token-to-Dictionary Mapping
            </h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Sample-efficient vocabulary expansion with precise update targeting.</li>
              <li>• Embedding-only updates that preserve broader model behavior.</li>
              <li>• Zero catastrophic forgetting during introduced concept integration.</li>
              <li>• Markov-process interpretation of LLM generation for principled control.</li>
            </ul>
          </motion.article>
        </section>

        <section id="projects">
          <SectionHeading title="Projects" subtitle="Selected research systems and infrastructure efforts." />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project} whileHover={{ y: -4 }} className="glass rounded-xl p-5">
                <p className="text-slate-100">{project}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionHeading title="Skills" subtitle="Technical stack across machine learning research and production infrastructure." />
          <div className="grid gap-4 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="glass rounded-xl p-5">
                <h4 className="mb-3 text-lg font-medium text-cyan-200">{group}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-4 md:grid-cols-2">
          <div>
            <SectionHeading title="Experience" subtitle="Academic and industry roles." />
            <div className="space-y-3">
              <div className="glass rounded-xl p-5">
                <p className="inline-flex items-center gap-2 text-cyan-200"><Briefcase className="h-4 w-4" /> University Lecturer, NJIT</p>
              </div>
              <div className="glass rounded-xl p-5">
                <p className="inline-flex items-center gap-2 text-cyan-200"><Briefcase className="h-4 w-4" /> Tech Support Analyst, Celerant Technology Corp</p>
              </div>
            </div>
          </div>
          <div id="education">
            <SectionHeading title="Education" subtitle="Formal training in data science and computer science." />
            <div className="space-y-3">
              <div className="glass rounded-xl p-5">
                <p className="inline-flex items-center gap-2 text-violet-200"><GraduationCap className="h-4 w-4" /> Ph.D. Data Science, NJIT</p>
              </div>
              <div className="glass rounded-xl p-5">
                <p className="inline-flex items-center gap-2 text-violet-200"><GraduationCap className="h-4 w-4" /> M.S. Computer Science, NJIT</p>
              </div>
              <div className="glass rounded-xl p-5">
                <p className="inline-flex items-center gap-2 text-violet-200"><GraduationCap className="h-4 w-4" /> B.E., Savitribai Phule Pune University</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="gradient-border glass rounded-2xl p-8">
          <SectionHeading
            title="Contact"
            subtitle="Open to collaborations in trustworthy LLMs, reinforcement learning, and scalable research engineering."
          />
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:kp759@njit.edu"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-100"
            >
              <Mail className="h-4 w-4" /> kp759@njit.edu
            </a>
            <Link href="https://github.com" className="rounded-xl border border-slate-700 px-4 py-3 text-slate-200 hover:border-slate-500">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" className="rounded-xl border border-slate-700 px-4 py-3 text-slate-200 hover:border-slate-500">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="/CV_KP.pdf" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-200 hover:border-cyan-300/70">
              <Download className="h-4 w-4" /> CV
            </Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        <p className="inline-flex items-center gap-2">
          Designed for AI research visibility <ArrowRight className="h-4 w-4" /> Kaustubh Pethkar
        </p>
      </footer>
    </main>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ProjectsPlaceholder = [
  {
    title: "Recon Plus",
    description: "An AI powered reconaissance detection tool that monitors suspicious activity, flags attacker behaviour and help secure your infrastructure proactively.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/Girish312/ReconPlus",
    liveUrl: "https://recon-plus.vercel.app/",
  },
  {
    title: "Arisz",
    description: "A modern, full-stack task management application that helps you track your daily routines, manage tasks with subtasks, and visualize your progress through beautiful charts and graphs.",
    tags: ["React", "PostgreSQL"],
    githubUrl: "https://github.com/Girish312/arisz",
    liveUrl: "https://arisz.vercel.app",
  },
  {
    title: "Portfolio Template",
    description: "A sleek, animated single-page template designed for developers.",
    tags: ["Framer Motion", "Vercel"],
    githubUrl: "https://github.com/Girish312/portfolio",
    liveUrl: "https://portfolio-mu-weld-68.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* HERO SECTION */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <h1 className="text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            GIRISH PATIL
          </h1>
          <p className="text-2xl text-slate-400 font-medium">Software Developer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a href="https://www.linkedin.com/in/girish312" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full hover:border-cyan-500 transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/Girish312" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full hover:border-cyan-500 transition-colors">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.header>

        {/* BENTO GRID SKILLS */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div variants={itemVariants} className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
              <Code size={20} /> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript", "HTML/CSS", "MERN", "NextJS", "Tailwind CSS", "MySQL", "Firebase"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Open to Work</h3>
            <p className="opacity-90">Currently focusing on Full-Stack JavaScript & Python roles.</p>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE & EDUCATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-cyan-400" /> Experience
            </h2>
            <div className="space-y-8 border-l border-slate-800 ml-3 pl-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-950" />
                <h3 className="font-bold text-lg">Mobile Developer Intern</h3>
                <p className="text-cyan-400 text-sm mb-2">Doodle Homes | 2024 - 2025</p>
                <p className="text-slate-400 text-sm">Developed cross-platform apps using Flutter & Firebase.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-700 rounded-full ring-4 ring-slate-950" />
                <h3 className="font-bold text-lg">Web Developer Intern</h3>
                <p className="text-cyan-400 text-sm mb-2">Innovatus Infotech | 2023</p>
                <p className="text-slate-400 text-sm">Built MERN stack apps with 80% improved responsiveness.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" /> Education
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <h3 className="font-bold">B.E. Information Technology</h3>
                <p className="text-slate-400 text-sm">Vasantdada Patil Pratishthan's CoE | 2023 - 2026</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <h3 className="font-bold">Diploma in IT</h3>
                <p className="text-slate-400 text-sm">GP Mumbai | 2020 - 2023</p>
              </div>
            </div>
          </section>
        </div>

        {/* DEMO PROJECTS */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ProjectsPlaceholder.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm my-4">{p.description}</p>
                <div className="flex gap-4">
                  <a href={p.githubUrl} className="text-slate-500 hover:text-white"><Github size={20} /></a>
                  <a href={p.liveUrl} className="text-slate-500 hover:text-white"><ExternalLink size={20} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

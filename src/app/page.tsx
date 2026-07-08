"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Award, Users, Linkedin, Github, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const projects = [
  {
    title: "ReconPlus",
    subtitle: "Automated OSINT + Vulnerability Reconnaissance and Reporting Tool",
    description: "ReconPlus is an automated security reconnaissance and vulnerability assessment framework that surfaces system-level exposures, web application vulnerabilities, and potential attack paths. It orchestrates Amass, Subfinder, HTTPX, Nmap, Feroxbuster, and Nuclei, then runs a risk-scoring engine with automated remediation suggestions exported as JSON, HTML, and PDF reports. A React + Firebase dashboard visualizes scan results in real time, complemented by a scan-aware hybrid AI assistant that answers security questions using report context plus a fine-tuned model.",
    tags: ["React", "Python", "Flask", "Firebase", "AI/ML"],
    githubUrl: "https://github.com/Girish312/ReconPlus",
    liveUrl: "https://reconplus.vercel.app/",
  },
  {
    title: "Doodle Homes",
    subtitle: "Cross-platform real estate mobile application",
    description: "Doodle Homes is a cross-platform real estate mobile app built with Flutter and Firebase. I implemented a responsive UI, Firebase Authentication, and Cloud Firestore with real-time data synchronization, while optimizing performance and fixing bugs. Development followed collaborative Git and Agile practices for a reliable, production-ready experience.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
    githubUrl: "https://github.com/Girish312/DoodleHomes",
    liveUrl: "",
  },
  {
    title: "Certificate DAPP",
    subtitle: "Decentralized certificate issuance & verification on Ethereum",
    description: "Certificate DAPP is a decentralized application for issuing and verifying academic certificates on the Ethereum blockchain using a local Hardhat network. A Solidity smart contract stores each certificate (ID, student name, course) and lets anyone verify its authenticity on-chain. The frontend uses Ethers.js and MetaMask to add and verify certificates through a clean, responsive interface.",
    tags: ["Solidity", "Hardhat", "Ethers.js", "Web3.js", "JavaScript"],
    githubUrl: "https://github.com/Girish312/Dapp",
    liveUrl: "",
  },
  {
    title: "Arisz (under development)",
    subtitle: "A modern, Full-stack task management application",
    description: "A modern, Full-stack task management application that helps you track your daily routines, manage tasks with subtasks, and visualize your progress through graphical representation.",
    tags: ["React", "Django", "Python", "MySQL"],
    githubUrl: "https://github.com/Girish312/arisz",
    liveUrl: "https://arisz.vercel.app",
  },
  {
    title: "TravAI",
    subtitle: "AI-powered travel recommendation system",
    description: "TravAI is an AI-powered travel recommendation system that delivers personalized destination suggestions based on user preferences, budget, distance, ratings, and interests. It uses a content-based recommendation engine with TF-IDF similarity analysis and a machine learning prediction model to rank the best matches. Built in Python with a focus on practical ML techniques for real-world travel planning.",
    tags: ["Python", "Machine Learning", "TF-IDF", "Content Similarity", "Linear Regression"],
    githubUrl: "https://github.com/Girish312/TravAI",
    liveUrl: "",
  },
];

const skillsLanguagesDb = ["Python", "HTML5/CSS3", "JavaScript", "MySQL"];
const skillsTools = ["React", "Tailwind CSS", "Django", "Flask", "Firebase", "Git & GitHub", "Vercel", "Render", "VS Code"];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-16">

        {/* HERO SECTION */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent break-words">
            GIRISH PATIL
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 font-medium">Python Developer | Full-Stack Developer</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1 mt-6 text-slate-400 text-sm">
            <span className="hidden sm:inline text-slate-600">|</span>
            <a href="mailto:girishspatil05@gmail.com" className="hover:text-cyan-400 transition-colors break-all">girishspatil05@gmail.com</a>
            <span className="sm:inline text-slate-600">|</span>
            <span>Malad, Mumbai</span>
            <span className="hidden sm:inline text-slate-600">|</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a href="https://www.linkedin.com/in/Girish312" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-500 transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/Girish312" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full hover:border-green-500 transition-colors">
              <Github size={18} /> GitHub
            </a>
            <a href="https://leetcode.com/u/girish312/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full hover:border-yellow-500 transition-colors">
              <svg width="18" height="18" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7 36.7c-6.2 6.2-16.2 6.2-22.4 0-6.2-6.2-6.2-16.2 0-22.4l7.1-7.1c1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2l-7.1 7.1c-3.8 3.8-3.8 10 0 13.8 3.8 3.8 10 3.8 13.8 0l7.1-7.1c1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2l-7.1 7.1z" fill="#FFA116" />
              </svg> LeetCode
            </a>
          </div>
        </motion.header>

        {/* PROFESSIONAL SUMMARY */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">Professional Objective</h2>
          <p className="text-slate-300 leading-relaxed max-w-4xl text-justify">
            Results-driven Software Developer proficient in Python and Full-Stack development with hands-on experience in building and deploying real-world applications through industrial and academic projects. Strong foundation in Data Structures & Algorithms, OOPs, Cloud Services, Artificial Intelligence and Database systems. Seeking Software Development and Full-Stack Devlopment roles to build efficient and impactful solutions.
          </p>
        </motion.section>

        {/* SKILLS BENTO GRID */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          <motion.div variants={itemVariants} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-cyan-400">
              <Code size={20} /> Programming Languages and Database
            </h2>
            <div className="flex flex-wrap gap-2 justify-left">
              {skillsLanguagesDb.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-cyan-400">
              <Code size={20} /> Frameworks & Development Tools
            </h2>
            <div className="flex flex-wrap gap-2 justify-left">
              {skillsTools.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE & EDUCATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <Briefcase className="text-cyan-400" /> Experience
            </h2>
            <div className="space-y-8 border-l border-slate-800 ml-3 pl-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-950" />
                <h3 className="font-bold text-lg">Android Developer Intern</h3>
                <p className="text-cyan-400 text-sm mb-1">Doodle Homes | Aug 2024 - Jan 2025 · 6 months</p>
                <p className="text-slate-400 text-sm">Mumbai, Maharashtra, India · Hybrid</p>
                <ul className="text-slate-400 text-sm mt-2 list-disc list-inside space-y-1 text-justify">
                  <li>Developed a Flutter-based mobile app for a gated community, integrating service booking (electrician, plumber, laundry, etc.) and food delivery features, including dine-in, delivery and bulk order options.</li>
                  <li>Implemented real-time booking with calendar scheduling, dynamic pricing, and daily menu updates.</li>
                  <li>Utilized Firebase for authentication, real-time updates, and data storage, ensuring seamless user experience and efficient service management.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-950" />
                <h3 className="font-bold text-lg">Web Developer Intern</h3>
                <p className="text-cyan-400 text-sm mb-1">CSRBOX | Jun 2024 - Aug 2024 · 3 months</p>
                <p className="text-slate-400 text-sm">Remote</p>
                <ul className="text-slate-400 text-sm mt-2 list-disc list-inside space-y-1 text-justify">
                  <li>Collaborated with IBM SkillsBuild to build responsive web interfaces using JavaScript, React, and Node.js, strengthening full-stack development fundamentals.</li>
                  <li>Gained hands-on experience with version control, REST API integration, and modern frontend tooling while contributing to real-world projects in a remote team setup.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-slate-950" />
                <h3 className="font-bold text-lg">Cyber Security Intern</h3>
                <p className="text-cyan-400 text-sm mb-1">Prodigy Infotech | Jun 2024 - Jul 2024 · 2 months</p>
                <p className="text-slate-400 text-sm">Remote</p>
                <ul className="text-slate-400 text-sm mt-2 list-disc list-inside space-y-1 text-justify">
                  <li>Gained hands-on exposure to vulnerability assessment, reconnaissance tools, network scanning and security best practices using Python-based tools.</li>
                  <li>Applied Python programming and security fundamentals to analyze system vulnerabilities, automate information gathering tasks and strengthen understanding of offensive and defensive security methodologies.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-700 rounded-full ring-4 ring-slate-950" />
                <h3 className="font-bold text-lg">Web Developer Intern</h3>
                <p className="text-cyan-400 text-sm mb-1">Innovatus Infotech India Pvt. Ltd. | Jan 2023 - Jul 2023 · 6 months</p>
                <p className="text-slate-400 text-sm">Nashik, Maharashtra, India · Onsite </p>
                <ul className="text-slate-400 text-sm mt-2 list-disc list-inside space-y-1 text-justify">
                  <li>Developed and maintained scalable web applications, improving overall frontend performance by 30% and responsiveness by 80% through UI optimization.</li>
                  <li>Optimized backend APIs and SQL queries, reducing database load time by 40%.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" /> Education
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <h3 className="font-bold">B.E. Information Technology</h3>
                <p className="text-cyan-400 text-sm">Vasantdada Patil Pratishthan&apos;s College of Engineering and visual arts</p>
                <p className="text-slate-400 text-sm">Jul 2023 - Jun 2026 | Mumbai</p>
                <p className="text-slate-400 text-sm mt-1">CGPA: 7.98</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <h3 className="font-bold">Diploma in Information Technology</h3>
                <p className="text-cyan-400 text-sm">Government Polytechnic Mumbai</p>
                <p className="text-slate-400 text-sm">Jul 2020 - Jun 2023 | Mumbai</p>
                <p className="text-slate-400 text-sm mt-1">Percentage: 83.25%</p>
              </div>
            </div>
          </section>
        </div>

        {/* FEATURED PROJECTS */}
        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Projects</h2>
          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                    {p.subtitle && <p className="text-slate-500 text-xs">{p.subtitle}</p>}
                  </div>
                  <div className="flex gap-3">
                    {p.githubUrl && p.githubUrl !== "#" && (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white"><Github size={20} /></a>
                    )}
                    {p.liveUrl && p.liveUrl !== "#" && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white"><ExternalLink size={20} /></a>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed text-justify">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <Award className="text-cyan-400" />
            <a href="https://www.linkedin.com/in/girish312/details/certifications/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
              Certifications <ExternalLink size={16} />
            </a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
              <h3 className="font-bold">AI & ML Training Program</h3>
              <p className="text-cyan-400 text-sm">TNS India Foundation</p>
              <p className="text-slate-400 text-sm">Aug 2025 - Jan 2026</p>
              <p className="text-slate-400 text-sm mt-2 ">Certified in Python, AI & ML, Data Structures & Algorithms, Collaboration, Teamwork & Communication</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
              <h3 className="font-bold">Web Development Training Program</h3>
              <p className="text-cyan-400 text-sm">IBM SkillsBuild</p>
              <p className="text-slate-400 text-sm">Jun 2024 - Aug 2024</p>
              <p className="text-slate-400 text-sm mt-2">Certified in JavaScript, React, Node.js & Express</p>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <Code className="text-cyan-400" /> Publication & Recognition
          </h2>
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
            <h3 className="font-bold">
              <a href="https://drive.google.com/file/d/1yA--5GVKc0aqUZACfBhRQIAYG5MaZRw2/view?usp=drivesdk" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
                Copyright Registration — ReconPlus <ExternalLink size={16} />
              </a>
            </h3>
            <p className="text-cyan-400 text-sm">Co-author & owner of the AI-powered cybersecurity reconnaissance platform</p>
            <p className="text-slate-400 text-sm">Government of India | Jun 2026</p>
          </div>
        </section>

        {/* EXTRACURRICULAR */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <Users className="text-cyan-400" /> Extracurricular Activities
          </h2>
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
            <h3 className="font-bold">ITSA Committee Member</h3>
            <p className="text-cyan-400 text-sm">Organized and managed multiple technical & cultural events</p>
            <p className="text-slate-400 text-sm">Jun 2024 - Jun 2026</p>
          </div>
        </section>

      </div>
    </div>
  );
}

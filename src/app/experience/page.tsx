"use client"
import React, { useState } from 'react'
import WorkExperience from '@/components/WorkExperience'
import { 
  FaBriefcase, 
  FaTools, 
  FaTrophy,
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaFire,
  FaCode,
  FaCss3Alt,
  FaMedal,
  FaCertificate,
  FaBullseye,
  FaUsers,
  FaGraduationCap,
  FaCloud,
  FaStar,
  FaChevronUp
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiGraphql, SiTailwindcss, SiRedux } from 'react-icons/si'

interface Skill {
  name: string
  level: number
  color: string
  icon: React.ComponentType<any>
}

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  type: 'award' | 'certification' | 'milestone'
  icon: React.ComponentType<any>
  color: string
}

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<'work' | 'skills' | 'achievements'>('work')

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500', icon: FaReact },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800', icon: SiTypescript },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700', icon: FaNode },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-yellow-700', icon: FaPython },
    { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-800', icon: SiMongodb },
    { name: 'PostgreSQL', level: 70, color: 'from-blue-500 to-blue-700', icon: SiPostgresql },
    { name: 'AWS', level: 65, color: 'from-orange-500 to-orange-700', icon: FaAws },
    { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-600', icon: FaDocker },
    { name: 'GraphQL', level: 75, color: 'from-pink-500 to-pink-700', icon: SiGraphql },
    { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-teal-700', icon: SiTailwindcss },
    { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-500', icon: FaFire },
    { name: 'Redux', level: 85, color: 'from-purple-500 to-purple-700', icon: SiRedux }
  ]

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'React Developer Certification',
      description: 'Advanced React certification from Meta covering hooks, state management, and performance optimization.',
      date: '2024-03',
      type: 'certification',
      icon: FaCertificate,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Best Innovation Award',
      description: 'Won first place in company hackathon for developing an AI-powered code review tool.',
      date: '2023-11',
      type: 'award',
      icon: FaMedal,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      title: '10K+ GitHub Stars',
      description: 'Open source projects have collectively reached over 10,000 stars on GitHub.',
      date: '2023-09',
      type: 'milestone',
      icon: FaStar,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'AWS Solutions Architect',
      description: 'Certified AWS Solutions Architect - Associate level with expertise in cloud architecture.',
      date: '2023-06',
      type: 'certification',
      icon: FaCloud,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Tech Lead Promotion',
      description: 'Promoted to Technical Lead position, now mentoring a team of 5 junior developers.',
      date: '2023-01',
      type: 'milestone',
      icon: FaUsers,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 6,
      title: 'Google Cloud Certified',
      description: 'Professional Cloud Developer certification demonstrating expertise in GCP services.',
      date: '2022-12',
      type: 'certification',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-green-500'
    }
  ]

  const getAchievementTypeIcon = (type: string) => {
    switch (type) {
      case 'award': return FaTrophy
      case 'certification': return FaCertificate
      case 'milestone': return FaBullseye
      default: return FaStar
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey, technical skills, and achievements in the world of software development.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { key: 'work', label: 'Work Experience', icon: FaBriefcase },
            { key: 'skills', label: 'Technical Skills', icon: FaTools },
            { key: 'achievements', label: 'Achievements', icon: FaTrophy }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/20'
              }`}
            >
              <tab.icon />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {/* Work Experience Tab */}
          {activeTab === 'work' && (
            <section className="py-12">
              <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    {
                      name: 'Flower Shop',
                      role: 'Leader',
                      tech: ['.NET', 'Bootstrap'],
                      desc: 'E-commerce platform for flower sales, order management, and customer engagement.'
                    },
                    {
                      name: 'App Reminder',
                      role: 'Developer',
                      tech: ['Flutter', 'Dart', 'Firebase'],
                      desc: 'Mobile app for reminders and notifications, cloud sync, and push messaging.'
                    },
                    {
                      name: 'Flower Store',
                      role: 'Leader',
                      tech: ['.NET', 'Next.js', 'Tailwind CSS'],
                      desc: 'Modern flower store with advanced UI, fast performance, and admin dashboard.'
                    },
                    {
                      name: 'BHV SYSTEM',
                      role: 'Back-end & Front-end Developer',
                      tech: ['Node.js', 'Express'],
                      desc: 'Enterprise system for business management, API integration, and scalable architecture.'
                    }
                  ].map((proj) => (
                    <div
                      key={proj.name}
                      className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-blue-200 dark:border-blue-900 p-8 flex flex-col gap-4"
                    >
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">{proj.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold">{proj.role}</span>
                        {proj.tech.map(t => (
                          <span key={t} className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium">{t}</span>
                        ))}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-base">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 border-2 border-transparent hover:border-blue-400 dark:hover:border-purple-400 rounded-3xl p-8 shadow-xl hover:scale-[1.03] transition-all duration-300 group flex flex-col items-center"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-12 h-12" />
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 text-center">
                      {skill.name}
                    </h3>
                    <div className="mb-2 w-full">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600 dark:text-gray-400">Proficiency</span>
                        <span className="text-xs font-bold text-blue-700 dark:text-blue-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left animate-skill-bar`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes skill-bar {
                  from { width: 0; }
                  to { width: 100%; }
                }
                .animate-skill-bar {
                  animation: skill-bar 1.2s cubic-bezier(.4,0,.2,1) both;
                }
              `}</style>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className="bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 border-2 border-transparent hover:border-purple-400 rounded-3xl p-8 shadow-xl hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${achievement.color} rounded-bl-full opacity-10`} />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300`}>
                          <achievement.icon />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium capitalize flex items-center gap-1">
                              {React.createElement(getAchievementTypeIcon(achievement.type), { className: "w-4 h-4" })} {achievement.type}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(achievement.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short'
                              })}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on a project or have an opportunity to discuss? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get In Touch
              </button>
              <button className="px-8 py-3 bg-white/80 dark:bg-white/10 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
"use client"
import { useState } from 'react'
import WorkExperience from '@/components/WorkExperience'

interface Skill {
  name: string
  level: number
  color: string
  icon: string
}

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  type: 'award' | 'certification' | 'milestone'
  icon: string
  color: string
}

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<'work' | 'skills' | 'achievements'>('work')

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800', icon: '🔷' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700', icon: '🟢' },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-yellow-700', icon: '🐍' },
    { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-800', icon: '🍃' },
    { name: 'PostgreSQL', level: 70, color: 'from-blue-500 to-blue-700', icon: '🐘' },
    { name: 'AWS', level: 65, color: 'from-orange-500 to-orange-700', icon: '☁️' },
    { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-600', icon: '🐳' },
    { name: 'GraphQL', level: 75, color: 'from-pink-500 to-pink-700', icon: '📊' },
    { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-teal-700', icon: '🎨' },
    { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-500', icon: '🔥' },
    { name: 'Redux', level: 85, color: 'from-purple-500 to-purple-700', icon: '🔄' }
  ]

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'React Developer Certification',
      description: 'Advanced React certification from Meta covering hooks, state management, and performance optimization.',
      date: '2024-03',
      type: 'certification',
      icon: '🏆',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Best Innovation Award',
      description: 'Won first place in company hackathon for developing an AI-powered code review tool.',
      date: '2023-11',
      type: 'award',
      icon: '🥇',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      title: '10K+ GitHub Stars',
      description: 'Open source projects have collectively reached over 10,000 stars on GitHub.',
      date: '2023-09',
      type: 'milestone',
      icon: '⭐',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'AWS Solutions Architect',
      description: 'Certified AWS Solutions Architect - Associate level with expertise in cloud architecture.',
      date: '2023-06',
      type: 'certification',
      icon: '☁️',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Tech Lead Promotion',
      description: 'Promoted to Technical Lead position, now mentoring a team of 5 junior developers.',
      date: '2023-01',
      type: 'milestone',
      icon: '👥',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 6,
      title: 'Google Cloud Certified',
      description: 'Professional Cloud Developer certification demonstrating expertise in GCP services.',
      date: '2022-12',
      type: 'certification',
      icon: '🏅',
      color: 'from-blue-500 to-green-500'
    }
  ]

  const getAchievementTypeIcon = (type: string) => {
    switch (type) {
      case 'award': return '🏆'
      case 'certification': return '📜'
      case 'milestone': return '🎯'
      default: return '⭐'
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
            { key: 'work', label: 'Work Experience', icon: '💼' },
            { key: 'skills', label: 'Technical Skills', icon: '🛠️' },
            { key: 'achievements', label: 'Achievements', icon: '🏆' }
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
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {/* Work Experience Tab */}
          {activeTab === 'work' && (
            <div className="animate-fade-in">
              <WorkExperience />
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Proficiency
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-bl-full opacity-10`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium capitalize">
                              {getAchievementTypeIcon(achievement.type)} {achievement.type}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(achievement.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short'
                              })}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
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
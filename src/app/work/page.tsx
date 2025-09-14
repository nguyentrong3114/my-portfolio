"use client"
import { FaEnvelope, FaDownload, FaCheckCircle, FaUserTie, FaStar, FaRocket, FaHandshake } from 'react-icons/fa'
import { SiDotnet, SiNextdotjs, SiTailwindcss, SiFlutter, SiFirebase, SiReact, SiNodedotjs } from 'react-icons/si'

const skills = [
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: '.NET', icon: SiDotnet, color: 'text-blue-700' },
    { name: 'ReactJS', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: '.NET', icon: SiDotnet, color: 'text-blue-700' },
    { name: 'ReactJS', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' }
]

const reasons = [
    {
        icon: FaStar,
        text: 'Proven experience with modern web and mobile technologies.'
    },
    {
        icon: FaRocket,
        text: 'Fast learner, always up-to-date with the latest trends.'
    },
    {
        icon: FaHandshake,
        text: 'Excellent teamwork and communication skills.'
    },
    {
        icon: FaCheckCircle,
        text: 'Strong problem-solving and analytical thinking.'
    },
    {
        icon: FaUserTie,
        text: 'Leadership experience in multiple projects.'
    },

]

export default function WorkPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-white/80 dark:bg-black/40">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Looking for a Talented Developer?</h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">I'm ready to help your team build amazing products.</p>
                    <p className="text-base text-gray-500 dark:text-gray-400">Back-end Developer • Web Developer</p>
                </div>

                {/* About Me */}
                <div className="mb-10 text-center">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 rounded-2xl px-8 py-6 shadow-lg">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Hi, I'm <span className="font-bold text-blue-600 dark:text-teal-400">nguyentrong3114</span> — a passionate developer with experience in building scalable web and mobile applications for startups and enterprises.</p>
                        <p className="text-base text-gray-600 dark:text-gray-300">I love solving real-world problems, leading teams, and delivering high-quality solutions that make a difference.</p>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Key Skills</h2>
                    <div
                        className="relative mx-auto overflow-x-hidden w-1/2 max-w-2xl flex justify-center"
                        style={{ height: '120px' }}
                    >
                        <div
                            className="flex items-center gap-8 animate-infinity-scroll hover:[animation-play-state:paused]"
                            style={{
                                width: 'max-content',
                                animation: 'infinity-scroll 20s linear infinite',
                            }}
                        >
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={skill.name + idx} className="flex flex-col items-center gap-2 min-w-[100px]">
                                    <skill.icon className={`text-4xl ${skill.color} drop-shadow`} />
                                    <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                        <style>{`
              @keyframes infinity-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-infinity-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
                    </div>
                </div>

                {/* Why Hire Me */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Hire Me?</h2>
                    <ul className="space-y-4">
                        {reasons.map((reason, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200">
                                <reason.icon className="text-blue-500 dark:text-teal-400 text-2xl" />
                                {reason.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:nguyentrong3114@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2">
                            <FaEnvelope /> Contact Me
                        </a>
                        <a href="/public/CV_nguyentrong3114.pdf" download className="px-8 py-4 bg-white/80 dark:bg-white/10 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                            <FaDownload /> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client"
import { useState, useEffect, useRef } from 'react'
import { 
  FaGlobe, 
  FaCoffee, 
  FaLaptopCode, 
  FaLanguage, 
  FaTrophy, 
  FaBook, 
  FaRocket, 
  FaBolt 
} from 'react-icons/fa'

interface StatItem {
  icon: React.ComponentType<any>
  number: number
  suffix: string
  label: string
  color: string
  description: string
  hasProgress?: boolean
  maxValue?: number
}

export default function FunFacts() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0])
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const stats: StatItem[] = [
    { 
      icon: FaGlobe, 
      number: 15, 
      suffix: '+', 
      label: 'Countries Visited', 
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      description: 'From Asia to Europe, exploring cultures and cuisines'
    },
    { 
      icon: FaCoffee, 
      number: 1200, 
      suffix: '+', 
      label: 'Cups of Coffee', 
      color: 'from-amber-500 via-orange-500 to-red-500',
      description: 'Fueling late-night coding sessions since 2020'
    },
    { 
      icon: FaLaptopCode, 
      number: 24, 
      suffix: '', 
      label: 'Open Source Projects', 
      color: 'from-green-500 via-emerald-500 to-teal-500',
      description: 'Contributing to the developer community worldwide'
    },
    { 
      icon: FaLanguage, 
      number: 5, 
      suffix: '', 
      label: 'Languages Spoken', 
      color: 'from-purple-500 via-pink-500 to-rose-500',
      description: 'English, Vietnamese, Japanese, Chinese, Korean'
    },
    { 
      icon: FaTrophy, 
      number: 8, 
      suffix: '', 
      label: 'Awards Won', 
      color: 'from-yellow-500 via-orange-500 to-red-500',
      description: 'Recognition for outstanding projects and contributions'
    },
    { 
      icon: FaBook, 
      number: 150, 
      suffix: '+', 
      label: 'Books Read', 
      color: 'from-indigo-500 via-purple-500 to-pink-500',
      description: 'Continuous learning through technical and non-fiction books'
    },
    { 
      icon: FaRocket, 
      number: 95, 
      suffix: '%', 
      label: 'Client Satisfaction', 
      color: 'from-cyan-500 via-blue-500 to-purple-500',
      description: 'Consistently delivering high-quality solutions',
      hasProgress: true,
      maxValue: 100
    },
    { 
      icon: FaBolt, 
      number: 50000, 
      suffix: '+', 
      label: 'Lines of Code', 
      color: 'from-red-500 via-pink-500 to-purple-500',
      description: 'Clean, maintainable, and efficient code written'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateNumbers()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.number / 80
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(timer)
        }
        setAnimatedNumbers(prev => {
          const newNumbers = [...prev]
          newNumbers[index] = Math.floor(current)
          return newNumbers
        })
      }, 25)
    })
  }

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${stats[i % stats.length].color} rounded-full opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
      
      {/* Mouse Follow Effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-30 blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-gradient">
              Fun Facts About Me
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Numbers that tell my story - hover over each card to discover more!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-8 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer transform-gpu perspective-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-15 transition-all duration-500 animate-gradient-xy`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 scale-110`}></div>
              
              <div className="relative z-10 text-center">
                {/* Animated Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-lg">
                  <span className="inline-block animate-bounce-gentle" style={{ animationDelay: `${index * 200}ms` }}>
                    <stat.icon className="w-12 h-12 mx-auto" />
                  </span>
                </div>
                
                {/* Number with Counter Animation */}
                <div className="mb-3">
                  <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent drop-shadow-sm`}>
                    {isVisible ? (
                      <span className="inline-block tabular-nums">
                        {animatedNumbers[index]?.toLocaleString()}
                      </span>
                    ) : 0}
                  </span>
                  <span className={`text-2xl font-semibold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent ml-1`}>
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Progress Bar for percentage stats */}
                {stat.hasProgress && (
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${(animatedNumbers[index] / (stat.maxValue || 100)) * 100}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    />
                  </div>
                )}
                
                {/* Label */}
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </h3>
                
                {/* Description on Hover */}
                <div className={`overflow-hidden transition-all duration-500 ${activeCard === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                    {stat.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom Animated Border */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              
              {/* Corner Accent */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping`}></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Want to know more interesting facts?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Let's Connect!
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) translateX(-10px) rotate(240deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 4s ease infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </section>
  )
}
  

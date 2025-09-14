"use client"
import React, { useState } from 'react'
import { 
  FaTools, 
  FaDollarSign, 
  FaBolt, 
  FaBullseye, 
  FaHandshake, 
  FaQuestionCircle,
  FaSearch,
  FaChevronDown,
  FaComments,
  FaCalendarAlt
} from 'react-icons/fa'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  tags: string[]
}

export default function FAQPage() {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web development technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Google Cloud. I also have experience with databases like MongoDB and PostgreSQL, and I'm always learning new technologies to stay current with industry trends.",
      category: "technical",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "MongoDB"]
    },
    {
      id: 2,
      question: "How much do you charge for web development projects?",
      answer: "Project rates vary depending on complexity, timeline, and requirements. For simple websites, rates typically start from $2,000. More complex web applications can range from $5,000 to $20,000+. I also offer hourly consulting at $75-150/hour. I always provide detailed estimates after understanding your specific needs.",
      category: "pricing",
      tags: ["pricing", "cost", "budget", "rates"]
    },
    {
      id: 3,
      question: "What's your typical project timeline?",
      answer: "Timeline depends on project scope. A simple landing page might take 1-2 weeks, while a complex web application could take 2-6 months. I always provide realistic timelines during project planning and keep clients updated on progress. Rush projects may be possible with adjusted pricing.",
      category: "process",
      tags: ["timeline", "delivery", "project management", "planning"]
    },
    {
      id: 4,
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! I offer various maintenance packages including bug fixes, security updates, performance optimization, and feature additions. Basic maintenance starts at $200/month. I also provide emergency support and can train your team to manage basic updates themselves.",
      category: "services",
      tags: ["maintenance", "support", "updates", "bug fixes"]
    },
    {
      id: 5,
      question: "Can you work with my existing team or developers?",
      answer: "Absolutely! I enjoy collaborating with existing teams and can adapt to your current workflows. I'm experienced with Git, Agile methodologies, code reviews, and various project management tools. I can also provide mentoring for junior developers on your team.",
      category: "collaboration",
      tags: ["team", "collaboration", "mentoring", "git", "agile"]
    },
    {
      id: 6,
      question: "Do you design as well as develop?",
      answer: "I have strong UI/UX design skills and can handle both design and development. However, for projects requiring complex branding or custom illustrations, I often collaborate with specialized designers to ensure the best results. I'm proficient in Figma and can work with existing design systems.",
      category: "services",
      tags: ["design", "UI/UX", "Figma", "branding", "frontend"]
    },
    {
      id: 7,
      question: "What's your experience with e-commerce projects?",
      answer: "I have extensive experience building e-commerce solutions using platforms like Shopify, WooCommerce, and custom solutions with Stripe integration. I've handled payment processing, inventory management, order fulfillment, and analytics. I also implement SEO best practices for better visibility.",
      category: "technical",
      tags: ["e-commerce", "Shopify", "Stripe", "payments", "SEO"]
    },
    {
      id: 8,
      question: "How do you ensure project quality and testing?",
      answer: "I follow industry best practices including code reviews, automated testing, and quality assurance. I write unit tests, integration tests, and perform manual testing across different devices and browsers. All projects include a staging environment for client review before going live.",
      category: "process",
      tags: ["testing", "quality", "QA", "code review", "best practices"]
    },
    {
      id: 9,
      question: "Can you help with SEO and performance optimization?",
      answer: "Yes! I implement SEO best practices from the ground up, including proper HTML structure, meta tags, site speed optimization, and mobile responsiveness. I use tools like Google PageSpeed Insights and SEMrush to ensure optimal performance and search engine visibility.",
      category: "technical",
      tags: ["SEO", "performance", "optimization", "speed", "mobile"]
    },
    {
      id: 10,
      question: "Do you work with clients internationally?",
      answer: "Yes, I work with clients worldwide! I'm comfortable with remote collaboration and have experience working across different time zones. Communication is primarily through email, Slack, and video calls. I'm fluent in English and can accommodate various meeting schedules.",
      category: "general",
      tags: ["remote", "international", "timezone", "communication"]
    },
    {
      id: 11,
      question: "What's included in your web development packages?",
      answer: "Standard packages include responsive design, mobile optimization, basic SEO setup, contact forms, analytics integration, and 3 months of basic support. Premium packages add e-commerce functionality, advanced animations, CMS integration, and extended support. All packages include source code and documentation.",
      category: "services",
      tags: ["packages", "responsive", "SEO", "CMS", "support"]
    },
    {
      id: 12,
      question: "How do you handle project communication and updates?",
      answer: "I believe in transparent communication. I provide weekly progress reports, use project management tools like Notion or Trello, and am available for regular check-ins. Clients have access to staging environments to see progress in real-time. I respond to messages within 24 hours during business days.",
      category: "process",
      tags: ["communication", "updates", "project management", "transparency"]
    }
  ]

  const categories = ['all', ...Array.from(new Set(faqItems.map(item => item.category)))]
  
  const filteredItems = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return FaTools
      case 'pricing': return FaDollarSign
      case 'process': return FaBolt
      case 'services': return FaBullseye
      case 'collaboration': return FaHandshake
      case 'general': return FaQuestionCircle
      default: return FaQuestionCircle
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            FAQ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Frequently asked questions about my services, process, and expertise. Can't find what you're looking for? Feel free to reach out!
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize text-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/20'
              }`}
            >
              {React.createElement(getCategoryIcon(category), { className: "w-4 h-4" })}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl mt-1">
                        {React.createElement(getCategoryIcon(item.category), { className: "w-6 h-6" })}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg pr-8">
                          {item.question}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`text-2xl transition-transform duration-300 ${
                      activeItem === item.id ? 'rotate-180' : ''
                    }`}>
                      <FaChevronDown />
                    </div>
                  </div>
                </button>
                
                <div className={`px-6 transition-all duration-300 overflow-hidden ${
                  activeItem === item.id ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="pl-12">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or browse different categories.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl p-8 md:p-12">
            <div className="text-6xl mb-4"><FaComments className="w-16 h-16 mx-auto text-blue-500" /></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? I'm here to help! Reach out and I'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                <FaComments /> Ask a Question
              </button>
              <button className="px-8 py-3 bg-white/80 dark:bg-white/10 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FaCalendarAlt /> Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
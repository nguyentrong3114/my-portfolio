"use client"
import { useState } from 'react'
import { FaEdit, FaCalendarAlt, FaClock, FaUser, FaArrowRight } from 'react-icons/fa'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  tags: string[]
  author: string
  image?: string
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Modern React Applications with Next.js 14",
      excerpt: "Explore the latest features in Next.js 14 including Server Components, improved performance, and the new App Router architecture.",
      date: "2024-12-15",
      category: "React",
      readTime: "8 min read",
      tags: ["Next.js", "React", "Web Development", "JavaScript"],
      author: "nguyentrong3114",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced TypeScript patterns, utility types, and how to write more maintainable and type-safe code.",
      date: "2024-12-10",
      category: "TypeScript",
      readTime: "12 min read",
      tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
      author: "nguyentrong3114",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "CSS Animation Secrets: Creating Smooth User Experiences",
      excerpt: "Learn how to create stunning CSS animations that enhance user experience without compromising performance.",
      date: "2024-12-05",
      category: "CSS",
      readTime: "6 min read",
      tags: ["CSS", "Animation", "UI/UX", "Frontend"],
      author: "nguyentrong3114",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Discover the emerging trends and technologies that will shape web development in 2025 and beyond.",
      date: "2024-12-01",
      category: "Trends",
      readTime: "10 min read",
      tags: ["Web Development", "Trends", "Future", "Technology"],
      author: "nguyentrong3114",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn best practices for building robust, scalable REST APIs using Node.js, Express, and modern architectural patterns.",
      date: "2024-11-28",
      category: "Backend",
      readTime: "15 min read",
      tags: ["Node.js", "Express", "API", "Backend", "Architecture"],
      author: "nguyentrong3114",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "React Performance Optimization: Tips and Techniques",
      excerpt: "Comprehensive guide to optimizing React applications for better performance and user experience.",
      date: "2024-11-25",
      category: "React",
      readTime: "11 min read",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
      author: "nguyentrong3114",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts on web development, programming, and technology. Sharing knowledge and experiences from my journey as a developer.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Post Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                  <FaEdit />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {formatDate(post.date)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-500 dark:text-gray-500 rounded-md">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                      <FaUser />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {post.author}
                    </span>
                  </div>
                  
                  <button className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline transition-all duration-300 group-hover:translate-x-1 flex items-center gap-1">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Load More Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified when I publish new articles about web development, programming tips, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
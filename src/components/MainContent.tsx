interface MainContentProps {
  activeSection: string
}

export function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Giới thiệu về tôi</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Xin chào! Tôi là một Full Stack Developer đam mê công nghệ và luôn muốn học hỏi những điều mới. 
                Với kinh nghiệm trong việc phát triển ứng dụng web hiện đại, tôi chuyên về React, Next.js, Node.js và nhiều công nghệ khác.
              </p>
              <p className="text-lg leading-relaxed">
                Tôi tin rằng code không chỉ là công việc mà còn là nghệ thuật. Mỗi dòng code đều có thể tạo ra những trải nghiệm tuyệt vời cho người dùng.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">🎯 Mục tiêu</h3>
                  <p>Trở thành một Senior Full Stack Developer và đóng góp vào các dự án có tác động tích cực đến cộng đồng.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">💡 Sở thích</h3>
                  <p>Coding, đọc sách về công nghệ, chơi game, và khám phá các framework mới.</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'experience':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Kinh nghiệm làm việc
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Công ty ABC Tech</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    2023 - Hiện tại
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    Phát triển ứng dụng web sử dụng React, Next.js và Node.js
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    Thiết kế và triển khai RESTful APIs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    Tối ưu hóa hiệu suất ứng dụng và database
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Frontend Developer</h3>
                      <p className="text-green-600 dark:text-green-400 font-medium">Startup XYZ</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    2022 - 2023
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    Xây dựng giao diện người dùng responsive với React và Tailwind CSS
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    Tích hợp APIs và quản lý state với Redux
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    Tối ưu hóa SEO và hiệu suất loading
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 'projects':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Dự án nổi bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">E-commerce Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Platform thương mại điện tử với đầy đủ tính năng: giỏ hàng, thanh toán, quản lý đơn hàng.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:underline">Live Demo</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Task Management App</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ứng dụng quản lý công việc với tính năng real-time collaboration và notifications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Redis</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:underline">Live Demo</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Weather Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Dashboard hiển thị thông tin thời tiết với charts và forecast 7 ngày.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Chart.js</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">API</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:underline">Live Demo</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Blog Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Platform blog với editor markdown, comment system và search functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Prisma</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">PostgreSQL</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:underline">Live Demo</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        )

      case 'skills':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Kỹ năng & Công nghệ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Frontend</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>React/Next.js</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>TypeScript</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tailwind CSS</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>HTML/CSS</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Backend</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Node.js</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Express.js</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Python</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>REST APIs</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Database & Tools</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>MongoDB</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>PostgreSQL</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Git</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Docker</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Chứng chỉ & Thành tích</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="font-semibold">AWS Certified Developer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services - 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl">📜</div>
                  <div>
                    <h4 className="font-semibold">Google Analytics Certified</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Google - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Liên hệ với tôi</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Tôi luôn sẵn sàng để thảo luận về các cơ hội hợp tác mới, dự án thú vị hoặc chỉ đơn giản là trò chuyện về công nghệ!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">email@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Điện thoại</h3>
                      <p className="text-gray-600 dark:text-gray-400">+84 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Địa chỉ</h3>
                      <p className="text-gray-600 dark:text-gray-400">Hà Nội, Việt Nam</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Kết nối với tôi</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Gửi tin nhắn</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Tên của bạn</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nhập tên của bạn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Chủ đề</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Chủ đề tin nhắn"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Tin nhắn</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nội dung tin nhắn của bạn..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Gửi tin nhắn
                  </button>
                </form>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400">
              Chọn một mục từ menu bên trái
            </h2>
          </div>
        )
    }
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-full overflow-auto relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-orange-200/20 dark:from-pink-800/10 dark:to-orange-800/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  )
}

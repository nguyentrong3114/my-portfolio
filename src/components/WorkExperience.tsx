
"use client"
import ScrollStack, { ScrollStackItem } from "./ScrollList"
export default function WorkExperience() {
  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px  -6 ">
      <ScrollStack useWindowScroll={true}>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Flower Shop E-commerce Platform</h2>
            <div className="text-base mb-1 font-medium text-blue-600 dark:text-blue-400">Team Leader • Full Stack Development</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">.NET Core, Bootstrap, SQL Server</div>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-1">
              <li>Led a team of 4 developers to build a complete e-commerce solution</li>
              <li>Implemented secure payment integration and inventory management</li>
              <li>Designed responsive UI with Bootstrap for optimal user experience</li>
              <li>Built RESTful APIs for seamless frontend-backend communication</li>
            </ul>
            <button className="mt-2 w-fit px-6 py-2 cursor-pointer hover:scale-105 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="Flower Shop Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-gradient-to-br from-pink-200 to-rose-300" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Team Size</div>
                <div className="text-2xl font-semibold">4</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Duration</div>
                <div className="text-2xl font-semibold">6mo</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">App Reminder Mobile Application</h2>
            <div className="text-base mb-1 font-medium text-green-600 dark:text-green-400">Mobile Developer</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Flutter, Dart, Firebase</div>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-1">
              <li>Developed cross-platform reminder app with intuitive user interface</li>
              <li>Integrated Firebase for real-time data synchronization and push notifications</li>
              <li>Implemented local storage and offline functionality</li>
              <li>Deployed to both iOS App Store and Google Play Store</li>
            </ul>
            <button className="mt-2 w-fit px-6 py-2 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="App Reminder Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-gradient-to-br from-blue-200 to-cyan-300" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Downloads</div>
                <div className="text-2xl font-semibold">1K+</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Rating</div>
                <div className="text-2xl font-semibold">4.5*</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Flower Store Management System</h2>
            <div className="text-base mb-1 font-medium text-purple-600 dark:text-purple-400">Team Leader • Full Stack Development</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">.NET Core, Next.js, TailwindCSS</div>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-1">
              <li>Led development of modern store management system with dashboard</li>
              <li>Built responsive frontend with Next.js and styled with TailwindCSS</li>
              <li>Implemented role-based authentication and authorization system</li>
              <li>Created comprehensive reporting and analytics features</li>
            </ul>
            <button className="mt-2 w-fit px-6 py-2 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="Flower Store Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-gradient-to-br from-purple-200 to-pink-300" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Performance</div>
                <div className="text-2xl font-semibold">95%</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Uptime</div>
                <div className="text-2xl font-semibold">99.9%</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">BHV SYSTEM Enterprise Solution</h2>
            <div className="text-base mb-1 font-medium text-orange-600 dark:text-orange-400">Full Stack Developer • Backend & Frontend</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Node.js, Express.js, React, MongoDB</div>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-1">
              <li>Developed enterprise-level system for business management</li>
              <li>Built robust backend APIs with Node.js and Express.js</li>
              <li>Created dynamic frontend interfaces with React</li>
              <li>Implemented scalable database solutions with MongoDB</li>
            </ul>
            <button className="mt-2 w-fit px-6 py-2 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="BHV System Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-gradient-to-br from-orange-200 to-yellow-300" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Users</div>
                <div className="text-2xl font-semibold">500+</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Efficiency</div>
                <div className="text-2xl font-semibold">85%</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  )
}



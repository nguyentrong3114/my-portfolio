
"use client"
import ScrollStack, { ScrollStackItem } from "./ScrollList"
export default function WorkExperience() {
  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 ">
      <ScrollStack useWindowScroll={true}>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Building a Personal Portfolio Website</h2>
            <div className="text-base mb-4">Designed and developed a modern, responsive portfolio to showcase my skills and projects, focusing on UX and performance.</div>
            <button className="mt-2 w-fit px-6 py-2 cursor-pointer hover:scale-105 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="Portfolio Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-black/30" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Engagement</div>
                <div className="text-2xl font-semibold">8 min</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">User Satisfaction</div>
                <div className="text-2xl font-semibold">5.0*</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Full Stack Developer</h2>
            <div className="text-base mb-1">ABC Tech · 2023 – Present · Remote</div>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>Designed and implemented scalable web features in Next.js and Node.</li>
              <li>Improved app performance by optimizing client-side rendering and caching.</li>
              <li>Collaborated closely with designers to ship pixel-perfect UI.</li>
            </ul>
            <button className="mt-2 w-fit px-6 py-2 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="Project Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-black/30" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Engagement</div>
                <div className="text-2xl font-semibold">10 min</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">User Satisfaction</div>
                <div className="text-2xl font-semibold">4.8*</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Frontend Engineer</h2>
            <div className="text-base mb-1">Startup XYZ · 2021 – 2023 · On-site</div>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>Built interactive dashboards and data visualizations using React.</li>
              <li>Led component library efforts and accessibility improvements.</li>
            </ul>
            <button className="mt-2 w-fit px-6 py-2 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="Project Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-black/30" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Engagement</div>
                <div className="text-2xl font-semibold">7 min</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">User Satisfaction</div>
                <div className="text-2xl font-semibold">4.7*</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="border-2 border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-black/40 p-0 flex flex-row items-stretch min-h-[320px]">
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-2xl font-bold mb-2">Intern Web Developer</h2>
            <div className="text-base mb-1">Creative Studio · 2020 – 2021 · Hybrid</div>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>Assisted in building landing pages and marketing sites.</li>
              <li>Learned modern frontend workflows and Git collaboration.</li>
            </ul>
            <button className="mt-2 w-fit px-6 py-2 rounded-full bg-black/80 text-white dark:bg-white/10 dark:text-white hover:bg-black/90 transition">View project</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8 gap-4">
            <div className="w-full flex justify-center">
              <img src="/public/img/avt.png" alt="Project Screenshot" className="rounded-xl object-cover w-[260px] h-[140px] bg-black/30" />
            </div>
            <div className="w-full flex flex-row justify-between mt-4 text-center">
              <div>
                <div className="text-xs text-gray-500">Engagement</div>
                <div className="text-2xl font-semibold">5 min</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">User Satisfaction</div>
                <div className="text-2xl font-semibold">4.6*</div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  )
}



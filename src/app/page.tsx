"use client"
import Hero from '@/components/Hero'
import WorkExperience from '@/components/WorkExperience'
import FunFacts from '@/components/FunFacts'
export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <WorkExperience />
      </section>
      <section>
        <FunFacts />
      </section>
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Interactive Drawing Board
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Express your creativity! Draw, sketch, or just have fun with this interactive canvas.
          </p>
        </div>
      </section>
    </main>
  )
}

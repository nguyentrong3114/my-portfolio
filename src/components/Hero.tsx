"use client"

import Image from 'next/image'
import { FaFigma, FaBehance, FaDribbble, FaGithub, FaTwitter } from 'react-icons/fa'
import Header from './Header'
import PixelBlast from '@/background/HeroBackGround'
export default function Hero() {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute inset-0 flex items-center justify-center">

        <div style={{ width: '80%', height: '80%', position: 'relative' }}>
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
          </div>
        </div>
        <Header />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-6xl px-8 py-12 text-center pointer-events-auto z-50">
            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="w-42 h-42 relative rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image src="/img/avt.png" alt="avatar" fill className="object-cover" />
              </div>
            </div>

            <h1 className="text-4xl font-semibold leading-tight mb-3">Web Developer</h1>
            <p className="mx-auto max-w-3xl opacity-90 mb-6">Helping startups and brands to craft expressive and engaging solutions for their software needs.</p>

            <div className="flex gap-4 justify-center mb-8">
              <button className="px-6 py-2 rounded-full bg-black text-white shadow-lg">Discover More</button>
              <button className="px-5 py-2 rounded-full border">Contact</button>
            </div>

            <div className="flex gap-6 justify-center mt-6">
              <span className="w-14 h-14 rounded-lg border-2 flex items-center justify-center"><FaBehance /></span>
              <span className="w-14 h-14 rounded-lg border-2 flex items-center justify-center"><FaFigma /></span>
              <span className="w-14 h-14 rounded-lg border-2 flex items-center justify-center"><FaDribbble /></span>
              <span className="w-14 h-14 rounded-lg border-2 flex items-center justify-center"><FaGithub /></span>
              <span className="w-14 h-14 rounded-lg border-2 flex items-center justify-center"><FaTwitter /></span>
            </div>
          </div>
        </div>

      </div>
      )
}


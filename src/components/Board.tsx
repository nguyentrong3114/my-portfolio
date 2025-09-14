"use client"
import { useRef, useEffect, useState, useCallback } from 'react'

interface DrawPoint {
  x: number
  y: number
}

export default function Board() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentColor, setCurrentColor] = useState('#3B82F6')
  const [brushSize, setBrushSize] = useState(3)
  const [lastPoint, setLastPoint] = useState<DrawPoint | null>(null)

  const colors = [
    '#3B82F6', // Blue
    '#EF4444', // Red
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#06B6D4', // Cyan
    '#F97316', // Orange
    '#1F2937', // Dark Gray
    '#FFFFFF'  // White
  ]

  const brushSizes = [1, 3, 5, 8, 12, 16]

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      
      // Set background
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  const getPointFromEvent = useCallback((e: MouseEvent | TouchEvent): DrawPoint => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      }
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }
  }, [])

  const startDrawing = useCallback((e: MouseEvent | TouchEvent) => {
    e.preventDefault()
    const point = getPointFromEvent(e)
    setIsDrawing(true)
    setLastPoint(point)

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
    ctx.arc(point.x, point.y, brushSize / 2, 0, Math.PI * 2)
    ctx.fillStyle = currentColor
    ctx.fill()
  }, [getPointFromEvent, brushSize, currentColor])

  const draw = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDrawing || !lastPoint) return
    e.preventDefault()

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    const currentPoint = getPointFromEvent(e)
    
    ctx.beginPath()
    ctx.moveTo(lastPoint.x, lastPoint.y)
    ctx.lineTo(currentPoint.x, currentPoint.y)
    ctx.strokeStyle = currentColor
    ctx.lineWidth = brushSize
    ctx.stroke()

    setLastPoint(currentPoint)
  }, [isDrawing, lastPoint, getPointFromEvent, currentColor, brushSize])

  const stopDrawing = useCallback(() => {
    setIsDrawing(false)
    setLastPoint(null)
  }, [])

  // Mouse events
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseDown = (e: MouseEvent) => startDrawing(e)
    const handleMouseMove = (e: MouseEvent) => draw(e)
    const handleMouseUp = () => stopDrawing()
    const handleMouseLeave = () => stopDrawing()

    // Touch events
    const handleTouchStart = (e: TouchEvent) => startDrawing(e)
    const handleTouchMove = (e: TouchEvent) => draw(e)
    const handleTouchEnd = () => stopDrawing()

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchmove', handleTouchMove)
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [startDrawing, draw, stopDrawing])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx || !canvas) return

    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const downloadCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'drawing.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Controls */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Color Palette */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Colors:</span>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                    currentColor === color
                      ? 'border-gray-800 dark:border-white scale-110'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Brush Size */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Size:</span>
            <div className="flex gap-2">
              {brushSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setBrushSize(size)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    brushSize === size
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-600'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700'
                  }`}
                >
                  <div 
                    className="rounded-full bg-current"
                    style={{ 
                      width: `${Math.max(2, size / 2)}px`, 
                      height: `${Math.max(2, size / 2)}px` 
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={clearCanvas}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              🗑️ Clear
            </button>
            <button
              onClick={downloadCanvas}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              📥 Save
            </button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative bg-white">
        <canvas
          ref={canvasRef}
          className="w-full h-96 cursor-crosshair touch-none"
          style={{ touchAction: 'none' }}
        />
        
        {/* Instructions */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-gray-400 text-center opacity-30">
            <div className="text-6xl mb-2">🎨</div>
            <p className="text-lg font-medium">Start drawing!</p>
            <p className="text-sm">Use mouse or touch to draw</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Current: <span className="font-medium" style={{ color: currentColor }}>Color</span> • 
          <span className="font-medium ml-1">Size {brushSize}px</span> • 
          <span className="ml-1">Click and drag to draw, touch supported</span>
        </p>
      </div>
    </div>
  )
}
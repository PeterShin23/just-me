'use client'

import { useRef, useEffect, ReactNode } from 'react'
import VanillaTilt from 'vanilla-tilt'

interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void
  }
}

type TiltOptions = {
  max?: number
  speed?: number
  glare?: boolean
  'max-glare'?: number
  scale?: number
}

type Props = {
  children: ReactNode
  options?: TiltOptions
  className?: string
}

export default function TiltWrapper({
  children,
  options = {
    max: 10,
    speed: 400,
    scale: 1.03,
    glare: true,
    'max-glare': 0.2,
  },
  className = '',
}: Props) {
  const ref = useRef<TiltHTMLElement>(null)

  useEffect(() => {
    if (ref.current) VanillaTilt.init(ref.current, options)
    return () => ref.current?.vanillaTilt?.destroy()
  }, [options])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { detectAutoplay } from '@/utils/detectAutoplay'

/**
 * AnimatedMedia renders a muted looping video. If autoplay is blocked (e.g. iOS Low-Power mode)
 * it shows a fallback image (static or animated WebP/APNG). After the first user gesture it tries again.
 */
export default function AnimatedMedia({ videoSrc, posterSrc, className }) {
  const videoRef = useRef(null)
  const [autoplayAllowed, setAutoplayAllowed] = useState(true)
  const [triedOnce, setTriedOnce] = useState(false)

  // Initial autoplay test
  useEffect(() => {
    let canceled = false
    ;(async () => {
      const ok = await detectAutoplay()
      if (!canceled) setAutoplayAllowed(ok)
    })()
    return () => {
      canceled = true
    }
  }, [])

  // Listen for the custom userGesture event to retry play
  useEffect(() => {
    function handle() {
      if (!videoRef.current) return
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {})
      }
    }
    window.addEventListener('userGesture', handle)
    return () => window.removeEventListener('userGesture', handle)
  }, [])

  // Play on mount if allowed
  useEffect(() => {
    if (!autoplayAllowed || !videoRef.current || triedOnce) return
    setTriedOnce(true)
    videoRef.current.play().catch(() => {})
  }, [autoplayAllowed, triedOnce])

  // Retry play whenever videoSrc меняется
  useEffect(() => {
    if (!autoplayAllowed || !videoRef.current) return
    videoRef.current.play().catch(() => {})
  }, [videoSrc, autoplayAllowed])

  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      {(!autoplayAllowed) && posterSrc && (
        <img src={posterSrc} alt="fallback" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      )}
      <video
        key={videoSrc}
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ display: 'block' }}
        onPlaying={() => setAutoplayAllowed(true)}
        onError={() => setAutoplayAllowed(false)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
} 
import { useLayoutEffect, type RefObject } from 'react'
import { isCoarsePointer } from '@/lib/isCoarsePointer'

/** Fixed subpage scroll root — keeps About/Services off the homepage Hero wheel logic. */
export function useSubpageScroll(pageRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = pageRef.current
    if (!el) return

    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow

    document.documentElement.style.removeProperty('--p')
    document.documentElement.style.removeProperty('--white-guide-opacity')
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    el.scrollTop = 0

    if (isCoarsePointer()) {
      return () => {
        document.body.style.overflow = prevBody
        document.documentElement.style.overflow = prevHtml
      }
    }

    const scrollBy = (deltaY: number) => {
      const max = el.scrollHeight - el.clientHeight
      if (max <= 0) return
      el.scrollTop = clamp(el.scrollTop + deltaY, 0, max)
    }

    const onWheel = (e: WheelEvent) => {
      if (!el.contains(e.target as Node)) return
      const max = el.scrollHeight - el.clientHeight
      if (max <= 0) return
      if (e.cancelable) e.preventDefault()
      scrollBy(e.deltaY)
    }

    let touchY: number | null = null

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch || !el.contains(e.target as Node)) return
      touchY = touch.clientY
    }

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch || touchY === null) return
      if (!el.contains(e.target as Node)) return
      const deltaY = touchY - touch.clientY
      touchY = touch.clientY
      if (e.cancelable) e.preventDefault()
      scrollBy(deltaY)
    }

    const onTouchEnd = () => {
      touchY = null
    }

    document.addEventListener('wheel', onWheel, { passive: false })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchmove', onTouchMove, { passive: false })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    document.addEventListener('touchcancel', onTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('wheel', onWheel)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('touchcancel', onTouchEnd)
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
    }
  }, [pageRef])
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

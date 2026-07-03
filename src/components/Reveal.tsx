import type { ReactNode } from 'react'

/** Visible by default — avoids blank content when scroll animations do not fire. */
export function Reveal({ children }: { children: ReactNode }) {
  return <>{children}</>
}

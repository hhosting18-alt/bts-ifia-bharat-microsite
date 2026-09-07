import { CSSProperties } from 'react'
import * as Icons from 'lucide-react'

export function Icon({ name, size = 28, color, strokeWidth = 1.7 }: { name: keyof typeof Icons; size?: number; color?: string; strokeWidth?: number }) {
  const C = Icons[name] as any
  if (!C) return null
  return <C size={size} color={color} strokeWidth={strokeWidth} aria-hidden="true" />
}

export const iconStyle = (color?: string): CSSProperties => ({ color })

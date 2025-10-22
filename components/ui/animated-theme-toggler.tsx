"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

type Props = { className?: string }

export const AnimatedThemeToggler = ({ className }: Props) => {
  const themes = useMemo(
    () => [
      { name: "light", icon: <Sun /> },
      { name: "dark", icon: <Moon /> },
    ],
    []
  )

  const [theme, setTheme] = useState<"dark" | "light">("light")
  const buttonRef = useRef<HTMLButtonElement>(null)

  const applyTheme = useCallback((newTheme: "light" | "dark") => {
    const root = document.documentElement
    const isDark = newTheme === "dark"
    root.classList.toggle("dark", isDark)
    localStorage.setItem("theme", newTheme)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    const initial = saved || "light"
    setTheme(initial)
    applyTheme(initial)
  }, [applyTheme])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const nextTheme = theme === "light" ? "dark" : "light"

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme)
        applyTheme(nextTheme)
      })
    }).ready

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [theme, applyTheme])

  const getIcon = () => (theme === "dark" ? <Moon /> : <Sun />)

  return (
    <button ref={buttonRef} onClick={toggleTheme} className={cn(className)} aria-label="Toggle theme">
      {getIcon()}
    </button>
  )
}

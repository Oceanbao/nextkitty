"use client"

import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <input
      type="checkbox"
      className="navbar-end toggle"
      onChange={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      checked={theme === "dark" ? true : false}
    />
  )
}

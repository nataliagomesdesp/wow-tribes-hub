'use client'

import { useState, useEffect } from 'react'

export default function WowHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('wow-hub-dark-mode') === 'true'
    setDarkMode(savedDarkMode)
    if (savedDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('wow-hub-dark-mode', newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleDarkMode}
          className="w-12 h-12 rounded-full bg-wow-purple hover:bg-opacity-90 text-white flex items-center justify-center shadow-lg transition dark:bg-wow-lilac"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      {children}
    </>
  )
}

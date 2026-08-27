'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang } from './translations'

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (path: string) => string
}

const LangContext = createContext<LangContextValue | null>(null)

function resolve(path: string): Record<Lang, string> | undefined {
  return path.split('.').reduce<any>((node, part) => node?.[part], translations)
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ES')

  useEffect(() => {
    const saved = (localStorage.getItem('wow-hub-lang') as Lang) || 'ES'
    setLangState(saved)
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('wow-hub-lang', newLang)
  }

  const t = (path: string) => resolve(path)?.[lang] ?? path

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

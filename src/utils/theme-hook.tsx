import React, { useEffect, useState } from 'react'

export const useGetThemes = () => {
  const themeList = (import.meta.env.VITE_THEME_LIST as string).split(',')
  const defaultTheme = themeList[0]

  return {
    defaultTheme,
    themeList
  }
}
export const useGetCurrentTheme = () => {
  const { defaultTheme } = useGetThemes()
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ?? defaultTheme)
  })

  return theme
}

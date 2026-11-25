'use client'

import { ChakraProvider } from '@chakra-ui/react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import { useState, type ReactNode } from 'react'
import { system } from '../lib/theme'

const createEmotionCache = () => {
  const cache = createCache({ key: 'css' })
  cache.compat = true
  let pending: string[] = []
  const insert = cache.insert
  cache.insert = (...args) => {
    const { name } = args[1]
    if (cache.inserted[name] === undefined) pending.push(name)
    return insert(...args)
  }
  const flush = () => {
    const names = pending
    pending = []
    return names
  }
  return { cache, flush }
}

function EmotionRegistry({ children }: { children: ReactNode }) {
  const [{ cache, flush }] = useState(createEmotionCache)

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null
    return (
      <style
        key={names.join(' ')}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: names.map(name => cache.inserted[name]).join('')
        }}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <EmotionRegistry>
      <ChakraProvider value={system}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </EmotionRegistry>
  )
}

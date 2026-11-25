'use client'

import { Box, IconButton } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

const subscribe = () => () => {}

const useHydrated = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

const StaticIcon = () => (
  <>
    <Box asChild _dark={{ display: 'none' }}>
      <LuMoon />
    </Box>
    <Box asChild display="none" _dark={{ display: 'block' }}>
      <LuSun />
    </Box>
  </>
)

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const hydrated = useHydrated()
  const isDark = resolvedTheme === 'dark'

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={resolvedTheme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorPalette="accent"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {!hydrated ? <StaticIcon /> : isDark ? <LuSun /> : <LuMoon />}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

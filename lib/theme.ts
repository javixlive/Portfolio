import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const mode = (light: string, dark: string) => ({
  value: { _light: light, _dark: dark }
})

const config = defineConfig({
  globalCss: {
    html: {
      bg: 'page',
      color: 'text'
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-heading), sans-serif' },
        body: {
          value:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }
      },
      colors: {
        grassTeal: { value: '#88ccca' }
      }
    },
    semanticTokens: {
      colors: {
        page: mode('#f0e7db', '#202023'),
        text: mode('#1a202c', 'rgba(255, 255, 255, 0.92)'),
        link: mode('#3d7aed', '#ff63c3'),
        divider: mode('#b794f4', '#fbd38d'),
        card: mode('rgba(255, 255, 255, 0.48)', 'rgba(255, 255, 255, 0.08)'),
        navBg: mode('#ffffff40', '#20202380'),
        accent: {
          solid: mode('#805ad5', '#fbd38d'),
          contrast: mode('#ffffff', '#1a202c'),
          fg: mode('#6b46c1', '#fbd38d'),
          subtle: mode('#faf5ff', 'rgba(251, 211, 141, 0.12)'),
          muted: mode('#e9d8fd', 'rgba(251, 211, 141, 0.24)'),
          emphasized: mode('#d6bcfa', 'rgba(251, 211, 141, 0.36)'),
          focusRing: mode('#805ad5', '#fbd38d')
        },
        meta: {
          subtle: mode('#c6f6d5', 'rgba(154, 230, 180, 0.16)'),
          fg: mode('#22543d', '#9ae6b4')
        },
        tag: {
          subtle: mode('#edf2f7', 'rgba(226, 232, 240, 0.16)'),
          fg: mode('#1a202c', '#e2e8f0')
        }
      }
    },
    recipes: {
      container: {
        base: { maxWidth: '60ch', px: '4' }
      },
      button: {
        base: { fontWeight: 'semibold' },
        variants: { size: { md: { textStyle: 'md' } } }
      },
      heading: {
        base: { fontWeight: 'bold' }
      },
      link: {
        variants: {
          variant: {
            plain: { color: 'link' }
          }
        }
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)

import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        brand: {
          light: 'rgb(209 250 229 / <alpha-value>)',
          DEFAULT: 'rgb(52 211 153 / <alpha-value>)',
          dark: 'rgb(5 150 105 / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  }
} satisfies Config

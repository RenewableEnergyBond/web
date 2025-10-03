import type { Config } from 'tailwindcss';
import { addIconSelectors } from '@iconify/tailwind';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      //
    },
  },
  plugins: [
    addIconSelectors(['mdi'])
  ],
}

export default config


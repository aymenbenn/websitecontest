export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#08090B',
        panel: '#0E1217',
        raise: '#141A20',
        line: '#212A32',
        line2: '#2C3742',
        fg: '#E9ECEF',
        mute: '#8B949F',
        faint: '#5C6570',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accentFg: 'rgb(var(--accent-fg) / <alpha-value>)',
        warn: '#FFB454',
        bad: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        swift: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
}

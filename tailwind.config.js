export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F2EC',
        paper: '#FFFDF9',
        shell: '#EFE8DE',
        line: '#E0D8CC',
        ink: '#15130F',
        'ink-soft': '#463F36',
        'ink-mute': '#6B6357',
        plum: {
          DEFAULT: '#4A2540',
          soft: '#6B3D5E',
        },
        moss: {
          DEFAULT: '#68765A',
          soft: '#8B977D',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
      maxWidth: {
        readable: '68ch',
      },
      borderRadius: {
        card: '10px',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}

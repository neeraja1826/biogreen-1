export default {
  theme: {
    extend: {
      colors: {
        forest: '#6BAF92',
        sage: '#A8CFA8',
        mint: '#CDE8C5',
        ivory: '#FCFCF8',
        sagelight: '#F4FAF3',
        botanical: '#335C4D',
        olive: '#577D5F',
        line: '#D9E7D8',
        ink: '#233329',
        muted: '#56615B',
        leaf: '#84C89A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '14px',
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '28px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(35, 51, 41, 0.04), 0 12px 32px rgba(35, 51, 41, 0.06)',
        lift: '0 8px 20px rgba(35, 51, 41, 0.07), 0 28px 60px rgba(35, 51, 41, 0.10)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
}

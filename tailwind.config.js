const spacingPxValues = [
  '5px',
  '9px',
  '10px',
  '14px',
  '18px',
  '21px',
  '22px',
  '27px',
  '29px',
  '35px',
  '44px',
  '60px',
  '64px',
  '80px',
  '122px',
  '160px',
  '240px',
  '320px'
];
const spacingPx = {};
spacingPxValues.forEach((value) => {
  spacingPx[value] = value;
});

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '32px'
      }
    },
    extend: {
      borderRadius: {
        '10px': '10px'
      },
      colors: {
        dark: 'var(--color-dark)',
        grey: {
          DEFAULT: 'var(--color-grey)',
          background: 'var(--color-grey-background)',
          border: 'var(--color-grey-border)'
        },
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        '10px': ['10px', '12px'],
        '12px': ['12px', '14px'],
        '13px': [
          '13px',
          {
            letterSpacing: '-0.18px',
            lineHeight: '16px'
          }
        ],
        '15px': ['15px', '28px'],
        '20px': [
          '20px',
          {
            letterSpacing: '-0.18px',
            lineHeight: '27px'
          }
        ]
      },
      minWidth: {
        ...spacingPx
      },
      maxWidth: {
        ...spacingPx
      },
      spacing: {
        ...spacingPx
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};

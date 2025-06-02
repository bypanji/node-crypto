import type { Config } from 'tailwindcss'
const { theme } = require('./tailwind-preset/basic')

export default {
  content: ['./src/**/*.{vue,md}'],
  presets: [require('./tailwind-preset/basic')],
  theme  : {
    extend: {
      colors: {
        brand: {
          logo  : theme.colors.red[40],
          action: theme.colors.red[40],
          accent: theme.colors.red[40],
        },
        dark: {
          brand: {
            logo  : theme.colors.gray[0],
            action: theme.colors.red[30],
            accent: theme.colors.red[30],
          },
        },
      },
      textColor: {
        'DEFAULT'       : theme.colors.gray[100],
        'default'       : theme.colors.gray[100],
        'subtle'        : theme.colors.gray[60],
        'subtlest'      : theme.colors.gray[35],
        'muted'         : theme.colors.gray[25],
        'link'          : theme.colors.blue[50],
        'on-emphasis'   : theme.colors.gray[0],
        'state-emphasis': theme.colors.gray[0],
        'info'          : theme.colors.blue[60],
        'success'       : theme.colors.green[60],
        'warning'       : theme.colors.orange[70],
        'danger'        : theme.colors.red[60],
        'dark'          : {
          'DEFAULT'       : theme.colors.gray[0],
          'default'       : theme.colors.gray[0],
          'subtle'        : theme.colors.gray[40],
          'subtlest'      : theme.colors.gray[60],
          'muted'         : theme.colors.gray[75],
          'link'          : theme.colors.blue[30],
          'on-emphasis'   : theme.colors.gray[100],
          'state-emphasis': theme.colors.gray[0],
          'info'          : theme.colors.blue[20],
          'success'       : theme.colors.green[20],
          'warning'       : theme.colors.orange[20],
          'danger'        : theme.colors.red[20],
        },
      },
      backgroundColor: {
        'inherit'    : 'inherit',
        'current'    : 'currentColor',
        'transparent': 'transparent',
        'base'       : {
          DEFAULT: theme.colors.gray[5],
          black  : theme.colors.base.black,
          white  : theme.colors.base.white,
        },
        'DEFAULT': theme.colors.gray[0],
        'layer-1': theme.colors.gray[0],
        'layer-2': theme.colors.gray[0],
        'default': {
          DEFAULT: theme.colors.gray[0],
          alpha  : `rgba(${theme.colors.gray[50]}, ${theme.opacity[5]})`,
        },
        'inverse': theme.colors.gray[100],
        'subtle' : {
          DEFAULT: theme.colors.gray[10],
          alpha  : `rgba(${theme.colors.gray[80]}, ${theme.opacity[10]})`,
        },
        'info': {
          DEFAULT : theme.colors.blue[0],
          emphasis: theme.colors.blue[40],
        },
        'success': {
          DEFAULT : theme.colors.green[0],
          emphasis: theme.colors.green[40],
        },
        'warning': {
          DEFAULT : theme.colors.orange[0],
          emphasis: theme.colors.orange[40],
        },
        'danger': {
          DEFAULT : theme.colors.red[0],
          emphasis: theme.colors.red[40],
        },
        'dark': {
          'base'   : theme.colors.gray[100],
          'DEFAULT': theme.colors.gray[95],
          'layer-1': theme.colors.gray[90],
          'layer-2': theme.colors.gray[85],
          'default': {
            DEFAULT: theme.colors.gray[95],
            alpha  : `rgba(${theme.colors.gray[80]}, ${theme.opacity[10]})`,
          },
          'inverse': theme.colors.gray[0],
          'subtle' : {
            DEFAULT: theme.colors.gray[90],
            alpha  : `rgba(${theme.colors.gray[20]}, ${theme.opacity[10]})`,
          },
          'info': {
            DEFAULT : theme.colors.blue[90],
            emphasis: theme.colors.blue[30],
          },
          'success': {
            DEFAULT : theme.colors.green[90],
            emphasis: theme.colors.green[30],
          },
          'warning': {
            DEFAULT : theme.colors.orange[90],
            emphasis: theme.colors.orange[30],
          },
          'danger': {
            DEFAULT : theme.colors.red[90],
            emphasis: theme.colors.red[30],
          },
        },
      },
    }
  },
  plugins: [],
  // prefix: 'tw'
} satisfies Config


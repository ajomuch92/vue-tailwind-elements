module.exports =  function buttons(theme) {
  const progress = {
    '.progress': {
      fontSize: theme('fontSize.xs'),
      fontWeight: theme('fontWeight.medium'),
      color: theme('colors.white'),
      textAlign: 'center',
      padding: theme('padding[0.5]'),
      lineHeight: '1',
      '&.success': {
        backgroundColor: theme('colors.green.500')
      },
      '&.primary': {
        backgroundColor: theme('colors.blue.500')
      },
      '&.warning': {
        backgroundColor: theme('colors.yellow.500')
      },
      '&.danger': {
        backgroundColor: theme('colors.red.500')
      },
      '&.small': {
        height: theme('height.px')
      },
      '&.medium': {
        height: theme('height.2')
      },
      '&.large': {
        height: theme('height.5')
      },
    }
  };
  const spinners = {
    '.spinner': {
      display: 'inline-block',
      borderRadius: theme('borderRadius.full'),
      '&.normal': {
        color: theme('colors.gray.600')
      },
      '&.secondary': {
        color: theme('colors.indigo.600')
      },
      '&.success': {
        color: theme('colors.green.600')
      },
      '&.primary': {
        color: theme('colors.blue.600')
      },
      '&.warning': {
        color: theme('colors.yellow.600')
      },
      '&.danger': {
        color: theme('colors.red.600')
      },
      '&.purple': {
        color: theme('colors.purple.600')
      },
      '&.pink': {
        color: theme('colors.pink.600')
      },
      '&.dark': {
        color: theme('colors.gray.800')
      },
      '&.light': {
        color: theme('colors.gray.200')
      },
      '&.small': {
        height: theme('height.4'),
        width: theme('width.4'),
      },
      '&.medium': {
        height: theme('height.8'),
        width: theme('width.8'),
      },
      '&.large': {
        height: theme('height.12'),
        width: theme('width.12'),
      },
    }
  };
  return {
    ...progress,
    ...spinners
  };
}

module.exports = function (theme) {
  const alerts = {
    '.alert': {
      margin: `${theme('margin.3')} 0px`,
      fontSize: theme('fontSize.sm'),
      textAlign: 'left',
      height: theme('height.12'),
      display: 'flex',
      alignItems: 'center',
      padding: theme('padding.4'),
      borderRadius: theme('borderRadius.md'),
      borderWidth: theme('borderWidth.DEFAULT'),
      borderStyle: 'solid',
      '&.normal': {
        color: theme('colors.gray.600'),
        backgroundColor: `${theme('colors.gray.500')}1a`,
        borderColor: theme('colors.gray.400'),
        '&.solid':{
          backgroundColor: theme('colors.gray.500'),
        }
      },
      '&.primary': {
        color: theme('colors.purple.600'),
        backgroundColor: `${theme('colors.purple.500')}1a`,
        borderColor: theme('colors.purple.400'),
        '&.solid':{
          backgroundColor: theme('colors.purple.500'),
        }
      },
      '&.success': {
        color: theme('colors.green.600'),
        backgroundColor: `${theme('colors.green.500')}1a`,
        borderColor: theme('colors.green.400'),
        '&.solid':{
          backgroundColor: theme('colors.green.500'),
        }
      },
      '&.info': {
        color: theme('colors.blue.600'),
        backgroundColor: `${theme('colors.blue.500')}1a`,
        borderColor: theme('colors.blue.400'),
        '&.solid':{
          backgroundColor: theme('colors.blue.500'),
        }
      },
      '&.warning': {
        color: theme('colors.yellow.600'),
        backgroundColor: `${theme('colors.yellow.500')}1a`,
        borderColor: theme('colors.yellow.400'),
        '&.solid':{
          backgroundColor: theme('colors.yellow.500'),
        }
      },
      '&.danger': {
        color: theme('colors.red.600'),
        backgroundColor: `${theme('colors.red.500')}1a`,
        borderColor: theme('colors.red.400'),
        '&.solid':{
          backgroundColor: theme('colors.red.500'),
        }
      },
      '&.solid':{
        color: theme('colors.white')
      }
    }
  };
  const notifications = {
    '.notification-wrapper': {
      margin: theme('margin.3'),
      display: 'inline-flex',
      position: 'relative',
      width: 'fit-content'
    },
    '.notification': {
      position: 'absolute',
      display: 'inline-block',
      // transform: 'rotate(0) skew(0, 0) scale(1, 1)',
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.none'),
      textAlign: theme('textAlign.center'),
      whitespace: 'nowrap',
      verticalAlign: 'baseline',
      fontWeight: theme('fontWeight.bold'),
      borderRadius: theme('borderRadius.full'),
      zIndex: theme('zIndex.10'),
      color: theme('colors.white'),
      '&.normal': {
        backgroundColor: theme('colors.gray.500')
      },
      '&.secondary': {
        backgroundColor: theme('colors.indigo.500'),
      },
      '&.success': {
        backgroundColor: theme('colors.green.500'),
      },
      '&.primary': {
        backgroundColor: theme('colors.blue.500'),
      },
      '&.warning': {
        backgroundColor: theme('colors.yellow.500'),

      },
      '&.danger': {
        backgroundColor: theme('colors.red.500'),

      },
      '&.purple': {
        backgroundColor: theme('colors.purple.500'),
      },
      '&.pink': {
        backgroundColor: theme('colors.pink.500'),
      },
      '&.dark': {
        backgroundColor: theme('colors.gray.800'),
      },
      '&.light': {
        backgroundColor: theme('colors.gray.200'),
        color: theme('colors.black'),
      },
      '&.top-left': {
        top: `-${theme('spacing.0')}`,
        right: 'auto',
        bottom: 'auto',
        left: `-${theme('spacing.0')}`,
        transform: `translate(${theme('translate[-1/2]')}, ${theme('translate[-1/2]')})`,
      },
      '&.top-right': {
        top: `-${theme('spacing.0')}`,
        right: `-${theme('spacing.0')}`,
        bottom: 'auto',
        left: 'auto',
        transform: `translate(${theme('translate[1/2]')}, ${theme('translate[-1/2]')})`,
      },
      '&.bottom-left': {
        top: 'auto',
        right: 'auto',
        bottom: `-${theme('spacing.0')}`,
        left: `-${theme('spacing.0')}`,
        transform: `translate(${theme('translate[-1/2]')}, ${theme('translate[1/2]')})`,
      },
      '&.bottom-right': {
        top: 'auto',
        right: `-${theme('spacing.0')}`,
        bottom: `-${theme('spacing.0')}`,
        left: 'auto',
        transform: `translate(${theme('translate[1/2]')}, ${theme('translate[1/2]')})`,
      },
    }
  };
  const chips = {
    '.chip': {
      padding: `${theme('padding.2')} 0px`,
      borderRadius: theme('borderRadius.full'),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.sm'),
      display: 'flex',
      alignItems: 'center',
      width: theme('width.max'),
      color: theme('colors.white'),
      '&.normal': {
        backgroundColor: theme('colors.gray.500'),
      },
      '&.secondary': {
        backgroundColor: theme('colors.indigo.500'),
      },
      '&.success': {
        backgroundColor: theme('colors.green.500'),
      },
      '&.primary': {
        backgroundColor: theme('colors.blue.500'),
      },
      '&.warning': {
        backgroundColor: theme('colors.yellow.500'),
      },
      '&.danger': {
        backgroundColor: theme('colors.red.500'),
      },
      '&.purple': {
        backgroundColor: theme('colors.purple.500'),
      },
      '&.pink': {
        backgroundColor: theme('colors.pink.500'),
      },
      '&.dark': {
        backgroundColor: theme('colors.gray.800'),
      },
      '&.light': {
        backgroundColor: theme('colors.gray.200'),
        color: theme('colors.black'),
      },
      '&.small': {
        height: theme('height.9')
      },
      '&.medium': {
        height: theme('height.11')
      },
      '&.large': {
        height: theme('height.14')
      },
    }
  };
  return {
    ...alerts,
    ...notifications,
    ...chips
  };
}

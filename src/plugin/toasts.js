module.exports = function(theme) {
  const toast = {
    '.toast-wrapper': {
      boxShadow: theme('boxShadow.lg'),
      marginRight: theme('margin.auto'),
      marginLeft: theme('margin.auto'),
      width: theme('width.96'),
      maxWidth: theme('maxWidth.full'),
      fontSize: theme('fontSize.sm'),
      pointerEvents: 'auto',
      backgroundClip: 'padding-box',
      borderRadius: theme('borderRadius.lg'),
      display: 'block',
      '&.normal': {
        backgroundColor: theme('colors.white')
      },
      '&.primary': {
        backgroundColor: theme('colors.blue.500')
      },
      '&.success': {
        backgroundColor: theme('colors.green.500')
      },
      '&.warning': {
        backgroundColor: theme('colors.yellow.500')
      },
      '&.danger': {
        backgroundColor: theme('colors.red.500')
      },
    },
    '.toast': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${theme('padding.2')} ${theme('padding.3')}`,
      backgroundClip: 'padding-box',
      borderBottomWidth: theme('borderWidth.DEFAULT'),
      borderTopLeftRadius: theme('borderRadius.lg'),
      borderTopRightRadius: theme('borderRadius.lg'),
      '&.normal': {
        backgroundColor: theme('colors.white'),
        borderColor: theme('colors.gray.200')
      },
      '&.primary': {
        backgroundColor: theme('colors.blue.500'),
        borderColor: theme('colors.blue.400')
      },
      '&.success': {
        backgroundColor: theme('colors.green.500'),
        borderColor: theme('colors.green.400')
      },
      '&.warning': {
        backgroundColor: theme('colors.yellow.500'),
        borderColor: theme('colors.yellow.400')
      },
      '&.danger': {
        backgroundColor: theme('colors.red.500'),
        borderColor: theme('colors.red.400')
      },
    }
  };
  const toastLight = {
    '.toast-light-wrapper': {
      display: 'flex',
      width: theme('width.96'),
      maxWidth: theme('maxWidth.full'),
      marginRight: theme('margin.auto'),
      marginLeft: theme('margin.auto'),
      overflow: 'hidden',
      backgroundColor: theme('colors.white'),
      borderRadius: theme('borderRadius.lg'),
      boxShadow: theme('boxShadow.lg')
    },
    '.toast-light': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: theme('width.12'),
      '&.info': {
        backgroundColor: theme('colors.blue.500')
      },
      '&.success': {
        backgroundColor: theme('colors.green.500')
      },
      '&.warning': {
        backgroundColor: theme('colors.yellow.500')
      },
      '&.danger': {
        backgroundColor: theme('colors.red.500')
      },
    },
    '.toast-text': {
      fontWeight: theme('fontWeight.semibold'),
      '&.info': {
        color: theme('colors.blue.500')
      },
      '&.success': {
        color: theme('colors.green.500')
      },
      '&.warning': {
        color: theme('colors.yellow.500')
      },
      '&.danger': {
        color: theme('colors.red.500')
      },
    }
  };
  return {
    ...toast,
    ...toastLight,
  };
}
